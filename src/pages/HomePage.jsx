import { defaultTokens } from '../tokens';
import { copy } from '../copy';
import { Btn, SectionLabel, StatBar, PlaceholderImg, ProductCard, ServiceCard } from '../components/Shared';
import Footer from '../components/Footer';
import AuditForm from './AuditForm';

export default function HomePage({ tok, lang, setPage, goToAudit }) {
  const t = tok || defaultTokens;
  const c = copy[lang];

  const products = [
    { brand: 'Prima Chain', name: 'Industrial Roller Chain', desc: 'Heavy-duty roller chains for high-load applications. Available in ANSI & DIN standards.', imgLabel: 'Prima Chain — product shot', bundle: 'Martin Sprocket RS Series' },
    { brand: 'Martin Sprocket', name: 'Sprockets & Sheaves', desc: 'Precision-machined sprockets and belt sheaves to complement Prima Chain drivetrain systems.', imgLabel: 'Martin Sprocket — product shot', bundle: 'Prima Chain #60' },
    { brand: 'MTO Pulleys', name: 'Drive & Tail Pulleys', desc: lang === 'EN' ? 'Custom-engineered conveyor pulleys — rubber lagging, ceramic, wing types. Designed from your shaft specs.' : 'Pulley conveyor rekayasa kustom — lagging karet, keramik, tipe wing. Dirancang dari spesifikasi poros Anda.', imgLabel: 'MTO Drive Pulley — workshop', bundle: null },
    { brand: 'MTO Pulleys', name: 'Snub & Bend Pulleys', desc: lang === 'EN' ? 'Engineer-to-order snub and bend pulleys for conveyor take-up systems. Fully balanced.' : 'Snub dan bend pulley engineer-to-order untuk sistem take-up conveyor. Fully balanced.', imgLabel: 'MTO Snub Pulley — workshop', bundle: null },
  ];

  const industries = [
    { icon: '⛏', name: lang === 'EN' ? 'Mining' : 'Pertambangan', desc: lang === 'EN' ? 'Conveyor drives, crusher gearboxes, and vibration monitoring for mining operations.' : 'Drive conveyor, gearbox crusher, dan monitoring vibrasi untuk operasi tambang.' },
    { icon: '🏭', name: lang === 'EN' ? 'Cement' : 'Semen', desc: lang === 'EN' ? 'Kiln drives, mill chain systems, and MTO pulleys for cement plant reliability.' : 'Drive kiln, sistem rantai mill, dan pulley MTO untuk keandalan pabrik semen.' },
    { icon: '🌿', name: lang === 'EN' ? 'Palm Oil' : 'Kelapa Sawit', desc: lang === 'EN' ? 'Complete drivetrain solutions for sterilizer, press station, and kernel processing.' : 'Solusi drivetrain lengkap untuk sterilizer, press station, dan pengolahan kernel.' },
    { icon: '🍬', name: lang === 'EN' ? 'Sugar Mill' : 'Pabrik Gula', desc: lang === 'EN' ? 'Heavy roller chains, drive sprockets, and gearbox couplings for sugar processing.' : 'Rantai roller berat, sproket drive, dan kopling gearbox untuk pengolahan gula.' },
  ];

  const caseStudies = [
    { tag: lang === 'EN' ? 'Cement Industry' : 'Industri Semen', metric: '45%', metricLabel: lang === 'EN' ? 'Downtime Reduction' : 'Penurunan Downtime', title: lang === 'EN' ? 'MTO Pulley Eliminates Recurring Failure at Cement Plant X' : 'Pulley MTO Eliminasi Kegagalan Berulang di Pabrik Semen X', body: lang === 'EN' ? 'SKF Microlog vibration analysis revealed misalignment in the kiln drive system. A custom MTO pulley reduced vibration levels by 62%, achieving a 45% reduction in unplanned downtime.' : 'Analisis vibrasi SKF Microlog mengungkap ketidakselarasan dalam sistem drive kiln. Pulley MTO kustom mengurangi tingkat vibrasi sebesar 62%, mencapai penurunan downtime 45%.' },
    { tag: lang === 'EN' ? 'Palm Oil' : 'Kelapa Sawit', metric: '3×', metricLabel: lang === 'EN' ? 'Chain Life Extension' : 'Perpanjangan Umur Rantai', title: lang === 'EN' ? 'Prima Chain Triples Service Life at CPO Plant' : 'Rantai Prima Tiga Kali Lipat Umur Layanan di Pabrik CPO', body: lang === 'EN' ? 'Switching from commodity chain to Prima Chain extended service intervals from 3 months to 9 months, reducing annual chain replacement cost by 61%.' : 'Beralih ke Rantai Prima memperpanjang interval servis dari 3 bulan menjadi 9 bulan, mengurangi biaya penggantian rantai tahunan sebesar 61%.' },
  ];

  return (
    <div>
      {/* Hero — Variant B: crimson top band */}
      <section style={{ minHeight: '100vh', paddingTop: 68, display: 'flex', flexDirection: 'column', background: t.bg, position: 'relative', overflow: 'hidden' }}>
        <div style={{ background: t.crimson, flex: '0 0 auto', padding: '64px 0 56px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.08) 0, rgba(0,0,0,0.08) 1px, transparent 1px, transparent 50%)', backgroundSize: '20px 20px' }} />
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 20 }}>{c.heroTagB}</div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(48px,6vw,84px)', color: '#fff', lineHeight: 1.05, whiteSpace: 'pre-line', maxWidth: 700 }}>{c.heroH1B}</h1>
          </div>
        </div>

        <div style={{ flex: 1, padding: '52px 0' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 18, color: t.text, lineHeight: 1.75, marginBottom: 40 }}>{c.heroSubB}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Btn tok={tok} size="lg" onClick={goToAudit}>{c.heroCTA1} →</Btn>
                <Btn tok={tok} variant="outline" size="lg">{c.heroCTA2}</Btn>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { val: '24', lab: lang === 'EN' ? 'Years' : 'Tahun' },
                { val: '500+', lab: lang === 'EN' ? 'Clients' : 'Klien' },
                { val: 'MTO', lab: lang === 'EN' ? 'Custom Engineering' : 'Rekayasa Kustom' },
                { val: lang === 'EN' ? 'FREE' : 'GRATIS', lab: lang === 'EN' ? 'On-Site Audit' : 'Audit On-Site' },
              ].map((s, i) => (
                <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '28px 24px', borderTop: i < 2 ? `3px solid ${t.crimson}` : `1px solid ${t.border}` }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 32, color: t.text, lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{s.lab}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatBar tok={tok} lang={lang} copy={copy} />

      {/* Services section */}
      <section style={{ background: t.bgSection, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Engineering Services' : 'Layanan Engineering'}</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 16 }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: t.headingWeight, fontSize: 40, color: t.text, lineHeight: 1.15 }}>{c.servicesTitle}</h2>
            <p style={{ fontSize: 16, color: t.textMuted, lineHeight: 1.75, paddingTop: 8 }}>{c.servicesSub}</p>
          </div>
          <div style={{ height: 1, background: t.border, marginBottom: 48 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Featured: Vibration Analysis — full width */}
            <div onClick={() => setPage('services')} style={{ background: t.bgCard, border: `1px solid ${t.borderCrimson}`, display: 'grid', gridTemplateColumns: '1fr 1fr', cursor: 'pointer', transition: 'all 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = t.bgCardHover}
              onMouseLeave={e => e.currentTarget.style.background = t.bgCard}>
              <div style={{ padding: '44px 48px', borderRight: `1px solid ${t.border}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, background: t.crimson, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>📡</div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                    {lang === 'EN' ? 'FEATURED SERVICE · SKF MICROLOG CERTIFIED' : 'LAYANAN UNGGULAN · BERSERTIFIKAT SKF MICROLOG'}
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: t.text, lineHeight: 1.2, marginBottom: 16 }}>
                  {lang === 'EN' ? 'Vibration Analysis & Diagnostics' : 'Analisis Vibrasi & Diagnostik'}
                </h3>
                <p style={{ fontSize: 14, color: t.text, lineHeight: 1.75, marginBottom: 24 }}>
                  {lang === 'EN'
                    ? 'On-site SKF Microlog GX/AX diagnostic by certified engineers. Identifies bearing faults, imbalance, and misalignment before failure — with a full spectrum report and corrective action plan including MTO pulley intervention.'
                    : 'Diagnostik SKF Microlog GX/AX on-site oleh engineer bersertifikat. Mengidentifikasi cacat bantalan, ketidakseimbangan, dan ketidakselarasan sebelum kegagalan — dengan laporan spektrum lengkap dan rencana tindakan korektif termasuk intervensi pulley MTO.'}
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                  {['SKF Microlog GX', 'ISO 10816', 'Spectrum Analysis', lang === 'EN' ? 'PDF Report' : 'Laporan PDF'].map((tag, i) => (
                    <span key={i} style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted, background: 'rgba(255,255,255,0.04)', border: `1px solid ${t.border}`, padding: '4px 10px', letterSpacing: '0.05em' }}>{tag}</span>
                  ))}
                </div>
                <Btn tok={tok} size="md" onClick={(e) => { e.stopPropagation(); goToAudit(); }}>{c.heroCTA1} →</Btn>
              </div>
              <div style={{ padding: '44px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                  {lang === 'EN' ? '// PROVEN RESULTS' : '// HASIL TERBUKTI'}
                </div>
                {[
                  { metric: '45%', label: lang === 'EN' ? 'avg downtime reduction after MTO pulley intervention' : 'penurunan downtime rata-rata setelah intervensi pulley MTO' },
                  { metric: '2–6wk', label: lang === 'EN' ? 'advance failure prediction window' : 'jendela prediksi kegagalan di muka' },
                  { metric: 'FREE', label: lang === 'EN' ? 'initial on-site audit — no obligation' : 'audit on-site awal — tanpa kewajiban' },
                ].map((m, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '16px 20px', background: 'rgba(255,255,255,0.02)', border: `1px solid ${t.border}` }}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 24, color: t.crimson, flexShrink: 0, minWidth: 56 }}>{m.metric}</div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: t.textMuted, lineHeight: 1.5 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Secondary services */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <ServiceCard tok={tok} icon="⚖️" title={lang === 'EN' ? 'Dynamic Balancing' : 'Balancing Dinamis'} desc={lang === 'EN' ? 'In-situ balancing of fans, impellers, and rollers. Achieves ISO 1940 Grade G1.0 without disassembly.' : 'Balancing in-situ pada fan, impeller, dan roller. Mencapai ISO 1940 Grade G1.0 tanpa pembongkaran.'} detail="ISO 1940 / Grade G1.0" onNavigate={setPage} />
              <ServiceCard tok={tok} icon="🎯" title={lang === 'EN' ? 'Laser Shaft Alignment' : 'Laser Shaft Alignment'} desc={lang === 'EN' ? 'Precision laser alignment eliminates misalignment and extends bearing and seal life by up to 3x.' : 'Laser alignment presisi menghilangkan ketidakselarasan dan memperpanjang umur bantalan hingga 3x.'} detail="Prüftechnik ROTALIGN" onNavigate={setPage} />
            </div>
          </div>
          {/* Lead magnet banner */}
          <div style={{ marginTop: 32, background: `linear-gradient(135deg, ${t.crimson}22, ${t.navy}44)`, border: `1px solid ${t.borderCrimson}`, padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>{lang === 'EN' ? '// FREE OFFER' : '// PENAWARAN GRATIS'}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 22, color: t.text, marginBottom: 6 }}>{lang === 'EN' ? 'Book a Free On-Site Vibration Audit' : 'Pesan Audit Vibrasi Gratis On-Site'}</div>
              <div style={{ fontSize: 14, color: t.textMuted }}>{lang === 'EN' ? 'Our certified engineers visit your facility — no cost, no obligation.' : 'Engineer bersertifikat kami mengunjungi fasilitas Anda — tanpa biaya, tanpa kewajiban.'}</div>
            </div>
            <Btn tok={tok} size="lg" onClick={goToAudit} style={{ flexShrink: 0 }}>{c.heroCTA1} →</Btn>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section style={{ background: t.bg, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Products' : 'Produk'}</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: t.headingWeight, fontSize: 40, color: t.text, lineHeight: 1.15, maxWidth: 400 }}>{c.productsTitle}</h2>
            <Btn tok={tok} variant="outline" onClick={() => setPage('products')}>{c.viewAll} →</Btn>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {products.map((p, i) => <ProductCard key={i} tok={tok} lang={lang} product={p} onNavigate={setPage} copy={copy} />)}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ background: t.bgSection, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Industries' : 'Industri'}</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: t.headingWeight, fontSize: 40, color: t.text, lineHeight: 1.15 }}>{c.industriesTitle}</h2>
            <p style={{ fontSize: 16, color: t.textMuted, lineHeight: 1.75 }}>{c.industriesSub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {industries.map((ind, i) => (
              <div key={i} onClick={() => setPage('industries')} style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '36px 28px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.borderCrimson; e.currentTarget.style.background = t.bgCardHover; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.background = t.bgCard; }}>
                <div style={{ fontSize: 28, marginBottom: 16 }}>{ind.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 18, color: t.text, marginBottom: 10 }}>{ind.name}</div>
                <div style={{ fontSize: 13, color: t.text, lineHeight: 1.65 }}>{ind.desc}</div>
                <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 6, color: t.crimson, fontSize: 13, fontWeight: 500 }}>
                  <span>{c.learnMore}</span><span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ background: t.bg, padding: '96px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Case Studies' : 'Studi Kasus'}</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: t.headingWeight, fontSize: 40, color: t.text, lineHeight: 1.15, marginBottom: 48 }}>{c.trustTitle}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            {caseStudies.map((cs, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '40px' }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 20 }}>{cs.tag}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 20 }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 56, color: t.crimson, lineHeight: 1 }}>{cs.metric}</span>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: t.textMuted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{cs.metricLabel}</span>
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 18, color: t.text, marginBottom: 14, lineHeight: 1.4 }}>{cs.title}</div>
                <div style={{ fontSize: 14, color: t.text, lineHeight: 1.7 }}>{cs.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AuditForm tok={tok} lang={lang} />
      <Footer tok={tok} lang={lang} setPage={setPage} />
    </div>
  );
}
