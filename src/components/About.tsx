import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Leaf, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: 'Premium Quality',
    titleAr: 'جودة عالية',
    desc: 'Every product goes through rigorous quality checks to ensure only the finest reaches your table.',
  },
  {
    icon: Users,
    title: 'Trusted Suppliers',
    titleAr: 'موردون موثوقون',
    desc: 'We partner exclusively with certified farms and trusted suppliers across the region.',
  },
  {
    icon: Leaf,
    title: 'Fresh Products',
    titleAr: 'منتجات طازجة',
    desc: 'Direct sourcing ensures maximum freshness and nutritional value in every grain and legume.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Prices',
    titleAr: 'أسعار تنافسية',
    desc: 'Premium quality at fair prices — because great food should be accessible to every family.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="bg-cream-50 section-padding relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/60 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-100/40 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center">
            <span className="section-label justify-center">
              <span className="w-8 h-0.5 bg-brand-500 inline-block" />
              Our Story — قصتنا
              <span className="w-8 h-0.5 bg-brand-500 inline-block" />
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-display text-4xl lg:text-5xl font-bold text-navy-800 mb-2 leading-tight text-center">
            About
            <span className="text-gradient"> Us</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="font-arabic text-xl text-gray-500 mb-6 leading-relaxed text-center">
            
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-4 text-center">
            {/* Founded by Haj Ali over three decades ago, our company was built on a simple promise:
            deliver the finest grains, legumes, and pantry staples to every household with
            honesty, care, and uncompromising quality. */}
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-500 leading-relaxed mb-10 text-center">
            {/* Today, we continue that legacy — sourcing from the best farms across the Arab world,
            packaging with modern hygiene standards, and distributing to homes and businesses
            who trust the Haj Ali name as a mark of excellence. */}

            <ul className='flex flex-col align-top items-start justify-start list-disc'>
              <li className=' text-justify'>
                الشركة متخصصة في تصنيع وتجهيز وفرز الحاصلات الزراعية
              </li>
              <li className=' text-justify'>
                الشركة تعمل باحدث اجهزة الفرز العالمية سورتكس للفرز بالالوان والتنقية الالية
              </li>
              <li className=' text-justify'>
                احدث اجهزة التعبئة الالية
              </li>
              <li className=' text-justify'>
                ومن الجدير بالذكر أن شركة الطباخ لمكانتها الحالية فى السوق المصرى فقد أصبحت محل ثقة على المستوى الدولي وتم تسجيلها لدى أجهزة الدولة السيادية والهيئات الحكوميه
              </li>
              <li className=' text-justify'>
                وقد أسند الشركة علي العديد من أوامر الإستيراد و التصدير
              </li>
              <li className=' text-justify'>
                كما حصلت علي علي شهادتي الايزو 9001 و 22000
              </li>
            </ul>
          </motion.p>

          {/* Pillars grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, titleAr, desc }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-4 border border-cream-200 hover:border-brand-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center mb-3 transition-colors">
                  <Icon size={20} className="text-brand-600" />
                </div>
                <div className="font-semibold text-navy-800 text-sm mb-0.5">{title}</div>
                <div className="text-brand-500 text-xs font-arabic mb-2">{titleAr}</div>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
