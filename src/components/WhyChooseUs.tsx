import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Sprout, Package, ScanSearch, Heart, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    titleAr: 'جودة عالية',
    desc: 'تضمن عمليات التصنيع المتوافقة مع معايير ISO وضوابط الجودة الصارمة حصولك على الأفضل فقط.',
    color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    icon: Sprout,
    title: 'Carefully Selected Crops',
    titleAr: 'محاصيل مختارة بعناية',
    desc: 'يقوم مهندسونا الزراعيون بتقييم المزارع والمحاصيل شخصياً قبل أي عملية شراء.',
    color: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
  },
  {
    icon: Package,
    title: 'Hygienic Packaging',
    titleAr: 'تعبئة صحية',
    desc: 'تضمن مرافق التعبئة والتغليف الحديثة النضارة والنظافة وفترة صلاحية طويلة.',
    color: 'bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white',
  },
  {
    icon: ScanSearch,
    title: 'Sorting',
    titleAr: 'فرز',
    desc: 'الشركة تعمل باحدث اجهزة الفرز العالمية سورتكس للفرز بالالوان والتنقية الالية',
    color: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  },
  {
    icon: Heart,
    title: 'Trusted by Families',
    titleAr: 'موثوق من العائلات',
    desc: 'أكثر من 5,000 عائلة وشركة تختار حاج علي كشريكها الموثوق في التغذية.',
    color: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    icon: Sparkles,
    title: 'Preparation',
    titleAr: 'تجهيز',
    desc: 'يتم تجهيز المنتجات بعد التعبئه حسب احتياج ورغبه كل عميل فى المحصول المطلوب',
    color: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900" />
      <div className="absolute inset-0 arabic-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent" />
      {/* Glow effects */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-navy-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label justify-center text-brand-400">
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
            Why Choose Us — لماذا تختارنا
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">
            The Haj Ali
            <span className="text-brand-400"> Difference</span>
          </h2>
          <p className="font-arabic text-xl text-navy-200 mb-4">ما يميز حاج علي</p>
          <p className="text-navy-300 max-w-xl mx-auto leading-relaxed">
            We don't just sell grains — we deliver trust, quality, and a commitment
            to nourishing families with the best nature has to offer.
          </p>
        </motion.div>

        {/*  */}
        {/* <div
          className="text-center mb-14 flex items-center justify-center gap-4"
        >
          <motion.img initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            src="/iso1.jpg" alt="ISO 1" className='h-72 hover:scale-105 transition-transform duration-300' />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            src="/iso2.jpg" alt="ISO 2" className='h-72 hover:scale-105 transition-transform duration-300' />
        </div> */}
        <div className="text-center mb-14 sm:flex-row flex flex-col sm:flex-row  items-center justify-center gap-6">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              src="https://i.postimg.cc/m25hgkk5/iso1-jpg.jpg"
              alt="ISO 1"
              className='h-72 object-cover cursor-pointer'
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.7 }}
              src="https://i.postimg.cc/TPrP0c03/iso2-jpg.jpg"
              alt="ISO 2"
              className='h-72 object-cover cursor-pointer'
            />
          </motion.div>
        </div>


        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map(({ icon: Icon, title, titleAr, desc, color }) => (
            <motion.div
              key={title}
              variants={cardVariants}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7
                         hover:bg-white/10 hover:border-brand-500/40 hover:-translate-y-1
                         transition-all duration-300 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 ${color}`}>
                <Icon size={26} />
              </div>
              <h3 className="font-display font-bold text-white text-xl mb-1">{title}</h3>
              <p className="font-arabic text-brand-400 text-sm mb-3">{titleAr}</p>
              <p className="text-navy-300 text-sm leading-relaxed">{desc}</p>

              {/* Hover indicator */}
              <div className="mt-5 w-8 h-0.5 bg-brand-500/40 group-hover:w-full group-hover:bg-brand-500 transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-16 bg-gradient-to-r from-brand-500 to-brand-600 rounded-3xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-500/20"
        >
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
             ? Ready to partner with Haj Ali
            </h3>
            <p className="font-arabic text-brand-100 text-lg">هل أنت مستعد للشراكة مع حاج علي؟</p>
            <p className="text-brand-100/80 text-sm mt-1">Get wholesale pricing and bulk supply agreements today.</p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 bg-white text-brand-600 font-bold px-8 py-3.5 rounded-full
                       hover:bg-brand-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            Contact Us Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
