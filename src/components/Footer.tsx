import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', labelAr: 'الرئيسية', href: '#hero' },
  { label: 'About Us', labelAr: 'من نحن', href: '#about' },
  { label: 'Products', labelAr: 'منتجاتنا', href: '#products' },
  { label: 'Why Choose Us', labelAr: 'لماذا نحن', href: '#why-us' },
  { label: 'Contact', labelAr: 'تواصل معنا', href: '#contact' },
];

const socials = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

interface FooterProps {
  language: 'en' | 'ar';
}

export default function Footer({ language }: FooterProps) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleNav = (href: string) => {
    if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  const content = language === 'en'
    ? {
      description: 'Premium grains, legumes, rice, and traditional pantry products. Trusted by families and businesses.',
      quickLinks: 'Quick Links',
      products: 'Products',
      contact: 'Contact',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    }
    : {
      description: 'حبوب وبقوليات وأرز ومنتجات مطبخ تقليدية عالية الجودة. موثوقة من قبل العائلات والشركات.',
      quickLinks: 'روابط سريعة',
      products: 'منتجاتنا',
      contact: 'تواصل',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الاستخدام',
      rights: 'جميع الحقوق محفوظة.',
    };

  return (
    <footer className="bg-navy-900 text-white relative overflow-hidden">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 0L1440 0V20C1200 50 960 60 720 50C480 40 240 10 0 20V0Z" fill="#F8F5F0" />
        </svg>
      </div>

      {/* Geometric overlay */}
      <div className="absolute inset-0 arabic-pattern opacity-10 pointer-events-none" />

      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <button onClick={() => handleNav('#hero')} className="flex items-center gap-3 mb-5 group">
              <img
                src="https://res.cloudinary.com/dyissekq4/image/upload/v1784895413/logo_z2zfph.png"
                alt="Haj Ali"
                className="h-16 w-auto object-contain group-hover:opacity-80 transition-opacity"
              />
            </button>

            <p className="text-navy-300 text-sm leading-relaxed mb-5">
              {content.description}
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-brand-500 border border-white/10 hover:border-brand-500 flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className={`font-display font-bold text-white mb-5 flex items-center gap-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="flex items-center gap-2 text-navy-300 hover:text-brand-400 transition-colors text-sm group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 group-hover:bg-brand-400 transition-colors" />
                    <span className={language === 'ar' ? 'font-arabic' : ''}>{language === 'en' ? link.label : link.labelAr}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={`font-display font-bold text-white mb-5 flex items-center gap-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {content.contact}
            </h4>
            <div className="space-y-4">
              <a href="https://wa.me/201008626066" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-navy-300 hover:text-brand-400 transition-colors group">
                <MessageCircle size={16} className="mt-0.5 flex-shrink-0 text-brand-600 group-hover:text-brand-400" />
                <div>
                  <div className="text-sm" dir="ltr">+20 100 862 6066</div>
                  <div className="font-arabic text-xs text-navy-500">WhatsApp</div>
                </div>
              </a>
              <a href="tel:+201271355585" className="flex items-start gap-3 text-navy-300 hover:text-brand-400 transition-colors group">
                <Phone size={16} className="mt-0.5 flex-shrink-0 text-brand-600 group-hover:text-brand-400" />
                <div>
                  <div className="text-sm" dir="ltr">+20 127 135 5585</div>
                  <div className="font-arabic text-xs text-navy-500">Phone</div>
                </div>
              </a>
              <a href="mailto:info@hajjali.com" className="flex items-start gap-3 text-navy-300 hover:text-brand-400 transition-colors group">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-brand-600 group-hover:text-brand-400" />
                <div>
                  <div className="text-sm">info@hajjali.com</div>
                  <div className="font-arabic text-xs text-navy-500">Email</div>
                </div>
              </a>
              <a
                href="https://maps.app.goo.gl/vfH5cAc1PUAAT3qu6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-navy-300 hover:text-brand-400 transition-colors group"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-brand-600 group-hover:text-brand-400" />
                <div>
                  <div className="text-sm">Industrial Zone Hosh Issa - ElBeheira</div>
                  <div className="font-arabic text-xs text-navy-500">المنطقة الصناعية بحوش عيسى - البحيرة</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-navy-400 text-sm text-center sm:text-left">
            {language === 'en'
              ? '© 2026 Haj Ali. All rights reserved'
              : 'جميع الحقوق محفوظه حاج علي 2026 ©'}
          </div>

          <div className="flex items-center gap-4 text-navy-500 text-xs">
            <span className={language === 'ar' ? 'font-arabic' : ''}>{language === 'en' ? content.privacy : 'Privacy Policy'}</span>
            <span className="w-1 h-1 bg-navy-600 rounded-full" />
            <span className={language === 'ar' ? 'font-arabic' : ''}>{language === 'en' ? content.terms : 'Terms of Service'}</span>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-12 h-12 bg-brand-500 hover:bg-brand-600 text-white rounded-2xl shadow-lg shadow-brand-500/30 flex items-center justify-center transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
