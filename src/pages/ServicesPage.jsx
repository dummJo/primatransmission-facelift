import { defaultTokens } from '../tokens';
import { copy } from '../copy';
import { SectionLabel, PlaceholderImg, Btn } from '../components/Shared';
import Footer from '../components/Footer';
import AuditForm from './AuditForm';

export default function ServicesPage({ tok, lang, setPage }) {
  const t = tok || defaultTokens;
  const c = copy[lang];

  const services = [
    {
      icon: '📡', title: lang === 'EN' ? 'Vibration Analysis' : 'Analisis Vibrasi',
      tool: 'SKF Microlog GX / AX Series',
      desc: lang === 'EN' ? 'Condition-based monitoring using SKF Microlog — detecting bearing defects, shaft imbalance, misalignment, resonance, and looseness. Report includes spectrum analysis, trend data, and recommended corrective action.' : 'Monitoring berbasis kondisi menggunakan SKF Microlog — mendeteksi cacat bantalan, ketidakseimbangan poros, ketidakselarasan, resonansi, dan kelonggaran. Laporan mencakup analisis spektrum, data tren, dan tindakan korektif yang direkomendasikan.',
      outcomes: lang === 'EN' ? ['Identify root cause of vibration', 'Predict failure 2–6 weeks in advance', 'Justify MTO pulley / alignment intervention', 'Reduce unplanned downtime'] : ['Identifikasi akar penyebab vibrasi', 'Prediksi kegagalan 2–6 minggu sebelumnya', 'Justifikasi intervensi pulley MTO / alignment', 'Kurangi downtime tak terencana'],
    },
    {
      icon: '⚖️', title: lang === 'EN' ? 'Dynamic Balancing' : 'Balancing Dinamis',
      tool: 'IRD / SCHENCK Portable Balancer',
      desc: lang === 'EN' ? 'In-situ single and two-plane dynamic balancing of rotating machinery — fans, impellers, cooling towers, and rollers. Achieves ISO 1940 Grade G1.0 or better without machinery disassembly.' : 'Balancing dinamis satu bidang dan dua bidang in-situ pada mesin berputar — fan, impeller, cooling tower, dan roller. Mencapai ISO 1940 Grade G1.0 atau lebih baik tanpa membongkar mesin.',
      outcomes: lang === 'EN' ? ['No-disassembly procedure', 'Achieve ISO 1940 G1.0', 'Reduce bearing load & vibration', 'Extend maintenance intervals'] : ['Prosedur tanpa pembongkaran', 'Capai ISO 1940 G1.0', 'Kurangi beban bantalan & vibrasi', 'Perpanjang interval perawatan'],
    },
    {
      icon: '🎯', title: lang === 'EN' ? 'Laser Shaft Alignment' : 'Laser Shaft Alignment',
      tool: 'Prüftechnik ROTALIGN Ultra iS',
      desc: lang === 'EN' ? 'Precision laser alignment of motor-pump, motor-gearbox, and other coupled machinery. Eliminates angular and parallel misalignment to extend bearing and seal life by up to 3×. Supports soft-foot correction and thermal growth compensation.' : 'Laser alignment presisi pada motor-pompa, motor-gearbox, dan mesin berkopling lainnya. Menghilangkan ketidakselarasan sudut dan paralel untuk memperpanjang umur bantalan dan segel hingga 3×. Mendukung koreksi soft-foot dan kompensasi pertumbuhan termal.',
      outcomes: lang === 'EN' ? ['Angular & parallel correction', 'Soft-foot detection & correction', 'Thermal growth compensation', 'Full PDF alignment report'] : ['Koreksi sudut & paralel', 'Deteksi & koreksi soft-foot', 'Kompensasi pertumbuhan termal', 'Laporan alignment PDF lengkap'],
    },
  ];

  return (
    <div style={{ background: t.bg, minHeight: '100vh', paddingTop: 68 }}>
      <div style={{ background: t.bgSection, borderBottom: `1px solid ${t.border}`, padding: '48px 0 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Engineering Services' : 'Layanan Engineering'}</SectionLabel>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 48, color: t.text, marginBottom: 12 }}>{c.servicesTitle}</h1>
          <p style={{ fontSize: 16, color: t.text, maxWidth: 600 }}>{c.servicesSub}</p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {services.map((svc, i) => (
            <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              <div style={{ padding: '48px', borderRight: `1px solid ${t.border}` }}>
                <div style={{ width: 52, height: 52, background: 'rgba(200,25,47,0.12)', border: `1px solid ${t.borderCrimson}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 24 }}>{svc.icon}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{svc.tool}</div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: t.text, marginBottom: 16, lineHeight: 1.2 }}>{svc.title}</h3>
                <p style={{ fontSize: 14, color: t.text, lineHeight: 1.75 }}>{svc.desc}</p>
              </div>
              <div style={{ padding: '48px' }}>
                <PlaceholderImg label={`${svc.title} — field photo`} height={200} style={{ marginBottom: 28 }} />
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>
                  {lang === 'EN' ? '// DELIVERABLES' : '// HASIL'}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {svc.outcomes.map((o, j) => (
                    <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <div style={{ width: 6, height: 6, background: t.crimson, flexShrink: 0, marginTop: 5 }} />
                      <span style={{ fontSize: 14, color: t.text }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AuditForm tok={tok} lang={lang} />
      <Footer tok={tok} lang={lang} setPage={setPage} />
    </div>
  );
}
