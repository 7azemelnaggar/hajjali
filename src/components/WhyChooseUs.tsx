import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Sprout, Package, ScanSearch, Heart, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Premium Quality',
    titleAr: 'جودة عالية',
    desc: 'Our manufacturing processes follow strict ISO standards and quality controls to ensure only the best reaches you.',
    descAr: 'تضمن عمليات التصنيع المتوافقة مع معايير ISO وضوابط الجودة الصارمة حصولك على الأفضل فقط.',
    color: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
  },
  {
    icon: Sprout,
    title: 'Carefully Selected Crops',
    titleAr: 'محاصيل مختارة بعناية',
    desc: 'Our agricultural engineers personally assess farms and crops before any purchase is made.',
    descAr: 'يقوم مهندسونا الزراعيون بتقييم المزارع والمحاصيل شخصياً قبل أي عملية شراء.',
    color: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
  },
  {
    icon: Package,
    title: 'Hygienic Packaging',
    titleAr: 'تعبئة صحية',
    desc: 'Modern packaging facilities help preserve freshness, cleanliness, and shelf life.',
    descAr: 'تضمن مرافق التعبئة والتغليف الحديثة النضارة والنظافة وفترة صلاحية طويلة.',
    color: 'bg-brand-50 text-brand-600 group-hover:bg-brand-500 group-hover:text-white',
  },
  {
    icon: ScanSearch,
    title: 'Sorting',
    titleAr: 'فرز',
    desc: 'The company uses the latest global sorting technology, including Sormac systems for color sorting and automated cleaning.',
    descAr: 'الشركة تعمل باحدث اجهزة الفرز العالمية سورتكس للفرز بالالوان والتنقية الالية',
    color: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  },
  {
    icon: Heart,
    title: 'Trusted by Families',
    titleAr: 'موثوق من العائلات',
    desc: 'More than 5,000 families and companies choose Haj Ali as their trusted nutrition partner.',
    descAr: 'أكثر من 5,000 عائلة وشركة تختار حاج علي كشريكها الموثوق في التغذية.',
    color: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    icon: Sparkles,
    title: 'Preparation',
    titleAr: 'تجهيز',
    desc: 'Products are prepared after packaging according to each client’s specific needs and preferences for the required crop.',
    descAr: 'يتم تجهيز المنتجات بعد التعبئه حسب احتياج ورغبه كل عميل فى المحصول المطلوب',
    color: 'bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

interface WhyChooseUsProps {
  language: 'en' | 'ar';
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const content = language === 'en'
    ? {
      eyebrow: 'Why Choose Us — لماذا تختارنا',
      heading: <>The Haj Ali <span className="text-brand-400">Difference</span></>,
      subtitle: 'What makes Haj Ali unique',
      description: 'We don\'t just sell grains — we deliver trust, quality, and a commitment to nourishing families with the best nature has to offer.',
      ctaTitle: 'Ready to partner with Haj Ali?',
      ctaSubtitle: 'هل أنت مستعد للشراكة مع حاج علي؟',
      ctaText: 'Get wholesale pricing and bulk supply agreements today.',
      ctaButton: 'Contact Us Now',
    }
    : {
      eyebrow: 'لماذا تختارنا — Why Choose Us',
      heading: <><span className="text-brand-400">الفرق</span> عند حاج علي</>,
      subtitle: 'ما يميز حاج علي',
      description: 'نحن لا نبيع الحبوب فقط — بل نقدم الثقة والجودة والتزامًا بتغذية العائلات بأفضل ما تقدمه الطبيعة.',
      ctaTitle: 'هل أنت مستعد للشراكة مع حاج علي؟',
      ctaSubtitle: 'Ready to partner with Haj Ali?',
      ctaText: 'احصل على الأسعار الجملة واتفاقيات التوريد بالجملة اليوم.',
      ctaButton: 'تواصل معنا الآن',
    };

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
            {content.eyebrow}
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
          </span>
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-white mb-3">
            {content.heading}
          </h2>
          <p className="font-arabic text-xl text-navy-200 mb-4">{content.subtitle}</p>
          <p className="text-navy-300 max-w-xl mx-auto leading-relaxed">
            {content.description}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto items-center justify-items-center mb-14 px-4">
          {[
            { src: "https://res.cloudinary.com/dyissekq4/image/upload/v1784048329/ISO_9001_ddbka7.png", alt: "ISO 9001" },
            { src: "https://res.cloudinary.com/dyissekq4/image/upload/v1784048536/circle-crop_uzyxgq.png", alt: "ISO 22000" },
            { src: "https://res.cloudinary.com/dyissekq4/image/upload/v1784047641/Rounded-Kosher_eaecgi.png", alt: "Kosher" },
            { src: "https://res.cloudinary.com/dyissekq4/image/upload/v1784047331/halal_pvxhqu.png", alt: "Halal" }
          ].map((cert, index) => (
            <motion.div
              key={cert.alt}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/10 flex items-center justify-center w-full aspect-square max-w-[180px]"
            >
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.1 }}
                src={cert.src}
                alt={cert.alt}
                className='h-20 sm:h-28 w-auto object-contain cursor-pointer'
              />
            </motion.div>
          ))}
        </div>


        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map(({ icon: Icon, title, titleAr, desc, descAr, color }) => (
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
              <h3 className={`font-sans font-bold text-white text-xl mb-1 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? titleAr : title}
              </h3>
              <p className={`text-navy-300 text-sm leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'ar' ? descAr : desc}
              </p>

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
            <h3 className="font-sans text-2xl lg:text-3xl font-bold text-white mb-2">
              {content.ctaTitle}
            </h3>
            <p className="font-arabic text-brand-100 text-lg">{content.ctaSubtitle}</p>
            <p className="text-brand-100/80 text-sm mt-1">{content.ctaText}</p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 bg-white text-brand-600 font-bold px-8 py-3.5 rounded-full
                       hover:bg-brand-50 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
          >
            {content.ctaButton}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
