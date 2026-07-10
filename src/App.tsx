import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProducts from './components/FeaturedProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

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

  return (
    <div className="min-h-screen" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Products language={language} />
        <WhyChooseUs language={language} />
        <FeaturedProducts language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}
