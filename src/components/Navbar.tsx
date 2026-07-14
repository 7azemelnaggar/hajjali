import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  language: 'en' | 'ar';
  setLanguage: (value: 'en' | 'ar') => void;
}

export default function Navbar({ language, setLanguage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks =
    language === 'en'
      ? [
          { label: 'Home', secondary: 'الرئيسية', href: '#hero' },
          { label: 'About', secondary: 'اعرف عنا', href: '#about' },
          { label: 'Products', secondary: 'المنتجات', href: '#products' },
          { label: 'Services', secondary: 'الخدمات', href: '#why-us' },
          { label: 'Contact', secondary: 'اتصل بنا', href: '#contact' },
        ]
      : [
          { label: 'الرئيسية', secondary: 'Home', href: '#hero' },
          { label: 'اعرف عنا', secondary: 'About', href: '#about' },
          { label: 'المنتجات', secondary: 'Products', href: '#products' },
          { label: 'الخدمات', secondary: 'Services', href: '#why-us' },
          { label: 'اتصل بنا', secondary: 'Contact', href: '#contact' },
        ];

  const quickCallLabel = language === 'en' ? 'Quick Call' : 'مكالمة سريعة';
  const toggleLabel = language === 'en' ? 'العربية' : 'English';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home page, then scroll to section
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-cream-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <button onClick={() => handleNav('#hero')} className="flex items-center gap-3 group">
              <img
                src="https://i.postimg.cc/9fXhfnQq/logo.png"
                alt="Haj Ali"
                className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
              <div>
                <div className="font-display text-lg font-bold tracking-widest uppercase leading-none">
                  <span style={{ color: '#f8931f' }}>Haj</span>
                  {' '}
                  <span style={{ color: '#21409a' }}>Ali</span>
                </div>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    scrolled
                      ? activeLink === link.href
                        ? 'text-brand-600'
                        : 'text-gray-600 hover:text-brand-600'
                      : activeLink === link.href
                      ? 'text-brand-300'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span className={language === 'ar' ? 'font-arabic' : ''}>{link.label}</span>
                  {activeLink === link.href && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-500"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? 'border-gray-200 bg-white text-gray-700 hover:border-brand-500 hover:text-brand-600'
                    : 'border-white/40 bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Globe size={15} />
                <span>{toggleLabel}</span>
              </button>
              <a
                href="tel:+213XXXXXXXXX"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone size={15} />
                <span>{quickCallLabel}</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className={`rounded-full border px-2.5 py-2 text-xs font-medium transition-colors ${
                  scrolled
                    ? 'border-gray-200 bg-white text-gray-700'
                    : 'border-white/40 bg-white/10 text-white'
                }`}
              >
                {toggleLabel}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/98 backdrop-blur-lg shadow-2xl border-b border-cream-200 md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => handleNav(link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-left transition-colors ${
                    activeLink === link.href
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-gray-700 hover:bg-cream-100'
                  }`}
                >
                  <span className={`font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>{link.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
