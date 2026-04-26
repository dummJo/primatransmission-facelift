import { useState, useEffect } from 'react';
import { defaultTokens } from './tokens';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import IndustriesPage from './pages/IndustriesPage';
import B2BPortalPage from './pages/B2BPortalPage';

export default function App() {
  const [page, setPage] = useState(() => localStorage.getItem('prima_page') || 'home');
  const [lang, setLang] = useState('EN');
  const tok = defaultTokens;

  useEffect(() => {
    localStorage.setItem('prima_page', page);
    window.scrollTo({ top: 0 });
  }, [page]);

  const goToAudit = () => {
    if (page === 'services') {
      document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setPage('services');
      setTimeout(() => {
        document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'about':      return <AboutPage tok={tok} lang={lang} setPage={setPage} goToAudit={goToAudit} />;
      case 'products':   return <ProductsPage tok={tok} lang={lang} setPage={setPage} goToAudit={goToAudit} />;
      case 'services':   return <ServicesPage tok={tok} lang={lang} setPage={setPage} goToAudit={goToAudit} />;
      case 'industries': return <IndustriesPage tok={tok} lang={lang} setPage={setPage} goToAudit={goToAudit} />;
      case 'portal':     return <B2BPortalPage tok={tok} lang={lang} setPage={setPage} goToAudit={goToAudit} />;
      default:           return <HomePage tok={tok} lang={lang} setPage={setPage} goToAudit={goToAudit} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: tok.bg }}>
      <Nav tok={tok} lang={lang} setLang={setLang} page={page} setPage={setPage} goToAudit={goToAudit} />
      <main>{renderPage()}</main>
    </div>
  );
}
