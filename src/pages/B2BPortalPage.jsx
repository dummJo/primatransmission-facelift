import { useState } from 'react';
import { defaultTokens } from '../tokens';
import { SectionLabel, Btn } from '../components/Shared';
import Footer from '../components/Footer';

export default function B2BPortalPage({ tok, lang, setPage }) {
  const t = tok || defaultTokens;
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loggedIn, setLoggedIn] = useState(false);

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    color: t.text, padding: '14px 18px', fontSize: 14, fontFamily: "'IBM Plex Sans', sans-serif", outline: 'none',
  };
  const labelStyle = {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted,
    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8, display: 'block'
  };

  if (loggedIn) {
    const orders = [
      { id: 'PO-2026-0341', date: '12 Apr 2026', item: 'Prima Chain #60 × 200m', status: lang === 'EN' ? 'Delivered' : 'Terkirim', statusColor: '#22c55e' },
      { id: 'PO-2026-0289', date: '28 Mar 2026', item: 'Martin Sprocket RS60-1 × 12pcs', status: lang === 'EN' ? 'Delivered' : 'Terkirim', statusColor: '#22c55e' },
      { id: 'PO-2026-0201', date: '10 Mar 2026', item: 'MTO Drive Pulley Ø500×1200 × 2pcs', status: lang === 'EN' ? 'Delivered' : 'Terkirim', statusColor: '#22c55e' },
    ];
    return (
      <div style={{ background: t.bg, minHeight: '100vh', paddingTop: 68 }}>
        <div style={{ background: t.bgSection, borderBottom: `1px solid ${t.border}`, padding: '40px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <SectionLabel tok={tok}>{lang === 'EN' ? 'B2B Client Portal' : 'Portal Klien B2B'}</SectionLabel>
              <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: t.text }}>
                {lang === 'EN' ? 'Welcome, PT Contoh Industri' : 'Selamat datang, PT Contoh Industri'}
              </h1>
            </div>
            <button onClick={() => setLoggedIn(false)} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: t.textMuted, background: 'none', border: `1px solid ${t.border}`, padding: '8px 16px', cursor: 'pointer' }}>
              {lang === 'EN' ? 'Sign Out' : 'Keluar'}
            </button>
          </div>
        </div>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 32px' }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
            {lang === 'EN' ? '// PURCHASE HISTORY — QUICK REORDER' : '// RIWAYAT PEMBELIAN — REORDER CEPAT'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {orders.map((o, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 32 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: t.textMuted, flexShrink: 0 }}>{o.id}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: t.textDim, flexShrink: 0 }}>{o.date}</div>
                <div style={{ flex: 1, fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: t.text }}>{o.item}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: o.statusColor }}>{o.status}</div>
                <Btn tok={tok} size="sm">{lang === 'EN' ? 'Reorder' : 'Pesan Ulang'}</Btn>
              </div>
            ))}
          </div>
        </div>
        <Footer tok={tok} lang={lang} setPage={setPage} />
      </div>
    );
  }

  return (
    <div style={{ background: t.bg, minHeight: '100vh', paddingTop: 68, display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 32px' }}>
        <div style={{ width: '100%', maxWidth: 440 }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ width: 48, height: 48, background: '#fff', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', margin: '0 auto 16px' }}>
              <img src="/uploads/logo-1777109144994.jpg" alt="Prima" style={{ width: 42, height: 42, objectFit: 'contain' }} />
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: t.text, marginBottom: 8 }}>
              {lang === 'EN' ? 'B2B Client Portal' : 'Portal Klien B2B'}
            </h1>
            <p style={{ fontSize: 14, color: t.textMuted }}>{lang === 'EN' ? 'Exclusive access for Prima Anjaya partners' : 'Akses eksklusif untuk mitra Prima Anjaya'}</p>
          </div>
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '40px' }}>
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" value={loginForm.email} onChange={e => setLoginForm(f => ({ ...f, email: e.target.value }))} placeholder="purchasing@perusahaan.co.id" />
            </div>
            <div style={{ marginBottom: 32 }}>
              <label style={labelStyle}>{lang === 'EN' ? 'Password' : 'Kata Sandi'}</label>
              <input style={inputStyle} type="password" value={loginForm.password} onChange={e => setLoginForm(f => ({ ...f, password: e.target.value }))} placeholder="••••••••" />
            </div>
            <Btn tok={tok} size="lg" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setLoggedIn(true)}>
              {lang === 'EN' ? 'Sign In' : 'Masuk'}
            </Btn>
            <div style={{ marginTop: 20, textAlign: 'center', fontSize: 13, color: t.textMuted }}>
              {lang === 'EN' ? 'Not a partner yet? ' : 'Belum menjadi mitra? '}
              <span style={{ color: t.crimson, cursor: 'pointer' }} onClick={() => setPage('services')}>
                {lang === 'EN' ? 'Contact our team →' : 'Hubungi tim kami →'}
              </span>
            </div>
          </div>
          <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
            {[
              { icon: '🔄', text: lang === 'EN' ? 'One-click reorder' : 'Reorder satu klik' },
              { icon: '📊', text: lang === 'EN' ? 'PO history' : 'Riwayat PO' },
              { icon: '📦', text: lang === 'EN' ? 'Live stock check' : 'Cek stok live' },
            ].map((f, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '16px 8px', background: t.bgCard, border: `1px solid ${t.border}` }}>
                <div style={{ fontSize: 18, marginBottom: 6 }}>{f.icon}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted, lineHeight: 1.4 }}>{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer tok={tok} lang={lang} setPage={setPage} />
    </div>
  );
}
