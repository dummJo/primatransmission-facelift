import { useState, useEffect } from 'react';
import { defaultTokens } from '../tokens';
import { copy } from '../copy';
import { Btn } from './Shared';

export default function Nav({ tok, lang, setLang, page, setPage }) {
  const t = tok || defaultTokens;
  const c = copy[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = [
    { key: 'home', label: c.navHome },
    { key: 'about', label: lang === 'EN' ? 'About Us' : 'Tentang Kami' },
    { key: 'products', label: c.navProducts },
    { key: 'services', label: c.navServices },
    { key: 'industries', label: c.navIndustries },
    { key: 'portal', label: c.navPortal },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(4,9,15,0.97)' : 'rgba(4,9,15,0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: `1px solid ${scrolled ? t.border : 'transparent'}`,
      transition: 'all 0.3s'
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div onClick={() => setPage('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <div style={{ width: 38, height: 38, background: '#fff', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
            <img src="/uploads/logo-1777109144994.jpg" alt="Prima" style={{ width: 34, height: 34, objectFit: 'contain' }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: 'rgb(235,235,235)', lineHeight: 1.1 }}>PT PRIMA ANJAYA SANTOSO</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: 'rgb(226,226,226)', letterSpacing: '0.12em' }}>POWER TRANSMISSION INDONESIA</div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {links.map((l) => (
            <button key={l.key} onClick={() => setPage(l.key)}
              style={{
                padding: '8px 14px', fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13.5, fontWeight: page === l.key ? 600 : 400,
                color: page === l.key ? t.crimson : 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer',
                transition: 'color 0.2s', letterSpacing: '0.01em',
                borderBottom: page === l.key ? `2px solid ${t.crimson}` : '2px solid transparent'
              }}>
              {l.label}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button onClick={() => setLang(lang === 'EN' ? 'ID' : 'EN')}
            style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.5)', background: 'none', border: '1px solid rgba(255,255,255,0.15)', padding: '5px 10px', cursor: 'pointer', letterSpacing: '0.08em' }}>
            {lang === 'EN' ? 'ID' : 'EN'}
          </button>
          <Btn tok={tok} size="sm" onClick={() => setPage('services')}>{c.heroCTA1}</Btn>
        </div>
      </div>
    </nav>
  );
}
