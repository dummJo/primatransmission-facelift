import { useState } from 'react';
import { defaultTokens } from '../tokens';
import { copy } from '../copy';
import { SectionLabel, PlaceholderImg } from '../components/Shared';
import Footer from '../components/Footer';

export default function ProductsPage({ tok, lang, setPage }) {
  const t = tok || defaultTokens;
  const c = copy[lang];
  const categories = ['All', 'Prima Chain', 'Martin Sprocket', 'MTO Pulleys', 'Mayr'];
  const [cat, setCat] = useState('All');

  const allProducts = [
    { brand: 'Prima Chain', name: 'Heavy Duty Roller Chain A', desc: 'ANSI #40–#240, hardened pins, shot-peened sideplates. For conveyor, mining, sugar mill.', imgLabel: 'Prima Chain roller — studio', specs: ['ANSI #40–240', 'Hardened pins', 'Shot-peened'], bundle: 'Martin Sprocket RS40' },
    { brand: 'Prima Chain', name: 'Stainless Steel Chain', desc: 'Food-grade SS304/SS316 roller chain for hygienic and corrosive environments.', imgLabel: 'Prima SS Chain', specs: ['SS304 / SS316', 'IP69K', 'CIP-safe'], bundle: null },
    { brand: 'Martin Sprocket', name: 'Type B Hub Sprocket', desc: 'Precision-cut sprockets for standard ANSI chains. Plain bore or finished bore.', imgLabel: 'Martin Sprocket — Type B', specs: ['ANSI std', 'C1045 steel', 'Bore: 1"–4"'], bundle: 'Prima Chain #60' },
    { brand: 'Martin Sprocket', name: 'V-Belt Sheave', desc: 'Cast iron and steel sheaves for A, B, C, D section V-belts. SPA/SPB/SPC metric.', imgLabel: 'V-Belt Sheave — studio', specs: ['A/B/C/D section', 'Cast iron', 'SPA/SPB/SPC'], bundle: 'Prima Chain #60' },
    { brand: 'MTO Pulleys', name: 'Custom Conveyor Pulley', desc: 'Engineered-to-order drive and tail pulleys. Rubber lagging, wing pulleys, ceramic options.', imgLabel: 'MTO Conveyor Pulley — workshop', specs: ['Custom bore/dia', 'Rubber lagging', 'CEMA std'], bundle: null },
    { brand: 'MTO Pulleys', name: 'Wing Pulley', desc: 'Self-cleaning wing pulleys for return-side conveyor applications — reduces material buildup and belt wear.', imgLabel: 'MTO Wing Pulley — workshop', specs: ['Custom bore/dia', 'Self-cleaning', 'CEMA std'], bundle: null },
    { brand: 'MTO Pulleys', name: 'Snub & Bend Pulley', desc: 'Engineer-to-order snub and bend pulleys for conveyor take-up systems. Fully balanced to ISO 1940.', imgLabel: 'MTO Snub Pulley — workshop', specs: ['Custom spec', 'ISO 1940', 'Fully balanced'], bundle: null },
    { brand: 'Mayr', name: 'ROBA-stop Brake', desc: 'Spring-applied electromagnetic safety brakes for motor shafts and machine axes.', imgLabel: 'Mayr ROBA-stop brake', specs: ['IP65', 'CE certified', '24VDC/48VDC'], bundle: null },
  ];

  const filtered = cat === 'All' ? allProducts : allProducts.filter(p => p.brand === cat);

  return (
    <div style={{ background: t.bg, minHeight: '100vh', paddingTop: 68 }}>
      <div style={{ background: t.bgSection, borderBottom: `1px solid ${t.border}`, padding: '48px 0 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Full Catalog' : 'Katalog Lengkap'}</SectionLabel>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 48, color: t.text, marginBottom: 12 }}>{c.productsTitle}</h1>
          <p style={{ fontSize: 16, color: t.textMuted }}>{c.productsSub}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 32px' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
          {categories.map(cat2 => (
            <button key={cat2} onClick={() => setCat(cat2)}
              style={{
                padding: '8px 20px', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12,
                letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.15s',
                background: cat === cat2 ? t.crimson : 'transparent',
                color: cat === cat2 ? '#fff' : t.textMuted,
                border: `1px solid ${cat === cat2 ? t.crimson : t.border}`,
              }}>{cat2}</button>
          ))}
          <div style={{ marginLeft: 'auto', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: t.textMuted, display: 'flex', alignItems: 'center' }}>
            {filtered.length} {lang === 'EN' ? 'products' : 'produk'}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
          {filtered.map((p, i) => (
            <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, display: 'flex', flexDirection: 'column', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderCrimson; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; }}>
              <PlaceholderImg label={p.imgLabel} height={160} />
              <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>{p.brand}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 15, color: t.text, marginBottom: 8, lineHeight: 1.3 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: t.textMuted, lineHeight: 1.6, marginBottom: 14, flex: 1 }}>{p.desc}</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
                  {p.specs.map((s, j) => <span key={j} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: t.textMuted, background: 'rgba(255,255,255,0.04)', border: `1px solid ${t.border}`, padding: '3px 8px', letterSpacing: '0.05em' }}>{s}</span>)}
                </div>
                {p.bundle && (
                  <div style={{ fontSize: 11, color: t.textMuted, background: 'rgba(200,25,47,0.07)', border: `1px solid ${t.borderCrimson}`, padding: '8px 10px' }}>
                    <span style={{ color: t.crimson }}>+ </span>{c.bundle}: <strong style={{ color: t.text }}>{p.bundle}</strong>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer tok={tok} lang={lang} setPage={setPage} />
    </div>
  );
}
