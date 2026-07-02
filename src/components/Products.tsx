// import { useRef } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { ArrowRight } from 'lucide-react';

// const products = [
//   {
//     name: 'Lentils',
//     nameAr: 'العدس',
//     desc: 'Green, red & black varieties — whole or split, rich in protein and flavor.',
//     image: 'https://images.pexels.com/photos/34693984/pexels-photo-34693984.jpeg',
//     color: 'from-amber-600 to-amber-800',
//     tag: 'Best Seller',
//   },
//   {
//     name: 'Beans',
//     nameAr: 'الفاصوليا',
//     desc: 'White, black-eye, and kidney beans — dried or ready for culinary use.',
//     image: 'https://i.postimg.cc/BnksHvry/Gemini-Generated-Image-io8w17io8w17io8w.png',
//     color: 'from-stone-500 to-stone-700',
//     tag: 'Popular',
//   },
//   {
//     name: 'Chickpeas',
//     nameAr: 'الحمص',
//     desc: 'Plump, high-quality chickpeas — essential for hummus and hearty stews.',
//     image: 'https://images.pexels.com/photos/28110905/pexels-photo-28110905.jpeg',
//     color: 'from-yellow-600 to-yellow-800',
//     tag: 'Premium',
//   },
//   {
//     name: 'Rice',
//     nameAr: 'الأرز',
//     desc: 'Basmati, long-grain, and Egyptian varieties — fragrant and perfectly milled.',
//     image: 'https://i.postimg.cc/cL97cpTS/Gemini-Generated-Image-tjna4gtjna4gtjna.png',
//     color: 'from-neutral-400 to-neutral-600',
//     tag: 'Premium',
//   },
//   {
//     name: 'Wheat',
//     nameAr: 'القمح',
//     desc: 'Whole wheat, semolina, and cracked wheat — the foundation of Arab cuisine.',
//     image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600',
//     color: 'from-yellow-700 to-amber-900',
//     tag: 'Traditional',
//   },
//   {
//     name: 'Corn',
//     nameAr: 'الذرة',
//     desc: 'Yellow corn, dried and processed — ideal for grits, cornmeal, and feeds.',
//     image: 'https://images.pexels.com/photos/9362415/pexels-photo-9362415.jpeg',
//     color: 'from-yellow-400 to-yellow-600',
//     tag: 'Natural',
//   },
//   {
//     name: 'Herbs & Spices',
//     nameAr: 'الأعشاب والبهارات',
//     desc: 'Cumin, turmeric, coriander, and blended spice mixes for authentic flavors.',
//     image: 'https://images.pexels.com/photos/27680729/pexels-photo-27680729.jpeg',
//     color: 'from-orange-600 to-red-800',
//     tag: 'Aromatic',
//   },
//   {
//     name: 'Seeds',
//     nameAr: 'البذور',
//     desc: 'Sesame, flaxseed, sunflower, and pumpkin seeds — nutritious and versatile.',
//     image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
//     color: 'from-teal-600 to-teal-800',
//     tag: 'Healthy',
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   visible: { transition: { staggerChildren: 0.08 } },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.95 },
//   visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// export default function Products() {
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-60px' });

//   return (
//     <section id="products" className="section-padding bg-white relative overflow-hidden">
//       <div className="absolute inset-0 arabic-pattern pointer-events-none" />

//       <div className="container-max relative" ref={ref}>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-14"
//         >
//           <span className="section-label justify-center">
//             <span className="w-6 h-0.5 bg-brand-500 inline-block" />
//             Our Products — منتجاتنا
//             <span className="w-6 h-0.5 bg-brand-500 inline-block" />
//           </span>
//           <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-800 mb-3">
//             Nature's Finest,<br />
//             <span className="text-gradient">Carefully Selected</span>
//           </h2>
//           <p className="font-arabic text-xl text-gray-400 mb-4">خير الطبيعة، بعناية واختيار</p>
//           <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
//             From field to table — every product in our catalog is sourced from trusted
//             farms and processed to the highest food safety standards.
//           </p>
//         </motion.div>

//         {/* Product Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? 'visible' : 'hidden'}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//                 <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//           {products.map((product) => (
//             <motion.div
//               key={product.name}
//               variants={cardVariants}
//               className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer"
//             >
//               {/* Image */}
//               <div className="relative h-52 overflow-hidden">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

//                 {/* Tag */}
//                 <div className="absolute top-3 left-3">
//                   <span className="bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
//                     {product.tag}
//                   </span>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="p-5">
//                 <div className="flex items-start justify-between mb-2">
//                   <div>
//                     <h3 className="font-display font-bold text-navy-800 text-lg leading-tight">{product.name}</h3>
//                     <p className="font-arabic text-brand-500 text-sm">{product.nameAr}</p>
//                   </div>
//                   <div className="w-8 h-8 rounded-full bg-cream-100 group-hover:bg-brand-500 flex items-center justify-center transition-colors mt-1">
//                     <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
//                   </div>
//                 </div>
//                 <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>

