import { defaultTokens } from '../tokens';
import { copy } from '../copy';
import { SectionLabel, PlaceholderImg, Btn } from '../components/Shared';
import Footer from '../components/Footer';

export default function AboutPage({ tok, lang, setPage, goToAudit }) {
  const t = tok || defaultTokens;
  const c = copy[lang];

  const milestones = [
    { year: '2002', title: lang === 'EN' ? 'Founded in Jakarta' : 'Didirikan di Jakarta', body: lang === 'EN' ? 'PT Prima Anjaya Santoso established in Jakarta with a mission to become a leading distributor of quality power transmission products at competitive prices.' : 'PT Prima Anjaya Santoso didirikan di Jakarta dengan misi menjadi distributor terkemuka produk power transmission berkualitas dengan harga kompetitif.' },
    { year: '2008', title: lang === 'EN' ? 'Martin Sprocket Partnership' : 'Kemitraan Martin Sprocket', body: lang === 'EN' ? "Secured authorized distributorship for Martin Sprocket & Gear — one of the world's leading manufacturers of sprockets, sheaves, and couplings — expanding our product line and technical capability." : 'Mendapatkan distributorship resmi Martin Sprocket & Gear — salah satu produsen sproket, sheave, dan kopling terkemuka dunia — memperluas lini produk dan kemampuan teknis kami.' },
    { year: '2012', title: lang === 'EN' ? 'Mayr Partnership & Engineering Services' : 'Kemitraan Mayr & Layanan Engineering', body: lang === 'EN' ? 'Added Mayr (Germany) precision couplings and brakes to our portfolio. Launched in-house engineering services including vibration analysis and laser alignment for industrial clients.' : 'Menambahkan kopling dan rem presisi Mayr (Jerman) ke portofolio kami. Meluncurkan layanan engineering in-house termasuk analisis vibrasi dan laser alignment untuk klien industri.' },
    { year: '2019', title: lang === 'EN' ? 'SKF Microlog Certification' : 'Sertifikasi SKF Microlog', body: lang === 'EN' ? 'Our engineering team achieved SKF Microlog certification — enabling world-class vibration diagnostics on-site. This unlocked a new service-led sales model: diagnose first, engineer the solution, supply the parts.' : 'Tim engineering kami mendapatkan sertifikasi SKF Microlog — memungkinkan diagnostik vibrasi kelas dunia secara on-site. Ini membuka model penjualan berbasis layanan baru: diagnosa lebih dulu, rancang solusi, pasok suku cadang.' },
    { year: '2024', title: lang === 'EN' ? 'Chain Manufacturing — PT Rantai Indo' : 'Manufaktur Rantai — PT Rantai Indo', body: lang === 'EN' ? 'A defining milestone: acquisition of PT Rantai Indo — giving Prima its own chain brand, manufacturing control, and direct access to Eastern Indonesia markets. Prima Chain is now produced in-house, delivering superior hardened-pin quality at controlled cost.' : 'Tonggak penting: akuisisi PT Rantai Indo — memberikan Prima merek rantai sendiri, kendali manufaktur, dan akses langsung ke pasar Indonesia Timur. Rantai Prima kini diproduksi secara in-house.' },
    { year: '2026', title: lang === 'EN' ? 'One-Stop Drivetrain Solution' : 'Solusi Drivetrain Satu Atap', body: lang === 'EN' ? "Today, PT Prima Anjaya Santoso is Indonesia's most complete drivetrain reliability partner: own-brand chain manufacturing, precision MTO pulley engineering, certified vibration diagnostics, and a curated portfolio of world-class brands — all under one roof." : 'Hari ini, PT Prima Anjaya Santoso adalah mitra keandalan drivetrain paling lengkap di Indonesia: manufaktur rantai merek sendiri, rekayasa pulley MTO presisi, diagnostik vibrasi bersertifikat, dan portofolio merek kelas dunia — semua dalam satu atap.' },
  ];

  const values = [
    { icon: '🔧', title: lang === 'EN' ? 'Solutions First' : 'Solusi Utama', desc: lang === 'EN' ? "We diagnose before we sell. Our engineers identify the real problem, then engineer the right solution — not just the nearest available product." : 'Kami mendiagnosa sebelum menjual. Engineer kami mengidentifikasi masalah sebenarnya, lalu merancang solusi yang tepat — bukan sekadar produk yang tersedia.' },
    { icon: '🏭', title: lang === 'EN' ? 'Own Manufacturing' : 'Manufaktur Sendiri', desc: lang === 'EN' ? 'Prima Chain is produced in our own facility — giving us quality control, supply certainty, and the ability to engineer chain solutions unavailable from standard distributors.' : 'Rantai Prima diproduksi di fasilitas kami sendiri — memberikan kami kontrol kualitas, kepastian pasokan, dan kemampuan merancang solusi rantai yang tidak tersedia dari distributor standar.' },
    { icon: '📡', title: lang === 'EN' ? 'Data-Driven Service' : 'Layanan Berbasis Data', desc: lang === 'EN' ? 'SKF Microlog diagnostics give our clients real vibration data — not guesswork. Every service recommendation is backed by measurable evidence and a written report.' : 'Diagnostik SKF Microlog memberikan klien kami data vibrasi nyata — bukan tebakan. Setiap rekomendasi layanan didukung bukti terukur dan laporan tertulis.' },
    { icon: '🤝', title: lang === 'EN' ? 'Long-Term Partnership' : 'Kemitraan Jangka Panjang', desc: lang === 'EN' ? 'Our B2B clients receive dedicated account management, preferential stock allocation, and a direct line to our engineering team — not just a sales catalog.' : 'Klien B2B kami mendapatkan manajemen akun yang berdedikasi, alokasi stok preferensial, dan jalur langsung ke tim engineering kami — bukan sekadar katalog penjualan.' },
  ];

  const brands = [
    { name: 'Prima Chain', origin: lang === 'EN' ? 'Own Brand — Jakarta' : 'Merek Sendiri — Jakarta', desc: lang === 'EN' ? 'Hardened-pin industrial roller chain manufactured in-house. ANSI & DIN standards.' : 'Rantai roller industri pin-hardened diproduksi sendiri. Standar ANSI & DIN.' },
    { name: 'Martin Sprocket', origin: 'USA · Est. 1951', desc: lang === 'EN' ? "World's leading sprocket, sheave, and coupling manufacturer." : 'Produsen sproket, sheave, dan kopling terkemuka dunia.' },
    { name: 'Mayr', origin: 'Germany · Est. 1897', desc: lang === 'EN' ? 'Precision safety couplings, brakes, and torque limiters.' : 'Kopling keselamatan presisi, rem, dan pembatas torsi.' },
    { name: 'MTO Engineering', origin: lang === 'EN' ? 'In-House · Custom' : 'In-House · Kustom', desc: lang === 'EN' ? 'Make-to-Order pulleys, custom conveyor components, and engineered drivetrain solutions.' : 'Pulley Make-to-Order, komponen conveyor kustom, dan solusi drivetrain rekayasa.' },
  ];

  return (
    <div style={{ background: t.bg, minHeight: '100vh', paddingTop: 68 }}>
      {/* Hero */}
      <div style={{ background: t.navy, padding: '72px 0 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 4, background: t.crimson }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 20 }}>
            {lang === 'EN' ? 'EST. 2002 · JAKARTA · INDONESIA' : 'BERDIRI 2002 · JAKARTA · INDONESIA'}
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5vw,64px)', color: '#e8e2d9', lineHeight: 1.08, marginBottom: 24, maxWidth: 700, whiteSpace: 'pre-line' }}>
            {lang === 'EN' ? 'From Distributor\nto Drivetrain\nManufacturer.' : 'Dari Distributor\nMenjadi Produsen\nDrivetrain.'}
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(232,226,217,0.7)', lineHeight: 1.75, maxWidth: 600 }}>
            {lang === 'EN'
              ? "Since 2002, PT Prima Anjaya Santoso has evolved from a power transmission distributor into Indonesia's most complete one-stop drivetrain solution — combining own-brand chain manufacturing, precision MTO engineering, and certified diagnostics."
              : 'Sejak 2002, PT Prima Anjaya Santoso telah berkembang dari distributor power transmission menjadi solusi drivetrain satu atap paling lengkap di Indonesia — menggabungkan manufaktur rantai merek sendiri, rekayasa MTO presisi, dan diagnostik bersertifikat.'}
          </p>
        </div>
      </div>

      {/* Mission strip */}
      <div style={{ background: t.crimson, padding: '28px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', gap: 40, justifyContent: 'space-between' }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, color: '#fff' }}>
            {lang === 'EN' ? '"One-Stop Drivetrain Solution — Diagnose, Engineer, Supply."' : '"Solusi Drivetrain Satu Atap — Diagnosa, Rancang, Pasok."'}
          </div>
          <div style={{ display: 'flex', gap: 40, flexShrink: 0 }}>
            {[['24+', lang === 'EN' ? 'Years' : 'Tahun'], ['500+', lang === 'EN' ? 'Clients' : 'Klien'], ['4', lang === 'EN' ? 'Brands' : 'Merek']].map(([val, lab], i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, color: '#fff' }}>{val}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{lab}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company narrative */}
      <section style={{ background: t.bgSection, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          <div>
            <SectionLabel tok={tok}>{lang === 'EN' ? 'Our Story' : 'Cerita Kami'}</SectionLabel>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: t.text, lineHeight: 1.2, marginBottom: 24 }}>
              {lang === 'EN' ? 'Built on trust, driven by engineering.' : 'Dibangun atas kepercayaan, digerakkan oleh rekayasa.'}
            </h2>
            <p style={{ fontSize: 15, color: t.text, lineHeight: 1.85, marginBottom: 20 }}>
              {lang === 'EN'
                ? 'PT Prima Anjaya Santoso was established in 2002 with a singular objective: to become a leading distributor of quality power transmission products at competitive prices. In our early years, we built a reputation on one thing — reliability. On-time delivery, accurate technical support, and a genuine commitment to solving industrial maintenance problems.'
                : 'PT Prima Anjaya Santoso didirikan pada tahun 2002 dengan satu tujuan tunggal: menjadi distributor terkemuka produk power transmission berkualitas dengan harga kompetitif. Pada tahun-tahun awal, kami membangun reputasi pada satu hal — keandalan. Pengiriman tepat waktu, dukungan teknis yang akurat, dan komitmen nyata untuk memecahkan masalah pemeliharaan industri.'}
            </p>
            <p style={{ fontSize: 15, color: t.text, lineHeight: 1.85, marginBottom: 20 }}>
              {lang === 'EN'
                ? 'Over two decades, we grew from a Jakarta-based trading company into a vertically integrated industrial partner. The pivotal moment came with the acquisition of PT Rantai Indo — transforming Prima from a reseller into a manufacturer. Prima Chain is now produced in-house: hardened-pin roller chains that outperform commodity alternatives in mining, cement, and palm oil applications.'
                : 'Selama dua dekade, kami berkembang dari perusahaan trading berbasis Jakarta menjadi mitra industri yang terintegrasi secara vertikal. Momen penting datang dengan akuisisi PT Rantai Indo — mengubah Prima dari reseller menjadi produsen. Rantai Prima kini diproduksi in-house: rantai roller pin-hardened yang mengungguli alternatif komoditas.'}
            </p>
            <p style={{ fontSize: 15, color: t.text, lineHeight: 1.85 }}>
              {lang === 'EN'
                ? 'Today, our SKF Microlog-certified engineers do not just sell parts — they diagnose your machinery, identify root causes, and engineer custom solutions. This service-led model is what separates PT Prima from every other distributor in Indonesia.'
                : 'Hari ini, engineer bersertifikat SKF Microlog kami tidak sekadar menjual suku cadang — mereka mendiagnosis mesin Anda, mengidentifikasi akar masalah, dan merancang solusi kustom. Model berbasis layanan inilah yang membedakan PT Prima dari setiap distributor lain di Indonesia.'}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <PlaceholderImg label={lang === 'EN' ? 'Company headquarters — Jakarta' : 'Kantor pusat — Jakarta'} height={220} />
            <PlaceholderImg label={lang === 'EN' ? 'Prima Chain production floor' : 'Lantai produksi Rantai Prima'} height={180} />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: t.bg, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Milestones' : 'Tonggak Pencapaian'}</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: t.text, lineHeight: 1.2, marginBottom: 56 }}>
            {lang === 'EN' ? '24 Years of Growth' : '24 Tahun Pertumbuhan'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {milestones.map((m, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: 0, background: t.bgCard, border: `1px solid ${t.border}`, borderLeft: `4px solid ${i === milestones.length - 1 ? t.crimson : t.border}` }}>
                <div style={{ padding: '28px 24px', borderRight: `1px solid ${t.border}`, display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 22, color: i === milestones.length - 1 ? t.crimson : t.textMuted }}>{m.year}</span>
                </div>
                <div style={{ padding: '28px 32px' }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 17, color: t.text, marginBottom: 8 }}>{m.title}</div>
                  <div style={{ fontSize: 14, color: t.text, lineHeight: 1.75 }}>{m.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand portfolio */}
      <section style={{ background: t.bgSection, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Our Portfolio' : 'Portofolio Kami'}</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: t.text, marginBottom: 48 }}>
            {lang === 'EN' ? 'One Roof, Four Pillars' : 'Satu Atap, Empat Pilar'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {brands.map((b, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '32px 28px', borderTop: i === 0 ? `3px solid ${t.crimson}` : `1px solid ${t.border}` }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 18, color: t.text, marginBottom: 6 }}>{b.name}</div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.crimson, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 16 }}>{b.origin}</div>
                <div style={{ fontSize: 13, color: t.text, lineHeight: 1.65 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: t.bg, padding: '80px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Our Approach' : 'Pendekatan Kami'}</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 36, color: t.text, marginBottom: 48 }}>
            {lang === 'EN' ? 'Why Prima is Different' : 'Mengapa Prima Berbeda'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {values.map((v, i) => (
              <div key={i} style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '32px 28px' }}>
                <div style={{ fontSize: 28, marginBottom: 20 }}>{v.icon}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 16, color: t.text, marginBottom: 12 }}>{v.title}</div>
                <div style={{ fontSize: 13, color: t.text, lineHeight: 1.7 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: t.navy, padding: '72px 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: '#e8e2d9', marginBottom: 16 }}>
            {lang === 'EN' ? 'Ready to talk drivetrain?' : 'Siap membahas drivetrain Anda?'}
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(232,226,217,0.65)', marginBottom: 40, lineHeight: 1.75 }}>
            {lang === 'EN' ? 'Book a free on-site vibration audit — our first step to engineering the right solution for your machinery.' : 'Pesan audit vibrasi on-site gratis — langkah pertama kami untuk merancang solusi yang tepat untuk mesin Anda.'}
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Btn tok={tok} size="lg" onClick={goToAudit}>{lang === 'EN' ? 'Book Free Vibration Audit →' : 'Pesan Audit Vibrasi Gratis →'}</Btn>
            <Btn tok={tok} variant="outline" size="lg" onClick={() => setPage('products')}>{lang === 'EN' ? 'View Products' : 'Lihat Produk'}</Btn>
          </div>
        </div>
      </section>

      <Footer tok={tok} lang={lang} setPage={setPage} />
    </div>
  );
}
