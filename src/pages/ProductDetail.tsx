import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, getProduct } from '../data/productsData';

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = getProduct(slug || '');
  const [activeFeature, setActiveFeature] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [logoErr, setLogoErr] = useState(false);
  const [iconErr, setIconErr] = useState(false);

  useEffect(() => {
    if (!product) navigate('/products');
    setLogoErr(false);
    setIconErr(false);
  }, [product, navigate, slug]);

  const onHeroMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    setMousePos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  if (!product) return null;

  const idx = PRODUCTS.findIndex((p) => p.slug === slug);
  const prevProd = PRODUCTS[idx - 1] || null;
  const nextProd = PRODUCTS[idx + 1] || null;

  const dark = product.isDarkHero;
  const textPrimary = dark ? 'white' : '#0f172a';
  const textSecondary = dark ? 'rgba(255,255,255,0.62)' : 'rgba(15,23,42,0.65)';
  const textMuted = dark ? 'rgba(255,255,255,0.38)' : 'rgba(15,23,42,0.4)';
  const glassBg = dark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)';
  const glassBorder = dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.1)';
  const featureCardBg = dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)';

  // AutoCaseGen dot-pattern bg
  const dotPatternStyle: React.CSSProperties | undefined =
    product.heroBgExtra
      ? {
          backgroundImage: product.heroBgExtra,
          backgroundSize: '22px 22px',
          backgroundRepeat: 'repeat',
          opacity: 0.08,
          position: 'absolute' as const,
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
        }
      : undefined;

  return (
    <div style={{ background: product.heroBg, minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @keyframes pd-fade-up  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pd-float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes pd-pulse    { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:.25;transform:scale(1.1)} }
        .pd-appear { animation: pd-fade-up 0.5s ease both; }
        .pd-step { transition: all 0.2s ease; }
        .pd-step:hover { transform: translateX(4px); }
        .pd-feat { transition: all 0.2s ease; }
        .pd-feat:hover { transform: translateY(-3px); }
      `}</style>

      {/* Dot pattern overlay (AutoCaseGen only) */}
      {dotPatternStyle && <div style={dotPatternStyle} />}

      {/* Ambient glow orbs — only for dark-theme products */}
      {dark && (
        <>
          <div style={{
            position:'fixed', top:-200, right:-100, width:600, height:600, borderRadius:'50%',
            background:`radial-gradient(circle, ${product.color}20 0%, transparent 65%)`,
            pointerEvents:'none', zIndex:0, animation:'pd-float 8s ease-in-out infinite',
          }} />
          <div style={{
            position:'fixed', bottom:-150, left:-100, width:500, height:500, borderRadius:'50%',
            background:`radial-gradient(circle, ${product.colorEnd}15 0%, transparent 65%)`,
            pointerEvents:'none', zIndex:0, animation:'pd-float 10s ease-in-out infinite reverse',
          }} />
        </>
      )}

      <div style={{ position:'relative', zIndex:1 }}>

        {/* Back link */}
        <div style={{ padding:'24px 24px 0', maxWidth:1180, margin:'0 auto' }} className="pd-appear">
          <Link to="/products" style={{
            display:'inline-flex', alignItems:'center', gap:7,
            color: dark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)',
            fontSize:13, fontWeight:500, textDecoration:'none',
            padding:'7px 14px',
            background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
            border:`1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
            borderRadius:30, transition:'all 0.2s ease',
          }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = dark ? 'white' : '#0f172a';
              e.currentTarget.style.borderColor = `${product.color}55`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = dark ? 'rgba(255,255,255,0.45)' : 'rgba(15,23,42,0.5)';
              e.currentTarget.style.borderColor = dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
            }}
          >
            ← All Products
          </Link>
        </div>

        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <div ref={heroRef} onMouseMove={onHeroMove}
          style={{ padding:'clamp(44px,8vw,80px) 24px clamp(40px,6vw,72px)', maxWidth:1180, margin:'0 auto', position:'relative' }}
        >
          {/* Cursor spotlight */}
          <div style={{
            position:'absolute', inset:0, pointerEvents:'none',
            background:`radial-gradient(480px circle at ${mousePos.x}% ${mousePos.y}%, ${product.color}12 0%, transparent 60%)`,
            transition:'background 0.1s ease',
          }} />

          <div style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap:32, alignItems:'flex-start' }}>

            {/* Logo */}
            <div className="pd-appear" style={{ animation:'pd-fade-up 0.55s ease both, pd-float 6s 1s ease-in-out infinite' }}>
              {!logoErr ? (
                <img
                  src={product.logo}
                  alt={`${product.name} logo`}
                  onError={() => setLogoErr(true)}
                  style={{
                    height:'clamp(48px,8vw,80px)',
                    maxWidth:'clamp(140px,22vw,260px)',
                    objectFit:'contain',
                    filter: dark ? 'drop-shadow(0 4px 18px rgba(0,0,0,0.5))' : 'drop-shadow(0 4px 14px rgba(0,0,0,0.15))',
                  }}
                />
              ) : (
                <div style={{
                  height:72, width:72, borderRadius:20, display:'flex', alignItems:'center', justifyContent:'center',
                  background:`${product.color}20`, border:`2px solid ${product.color}40`,
                }}>
                  <span style={{ color:product.color, fontWeight:900, fontSize:28 }}>{product.name.slice(0,2).toUpperCase()}</span>
                </div>
              )}
            </div>

            <div className="pd-appear" style={{ animationDelay:'0.1s' }}>
              {/* Category badges */}
              <div style={{ display:'flex', flexWrap:'wrap' as const, gap:7, marginBottom:16 }}>
                {product.category.map((c) => (
                  <span key={c} style={{
                    background:`${product.color}18`, border:`1px solid ${product.color}40`,
                    borderRadius:20, padding:'3px 12px', fontSize:10, fontWeight:700,
                    color:product.color, letterSpacing:'0.08em', textTransform:'uppercase' as const,
                  }}>{c}</span>
                ))}
                {product.isParent && (
                  <span style={{
                    background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
                    border:`1px solid ${dark ? 'rgba(255,255,255,0.16)' : 'rgba(0,0,0,0.12)'}`,
                    borderRadius:20, padding:'3px 12px', fontSize:10, fontWeight:700,
                    color:textSecondary, letterSpacing:'0.08em', textTransform:'uppercase' as const,
                  }}>★ Parent Brand</span>
                )}
              </div>

              {/* Title */}
              <h1 style={{
                fontSize:'clamp(1.9rem,5.5vw,4rem)', fontWeight:900, margin:'0 0 12px',
                letterSpacing:'-1.5px', lineHeight:1.05,
                color: product.color,
              }}>
                {product.name}
              </h1>

              <p style={{ color:textSecondary, fontSize:'clamp(0.95rem,1.8vw,1.1rem)', lineHeight:1.7, maxWidth:640, marginBottom:28 }}>
                {product.tagline}
              </p>

              {/* CTA Buttons */}
              <div style={{ display:'flex', flexWrap:'wrap' as const, gap:12 }}>
                <a href={product.liveUrl} target="_blank" rel="noopener noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:8,
                    padding:'13px 26px', background:product.btnGradient,
                    color:'white', fontWeight:700, fontSize:14, borderRadius:12,
                    textDecoration:'none', boxShadow:`0 6px 26px ${product.color}45`,
                    transition:'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow=`0 10px 36px ${product.color}55`; }}
                  onMouseOut={(e) => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow=`0 6px 26px ${product.color}45`; }}
                >
                  🌐 Visit {product.isParent ? 'Ruviq' : product.name}
                </a>
                {product.extensionUrl && (
                  <a href={product.extensionUrl} target="_blank" rel="noopener noreferrer"
                    style={{
                      display:'inline-flex', alignItems:'center', gap:8,
                      padding:'13px 22px',
                      background: dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)',
                      border:`1px solid ${product.color}45`,
                      color:product.color, fontWeight:600, fontSize:14, borderRadius:12,
                      textDecoration:'none', transition:'all 0.2s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background=`${product.color}18`; e.currentTarget.style.transform='translateY(-2px)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background= dark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.06)'; e.currentTarget.style.transform='translateY(0)'; }}
                  >
                    🧩 Chrome Extension
                  </a>
                )}
                {product.docsUrl && (
                  <a href={product.docsUrl} target="_blank" rel="noopener noreferrer"
                    style={{
                      display:'inline-flex', alignItems:'center', gap:8,
                      padding:'13px 22px',
                      background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                      border:`1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                      color:textSecondary, fontWeight:600, fontSize:14, borderRadius:12,
                      textDecoration:'none', transition:'all 0.2s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.color=textPrimary; e.currentTarget.style.transform='translateY(-2px)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.color=textSecondary; e.currentTarget.style.transform='translateY(0)'; }}
                  >
                    📄 Docs
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ──────────────────────────────────────────────────── */}
        <div style={{
          background:`linear-gradient(90deg, ${product.color}12, ${product.colorEnd}08, transparent)`,
          borderTop:`1px solid ${product.color}22`, borderBottom:`1px solid ${product.color}22`,
          padding:'26px 24px',
        }}>
          <div style={{
            maxWidth:1180, margin:'0 auto',
            display:'grid', gridTemplateColumns:`repeat(${product.stats.length}, 1fr)`, gap:20,
          }}>
            {product.stats.map((s, i) => (
              <div key={s.label} className="pd-appear" style={{ textAlign:'center' as const, animationDelay:`${0.2 + i * 0.07}s` }}>
                <div style={{ fontSize:'clamp(1.5rem,3.5vw,2.4rem)', fontWeight:900, color:product.color, lineHeight:1, marginBottom:5 }}>
                  {s.value}
                </div>
                <div style={{ color:textMuted, fontSize:12, fontWeight:500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ maxWidth:1180, margin:'0 auto', padding:'0 24px' }}>

          {/* ── About ──────────────────────────────────────────────────────── */}
          <div className="pd-appear" style={{ margin:'60px 0', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:32, alignItems:'start' }}>
            <div>
              <h2 style={{ color:textPrimary, fontWeight:800, fontSize:'clamp(1.4rem,2.5vw,2rem)', marginBottom:18, letterSpacing:'-0.5px' }}>
                About {product.name}
              </h2>
              <p style={{ color:textSecondary, fontSize:15, lineHeight:1.85, marginBottom:24 }}>
                {product.longDesc}
              </p>
              <div>
                <p style={{ color:textMuted, fontSize:11, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase' as const, marginBottom:10 }}>Built With</p>
                <div style={{ display:'flex', flexWrap:'wrap' as const, gap:8 }}>
                  {product.tech.map((t) => (
                    <span key={t} style={{
                      background:`${product.color}12`, border:`1px solid ${product.color}30`,
                      borderRadius:8, padding:'5px 12px', fontSize:11.5, fontWeight:600, color:product.color,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview card */}
            <div style={{
              background: glassBg, border:`1px solid ${product.color}30`,
              borderRadius:20, padding:'30px 26px', backdropFilter:'blur(12px)',
              boxShadow:`0 8px 40px rgba(0,0,0,0.2), inset 0 1px 0 ${dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.5)'}`,
            }}>
              {/* Live badge */}
              <div style={{
                display:'inline-flex', alignItems:'center', gap:7,
                background:`${product.color}18`, border:`1px solid ${product.color}40`,
                borderRadius:30, padding:'5px 14px', marginBottom:20, fontSize:11, fontWeight:700, color:product.color,
              }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:product.color, display:'inline-block', animation:'pd-pulse 1.8s ease-in-out infinite' }} />
                {product.badge}
              </div>

              {/* Logo / placeholder */}
              <div style={{
                background:`linear-gradient(160deg, ${product.color}14, ${product.colorEnd}08)`,
                border:`1px solid ${product.color}20`, borderRadius:14, height:156,
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom:20, position:'relative', overflow:'hidden',
              }}>
                {!iconErr ? (
                  <img
                    src={product.icon}
                    alt={`${product.name} icon`}
                    onError={() => setIconErr(true)}
                    style={{ width:72, height:72, objectFit:'contain', animation:'pd-float 4s ease-in-out infinite', borderRadius:16 }}
                  />
                ) : (
                  <div style={{ textAlign:'center' as const }}>
                    <div style={{ fontSize:44, marginBottom:8, animation:'pd-float 4s ease-in-out infinite' }}>
                      {product.isParent ? '🏢' : product.extensionUrl ? '🧩' : '🌐'}
                    </div>
                    <p style={{ color:textMuted, fontSize:11 }}>Logo coming soon</p>
                  </div>
                )}
              </div>

              <a href={product.liveUrl} target="_blank" rel="noopener noreferrer"
                style={{
                  display:'flex', alignItems:'center', justifyContent:'center', gap:8,
                  padding:'12px', background:product.btnGradient,
                  color:'white', fontWeight:700, fontSize:13, borderRadius:10,
                  textDecoration:'none', boxShadow:`0 4px 18px ${product.color}40`,
                }}
              >
                🌐 Open {product.name}
              </a>
            </div>
          </div>

          {/* ── Features ───────────────────────────────────────────────────── */}
          <div className="pd-appear" style={{ margin:'60px 0', animationDelay:'0.12s' }}>
            <div style={{ textAlign:'center', marginBottom:38 }}>
              <span style={{
                display:'inline-block', background:`${product.color}14`, border:`1px solid ${product.color}35`,
                borderRadius:30, padding:'4px 16px', color:product.color,
                fontSize:10, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' as const, marginBottom:14,
              }}>Features</span>
              <h2 style={{ color:textPrimary, fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.2rem)', letterSpacing:'-0.5px' }}>
                Everything Included
              </h2>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(282px, 1fr))', gap:15 }}>
              {product.features.map((f, i) => (
                <div key={i} className="pd-feat pd-appear"
                  onMouseEnter={() => setActiveFeature(i)}
                  style={{
                    background: activeFeature === i ? `linear-gradient(135deg, ${product.color}18, ${product.colorEnd}0c)` : featureCardBg,
                    border:`1px solid ${activeFeature === i ? product.color + '50' : glassBorder}`,
                    borderRadius:16, padding:'22px 20px', backdropFilter:'blur(8px)',
                    boxShadow: activeFeature === i ? `0 8px 30px rgba(0,0,0,0.15), 0 0 22px ${product.color}15` : 'none',
                    animationDelay:`${0.2 + i * 0.05}s`,
                  }}
                >
                  <div style={{ fontSize:24, marginBottom:12 }}>{f.icon}</div>
                  <h3 style={{ color: activeFeature === i ? product.color : textPrimary, fontWeight:700, fontSize:14.5, marginBottom:7, transition:'color 0.2s' }}>{f.title}</h3>
                  <p style={{ color:textSecondary, fontSize:13, lineHeight:1.65 }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── How It Works ───────────────────────────────────────────────── */}
          {product.howItWorks && product.howItWorks.length > 0 && (
            <div className="pd-appear" style={{ margin:'60px 0', animationDelay:'0.18s' }}>
              <div style={{ textAlign:'center', marginBottom:38 }}>
                <span style={{
                  display:'inline-block', background:`${product.color}14`, border:`1px solid ${product.color}35`,
                  borderRadius:30, padding:'4px 16px', color:product.color,
                  fontSize:10, fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase' as const, marginBottom:14,
                }}>Workflow</span>
                <h2 style={{ color:textPrimary, fontWeight:800, fontSize:'clamp(1.5rem,3vw,2.2rem)', letterSpacing:'-0.5px' }}>
                  How It Works
                </h2>
              </div>
              <div style={{ position:'relative' }}>
                {/* Timeline line */}
                <div style={{
                  position:'absolute', left:30, top:0, bottom:0, width:2,
                  background:`linear-gradient(180deg, ${product.color}60, ${product.colorEnd}20)`, borderRadius:1,
                }} />
                <div style={{ display:'flex', flexDirection:'column' as const, gap:4 }}>
                  {product.howItWorks.map((step, i) => (
                    <div key={i} className="pd-step pd-appear"
                      style={{ display:'flex', alignItems:'flex-start', gap:20, padding:'18px 18px 18px 0', animationDelay:`${0.25 + i * 0.07}s` }}
                    >
                      <div style={{
                        width:60, height:60, borderRadius:'50%', flexShrink:0, position:'relative', zIndex:1,
                        background:`linear-gradient(135deg, ${product.color}28, ${product.colorEnd}18)`,
                        border:`2px solid ${product.color}45`,
                        display:'flex', alignItems:'center', justifyContent:'center',
                        boxShadow:`0 0 18px ${product.color}20`,
                      }}>
                        <span style={{ color:product.color, fontWeight:900, fontSize:12 }}>{step.number}</span>
                      </div>
                      <div style={{
                        background: glassBg, border:`1px solid ${glassBorder}`,
                        borderRadius:14, padding:'18px 22px', flex:1, backdropFilter:'blur(8px)',
                      }}>
                        <h3 style={{ color:textPrimary, fontWeight:700, fontSize:15, marginBottom:6 }}>{step.title}</h3>
                        <p style={{ color:textSecondary, fontSize:13.5, lineHeight:1.65, margin:0 }}>{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Use Cases ──────────────────────────────────────────────────── */}
          {product.useCases && (
            <div className="pd-appear" style={{
              margin:'60px 0',
              background:`linear-gradient(135deg, ${product.color}10, ${product.colorEnd}07)`,
              border:`1px solid ${product.color}25`, borderRadius:22, padding:'34px 30px',
              backdropFilter:'blur(12px)', animationDelay:'0.22s',
            }}>
              <h3 style={{ color:textPrimary, fontWeight:700, fontSize:18, marginBottom:20 }}>
                {product.isParent ? 'Product Areas' : 'Built For'}
              </h3>
              <div style={{ display:'flex', flexWrap:'wrap' as const, gap:10 }}>
                {product.useCases.map((u) => (
                  <span key={u} style={{
                    background:`${product.color}18`, border:`1px solid ${product.color}38`,
                    borderRadius:20, padding:'8px 18px', fontSize:13, fontWeight:600, color:product.color,
                  }}>{u}</span>
                ))}
              </div>
            </div>
          )}

          {/* ── CTA Banner ─────────────────────────────────────────────────── */}
          <div className="pd-appear" style={{
            margin:'60px 0',
            background:`linear-gradient(135deg, ${product.color}20, ${product.colorEnd}12)`,
            border:`1px solid ${product.color}35`, borderRadius:24,
            padding:'clamp(30px,5vw,50px) clamp(22px,5vw,46px)',
            textAlign:'center' as const, position:'relative', overflow:'hidden', animationDelay:'0.28s',
          }}>
            <div style={{
              position:'absolute', top:'-50%', left:'50%', transform:'translateX(-50%)',
              width:400, height:400, borderRadius:'50%',
              background:`radial-gradient(circle, ${product.color}18, transparent 65%)`, pointerEvents:'none',
            }} />
            <h2 style={{ color:textPrimary, fontWeight:800, fontSize:'clamp(1.3rem,3vw,2rem)', marginBottom:12, letterSpacing:'-0.5px', position:'relative' }}>
              Ready to Try {product.name}?
            </h2>
            <p style={{ color:textSecondary, fontSize:15, maxWidth:500, margin:'0 auto 28px', lineHeight:1.75, position:'relative' }}>
              {product.shortDesc.slice(0, 100)}...
            </p>
            <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' as const, position:'relative' }}>
              <a href={product.liveUrl} target="_blank" rel="noopener noreferrer"
                style={{
                  display:'inline-flex', alignItems:'center', gap:8, padding:'13px 26px',
                  background:product.btnGradient, color:'white', fontWeight:700, fontSize:14,
                  borderRadius:12, textDecoration:'none', boxShadow:`0 6px 26px ${product.color}45`,
                }}
              >
                🚀 Get Started Free
              </a>
              {product.extensionUrl && (
                <a href={product.extensionUrl} target="_blank" rel="noopener noreferrer"
                  style={{
                    display:'inline-flex', alignItems:'center', gap:8, padding:'13px 22px',
                    background: dark ? 'rgba(255,255,255,0.09)' : 'rgba(0,0,0,0.07)',
                    border:`1px solid ${dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'}`,
                    color:textPrimary, fontWeight:600, fontSize:14, borderRadius:12, textDecoration:'none',
                  }}
                >
                  🧩 Install Extension
                </a>
              )}
            </div>
          </div>

          {/* ── Product nav ────────────────────────────────────────────────── */}
          <div style={{
            display:'grid', gridTemplateColumns: prevProd && nextProd ? '1fr 1fr' : '1fr',
            gap:14, marginBottom:80,
          }}>
            {prevProd && (
              <Link to={`/products/${prevProd.slug}`} style={{
                display:'flex', alignItems:'center', gap:14, padding:'18px 22px',
                background:glassBg, border:`1px solid ${glassBorder}`,
                borderRadius:16, textDecoration:'none', transition:'all 0.2s ease',
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor=`${prevProd.color}45`; e.currentTarget.style.transform='translateX(-3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor=glassBorder; e.currentTarget.style.transform='translateX(0)'; }}
              >
                <span style={{ color:textMuted, fontSize:18 }}>←</span>
                <div>
                  <div style={{ color:textMuted, fontSize:10, marginBottom:3, textTransform:'uppercase' as const, letterSpacing:'0.08em' }}>Previous</div>
                  <div style={{ color:textPrimary, fontWeight:700, fontSize:14 }}>{prevProd.name}</div>
                </div>
              </Link>
            )}
            {nextProd && (
              <Link to={`/products/${nextProd.slug}`} style={{
                display:'flex', alignItems:'center', justifyContent:'flex-end', gap:14, padding:'18px 22px',
                background:glassBg, border:`1px solid ${glassBorder}`,
                borderRadius:16, textDecoration:'none', transition:'all 0.2s ease',
              }}
                onMouseOver={(e) => { e.currentTarget.style.borderColor=`${nextProd.color}45`; e.currentTarget.style.transform='translateX(3px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.borderColor=glassBorder; e.currentTarget.style.transform='translateX(0)'; }}
              >
                <div style={{ textAlign:'right' as const }}>
                  <div style={{ color:textMuted, fontSize:10, marginBottom:3, textTransform:'uppercase' as const, letterSpacing:'0.08em' }}>Next</div>
                  <div style={{ color:textPrimary, fontWeight:700, fontSize:14 }}>{nextProd.name}</div>
                </div>
                <span style={{ color:textMuted, fontSize:18 }}>→</span>
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
