import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, ORBIT_DATA, RING_SPECS, hexToRgb } from '../data/skillsData';
import type { Skill } from '../data/skillsData';
import { getExperienceYearsForCounter } from '../utils/experience';

// ─── Skill Card ────────────────────────────────────────────────────────────────
const SkillCard: React.FC<{
  skill: Skill;
  index: number;
  visible: boolean;
  color: string;
  glowColor: string;
}> = ({ skill, index, visible, color, glowColor }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });
  const [imgErr, setImgErr] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rx = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    const ry = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    setTilt({ x: rx, y: ry, on: true });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0, on: false })}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(0)`
          : 'translateY(28px)',
        transition: visible
          ? `opacity 0.5s ease ${index * 0.06}s, transform 0.12s ease, box-shadow 0.3s ease, border-color 0.3s ease`
          : 'none',
        background: tilt.on
          ? 'linear-gradient(135deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)'
          : 'rgba(255,255,255,0.04)',
        border: `1px solid ${tilt.on ? color + '65' : 'rgba(255,255,255,0.09)'}`,
        borderRadius: 16,
        padding: '22px 14px 16px',
        textAlign: 'center' as const,
        position: 'relative' as const,
        overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        boxShadow: tilt.on
          ? `0 20px 45px rgba(0,0,0,0.5), 0 0 28px ${color}28`
          : '0 4px 24px rgba(0,0,0,0.18)',
        cursor: 'default',
        willChange: 'transform',
      }}
    >
      {/* Highlight shimmer on hover */}
      {tilt.on && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 16,
            pointerEvents: 'none',
            background: `radial-gradient(ellipse at ${50 + tilt.y * 2.5}% ${50 + tilt.x * 2.5}%, ${color}18 0%, transparent 65%)`,
          }}
        />
      )}

      {/* Icon */}
      <div
        style={{
          width: 54,
          height: 54,
          margin: '0 auto 12px',
          borderRadius: 14,
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.07)',
          border: `1px solid ${tilt.on ? color + '55' : 'rgba(255,255,255,0.1)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: tilt.on ? `0 0 18px ${color}45` : 'none',
        }}
      >
        {!imgErr && skill.src ? (
          <img
            src={skill.src}
            alt={skill.name}
            onError={() => setImgErr(true)}
            style={{ width: '78%', height: '78%', objectFit: 'contain' }}
          />
        ) : (
          <span
            style={{
              color,
              fontWeight: 800,
              fontSize: Math.max(8, 13 - skill.fallback.length),
              letterSpacing: '0.02em',
            }}
          >
            {skill.fallback}
          </span>
        )}
      </div>

      {/* Name */}
      <p
        style={{
          color: 'rgba(255,255,255,0.88)',
          fontWeight: 600,
          fontSize: 12,
          marginBottom: 12,
          lineHeight: 1.3,
        }}
      >
        {skill.name}
      </p>

      {/* Proficiency bar */}
      <div
        style={{
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 3,
          height: 3,
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: visible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${color}, ${glowColor})`,
            borderRadius: 3,
            transition: `width 1.3s cubic-bezier(0.4,0,0.2,1) ${index * 0.08}s`,
            boxShadow: `0 0 8px ${color}70`,
          }}
        />
      </div>
      <p
        style={{
          color: 'rgba(255,255,255,0.38)',
          fontSize: 10,
          textAlign: 'right' as const,
          marginTop: 5,
        }}
      >
        {skill.level}%
      </p>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────
export interface SkillsSectionProps {
  variant?: 'full' | 'compact';
}

const SkillsSection = ({ variant = 'full' }: SkillsSectionProps) => {
  const [activeCat, setActiveCat] = useState(0);
  const [skillsVisible, setSkillsVisible] = useState<boolean[]>([]);
  const [countersStarted, setCountersStarted] = useState(false);
  const [counts, setCounts] = useState({ tech: 0, cats: 0, years: 0, projects: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const radarBoxRef = useRef<HTMLDivElement>(null);
  const [radarHover, setRadarHover] = useState<null | { i: number; x: number; y: number }>(null);
  const [radarGlow, setRadarGlow] = useState<{ x: number; y: number; on: boolean }>({ x: 50, y: 50, on: false });

  // ── Canvas particle network ──────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const pts = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: Math.random() * 1.4 + 0.4,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(124,58,237,0.55)';
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 115) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${0.2 * (1 - d / 115)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // ── Stagger skill cards when category changes ────────────────────────────────
  useEffect(() => {
    setSkillsVisible([]);
    const timers = CATEGORIES[activeCat].skills.map((_, i) =>
      setTimeout(
        () => setSkillsVisible((prev) => { const a = [...prev]; a[i] = true; return a; }),
        i * 75 + 60
      )
    );
    return () => timers.forEach(clearTimeout);
  }, [activeCat]);

  // ── Animated counters (IntersectionObserver) ─────────────────────────────────
  useEffect(() => {
    if (!statsRef.current || countersStarted) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setCountersStarted(true);
        const targets = { tech: 35, cats: 6, years: getExperienceYearsForCounter(), projects: 15 };
        const start = Date.now();
        const step = () => {
          const t = Math.min((Date.now() - start) / 2000, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          const yearsVal = targets.years < 5 ? parseFloat((targets.years * ease).toFixed(1)) : Math.round(targets.years * ease);
          setCounts({
            tech: Math.round(targets.tech * ease),
            cats: Math.round(targets.cats * ease),
            years: yearsVal,
            projects: Math.round(targets.projects * ease),
          });
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.3 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, [countersStarted]);

  // ── Radar chart geometry ─────────────────────────────────────────────────────
  const N = CATEGORIES.length;
  const CX = 160, CY = 160, RS = 112;

  const polarPt = (val: number, i: number) => {
    const a = (i / N) * 2 * Math.PI - Math.PI / 2;
    const r = (val / 100) * RS;
    return { x: CX + r * Math.cos(a), y: CY + r * Math.sin(a) };
  };

  const axisPt = (i: number, scale = 1) => {
    const a = (i / N) * 2 * Math.PI - Math.PI / 2;
    return { x: CX + RS * scale * Math.cos(a), y: CY + RS * scale * Math.sin(a) };
  };

  const gridPath = (level: number) =>
    Array.from({ length: N }, (_, i) => {
      const a = (i / N) * 2 * Math.PI - Math.PI / 2;
      const r = RS * level;
      return `${i === 0 ? 'M' : 'L'} ${(CX + r * Math.cos(a)).toFixed(1)} ${(CY + r * Math.sin(a)).toFixed(1)}`;
    }).join(' ') + ' Z';

  const radarPts = CATEGORIES.map((c, i) => polarPt(c.radarValue, i));
  const radarPath =
    radarPts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ') + ' Z';

  const cat = CATEGORIES[activeCat];

  const handleRadarMove = (e: React.MouseEvent) => {
    if (!radarBoxRef.current) return;
    const r = radarBoxRef.current.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;
    setRadarGlow({ x: Math.max(0, Math.min(100, px)), y: Math.max(0, Math.min(100, py)), on: true });

    // Convert mouse to SVG viewBox coords (320x320)
    const sx = ((e.clientX - r.left) / r.width) * 320;
    const sy = ((e.clientY - r.top) / r.height) * 320;

    let bestI = -1;
    let bestD = Infinity;
    for (let i = 0; i < radarPts.length; i++) {
      const dx = radarPts[i].x - sx;
      const dy = radarPts[i].y - sy;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < bestD) {
        bestD = d;
        bestI = i;
      }
    }

    if (bestI >= 0 && bestD <= 16) {
      setRadarHover({ i: bestI, x: px, y: py });
    } else {
      setRadarHover(null);
    }
  };

  const handleRadarLeave = () => {
    setRadarHover(null);
    setRadarGlow((g) => ({ ...g, on: false }));
  };

  const isCompact = variant === 'compact';

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #080a18 0%, #0d1428 55%, #080a18 100%)',
        minHeight: isCompact ? 'auto' : '100vh',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: isCompact ? 24 : 0,
      }}
    >
      {/* ── Injected keyframes ───────────────────────────────────────────────── */}
      <style>{`
        @keyframes sk-gradient {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes sk-glow-pulse {
          0%,100% { box-shadow: 0 0 28px rgba(124,58,237,0.55), 0 0 55px rgba(124,58,237,0.2); }
          50%     { box-shadow: 0 0 55px rgba(124,58,237,0.85), 0 0 100px rgba(99,102,241,0.38); }
        }
        @keyframes sk-float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        /* Orbit keyframes – rotate/translate/counterrotate pattern */
        @keyframes sk-orbit1-cw  { from { transform: rotate(0deg)    translateX(120px) rotate(0deg);    } to { transform: rotate(360deg)  translateX(120px) rotate(-360deg); } }
        @keyframes sk-orbit1-ccw { from { transform: rotate(0deg)    translateX(120px) rotate(0deg);    } to { transform: rotate(-360deg) translateX(120px) rotate(360deg);  } }
        @keyframes sk-orbit2-cw  { from { transform: rotate(0deg)    translateX(190px) rotate(0deg);    } to { transform: rotate(360deg)  translateX(190px) rotate(-360deg); } }
        @keyframes sk-orbit2-ccw { from { transform: rotate(0deg)    translateX(190px) rotate(0deg);    } to { transform: rotate(-360deg) translateX(190px) rotate(360deg);  } }
        @keyframes sk-orbit3-cw  { from { transform: rotate(0deg)    translateX(268px) rotate(0deg);    } to { transform: rotate(360deg)  translateX(268px) rotate(-360deg); } }
        @keyframes sk-orbit3-ccw { from { transform: rotate(0deg)    translateX(268px) rotate(0deg);    } to { transform: rotate(-360deg) translateX(268px) rotate(360deg);  } }
        /* Ring border rotation (gives 3D ellipse spin) */
        @keyframes sk-ring-spin { to { transform: rotateX(70deg) rotate(360deg); } }
        @keyframes sk-radar-draw { from { stroke-dashoffset: 1200; } to { stroke-dashoffset: 0; } }
        @keyframes sk-point-pulse {
          0%,100% { transform: scale(1); opacity: 0.95; }
          50%     { transform: scale(1.25); opacity: 1; }
        }
        /* Tab hover */
        .sk-tab { transition: all 0.25s ease; cursor: pointer; outline: none; }
        .sk-tab:hover { transform: translateY(-2px); }
        .sk-radarPoint { transition: transform 0.18s ease, filter 0.18s ease; transform-origin: center; cursor: pointer; }
        .sk-radarPoint:hover { transform: scale(1.28); filter: drop-shadow(0 0 10px rgba(124,58,237,0.65)); }
        /* Mobile orbit scaling */
        @media (max-width: 640px) {
          .sk-orbit-wrapper { height: 340px !important; }
          .sk-orbit-inner  { transform: scale(0.56) !important; transform-origin: center top !important; }
        }
        @media (max-width: 400px) {
          .sk-orbit-wrapper { height: 260px !important; }
          .sk-orbit-inner  { transform: scale(0.42) !important; transform-origin: center top !important; }
        }
      `}</style>

      {/* ── Canvas (full only) ───────────────────────────────────────────────── */}
      {!isCompact && (
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />
      )}

      {/* ── Page content ────────────────────────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 1, padding: isCompact ? '48px 20px 40px' : '88px 20px 100px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* ─ Header ─────────────────────────────────────────────────────── */}
          <div style={{ textAlign: 'center', marginBottom: isCompact ? 32 : 60 }}>
            {!isCompact && (
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(124,58,237,0.15)',
                border: '1px solid rgba(124,58,237,0.4)',
                borderRadius: 50,
                padding: '5px 20px',
                color: '#a78bfa',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase' as const,
                marginBottom: 20,
              }}
            >
              Technical Arsenal
            </span>
            )}
            <h1
              style={{
                fontSize: 'clamp(2.2rem,6vw,4.5rem)',
                fontWeight: 900,
                margin: '0 0 18px',
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                background: 'linear-gradient(135deg, #e2e8f0 0%, #a78bfa 45%, #60a5fa 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'sk-gradient 5s ease infinite',
              }}
            >
              Technical Skills
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: 'clamp(0.95rem,2vw,1.1rem)',
                maxWidth: 520,
                margin: '0 auto',
                lineHeight: 1.8,
              }}
            >
              Comprehensive expertise across testing frameworks, programming languages,
              and modern quality assurance tools
            </p>
          </div>

          {/* ─ Orbital Hero Section (full only) ───────────────────────────────────────── */}
          {!isCompact && (
          <div
            className="sk-orbit-wrapper"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: 70, height: 580 }}
          >
            <div
              className="sk-orbit-inner"
              style={{ position: 'relative', width: 600, height: 580 }}
            >
              {/* Visual ring borders (appear 3D via perspective + rotateX) */}
              <div style={{ position: 'absolute', inset: 0, perspective: 1000 }}>
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {[
                    { s: 242, color: '#6366f1', dur: '40s' },
                    { s: 382, color: '#0ea5e9', dur: '55s' },
                    { s: 538, color: '#ec4899', dur: '72s' },
                  ].map((ring, i) => (
                    <div
                      key={i}
                      style={{
                        position: 'absolute',
                        width: ring.s,
                        height: ring.s,
                        top: '50%',
                        left: '50%',
                        marginTop: -ring.s / 2,
                        marginLeft: -ring.s / 2,
                        borderRadius: '50%',
                        border: `1px solid ${ring.color}`,
                        opacity: 0.28,
                        boxShadow: `0 0 18px ${ring.color}55`,
                        transform: `rotateX(70deg)`,
                        animation: `sk-ring-spin ${ring.dur} linear infinite`,
                        animationDirection: i === 1 ? 'reverse' : 'normal',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Central hub – outside the tilted container so it stays upright */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 112,
                  height: 112,
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle at 38% 38%, #c4b5fd 0%, #7c3aed 45%, #4c1d95 100%)',
                  animation: 'sk-glow-pulse 3s ease-in-out infinite',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column' as const,
                  zIndex: 20,
                }}
              >
                <span
                  style={{
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: 24,
                    lineHeight: 1,
                    letterSpacing: '-0.5px',
                  }}
                >
                  QA
                </span>
                <span
                  style={{
                    color: 'rgba(255,255,255,0.62)',
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    marginTop: 4,
                  }}
                >
                  EXPERT
                </span>
              </div>

              {/* Orbiting icon nodes */}
              {ORBIT_DATA.map((icon, i) => {
                const spec = RING_SPECS[icon.ring - 1];
                const animName = icon.ring === 2 ? spec.animCcw : spec.animCw;
                return (
                  <div
                    key={i}
                    title={icon.name}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: -spec.size / 2,
                      marginLeft: -spec.size / 2,
                      animation: `${animName} ${spec.dur} linear infinite`,
                      animationDelay: icon.delay,
                      zIndex: 10,
                    }}
                  >
                    <div
                      style={{
                        width: spec.size,
                        height: spec.size,
                        borderRadius: '50%',
                        background: 'rgba(8,10,24,0.88)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.45)',
                      }}
                    >
                      <img
                        src={icon.src}
                        alt={icon.name}
                        style={{
                          width: '62%',
                          height: '62%',
                          objectFit: 'contain',
                          borderRadius: 4,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          )}

          {/* ─ Category Tabs ──────────────────────────────────────────────── */}
          <div
            style={{
              display: 'flex',
              gap: 10,
              justifyContent: 'center',
              flexWrap: 'wrap' as const,
              marginBottom: 30,
            }}
          >
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className="sk-tab"
                onClick={() => setActiveCat(c.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 50,
                  border: `1px solid ${activeCat === c.id ? c.color : 'rgba(255,255,255,0.12)'}`,
                  background:
                    activeCat === c.id
                      ? `rgba(${hexToRgb(c.color)}, 0.18)`
                      : 'rgba(255,255,255,0.04)',
                  color: activeCat === c.id ? c.glowColor : 'rgba(255,255,255,0.52)',
                  fontWeight: activeCat === c.id ? 700 : 500,
                  fontSize: 13,
                  letterSpacing: '0.02em',
                  backdropFilter: 'blur(10px)',
                  boxShadow: activeCat === c.id ? `0 0 20px ${c.color}45` : 'none',
                }}
              >
                {c.emoji} {c.title}
              </button>
            ))}
          </div>

          {/* Active category label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginBottom: 26,
            }}
          >
            <div
              style={{
                flex: 1,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${cat.color}55)`,
              }}
            />
            <span
              style={{
                color: cat.glowColor,
                fontWeight: 700,
                fontSize: 13,
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                whiteSpace: 'nowrap' as const,
              }}
            >
              {cat.emoji} {cat.title}
              <span
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontWeight: 400,
                  fontSize: 11,
                }}
              >
                ({cat.skills.length} skills)
              </span>
            </span>
            <div
              style={{
                flex: 1,
                height: 1,
                background: `linear-gradient(270deg, transparent, ${cat.color}55)`,
              }}
            />
          </div>

          {/* ─ Skill Cards Grid ───────────────────────────────────────────── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(145px, 1fr))',
              gap: 14,
              marginBottom: isCompact ? 28 : 80,
            }}
          >
            {cat.skills.map((skill, i) => (
              <SkillCard
                key={`${activeCat}-${skill.name}`}
                skill={skill}
                index={i}
                visible={!!skillsVisible[i]}
                color={cat.color}
                glowColor={cat.glowColor}
              />
            ))}
          </div>

          {/* ─ Compact CTA ───────────────────────────────────────────────── */}
          {isCompact && (
            <div style={{ textAlign: 'center' as const }}>
              <Link
                to="/skills"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #6366f1, #7c3aed)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: 14,
                  borderRadius: 12,
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,0.5)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.4)';
                }}
              >
                View Detailed Skills
                <span style={{ fontSize: 18 }}>→</span>
              </Link>
            </div>
          )}

          {/* ─ Radar Chart + Stats (full only) ────────────────────────────────────────── */}
          {!isCompact && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 28,
              marginBottom: 60,
              alignItems: 'start',
            }}
          >
            {/* Radar */}
            <div
              ref={radarBoxRef}
              onMouseMove={handleRadarMove}
              onMouseLeave={handleRadarLeave}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24,
                padding: '32px 24px',
                backdropFilter: 'blur(12px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Cursor spotlight glow */}
              <div
                style={{
                  position: 'absolute',
                  inset: -2,
                  pointerEvents: 'none',
                  background: radarGlow.on
                    ? `radial-gradient(280px circle at ${radarGlow.x}% ${radarGlow.y}%, rgba(124,58,237,0.18) 0%, rgba(14,165,233,0.10) 35%, transparent 70%)`
                    : 'transparent',
                  transition: 'background 0.08s ease',
                }}
              />

              <h3
                style={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: 17,
                  marginBottom: 6,
                  textAlign: 'center',
                  position: 'relative',
                }}
              >
                Proficiency Radar
              </h3>
              <p
                style={{
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: 12,
                  textAlign: 'center',
                  marginBottom: 22,
                  position: 'relative',
                }}
              >
                Category-level skill distribution
              </p>

              <svg
                viewBox="0 0 320 320"
                style={{ width: '100%', maxWidth: 300, display: 'block', margin: '0 auto', position: 'relative' }}
              >
                {/* Grid rings */}
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((l) => (
                  <path
                    key={l}
                    d={gridPath(l)}
                    fill="none"
                    stroke="rgba(255,255,255,0.07)"
                    strokeWidth="1"
                  />
                ))}
                {/* Axis lines */}
                {Array.from({ length: N }, (_, i) => {
                  const e = axisPt(i);
                  return (
                    <line
                      key={i}
                      x1={CX}
                      y1={CY}
                      x2={e.x}
                      y2={e.y}
                      stroke={radarHover?.i === i ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.1)'}
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Filled radar shape */}
                <path
                  d={radarPath}
                  fill="rgba(124,58,237,0.2)"
                  stroke="#7c3aed"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 1200,
                    strokeDashoffset: 0,
                    animation: 'sk-radar-draw 1.1s ease-out both',
                  }}
                />
                {/* Dashed overlay */}
                <path
                  d={radarPath}
                  fill="none"
                  stroke="rgba(167,139,250,0.45)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  strokeLinejoin="round"
                />
                {/* Data points */}
                {radarPts.map((p, i) => (
                  <g key={i}>
                    <circle
                      className="sk-radarPoint"
                      cx={p.x}
                      cy={p.y}
                      r={radarHover?.i === i ? 9.2 : 7}
                      fill={CATEGORIES[i].color}
                      opacity="0.95"
                      onClick={() => setActiveCat(i)}
                      style={{
                        animation: radarHover?.i === i ? 'sk-point-pulse 0.9s ease-in-out infinite' : 'none',
                      }}
                    />
                    <circle
                      cx={p.x}
                      cy={p.y}
                      r={radarHover?.i === i ? 4.2 : 3.5}
                      fill="white"
                      opacity={radarHover?.i === i ? 1 : 0.95}
                      style={{ pointerEvents: 'none' }}
                    />
                  </g>
                ))}
                {/* Axis labels */}
                {CATEGORIES.map((c, i) => {
                  const lp = axisPt(i, 1.28);
                  return (
                    <text
                      key={i}
                      x={lp.x}
                      y={lp.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={radarHover?.i === i ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.65)'}
                      fontSize="9.5"
                      fontWeight="600"
                    >
                      {c.emoji} {c.title.split(' ')[0]}
                    </text>
                  );
                })}
              </svg>

              {/* Tooltip */}
              {radarHover && (
                <div
                  style={{
                    position: 'absolute',
                    left: `calc(${radarHover.x}% + 10px)`,
                    top: `calc(${radarHover.y}% + 10px)`,
                    transform: radarHover.x > 62 ? 'translateX(-100%)' : 'translateX(0)',
                    background: 'rgba(8,10,24,0.92)',
                    border: `1px solid ${CATEGORIES[radarHover.i].color}55`,
                    borderRadius: 12,
                    padding: '10px 12px',
                    boxShadow: `0 12px 35px rgba(0,0,0,0.55), 0 0 24px ${CATEGORIES[radarHover.i].color}25`,
                    backdropFilter: 'blur(10px)',
                    pointerEvents: 'none',
                    zIndex: 5,
                    minWidth: 160,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <span style={{ fontSize: 14 }}>{CATEGORIES[radarHover.i].emoji}</span>
                    <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700, fontSize: 12 }}>
                      {CATEGORIES[radarHover.i].title}
                    </span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div
                      style={{
                        flex: 1,
                        height: 5,
                        background: 'rgba(255,255,255,0.12)',
                        borderRadius: 999,
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${CATEGORIES[radarHover.i].radarValue}%`,
                          background: `linear-gradient(90deg, ${CATEGORIES[radarHover.i].color}, ${CATEGORIES[radarHover.i].glowColor})`,
                          boxShadow: `0 0 12px ${CATEGORIES[radarHover.i].color}55`,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        color: CATEGORIES[radarHover.i].glowColor,
                        fontWeight: 800,
                        fontSize: 12,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {CATEGORIES[radarHover.i].radarValue}%
                    </span>
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10, marginTop: 6 }}>
                    Click point to view skills
                  </div>
                </div>
              )}

              {/* Legend pills */}
              <div
                style={{
                  marginTop: 22,
                  display: 'flex',
                  flexWrap: 'wrap' as const,
                  gap: 8,
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {CATEGORIES.map((c) => (
                  <div
                    key={c.id}
                    onClick={() => setActiveCat(c.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 5,
                      background: activeCat === c.id ? `${c.color}26` : `${c.color}15`,
                      borderRadius: 20,
                      padding: '3px 10px',
                      border: `1px solid ${activeCat === c.id ? c.color + '66' : c.color + '30'}`,
                      cursor: 'pointer',
                      boxShadow: activeCat === c.id ? `0 0 18px ${c.color}25` : 'none',
                      transform: activeCat === c.id ? 'translateY(-1px)' : 'none',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    <div
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: c.color,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: 10,
                        whiteSpace: 'nowrap' as const,
                      }}
                    >
                      {c.title.split(' ')[0]}: {c.radarValue}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}
            >
              {[
                {
                  val: counts.tech,
                  suf: '+',
                  label: 'Technologies & Tools',
                  sub: 'Across all categories',
                  color: '#6366f1',
                  icon: '⚡',
                },
                {
                  val: counts.cats,
                  suf: '',
                  label: 'Skill Categories',
                  sub: 'Specialized domains',
                  color: '#0ea5e9',
                  icon: '🎯',
                },
                {
                  val: counts.years,
                  suf: '+',
                  label: 'Years Experience',
                  sub: 'In QA engineering',
                  color: '#10b981',
                  icon: '📅',
                },
                {
                  val: counts.projects,
                  suf: '+',
                  label: 'Projects Delivered',
                  sub: 'End-to-end testing',
                  color: '#f59e0b',
                  icon: '🚀',
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${s.color}25`,
                    borderRadius: 16,
                    padding: '18px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 18,
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 13,
                      flexShrink: 0,
                      background: `${s.color}18`,
                      border: `1px solid ${s.color}35`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 30,
                        fontWeight: 900,
                        color: s.color,
                        lineHeight: 1,
                        marginBottom: 3,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {s.val}
                      {s.suf}
                    </div>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.78)',
                        fontSize: 13,
                        fontWeight: 600,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, marginTop: 2 }}
                    >
                      {s.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}

          {/* ─ Banner (full only) ─────────────────────────────────────────────────────── */}
          {!isCompact && (
          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(37,99,235,0.12) 50%, rgba(6,182,212,0.08) 100%)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: 24,
              padding: 'clamp(32px,5vw,52px) clamp(24px,5vw,48px)',
              textAlign: 'center' as const,
              backdropFilter: 'blur(16px)',
            }}
          >
            <h2
              style={{
                color: 'white',
                fontWeight: 800,
                fontSize: 'clamp(1.3rem,3vw,2rem)',
                marginBottom: 14,
                letterSpacing: '-0.5px',
              }}
            >
              AI-Enhanced QA Excellence
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 'clamp(0.9rem,1.5vw,1rem)',
                maxWidth: 660,
                margin: '0 auto 36px',
                lineHeight: 1.8,
              }}
            >
              Leveraging cutting-edge AI tools and modern development platforms to enhance
              testing efficiency and quality. Integrating AI-powered assistants to deliver
              innovative solutions and accelerate development cycles.
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(158px, 1fr))',
                gap: 14,
                maxWidth: 580,
                margin: '0 auto',
              }}
            >
              {[
                { title: 'Full-Stack', sub: 'QA Engineering', color: '#6366f1' },
                { title: 'AI-Powered', sub: 'Testing Solutions', color: '#0ea5e9' },
                { title: 'Modern', sub: 'Tech Stack', color: '#10b981' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    borderRadius: 12,
                    padding: '16px 20px',
                  }}
                >
                  <div
                    style={{ color: item.color, fontWeight: 700, fontSize: 16 }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: 12,
                      marginTop: 4,
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
