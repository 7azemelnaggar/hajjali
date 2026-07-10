import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';

const featured = [
  {
    id: 1,
    name: 'Premium Basmati Rice',
    nameAr: 'أرز بسمتي فاخر',
    category: 'Rice',
    categoryAr: 'أرز',
    desc: 'Long-grain, aromatic basmati from the finest paddies. Aged to perfection for the fluffiest, most fragrant results. Available in 1kg, 5kg, 10kg, and 50kg sacks.',
    image: 'https://i.postimg.cc/PrC15pKM/Gemini-Generated-Image-z8xxp4z8xxp4z8xx.png',
    badge: 'Best Seller',
    rating: 4.9,
    reviews: 248,
    weight: '1kg – 50kg',
    origin: 'Egypt',
  },
  {
    id: 2,
    name: 'Green Lentils',
    nameAr: 'عدس أخضر فاخر',
    category: 'Lentils',
    categoryAr: 'عدس',
    desc: 'Whole green lentils — high protein, rich flavor. Perfect for traditional soups, stews, and side dishes. Carefully sorted and free from impurities.',
    image: 'https://i.postimg.cc/HWcw9v77/Gemini-Generated-Image-pimfx2pimfx2pimf.png',
    badge: 'Premium',
    rating: 4.8,
    reviews: 192,
    weight: '500g – 25kg',
    origin: 'Turkey',
  },
  {
    id: 3,
    name: 'Egyptian White Beans',
    nameAr: 'فاصوليا بيضاء مصرية',
    category: 'Beans',
    categoryAr: 'فاصوليا',
    desc: 'Classic white haricot beans with a tender skin and buttery flavor. Ideal for ful medames, casseroles, and slow-cooked Mediterranean dishes.',
    image: 'https://i.postimg.cc/BnksHvry/Gemini-Generated-Image-io8w17io8w17io8w.png',
    badge: 'Traditional',
    rating: 4.7,
    reviews: 154,
    weight: '500g – 25kg',
    origin: 'Egypt',
  },
];

interface FeaturedProductsProps {
  language: 'en' | 'ar';
}

export default function FeaturedProducts({ language }: FeaturedProductsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [active, setActive] = useState(0);

  const product = featured[active];
  const content = language === 'en'
    ? {
        eyebrow: 'Featured Products — منتجات مميزة',
        title: <>Our <span className="text-gradient">Signature Range</span></>,
        subtitle: 'Our featured collection',
        request: 'Request Quote',
        learn: 'Learn More',
      }
    : {
        eyebrow: 'منتجات مميزة — Featured Products',
        title: <><span className="text-gradient">مجموعة</span> مميزة</>,
        subtitle: 'تشكيلتنا المميزة',
        request: 'اطلب عرض سعر',
        learn: 'اعرف المزيد',
      };

  return (
    <section className="section-padding bg-cream-50 relative overflow-hidden">
      <div className="absolute inset-0 grain-pattern pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label justify-center">
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
            {content.eyebrow}
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
          </span>
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-navy-800 mb-3">
            {content.title}
          </h2>
          <p className="font-arabic text-xl text-gray-400">{content.subtitle}</p>
        </motion.div>

        {/* Tab selectors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {featured.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`px-5 py-3 rounded-full text-base font-semibold transition-all duration-300 ${
                active === i
                  ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-white text-gray-600 border border-cream-200 hover:border-brand-300'
              }`}
            >
              {p.name}
            </button>
          ))}
        </motion.div>

        {/* Featured card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-cream-200"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-72 lg:h-auto min-h-[360px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center">
                      <Package size={22} className="text-brand-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Package Sizes</div>
                      <div className="text-navy-800 font-semibold">{product.weight}</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider">Origin</div>
                      <div className="text-navy-800 font-semibold">{product.origin}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="mb-2">
                  <span className="text-brand-500 text-sm font-semibold uppercase tracking-widest">{product.category}</span>
                  <span className="text-gray-300 mx-2">·</span>
                  <span className="text-gray-400 text-sm font-arabic">{product.categoryAr}</span>
                </div>

                <h3 className="font-display text-3xl lg:text-4xl font-bold text-navy-800 mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="font-arabic text-xl text-gray-400 mb-6">{product.nameAr}</p>

                <p className="text-gray-500 leading-relaxed mb-8 text-base">{product.desc}</p>

                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary"
                  >
                    {content.request}
                    <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-outline"
                  >
                    {content.learn}
                  </button>
                </div>

                {/* Dots navigation */}
                <div className="flex gap-2 mt-8">
                  {featured.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        active === i ? 'w-8 bg-brand-500' : 'w-1.5 bg-cream-300 hover:bg-cream-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
