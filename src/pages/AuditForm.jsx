import { useState } from 'react';
import { defaultTokens } from '../tokens';
import { copy } from '../copy';
import { SectionLabel, Btn } from '../components/Shared';

export default function AuditForm({ tok, lang }) {
  const t = tok || defaultTokens;
  const c = copy[lang];
  const [form, setForm] = useState({ name: '', company: '', machine: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const setF = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const inputStyle = {
    width: '100%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
    color: '#ddd8ce', padding: '12px 16px', fontSize: 14, fontFamily: "'IBM Plex Sans', sans-serif",
    outline: 'none',
  };
  const labelStyle = {
    fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: t.textMuted,
    textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6, display: 'block'
  };

  return (
    <section id="audit" style={{ background: `linear-gradient(to bottom, ${t.bgSection}, ${t.bg})`, padding: '96px 0' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <SectionLabel tok={tok}>{lang === 'EN' ? 'Free Service' : 'Layanan Gratis'}</SectionLabel>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 40, color: t.text, lineHeight: 1.15, marginBottom: 16 }}>{c.auditTitle}</h2>
          <p style={{ fontSize: 16, color: t.text, lineHeight: 1.75, maxWidth: 580, margin: '0 auto' }}>{c.auditSub}</p>
        </div>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '60px', background: t.bgCard, border: `1px solid ${t.borderCrimson}` }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>✅</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 22, color: t.text, marginBottom: 8 }}>
              {lang === 'EN' ? 'Request received!' : 'Permintaan diterima!'}
            </div>
            <div style={{ color: t.textMuted, fontSize: 14 }}>
              {lang === 'EN' ? 'Our team will contact you within 1 business day to schedule the audit.' : 'Tim kami akan menghubungi Anda dalam 1 hari kerja untuk menjadwalkan audit.'}
            </div>
          </div>
        ) : (
          <div style={{ background: t.bgCard, border: `1px solid ${t.border}`, padding: '48px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
              <div><label style={labelStyle}>{lang === 'EN' ? 'Your Name' : 'Nama Anda'}</label><input style={inputStyle} value={form.name} onChange={setF('name')} placeholder="Budi Santoso" /></div>
              <div><label style={labelStyle}>{lang === 'EN' ? 'Company' : 'Perusahaan'}</label><input style={inputStyle} value={form.company} onChange={setF('company')} placeholder="PT Contoh Industri" /></div>
              <div><label style={labelStyle}>Email</label><input style={inputStyle} type="email" value={form.email} onChange={setF('email')} placeholder="budi@perusahaan.co.id" /></div>
              <div><label style={labelStyle}>{lang === 'EN' ? 'Phone / WhatsApp' : 'Telepon / WhatsApp'}</label><input style={inputStyle} value={form.phone} onChange={setF('phone')} placeholder="+62 8xx-xxxx-xxxx" /></div>
            </div>
            <div style={{ marginBottom: 32 }}>
              <label style={labelStyle}>{lang === 'EN' ? 'Describe the problematic machine / equipment' : 'Deskripsikan mesin / peralatan yang bermasalah'}</label>
              <textarea style={{ ...inputStyle, height: 100, resize: 'vertical' }} value={form.machine} onChange={setF('machine')}
                placeholder={lang === 'EN' ? 'e.g. Kiln drive motor, 132kW, symptoms: unusual vibration and bearing overheating...' : 'cth. Motor drive kiln, 132kW, gejala: vibrasi tidak biasa dan bantalan overheat...'} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: t.textMuted }}>
                🔒 {lang === 'EN' ? 'Data confidential — NDA available' : 'Data rahasia — NDA tersedia'}
              </div>
              <Btn tok={tok} size="lg" onClick={() => setSubmitted(true)}>{c.heroCTA1} →</Btn>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
