import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';

/* ── Home Page ─────────────────────────────────────────────── */
function HomePage({ language }: { language: 'en' | 'ar' }) {
  return (
    <>
      <Hero language={language} />
      <Products language={language} />
      <About language={language} />
      <WhyChooseUs language={language} />
      <Contact language={language} />
    </>
  );
}

/* ── App ───────────────────────────────────────────────────── */
export default function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const location = useLocation();

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('site-language');
    if (storedLanguage === 'en' || storedLanguage === 'ar') {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    window.localStorage.setItem('site-language', language);
  }, [language]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage language={language} />} />
          <Route path="/:categorySlug" element={<CategoryPage language={language} />} />
        </Routes>
      </main>
      <Footer language={language} />
    </div>
  );
}
