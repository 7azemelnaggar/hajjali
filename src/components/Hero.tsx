// import { motion } from 'framer-motion';
// import { ArrowRight, ChevronDown, Wheat, Star } from 'lucide-react';

// const stats = [
//   { value: '30+', label: 'Years Experience', labelAr: 'سنة خبرة' },
//   { value: '200+', label: 'Products', labelAr: 'منتج' },
//   { value: '5000+', label: 'Happy Clients', labelAr: 'عميل راضٍ' },
//   { value: '15+', label: 'Countries', labelAr: 'دولة' },
// ];

// export default function Hero() {
//   const handleExplore = () => {
//     const el = document.querySelector('#products');
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleContact = () => {
//     const el = document.querySelector('#contact');
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   const handleScroll = () => {
//     const el = document.querySelector('#about');
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (

// ////



// ////

  

//     <section id="hero" className="relative min-h-screen flex flex-col">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <img
//           src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
//           alt="Premium grains and legumes"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/55 to-black/40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
//       </div>

//       {/* Geometric overlay */}
//       <div className="absolute inset-0 arabic-pattern opacity-30 pointer-events-none" />

//       {/* Floating grain icons */}
//       <motion.div
//         animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
//         transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
//         className="absolute top-32 right-12 hidden lg:block"
//       >
//         <div className="w-16 h-16 rounded-full bg-brand-500/20 backdrop-blur-sm border border-brand-500/30 flex items-center justify-center">
//           <Wheat size={28} className="text-brand-400" />
//         </div>
//       </motion.div>
//       <motion.div
//         animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
//         transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
//         className="absolute top-48 right-36 hidden lg:block"
//       >
//         <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
//           <Star size={16} className="text-brand-300" />
//         </div>
//       </motion.div>

//       {/* Content */}
//       <div className="relative z-10 flex-1 flex flex-col justify-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
//           <div className="max-w-3xl">
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="inline-flex items-center gap-2 bg-brand-500/20 backdrop-blur-sm border border-brand-500/40 rounded-full px-4 py-2 mb-6"
//             >
//               <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
//               <span className="text-brand-200 text-sm font-medium tracking-wide">أفخر المنتجات الغذائية</span>
//             </motion.div>

//             {/* Headline */}
//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.25 }}
//               className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 text-shadow-lg"
//             >
//               From Tradition<br />
//               <span className="text-brand-400">to Every Table</span>
//             </motion.h1>

//             {/* Arabic subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="font-arabic text-2xl sm:text-3xl text-cream-200 mb-4 text-shadow leading-relaxed"
//             >
//               أجود الحبوب والبقوليات من حاج علي
//             </motion.p>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.5 }}
//               className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed"
//             >
//               Premium quality grains, lentils, rice, and traditional pantry essentials —
//               sourced from the finest farms and delivered with care.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.65 }}
//               className="flex flex-wrap gap-4 mb-16"
//             >
//               <button onClick={handleExplore} className="btn-primary text-base">
//                 Explore Products
//                 <ArrowRight size={18} />
//               </button>
//               <button onClick={handleContact} className="btn-secondary text-base">
//                 Contact Us
//               </button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.8 }}
//               className="grid grid-cols-2 sm:grid-cols-4 gap-6"
//             >
//               {stats.map((stat, i) => (
//                 <motion.div
//                   key={stat.value}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
//                   className="text-center sm:text-left"
//                 >
//                   <div className="font-display text-3xl font-bold text-brand-400 mb-1">{stat.value}</div>
//                   <div className="text-white/60 text-xs uppercase tracking-wider">{stat.label}</div>
//                   <div className="text-white/40 text-xs font-arabic">{stat.labelAr}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.button
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.4 }}
//         onClick={handleScroll}
//         className="relative z-10 flex flex-col items-center gap-2 pb-8 mx-auto text-white/40 hover:text-white/70 transition-colors"
//       >
//         <span className="text-xs uppercase tracking-widest">Scroll Down</span>
//         <motion.div
//           animate={{ y: [0, 6, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity }}
//         >
//           <ChevronDown size={20} />
//         </motion.div>
//       </motion.button>

//       {/* Wave bottom */}
//       <div className="absolute bottom-0 left-0 right-0 z-10">
//         <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
//           <path d="M0 80L1440 80V40C1200 70 960 80 720 70C480 60 240 30 0 40V80Z" fill="#FDFAF5"/>
//         </svg>
//       </div>
//     </section>
//   );
// }


import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Wheat, Star, ArrowLeft } from 'lucide-react';
import Swiper from 'swiper';
import { Autoplay, EffectFade, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';

const slides = [
  {
    image: 'https://res.cloudinary.com/dyissekq4/image/upload/v1783695146/AHajAliProductsi_xq1lhz.png',
    overlay: 'from-green-950/80 via-black/55 to-black/40',
  },
  {
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overlay: 'from-black/80 via-black/55 to-black/40',
  },
  {
    image: 'https://images.pexels.com/photos/1393382/pexels-photo-1393382.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overlay: 'from-amber-950/80 via-black/55 to-black/40',
  },
  {
    image: 'https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg?auto=compress&cs=tinysrgb&w=1920',
    overlay: 'from-stone-900/80 via-black/55 to-black/40',
  }
];

const stats = [
  { value: '30+', label: 'Years Experience', labelAr: 'سنة خبرة' },
  { value: '200+', label: 'Products', labelAr: 'منتج' },
  { value: '5000+', label: 'Happy Clients', labelAr: 'عميل راضٍ' },
  { value: '50+', label: 'Countries', labelAr: 'دولة' },
];

interface HeroProps {
  language: 'en' | 'ar';
}

export default function Hero({ language }: HeroProps) {
  const swiperRef = useRef<HTMLDivElement | null>(null);
  const content = language === 'en'
    ? {
        badge: 'Premium food products',
        titleLine1: 'From Tradition',
        titleLine2: 'to Every Table',
        subtitle: 'Finest grains and legumes from Haj Ali',
        description: 'Premium quality grains, lentils, rice, and traditional pantry essentials — sourced from the finest farms and delivered with care.',
        explore: 'Explore Products',
        contact: 'Contact Us',
        scroll: 'Scroll Down',
      }
    : {
        badge: 'أفخر المنتجات الغذائية',
        titleLine1: 'من التراث',
        titleLine2: 'إلى كل مائدة',
        subtitle: 'أجود الحبوب والبقوليات من حاج علي',
        description: 'حبوب وبقوليات وأرز ومستلزمات مطبخ تقليدية عالية الجودة — من أفضل المزارع وموردة بعناية.',
        explore: 'استكشف المنتجات',
        contact: 'تواصل معنا',
        scroll: 'الانتقال للأسفل',
      };

  useEffect(() => {
    const element = swiperRef.current;
    if (!element) return undefined;

    const swiper = new Swiper(element, {
      modules: [Autoplay, EffectFade, Scrollbar],
      direction: 'vertical',
      loop: true,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: { delay: 4000, disableOnInteraction: false },
      scrollbar: { el: '.swiper-scrollbar', draggable: true },
      speed: 1000,
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const handleExplore = () => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  const handleContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  const handleScroll  = () => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex flex-col">

      {/* ── Swiper background ── */}
      <div ref={swiperRef} className="swiper absolute inset-0" style={{ height: '100%' }}>
        <div className="swiper-wrapper">
          {slides.map((slide, i) => (
            <div key={i} className="swiper-slide">
              <img
                src={slide.image}
                alt={`Hero slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${slide.overlay}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            </div>
          ))}
        </div>
        {/* vertical scrollbar on the right */}
        <div className="swiper-scrollbar" style={{ right: '8px', top: '20%', height: '60%', width: '3px' }} />
      </div>

      {/* Geometric overlay */}
      <div className="absolute inset-0 arabic-pattern opacity-30 pointer-events-none" />

      {/* Floating grain icons */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute z-10 top-32 right-12 hidden lg:block"
      >
        <div className="w-16 h-16 rounded-full bg-brand-500/20 backdrop-blur-sm border border-brand-500/30 flex items-center justify-center">
          <Wheat size={28} className="text-brand-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute  z-10 top-48 right-36 hidden lg:block"
      >
        <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <Star size={16} className="text-brand-300" />
        </div>
      </motion.div>

      {/* Content — unchanged */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-brand-500/20 backdrop-blur-sm border border-brand-500/40 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
              <span className="text-brand-200 text-sm font-medium tracking-wide">{content.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-4 text-shadow-lg"
            >
              {content.titleLine1}<br />
              <span className="text-brand-400">{content.titleLine2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-arabic text-2xl sm:text-3xl text-cream-200 mb-4 text-shadow leading-relaxed"
            >
              {content.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed"
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <button onClick={handleExplore} className="btn-primary text-base">
                {content.explore}
                {language === 'en' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
              </button>
              <button onClick={handleContact} className="btn-secondary text-base">
                {content.contact}
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="font-sans text-3xl font-bold text-brand-400 mb-1">{stat.value}</div>
                  <div className={`text-white/60 text-xs uppercase tracking-wider ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'en' ? stat.label : stat.labelAr}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        onClick={handleScroll}
        className="relative z-10 flex flex-col items-center gap-2 pb-8 mx-auto text-white/40 hover:text-white/70 transition-colors"
      >
        <span className="text-xs uppercase tracking-widest">{content.scroll}</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 80L1440 80V40C1200 70 960 80 720 70C480 60 240 30 0 40V80Z" fill="#FDFAF5"/>
        </svg>
      </div>
    </section>
  );
}