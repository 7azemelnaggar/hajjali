import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const quickActions = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    labelAr: 'واتساب',
    value: '+20 100 8626066',
    href: 'https://wa.me/201008626066',
    style: 'border-green-500 text-green-600 hover:bg-green-500 hover:text-white hover:shadow-green-500/25',
    iconBg: 'bg-green-50 text-green-600 group-hover:bg-white/20 group-hover:text-white',
  },
  {
    icon: Phone,
    label: 'Phone',
    labelAr: 'الهاتف',
    value: '+20 127 1355585',
    href: 'tel:+201271355585',
    style: 'border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white hover:shadow-blue-500/25',
    iconBg: 'bg-blue-50 text-blue-600 group-hover:bg-white/20 group-hover:text-white',
  },
  {
    icon: Mail,
    label: 'Email',
    labelAr: 'البريد الإلكتروني',
    value: 'info@hajjali.com',
    href: 'mailto:info@hajjali.com',
    style: 'border-brand-500 text-brand-600 hover:bg-brand-500 hover:text-white hover:shadow-brand-500/25',
    iconBg: 'bg-brand-50 text-brand-600 group-hover:bg-white/20 group-hover:text-white',
  },
];

const addressInfo = {
  icon: MapPin,
  label: 'Address',
  labelAr: 'العنوان',
  value: 'Industrial Zone Hosh Issa, ElBeheira - Egypt',
  href: 'https://maps.app.goo.gl/vfH5cAc1PUAAT3qu6',
  style: 'border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white hover:shadow-purple-500/25',
  iconBg: 'bg-purple-50 text-purple-600 group-hover:bg-white/20 group-hover:text-white',
};

interface ContactProps {
  language: 'en' | 'ar';
}

export default function Contact({ language }: ContactProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
  };

  const content = language === 'en'
    ? {
        eyebrow: 'Get In Touch — تواصل معنا',
        title: <>Let's Start a <span className="text-gradient">Conversation</span></>,
        subtitle: 'We would love to hear from you.',
        description: 'Whether you\'re a retailer, wholesaler, or home buyer — we\'d love to hear from you. Our team responds within 24 hours.',
      }
    : {
        eyebrow: 'تواصل معنا — Get In Touch',
        title: <><span className="text-gradient">لنبدأ</span> محادثة</>,
        subtitle: 'لنبدأ محادثة',
        description: 'سواء كنت تاجرًا جملة أو تجزئة أو مشترٍ منزليًا — يسعدنا أن نسمع منك. فريقنا يستجيب خلال 24 ساعة.',
      };

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 via-brand-600 to-navy-600" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-50 rounded-full translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-navy-50 rounded-full -translate-x-1/2 blur-2xl pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label justify-center">
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
            {content.eyebrow}
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-800 mb-3">
            {content.title}
          </h2>
          <p className="font-arabic text-xl text-gray-400 mb-4">{content.subtitle}</p>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        <div className="mx-auto w-full max-w-4xl">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,24rem)_minmax(0,30rem)] lg:gap-3 lg:justify-center items-start">
            {/* Contact actions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="flex flex-col items-center lg:items-end lg:justify-self-end text-center lg:text-start w-full"
            >
              <div className="flex flex-col gap-3 w-full max-w-sm">
                {[...quickActions, addressInfo].map(({ icon: Icon, label, labelAr, value, href, style, iconBg }) => (
                  <motion.a
                    key={label}
                    variants={itemVariants}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className={`group inline-flex items-center gap-4 w-full px-5 py-3.5 rounded-full border-2
                               bg-white font-semibold text-sm shadow-sm transition-all duration-300
                               hover:-translate-y-0.5 hover:shadow-lg ${style}`}
                  >
                    <span className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${iconBg}`}>
                      <Icon size={18} />
                    </span>
                    <span className="flex flex-col items-start min-w-0">
                      <span>{language === 'en' ? label : labelAr}</span>
                      <span className="text-xs font-normal opacity-80 font-arabic leading-snug" dir="ltr">{value}</span>
                    </span>
                  </motion.a>
                ))}
              </div>
          </motion.div>

          {/* Map */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="rounded-3xl overflow-hidden border border-cream-200 shadow-lg bg-cream-100 relative w-full max-w-[480px] mx-auto lg:mx-0 lg:justify-self-start aspect-[480/330]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3422.9897016283726!2d30.372999499999995!3d30.914912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f611f22823eff5%3A0x4049539f6475eb72!2z2LTYsdmD2Kkg2K3YrCDYudmE2Yog2YTZhNit2KfYtdmE2KfYqiDYp9mE2LLYsdin2LnZitmHINmIINin2YTYp9iz2KrZitix2KfYryDZiNin2YTYqti12K_Zitix!5e0!3m2!1sen!2seg!4v1783693500698!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Haj Ali Location"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
