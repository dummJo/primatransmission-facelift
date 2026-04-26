import { useState } from 'react';
import { defaultTokens } from '../tokens';
import { copy } from '../copy';
import { SectionLabel, PlaceholderImg, Btn } from '../components/Shared';
import Footer from '../components/Footer';

export default function IndustriesPage({ tok, lang, setPage, goToAudit }) {
  const t = tok || defaultTokens;
  const c = copy[lang];
  const [active, setActive] = useState(0);

  const industries = [
    {
      icon: '⛏', name: lang === 'EN' ? 'Mining' : 'Pertambangan',
      desc: lang === 'EN' ? 'Coal, nickel, and bauxite mining operations demand maximum drivetrain reliability. Unexpected conveyor or crusher failure can mean millions in lost production per day. PT Prima provides mining-grade chain, MTO pulleys, and on-site vibration diagnostics to maximize uptime.' : 'Operasi tambang batu bara, nikel, dan bauksit menuntut keandalan drivetrain maksimum. Kegagalan conveyor atau crusher yang tidak terduga dapat berarti jutaan kerugian produksi per hari. PT Prima menyediakan rantai grade pertambangan, pulley MTO, dan diagnostik vibrasi on-site.',
      products: ['Prima Chain Heavy Series', 'MTO Conveyor Pulleys', 'SKF Vibration Analysis', 'Mayr Couplings'],
      stat: { val: '72h', lab: lang === 'EN' ? 'avg response time' : 'waktu respons rata-rata' },
    },
    {
      icon: '🏭', name: lang === 'EN' ? 'Cement' : 'Semen',
      desc: lang === 'EN' ? 'Cement plant reliability depends on kiln drives, raw mill chains, and conveyor systems operating 24/7. PT Prima supplies Martin sprockets, custom MTO pulleys, and offers Microlog-based predictive maintenance programs that have reduced downtime by up to 45%.' : 'Keandalan pabrik semen bergantung pada drive kiln, rantai raw mill, dan sistem conveyor yang beroperasi 24/7. PT Prima memasok sproket Martin, pulley MTO kustom, dan menawarkan program pemeliharaan prediktif berbasis Microlog yang telah mengurangi downtime hingga 45%.',
      products: ['Martin Sprocket Kiln Chain', 'MTO Drive Pulleys', 'Dynamic Balancing', 'Laser Alignment'],
      stat: { val: '45%', lab: lang === 'EN' ? 'downtime reduction' : 'penurunan downtime' },
    },
    {
      icon: '🌿', name: lang === 'EN' ? 'Palm Oil' : 'Kelapa Sawit',
      desc: lang === 'EN' ? "CPO processing plants run on tight harvest-season windows. Prima Chain's hardened-pin roller chains and Martin sprocket packages extend service intervals from 3 to 9 months, slashing annual replacement costs while ensuring peak-season continuity." : 'Pabrik pengolahan CPO beroperasi dalam jendela musim panen yang ketat. Rantai roller pin-hardened Prima Chain dan paket sproket Martin memperpanjang interval servis dari 3 menjadi 9 bulan, memangkas biaya penggantian tahunan.',
      products: ['Prima Chain Hardened Pin', 'Martin Sprocket Sets', 'Mayr Couplings', 'Vibration Analysis'],
      stat: { val: '3×', lab: lang === 'EN' ? 'chain life extension' : 'perpanjangan umur rantai' },
    },
    {
      icon: '🍬', name: lang === 'EN' ? 'Sugar Mill' : 'Pabrik Gula',
      desc: lang === 'EN' ? 'The crushing season leaves no margin for error. PT Prima engineers complete drivetrain packages for sugar mill tandem drives — from heavy roller chains to custom gearbox couplings — ensuring the 4-month season runs without unplanned stops.' : 'Musim giling tidak memberi ruang untuk kesalahan. Engineer PT Prima merancang paket drivetrain lengkap untuk tandem drive pabrik gula — dari rantai roller berat hingga kopling gearbox kustom — memastikan musim 4 bulan berjalan tanpa penghentian tak terencana.',
      products: ['Prima Chain Sugar Mill Series', 'Mayr ROBA-stop Brakes', 'MTO Tandem Pulleys', 'Alignment Services'],
      stat: { val: '4mo', lab: lang === 'EN' ? 'zero-stop season' : 'musim tanpa henti' },
    },
  ];

  const ind = industries[active];

  return (
    <div style={{ background: t.bg, minHeight: '100vh', paddingTop: 68 }}>
      <div style={{ background: t.bgSection, borderBottom: `1px solid ${t.border}`, padding: '48px 0 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Industries' : 'Industri'}</SectionLabel>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 48, color: t.text, marginBottom: 12 }}>{c.industriesTitle}</h1>
          <p style={{ fontSize: 16, color: t.text }}>{c.industriesSub}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: 2, minHeight: 600 }}>
        <div style={{ borderRight: `1px solid ${t.border}`, paddingTop: 40 }}>
          {industries.map((ind2, i) => (
            <button key={i} onClick={() => setActive(i)}
              style={{
                display: 'flex', alignItems: 'center', gap: 14, width: '100%', padding: '20px 24px',
                background: active === i ? t.bgCard : 'transparent', cursor: 'pointer',
                borderLeft: `3px solid ${active === i ? t.crimson : 'transparent'}`,
                borderRight: 'none', borderTop: 'none',
                borderBottom: `1px solid ${t.border}`, textAlign: 'left',
                transition: 'all 0.2s',
              }}>
              <span style={{ fontSize: 20 }}>{ind2.icon}</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: active === i ? 600 : 400, fontSize: 15, color: active === i ? t.text : t.textMuted }}>{ind2.name}</span>
            </button>
          ))}
        </div>

        <div style={{ padding: '48px 48px 80px' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
            <span style={{ fontSize: 40 }}>{ind.icon}</span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: t.text }}>{ind.name}</h2>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: t.crimson }}>{ind.stat.val}</div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{ind.stat.lab}</div>
            </div>
          </div>
          <PlaceholderImg label={`${ind.name} — field photo`} height={220} style={{ marginBottom: 32 }} />
          <p style={{ fontSize: 15, color: t.text, lineHeight: 1.8, marginBottom: 32 }}>{ind.desc}</p>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
            {lang === 'EN' ? '// RECOMMENDED SOLUTIONS' : '// SOLUSI YANG DIREKOMENDASIKAN'}
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
            {ind.products.map((p, j) => (
              <div key={j} style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '10px 16px', fontFamily: "'IBM Plex Sans', sans-serif", fontSize: 13, color: t.text }}>{p}</div>
            ))}
          </div>
          <Btn tok={tok} size="lg" onClick={goToAudit}>{c.heroCTA1} →</Btn>
        </div>
      </div>
      <Footer tok={tok} lang={lang} setPage={setPage} />
    </div>
  );
}
