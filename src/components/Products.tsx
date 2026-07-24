'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from './productData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/* ═══════════════════════════════════════════════════════════════
   Card Hover Variants
   ═══════════════════════════════════════════════════════════════ */

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.12 * i, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

/* ═══════════════════════════════════════════════════════════════
   Products Section — Category Cards Grid
   ═══════════════════════════════════════════════════════════════ */

interface ProductsProps {
  language: 'en' | 'ar';
}

export default function Products({ language }: ProductsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const isAr = language === 'ar';

  const content = isAr
    ? {
      eyebrow: 'منتجاتنا — Our Products',
      title: <><span className="text-gradient">أقسام</span> المنتجات</>,
      subtitle: 'خير الطبيعة، بعناية واختيار',
      description: 'اكتشف مجموعتنا المتنوعة من المنتجات الطبيعية عالية الجودة — من البقوليات والأرز إلى المكسرات والمنتجات العطرية.',
      explore: 'استكشف',
      productCount: (n: number) => `${n} منتج`,
    }
    : {
      eyebrow: 'Our Products — منتجاتنا',
      title: <>Product <span className="text-gradient">Categories</span></>,
      subtitle: 'Nature\'s finest, carefully chosen',
      description: 'Explore our diverse collection of premium natural products — from legumes and rice to nuts and aromatic goods.',
      explore: 'Explore',
      productCount: (n: number) => `${n} product${n !== 1 ? 's' : ''}`,
    };

  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern pointer-events-none" />

      <div className="container-max relative" ref={ref}>
        {/* Section Header */}
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
          <h2 className="font-sans text-4xl lg:text-5xl font-bold text-navy-800 mb-3">
            {content.title}
          </h2>
          <p className="font-arabic text-xl text-gray-400 mb-4">{content.subtitle}</p>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            {content.description}
          </p>
        </motion.div>

        {/* Categories Swiper Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative px-10 sm:px-14 lg:px-16"
        >
          <Swiper
            key={language}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: isAr ? '.swiper-btn-right' : '.swiper-btn-left',
              nextEl: isAr ? '.swiper-btn-left' : '.swiper-btn-right',
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-16"
            dir={isAr ? 'rtl' : 'ltr'}
          >
            {categories.map((cat, index) => {
              return (
                <SwiperSlide key={cat.slug} className="h-auto">
                  <Link
                    to={`/${cat.slug}`}
                    className="group relative block cursor-pointer h-full"
                  >
                    <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-2xl transition-all duration-500 h-full">
                      {/* Image */}
                      <img
                        src={cat.image}
                        alt={isAr ? cat.nameAr : cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient overlays */}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                          {isAr ? cat.nameAr : cat.name}
                        </h3>

                        {/* Explore button — slides up on hover */}
                        <div className="flex items-center gap-2 text-brand-300 group-hover:text-brand-200 text-sm font-semibold translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                          <span>{content.explore}</span>
                          {isAr ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
                        </div>
                      </div>

                      {/* Bottom glow line on hover */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-btn-left absolute left-0 sm:left-2 top-[calc(50%-2rem)] -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-brand-500 hover:bg-brand-600 text-navy-900 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 z-10 disabled:opacity-40 disabled:pointer-events-none">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <button className="swiper-btn-right absolute right-0 sm:right-2 top-[calc(50%-2rem)] -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-brand-500 hover:bg-brand-600 text-navy-900 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 z-10 disabled:opacity-40 disabled:pointer-events-none">
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}