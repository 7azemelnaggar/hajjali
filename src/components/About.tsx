import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Leaf, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Award,
    title: 'Premium Quality',
    titleAr: 'جودة عالية',
    desc: 'Every product goes through rigorous quality checks to ensure only the finest reaches your table.',
    descAr: 'تخضع كل المنتجات لفحوصات جودة صارمة لضمان وصول الأفضل فقط إلى مائدتك.',
  },
  {
    icon: Users,
    title: 'Trusted Suppliers',
    titleAr: 'موردون موثوقون',
    desc: 'We partner exclusively with certified farms and trusted suppliers across the region.',
    descAr: 'نحن نتعاون حصريًا مع مزارع وموردين معتمدين وموثوقين في المنطقة.',
  },
  {
    icon: Leaf,
    title: 'Fresh Products',
    titleAr: 'منتجات طازجة',
    desc: 'Direct sourcing ensures maximum freshness and nutritional value in every grain and legume.',
    descAr: 'يضمن sourcing المباشر أقصى درجة من النضارة والقيمة الغذائية في كل حبة وبقل.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Prices',
    titleAr: 'أسعار تنافسية',
    desc: 'Premium quality at fair prices — because great food should be accessible to every family.',
    descAr: 'جودة متميزة بأسعار عادلة لأن الطعام الجيد يجب أن يكون في متناول كل عائلة.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface AboutProps {
  language: 'en' | 'ar';
}

export default function About({ language }: AboutProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const content = language === 'en'
    ? {
        eyebrow: 'Our Story — قصتنا',
        heading: <>About <span className="text-gradient">Us</span></>,
        intro: 'We are a trusted Egyptian company with more than 30 years of experience in sourcing, processing, and exporting agricultural products to markets around the world.',
        bullets: [
          'Haj Ali Company specializes in sorting, packing, importing, and exporting agricultural products.',
          'We have built a strong reputation through reliable products, professional service, and long-term partnerships with clients worldwide.',
          'We export around 50,000 metric tons annually, including lentils, chickpeas, broad beans, white beans, peanuts, lupins, rice, cumin, sunflower seeds, and more.',
          'Quality is the foundation of our work, and we ensure every shipment meets strict standards and client expectations.',
          'We consider our clients as long-term partners, and we value trust, transparency, competitive pricing, and punctual delivery.',
          'Germany is one of our important markets, and we continue to build strong relationships with German partners based on mutual trust and shared success.',
          'Our objective is not only to fulfill one shipment, but to build sustainable long-term business relationships.',
        ],
      }
    : {
        eyebrow: 'قصتنا — Our Story',
        heading: <><span className="text-gradient">من</span> نحن</>,
        intro: 'نحن شركة مصرية موثوقة تتمتع بأكثر من 30 عامًا من الخبرة في توريد وتصنيع وتصدير المنتجات الزراعية إلى أسواق حول العالم.',
        bullets: [
          'تتخصص شركة الحاج علي في فرز وتعبئة واستيراد وتصدير المنتجات الزراعية.',
          'لقد بنينا سمعة قوية من خلال منتجات موثوقة وخدمات مهنية وشراكات طويلة الأمد مع العملاء في جميع أنحاء العالم.',
          'نصدر ما يقارب 50 ألف طن متري سنويًا تشمل العدس والحمص والفول العريض والفاصوليا البيضاء والفول السوداني والترمس والأرز والكراوية وبذور عباد الشمس وغير ذلك.',
          'الجودة هي أساس عملنا، ونضمن أن كل شحنة تتوافق مع المعايير الصارمة وتوقعات العملاء.',
          'نعتبر عملائنا شركاء طويل الأمد، ونعطي الأولوية للثقة والشفافية والأسعار التنافسية والتسليم في المواعيد.',
          'ألمانيا من أهم الأسواق بالنسبة لنا، ونحن نعمل على بناء علاقات قوية مع الشركاء الألمان على أساس الثقة المتبادلة والنجاح المشترك.',
          'هدفنا ليس مجرد تنفيذ شحنة واحدة، بل بناء علاقات تجارية مستدامة على المدى الطويل.',
        ],
      };

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
              {content.eyebrow}
              <span className="w-8 h-0.5 bg-brand-500 inline-block" />
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="font-display text-4xl lg:text-5xl font-bold text-navy-800 mb-2 leading-tight text-center">
            {content.heading}
          </motion.h2>

          <motion.p variants={itemVariants} className="font-arabic text-xl text-gray-500 mb-6 leading-relaxed text-center">
            
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-600 text-lg leading-relaxed mb-4 text-center">
            {/* Founded by Haj Ali over three decades ago, our company was built on a simple promise:
            deliver the finest grains, legumes, and pantry staples to every household with
            honesty, care, and uncompromising quality. */}
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-500 leading-relaxed mb-10 text-center">
            <p className="mb-6 text-lg text-gray-600">{content.intro}</p>
            <ul className="flex flex-col align-top items-start justify-start list-disc pl-6 text-left space-y-3">
              {content.bullets.map((bullet) => (
                <li key={bullet} className="text-justify text-gray-600">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.p>

          {/* Pillars grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-4">
            {pillars.map(({ icon: Icon, title, titleAr, desc, descAr }) => (
              <motion.div
                key={title}
                variants={itemVariants}
                className="bg-white rounded-2xl p-4 border border-cream-200 hover:border-brand-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 group-hover:bg-brand-100 flex items-center justify-center mb-3 transition-colors">
                  <Icon size={20} className="text-brand-600" />
                </div>
                <div className={`font-semibold text-navy-800 text-sm mb-0.5 ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {language === 'en' ? title : titleAr}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{language === 'en' ? desc : descAr}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
