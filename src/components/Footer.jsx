import { defaultTokens } from '../tokens';
import { copy } from '../copy';

const linkStyle = (base = {}) => ({
  ...base,
  textDecoration: 'none',
  transition: 'color 0.2s',
  cursor: 'pointer',
});

const MAPS_URL = 'https://maps.app.goo.gl/yPhsWNf3LSuUdqQ8A';

const contactItems = [
  {
    label: '(021) 6295166',
    href: 'tel:+62216295166',
    rel: null,
  },
  {
    label: '(021) 6262179',
    href: 'tel:+62216262179',
    rel: null,
  },
  {
    label: 'mulyono@primatransmission.com',
    href: 'mailto:mulyono@primatransmission.com',
    rel: null,
  },
  {
    label: 'Jl. Pangeran Jayakarta 121/41',
    href: MAPS_URL,
    rel: 'noopener noreferrer',
    target: '_blank',
  },
];

export default function Footer({ tok, lang, setPage }) {
  const t = tok || defaultTokens;
  const c = copy[lang];

  const cols = [
    {
      title: c.footerProducts,
      items: [
        { label: 'Prima Chain', page: 'products' },
        { label: 'Martin Sprockets', page: 'products' },
        { label: 'MTO Pulleys', page: 'products' },
        { label: 'Mayr Couplings', page: 'products' },
      ],
    },
    {
      title: c.footerServices,
      items: [
        { label: 'Vibration Analysis', page: 'services' },
        { label: 'Dynamic Balancing', page: 'services' },
        { label: 'Laser Alignment', page: 'services' },
        { label: 'Free Audit', page: 'services' },
      ],
    },
  ];

  const itemStyle = {
    fontSize: 13,
    color: 'rgba(221,216,206,0.5)',
    marginBottom: 10,
    display: 'block',
    fontFamily: 'inherit',
  };

  return (
    <footer style={{ background: '#020609', borderTop: `1px solid ${t.border}`, marginTop: 80 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 32px 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48 }}>

        {/* Brand column */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, background: '#fff', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="/uploads/logo-1777109144994.jpg" alt="PT Prima Anjaya Santoso logo" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: '#e8e2d9' }}>PT PRIMA ANJAYA SANTOSO</span>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(221,216,206,0.55)', lineHeight: 1.7, maxWidth: 280 }}>{c.footerDesc}</div>
          <address style={{ marginTop: 20, fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, fontStyle: 'normal', color: 'rgba(221,216,206,0.45)' }}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer"
              style={linkStyle({ color: 'rgba(221,216,206,0.45)', display: 'block' })}
              onMouseEnter={e => e.currentTarget.style.color = '#e8e2d9'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(221,216,206,0.45)'}>
              Jl. Pangeran Jayakarta No. 121/41<br />Jakarta 10730, Indonesia
            </a>
            <a href="tel:+62216295166"
              style={linkStyle({ color: 'rgba(221,216,206,0.45)', display: 'block', marginTop: 8 })}
              onMouseEnter={e => e.currentTarget.style.color = '#e8e2d9'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(221,216,206,0.45)'}>
              (021) 6295166 · 6262179 · 6282060
            </a>
            <a href="mailto:mulyono@primatransmission.com"
              style={linkStyle({ color: 'rgba(221,216,206,0.45)', display: 'block', marginTop: 4 })}
              onMouseEnter={e => e.currentTarget.style.color = '#e8e2d9'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(221,216,206,0.45)'}>
              mulyono@primatransmission.com
            </a>
            <a href="https://primatransmission.vercel.app"
              style={linkStyle({ color: 'rgba(221,216,206,0.45)', display: 'block', marginTop: 4 })}
              onMouseEnter={e => e.currentTarget.style.color = '#e8e2d9'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(221,216,206,0.45)'}>
              www.primatransmission.com
            </a>
          </address>
        </div>

        {/* Products & Services columns */}
        {cols.map((col, i) => (
          <div key={i}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: '#e8e2d9', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{col.title}</div>
            {col.items.map((item, j) => (
              <button key={j} onClick={() => setPage(item.page)}
                style={{ ...itemStyle, background: 'none', border: 'none', textAlign: 'left', padding: 0 }}
                onMouseEnter={e => e.currentTarget.style.color = '#e8e2d9'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(221,216,206,0.5)'}>
                {item.label}
              </button>
            ))}
          </div>
        ))}

        {/* Contact column — fully interactive */}
        <div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 13, color: '#e8e2d9', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{c.footerContact}</div>
          {contactItems.map((item, j) => (
            <a key={j} href={item.href}
              target={item.target || undefined}
              rel={item.rel || undefined}
              style={{ ...itemStyle, ...linkStyle() }}
              onMouseEnter={e => e.currentTarget.style.color = '#e8e2d9'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(221,216,206,0.5)'}>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 32px', borderTop: `1px solid ${t.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(221,216,206,0.35)' }}>© 2002 - 2026 PT Prima Anjaya Santoso. All rights reserved.</span>
        <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(221,216,206,0.35)' }}>primatransmission.com</span>
      </div>
    </footer>
  );
}