//                 {/* Bottom bar */}
//                 {/* <div className="mt-4 pt-4 border-t border-cream-100 flex items-center justify-between">
//                   <span className="text-xs text-gray-400 font-medium">Premium Grade</span>
//                   <div className="flex gap-0.5">
//                     {[...Array(5)].map((_, i) => (
//                       <span key={i} className="text-brand-400 text-xs">★</span>
//                     ))}
//                   </div>
//                 </div> */}
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center mt-12"
//         >
//           <button
//             onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="btn-primary"
//           >
//             Request a Catalog
//             <ArrowRight size={18} />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, ArrowRight  } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    name: 'Lentils',
    nameAr: 'العدس',
    desc: 'Green, red & black varieties — whole or split, rich in protein and flavor.',
    image: 'https://images.pexels.com/photos/34693984/pexels-photo-34693984.jpeg',
    color: 'from-amber-600 to-amber-800',
    tag: 'Best Seller',
  },
  {
    name: 'Beans',
    nameAr: 'الفاصوليا',
    desc: 'White, black-eye, and kidney beans — dried or ready for culinary use.',
    image: 'https://i.postimg.cc/BnksHvry/Gemini-Generated-Image-io8w17io8w17io8w.png',
    color: 'from-stone-500 to-stone-700',
    tag: 'Popular',
  },
  {
    name: 'Chickpeas',
    nameAr: 'الحمص',
    desc: 'Plump, high-quality chickpeas — essential for hummus and hearty stews.',
    image: 'https://images.pexels.com/photos/28110905/pexels-photo-28110905.jpeg',
    color: 'from-yellow-600 to-yellow-800',
    tag: 'Premium',
  },
  {
    name: 'Rice',
    nameAr: 'الأرز',
    desc: 'Basmati, long-grain, and Egyptian varieties — fragrant and perfectly milled.',
    image: 'https://i.postimg.cc/cL97cpTS/Gemini-Generated-Image-tjna4gtjna4gtjna.png',
    color: 'from-neutral-400 to-neutral-600',
    tag: 'Premium',
  },
  {
    name: 'Wheat',
    nameAr: 'القمح',
    desc: 'Whole wheat, semolina, and cracked wheat — the foundation of Arab cuisine.',
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-yellow-700 to-amber-900',
    tag: 'Traditional',
  },
  {
    name: 'Corn',
    nameAr: 'الذرة',
    desc: 'Yellow corn, dried and processed — ideal for grits, cornmeal, and feeds.',
    image: 'https://images.pexels.com/photos/9362415/pexels-photo-9362415.jpeg',
    color: 'from-yellow-400 to-yellow-600',
    tag: 'Natural',
  },
  {
    name: 'Herbs & Spices',
    nameAr: 'الأعشاب والبهارات',
    desc: 'Cumin, turmeric, coriander, and blended spice mixes for authentic flavors.',
    image: 'https://images.pexels.com/photos/27680729/pexels-photo-27680729.jpeg',
    color: 'from-orange-600 to-red-800',
    tag: 'Aromatic',
  },
  {
    name: 'Seeds',
    nameAr: 'البذور',
    desc: 'Sesame, flaxseed, sunflower, and pumpkin seeds — nutritious and versatile.',
    image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
    color: 'from-teal-600 to-teal-800',
    tag: 'Healthy',
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern pointer-events-none" />

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
            Our Products — منتجاتنا
            <span className="w-6 h-0.5 bg-brand-500 inline-block" />
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy-800 mb-3">
            Nature's Finest,<br />
            <span className="text-gradient">Carefully Selected</span>
          </h2>
          <p className="font-arabic text-xl text-gray-400 mb-4">خير الطبيعة، بعناية واختيار</p>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            From field to table — every product in our catalog is sourced from trusted
            farms and processed to the highest food safety standards.
          </p>
        </motion.div>

        {/* Product Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="pb-12" // space for pagination dots
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640:  { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className="!pb-10" // extra bottom padding for dots inside swiper
          >
            {products.map((product) => (
              <SwiperSlide key={product.name}>
                <div className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Tag */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {product.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-display font-bold text-navy-800 text-lg leading-tight">{product.name}</h3>
                        <p className="font-arabic text-brand-500 text-sm">{product.nameAr}</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-cream-100 group-hover:bg-brand-500 flex items-center justify-center transition-colors mt-1 shrink-0">
                        <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{product.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-4"
        >
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Request a Catalog
            <ArrowLeft size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}