import { useState } from 'react';
import { defaultTokens } from '../tokens';

export function PlaceholderImg({ label = 'Photo', width = '100%', height = 240, style = {} }) {
  return (
    <div style={{
      width, height, background: '#081422', border: '1px solid rgba(255,255,255,0.07)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden', ...style
    }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        <defs>
          <pattern id={`stripe-${label.replace(/\s/g, '-')}`} width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(255,255,255,0.04)" strokeWidth="8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#stripe-${label.replace(/\s/g, '-')})`} />
      </svg>
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24" style={{ opacity: 0.25, marginBottom: 8, position: 'relative' }}>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#ddd8ce" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" fill="#ddd8ce" />
        <path d="M3 16l5-5 4 4 3-3 6 6" stroke="#ddd8ce" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(221,216,206,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', position: 'relative' }}>{label}</span>
    </div>
  );
}

export function Btn({ children, variant = 'primary', onClick, tok, style = {}, size = 'md' }) {
  const [hov, setHov] = useState(false);
  const t = tok || defaultTokens;
  const pad = size === 'sm' ? '8px 18px' : size === 'lg' ? '16px 36px' : '12px 28px';
  const fs = size === 'sm' ? 13 : size === 'lg' ? 16 : 14;
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8, padding: pad,
    fontSize: fs, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
    letterSpacing: '0.03em', transition: 'all 0.2s', cursor: 'pointer', ...style
  };
  if (variant === 'primary') {
    return (
      <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ ...base, background: hov ? t.crimsonHover : t.crimson, color: '#fff', border: 'none' }}>
        {children}
      </button>
    );
  }
  if (variant === 'outline') {
    return (
      <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ ...base, background: hov ? 'rgba(255,255,255,0.05)' : 'transparent', color: t.text, border: `1px solid ${hov ? 'rgba(255,255,255,0.25)' : t.border}` }}>
        {children}
      </button>
    );
  }
  return <button onClick={onClick} style={base}>{children}</button>;
}

export function SectionLabel({ children, tok }) {
  const t = tok || defaultTokens;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
      <div style={{ width: 24, height: 2, background: t.crimson }} />
      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>
        {children}
      </span>
    </div>
  );
}

export function StatBar({ tok, lang, copy }) {
  const t = tok || defaultTokens;
  const c = copy[lang];
  const stats = [
    { val: c.stat1Val, lab: c.stat1Lab },
    { val: c.stat2Val, lab: c.stat2Lab },
    { val: c.stat3Val, lab: c.stat3Lab },
    { val: c.stat4Val, lab: c.stat4Lab },
  ];
  return (
    <div style={{ background: t.navy, borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex' }}>
        {stats.map((s, i) => (
          <div key={i} style={{
            flex: 1, padding: '20px 0', textAlign: 'center',
            borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none'
          }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: '#e8e2d9', lineHeight: 1 }}>{s.val}</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'rgba(232,226,217,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 4 }}>{s.lab}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductCard({ tok, lang, product, onNavigate, copy }) {
  const t = tok || defaultTokens;
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onNavigate && onNavigate('products')}
      style={{
        background: hov ? t.bgCardHover : t.bgCard,
        border: `1px solid ${hov ? t.borderCrimson : t.border}`,
        transition: 'all 0.2s', cursor: 'pointer',
        display: 'flex', flexDirection: 'column'
      }}>
      <PlaceholderImg label={product.imgLabel} height={180} />
      <div style={{ padding: '20px 20px 24px' }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{product.brand}</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, color: t.text, marginBottom: 8 }}>{product.name}</div>
        <div style={{ fontSize: 13, color: t.text, lineHeight: 1.6, marginBottom: 16 }}>{product.desc}</div>
        {product.bundle && (
          <div style={{ background: 'rgba(200,25,47,0.08)', border: `1px solid ${t.borderCrimson}`, padding: '10px 12px', fontSize: 12, color: t.textMuted }}>
            <span style={{ color: t.crimson, fontWeight: 600 }}>+ </span>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{copy[lang].bundle}:</span>
            <span style={{ color: t.text, marginLeft: 4 }}>{product.bundle}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function ServiceCard({ tok, icon, title, desc, detail, onNavigate }) {
  const t = tok || defaultTokens;
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      onClick={() => onNavigate && onNavigate('services')}
      style={{
        background: hov ? t.bgCardHover : t.bgCard,
        border: `1px solid ${hov ? t.borderCrimson : t.border}`,
        padding: '32px', transition: 'all 0.2s', cursor: 'pointer'
      }}>
      <div style={{ width: 44, height: 44, background: 'rgba(200,25,47,0.12)', border: `1px solid ${t.borderCrimson}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <span style={{ fontSize: 20 }}>{icon}</span>
      </div>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 18, color: t.text, marginBottom: 10 }}>{title}</div>
      <div style={{ fontSize: 14, color: t.text, lineHeight: 1.65, marginBottom: 16 }}>{desc}</div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: t.textMuted, letterSpacing: '0.05em' }}>{detail}</div>
    </div>
  );
}
