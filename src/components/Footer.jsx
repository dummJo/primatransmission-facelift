import { defaultTokens } from '../tokens';
import { copy } from '../copy';

export default function Footer({ tok, lang, setPage }) {
  const t = tok || defaultTokens;
  const c = copy[lang];
  return (
    <footer style={{ background: '#020609', borderTop: `1px solid ${t.border}`, marginTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 32px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, background: '#fff', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="/uploads/logo-1777109144994.jpg" alt="Prima" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: '#e8e2d9' }}>PT PRIMA ANJAYA SANTOSO</span>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(221,216,206,0.55)', lineHeight: 1.7, maxWidth: 280 }}>{c.footerDesc}</div>
          <div style={{ marginTop: 20, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(221,216,206,0.45)' }}>
            <div>Jl. Pangeran Jayakarta No. 121/41</div>
            <div style={{ marginTop: 4 }}>Jakarta 10730, Indonesia</div>
            <div style={{ marginTop: 4 }}>(021) 6295166 · 6262179 · 6282060</div>
            <div style={{ marginTop: 4 }}>mulyono@primatransmission.com</div>
            <div style={{ marginTop: 4 }}>www.primatransmission.com</div>
          </div>
        </div>
        {[
          { title: c.footerProducts, items: ['Prima Chain', 'Martin Sprockets', 'MTO Pulleys', 'Mayr Couplings'] },
          { title: c.footerServices, items: ['Vibration Analysis', 'Dynamic Balancing', 'Laser Alignment', 'Free Audit'] },
          { title: c.footerContact, items: ['(021) 6295166', '(021) 6262179', 'mulyono@primatransmission.com', 'Jl. Pangeran Jayakarta 121/41'] },
        ].map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: '#e8e2d9', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{col.title}</div>
            {col.items.map((item, j) => (
              <div key={j} style={{ fontSize: 13, color: 'rgba(221,216,206,0.5)', marginBottom: 10, cursor: 'pointer' }}
                onMouseEnter={(e) => e.target.style.color = '#e8e2d9'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(221,216,206,0.5)'}>
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 32px', borderTop: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(221,216,206,0.35)' }}>© 2002 - 2026 PT Prima Anjaya Santoso. All rights reserved.</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(221,216,206,0.35)' }}>primatransmission.com</span>
      </div>
    </footer>
  );
}
