import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'الرئيسيه', labelAr: '', href: '#hero' },
  { label: 'اعرف عنا', labelAr: '', href: '#about' },
  { label: 'المنتاجات', labelAr: '', href: '#products' },
  { label: 'الخدامات', labelAr: '', href: '#why-us' },
  { label: 'اتصل بنا', labelAr: '', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
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
                  <span>{link.label}</span>
                  <span className={`block text-[10px] font-arabic transition-colors ${
                    scrolled ? 'text-gray-400 group-hover:text-brand-400' : 'text-white/60 group-hover:text-white/80'
                  }`}>
                    {link.labelAr}
                  </span>
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
              <a
                href="tel:+213XXXXXXXXX"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  scrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white/80 hover:text-white'
                }`}
              >
                <Phone size={15} />
                <span>Quick Call</span>
              </a>
              <button
                onClick={() => handleNav('#contact')}
                className="btn-primary text-sm py-2.5 px-6"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
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
                  <span className="font-medium">{link.label}</span>
                  <span className="font-arabic text-sm text-gray-400">{link.labelAr}</span>
                </motion.button>
              ))}
              <div className="pt-3 border-t border-cream-200 mt-2">
                <button
                  onClick={() => handleNav('#contact')}
                  className="btn-primary w-full justify-center"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
