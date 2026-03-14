import { Github, Linkedin, Mail, MapPin, Phone, Twitter, Instagram, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  { name: 'Ruviq', slug: 'ruviq', url: 'https://ruviq.com/', color: '#a78bfa', external: true },
  { name: 'APIQuill', slug: 'apiquill', url: 'https://apiquill.ruviq.com/', color: '#3b82f6', external: true },
  { name: 'Qualixy AI', slug: 'qualixy', url: 'https://qualixy.ruviq.com/', color: '#0d9488', external: true },
  { name: 'PerfTestFlow', slug: 'perftestflow', url: 'https://perftestflow.ruviq.com/', color: '#818cf8', external: true },
  { name: 'AutoCaseGen', slug: 'autocasegen', url: 'https://autocasegen.ruviq.com/', color: '#19e6d5', external: true },
  ];

const NAV_LINKS = [
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
  { label: 'Products', href: '/products' },
  //{ label: 'About Me', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Certifications', href: '/certifications' },
  
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0d1117', color: 'white', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '60px 24px 0' }}>

        {/* Main grid: left 1/3 = brand, remaining 2/3 = 3 columns */}
        <div
          className="footer-main-grid"
          style={{ marginBottom: 48 }}
        >
          <style>{`
            .footer-main-grid {
              display: grid;
              gap: 40px 48px;
            }
            @media (min-width: 768px) {
              .footer-main-grid { grid-template-columns: 1.5fr 1fr 1fr 1fr; }
            }
            @media (max-width: 767px) {
              .footer-main-grid { grid-template-columns: 1fr; }
            }
          `}</style>

          {/* ── Brand column ──────────────────────────────────────── */}
          <div>
            <div style={{ marginBottom: 14, display: 'flex', alignItems: 'center', gap: 10 }}>
              <img
                src="/products/Ruviqicon.png"
                alt="Ruviq"
                style={{ width: 28, height: 28, objectFit: 'contain', borderRadius: 7 }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
              <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '-0.3px' }}>Ravi Pratap Singh</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.48)', fontSize: 13, lineHeight: 1.75, marginBottom: 20, maxWidth: 240 }}>
              Senior QA Engineer · Building AI-powered QA tools under <span style={{ color: '#a78bfa', fontWeight: 600 }}>Ruviq</span>.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              <a href="mailto:rps.rajputt@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'white'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                <Mail style={{ width: 14, height: 14, flexShrink: 0 }} />
                rps.rajputt@gmail.com
              </a>
              <a href="tel:+919079488750" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13, textDecoration: 'none' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'white'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
              >
                <Phone style={{ width: 14, height: 14, flexShrink: 0 }} />
                +91 90794 88750
              </a>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>
                <MapPin style={{ width: 14, height: 14, flexShrink: 0 }} />
                India
              </span>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 22 }}>
              {[
                { href: 'https://www.linkedin.com/in/rpsrajputt/', Icon: Linkedin, hover: '#60a5fa', label: 'LinkedIn' },
                { href: 'https://github.com/rps-rajput', Icon: Github, hover: '#e2e8f0', label: 'GitHub' },
                { href: 'https://x.com/rps_rajput', Icon: Twitter, hover: '#60a5fa', label: 'Twitter' },
                { href: 'https://www.instagram.com/rps__003/', Icon: Instagram, hover: '#f472b6', label: 'Instagram' },
              ].map(({ href, Icon, hover, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label}
                  style={{ color: 'rgba(255,255,255,0.38)', transition: 'color 0.2s ease' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = hover; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; }}
                >
                  <Icon style={{ width: 18, height: 18 }} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Quick Links ───────────────────────────────────────── */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link to={href}
                    style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13.5, textDecoration: 'none', transition: 'color 0.18s ease' }}
                    onMouseOver={(e) => { e.currentTarget.style.color = 'white'; }}
                    onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Products ──────────────────────────────────────────── */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>
              My Products
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {PRODUCTS.map(({ name, slug, url, color }) => (
                <li key={slug}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      color, fontSize: 13.5, fontWeight: 600, textDecoration: 'none',
                      transition: 'opacity 0.18s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.opacity = '0.75'; }}
                    onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
                  >
                    {name}
                    <ExternalLink style={{ width: 11, height: 11, opacity: 0.7 }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect / CTA ─────────────────────────────────────── */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 18 }}>
              Work With Me
            </h4>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>
              Open to full-time QA roles, freelance projects, and tool collaborations.
            </p>
            <Link to="/contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #3b82f6, #7c3aed)',
                color: 'white', fontWeight: 700, fontSize: 13, borderRadius: 10,
                textDecoration: 'none', boxShadow: '0 4px 18px rgba(124,58,237,0.35)',
                transition: 'opacity 0.2s ease',
                marginBottom: 14,
              }}
              onMouseOver={(e) => { e.currentTarget.style.opacity = '0.85'; }}
              onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
            >
              <Mail style={{ width: 14, height: 14 }} />
              Get In Touch
            </Link>
            <div style={{ marginTop: 8 }}>
              <a
                href="https://drive.google.com/uc?export=download&id=1nwKr7uXGx_97iYAbuu_zO6h6b529jj6F"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgba(255,255,255,0.38)', fontSize: 12.5, textDecoration: 'none', transition: 'color 0.18s' }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'white'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; }}
              >
                ↓ Download Resume
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '18px 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        maxWidth: 1180,
        margin: '0 auto',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
          © {year} Ravi Pratap Singh. All rights reserved. Built with React & Tailwind CSS.
        </p>
        <a
          href="https://ruviq.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none' }}
        >
          <img
            src="/products/Ruviqicon.png"
            alt="Ruviq"
            style={{ width: 16, height: 16, objectFit: 'contain', borderRadius: 4, opacity: 0.6 }}
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 11.5 }}>
            Products by <span style={{ color: '#a78bfa', fontWeight: 600 }}>Ruviq</span>
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
