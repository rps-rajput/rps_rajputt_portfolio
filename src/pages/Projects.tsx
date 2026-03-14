import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/productsData';
import type { Product } from '../data/productsData';

// ─── Product Card with 3D tilt ─────────────────────────────────────────────
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, on: false });
  const [logoErr, setLogoErr] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({
      x: ((e.clientY - r.top) / r.height - 0.5) * -14,
      y: ((e.clientX - r.left) / r.width - 0.5) * 14,
      on: true,
    });
  };

  const isParent = product.isParent;

  return (
    <Link to={`/products/${product.slug}`} style={{ textDecoration: 'none', display: 'flex', perspective: 900 }}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0, on: false })}
        style={{
          background: tilt.on
            ? 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)'
            : 'rgba(255,255,255,0.04)',
          border: `1px solid ${tilt.on ? product.color + '70' : 'rgba(255,255,255,0.09)'}`,
          borderRadius: 20,
          padding: isParent ? '36px 28px' : '28px 24px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(12px)',
          transform: tilt.on
            ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : 'perspective(900px) rotateX(0) rotateY(0)',
          transition: 'transform 0.12s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          boxShadow: tilt.on
            ? `0 24px 60px rgba(0,0,0,0.5), 0 0 40px ${product.color}30`
            : '0 4px 24px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column' as const,
          width: '100%',
        }}
      >
        {/* Tilt shimmer */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `radial-gradient(ellipse at ${50 + tilt.y * 3}% ${50 + tilt.x * 3}%, ${product.color}14 0%, transparent 65%)`,
            transition: 'background 0.08s ease',
          }}
        />

        {/* Brand accent top line — uses brand button gradient */}
        <div
          style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 2,
            background: product.btnGradient,
            opacity: tilt.on ? 1 : 0.55,
            transition: 'opacity 0.3s ease',
          }}
        />

        {/* Parent badge */}
        {isParent && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: `${product.color}18`, border: `1px solid ${product.color}40`,
            borderRadius: 30, padding: '3px 12px', marginBottom: 18,
            fontSize: 10, fontWeight: 700, color: product.color,
            letterSpacing: '0.12em', textTransform: 'uppercase' as const,
          }}>
            ★ Parent Brand
          </div>
        )}

        {/* Logo */}
        <div style={{ marginBottom: 18, height: isParent ? 54 : 44, display: 'flex', alignItems: 'center' }}>
          {!logoErr ? (
            <img
              src={product.logo}
              alt={`${product.name} logo`}
              onError={() => setLogoErr(true)}
              style={{
                height: '100%',
                maxWidth: isParent ? 160 : 140,
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.3))',
              }}
            />
          ) : (
            <div style={{
              height: isParent ? 54 : 44, width: isParent ? 54 : 44,
              borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `${product.color}20`, border: `1px solid ${product.color}40`,
            }}>
              <span style={{ color: product.color, fontWeight: 900, fontSize: 16 }}>
                {product.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </div>

        {/* Badge */}
        <p style={{ color: product.color, fontSize: 10, fontWeight: 600, marginBottom: 10, letterSpacing: '0.04em' }}>
          {product.badge}
        </p>

        {/* Description */}
        <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 13.5, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
          {product.shortDesc}
        </p>

        {/* Category pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 6, marginBottom: 16 }}>
          {product.category.map((c) => (
            <span key={c} style={{
              background: `${product.color}15`, border: `1px solid ${product.color}35`,
              borderRadius: 20, padding: '3px 10px', fontSize: 10,
              fontWeight: 600, color: product.color, letterSpacing: '0.04em',
            }}>{c}</span>
          ))}
        </div>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 5, marginBottom: 22 }}>
          {product.tech.slice(0, 4).map((t) => (
            <span key={t} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 6, padding: '2px 8px', fontSize: 10, color: 'rgba(255,255,255,0.5)',
            }}>{t}</span>
          ))}
          {product.tech.length > 4 && (
            <span style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 6, padding: '2px 8px', fontSize: 10, color: 'rgba(255,255,255,0.5)',
            }}>+{product.tech.length - 4}</span>
          )}
        </div>

        {/* Stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.min(product.stats.length, 4)}, 1fr)`,
          gap: 8, marginBottom: 22,
          paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.07)',
        }}>
          {product.stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' as const }}>
              <div style={{ color: product.color, fontWeight: 800, fontSize: 14, lineHeight: 1, marginBottom: 3 }}>
                {s.value}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.38)', fontSize: 9, lineHeight: 1.3 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '9px 18px', background: product.btnGradient,
          borderRadius: 10, color: 'white', fontWeight: 700, fontSize: 12,
          boxShadow: `0 4px 18px ${product.color}40`,
        }}>
          View Product →
        </div>
      </div>
    </Link>
  );
};

// ─── Main Products Page ───────────────────────────────────────────────────────
const Projects = () => {
  const [filter, setFilter] = useState<string>('All');
  const FILTERS = ['All', 'Chrome Extension', 'AI Tool', 'SaaS Tool', 'Web App'];

  const filtered = PRODUCTS.filter((p) =>
    filter === 'All' ? true : p.category.some((c) => c.toLowerCase().includes(filter.toLowerCase()))
  );

  return (
    <div style={{
      background: 'linear-gradient(135deg, #080a18 0%, #0d1428 55%, #080a18 100%)',
      minHeight: '100vh', position: 'relative', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes prod-fade-up { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
        @keyframes prod-gradient { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
        .prod-card-appear { animation: prod-fade-up 0.55s ease both; }
        .prod-filter-btn { transition: all 0.2s ease; cursor: pointer; outline: none; }
        .prod-filter-btn:hover { transform: translateY(-1px); }
      `}</style>

      {/* Ambient orbs */}
      <div style={{ position:'absolute', top:-180, left:'20%', width:500, height:500, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:400, right:'-10%', width:400, height:400, borderRadius:'50%',
        background:'radial-gradient(circle, rgba(8,145,178,0.1) 0%, transparent 70%)', pointerEvents:'none' }} />

      <div style={{ position:'relative', zIndex:1, padding:'88px 20px 100px' }}>
        <div style={{ maxWidth:1180, margin:'0 auto' }}>

          {/* Hero Header */}
          <div style={{ textAlign:'center', marginBottom:70, animation:'prod-fade-up 0.6s ease both' }}>
            {/* Ruviq brand pill with icon */}
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(124,58,237,0.12)', border:'1px solid rgba(124,58,237,0.38)',
              borderRadius:30, padding:'6px 18px', marginBottom:26,
            }}>
              <img
                src="/products/Ruviqicon.png"
                alt="Ruviq"
                style={{ width:22, height:22, objectFit:'contain', borderRadius:6 }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span style={{ color:'#a78bfa', fontSize:11, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' as const }}>
                Ruviq · My SaaS Brand
              </span>
            </div>

            <h1 style={{
              fontSize:'clamp(2.4rem,6vw,4.8rem)', fontWeight:900, margin:'0 0 20px',
              letterSpacing:'-2px', lineHeight:1.02,
              background:'linear-gradient(135deg, #f8fafc 0%, #a78bfa 40%, #60a5fa 80%, #34d399 100%)',
              backgroundSize:'200% 200%', WebkitBackgroundClip:'text',
              WebkitTextFillColor:'transparent', backgroundClip:'text',
              animation:'prod-gradient 6s ease infinite',
            }}>
              My Products &<br />SaaS Tools
            </h1>

            <p style={{ color:'rgba(255,255,255,0.52)', fontSize:'clamp(1rem,2vw,1.15rem)', maxWidth:620, margin:'0 auto 36px', lineHeight:1.8 }}>
              Real-world SaaS products designed and developed by me under my brand{' '}
              <span style={{ color:'#a78bfa', fontWeight:600 }}>Ruviq</span> — including AI tools,
              testing platforms, Chrome extensions, and developer utilities.
            </p>

            <div style={{ display:'flex', justifyContent:'center', flexWrap:'wrap' as const, gap:10 }}>
              {[{ icon:'🤖', label:'AI-Powered' }, { icon:'🧩', label:'Chrome Extensions' }, { icon:'🧪', label:'QA-First Design' }, { icon:'🆓', label:'Free Core Tier' }].map((t) => (
                <span key={t.label} style={{
                  background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)',
                  borderRadius:20, padding:'5px 14px', fontSize:12, color:'rgba(255,255,255,0.6)',
                }}>{t.icon} {t.label}</span>
              ))}
            </div>
          </div>

          {/* Filter Tabs */}
          <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' as const, marginBottom:48 }}>
            {FILTERS.map((f) => (
              <button key={f} className="prod-filter-btn" onClick={() => setFilter(f)} style={{
                padding:'8px 18px', borderRadius:30,
                border:`1px solid ${filter === f ? '#7c3aed' : 'rgba(255,255,255,0.12)'}`,
                background: filter === f ? 'rgba(124,58,237,0.18)' : 'rgba(255,255,255,0.04)',
                color: filter === f ? '#a78bfa' : 'rgba(255,255,255,0.5)',
                fontWeight: filter === f ? 700 : 500, fontSize:12.5,
                backdropFilter:'blur(8px)',
                boxShadow: filter === f ? '0 0 18px rgba(124,58,237,0.3)' : 'none',
              }}>{f}</button>
            ))}
          </div>

          {/* Products Grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:22, marginBottom:80 }}>
            {filtered.map((product, i) => (
              <div key={product.slug} className="prod-card-appear" style={{ animationDelay:`${i * 0.08}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            background:'linear-gradient(135deg, rgba(124,58,237,0.16) 0%, rgba(79,70,229,0.1) 50%, rgba(6,182,212,0.07) 100%)',
            border:'1px solid rgba(124,58,237,0.28)', borderRadius:24,
            padding:'clamp(32px,5vw,52px) clamp(24px,5vw,48px)', textAlign:'center' as const,
            backdropFilter:'blur(16px)', position:'relative', overflow:'hidden',
          }}>
            <div style={{
              position:'absolute', top:-80, left:'50%', transform:'translateX(-50%)',
              width:300, height:300, borderRadius:'50%',
              background:'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)', pointerEvents:'none',
            }} />
            <h2 style={{ color:'white', fontWeight:800, fontSize:'clamp(1.4rem,3vw,2.2rem)', marginBottom:14, letterSpacing:'-0.5px', position:'relative' }}>
              Building Tools That Matter
            </h2>
            <p style={{ color:'rgba(255,255,255,0.52)', fontSize:'clamp(0.9rem,1.5vw,1rem)', maxWidth:540, margin:'0 auto 34px', lineHeight:1.8, position:'relative' }}>
              Every product under Ruviq is built to solve a real problem I faced as a QA engineer. Feedback, collaboration, or feature requests? Let's talk.
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' as const, position:'relative' }}>
              <a href="https://ruviq.com/" target="_blank" rel="noopener noreferrer" style={{
                display:'inline-flex', alignItems:'center', gap:8, padding:'12px 24px',
                background:'linear-gradient(135deg, #60a5fa, #a78bfa, #67e8f9)',
                color:'white', fontWeight:700, fontSize:13.5, borderRadius:12, textDecoration:'none',
                boxShadow:'0 4px 20px rgba(124,58,237,0.4)',
              }}>
                Visit Ruviq →
              </a>
              <Link to="/contact" style={{
                display:'inline-flex', alignItems:'center', gap:8, padding:'12px 24px',
                background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.18)',
                color:'rgba(255,255,255,0.82)', fontWeight:600, fontSize:13.5, borderRadius:12, textDecoration:'none',
              }}>
                Get In Touch
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
