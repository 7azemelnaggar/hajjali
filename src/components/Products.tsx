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
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
 
  {
    name: 'Fava Beans',
    nameAr: 'الفول',
    desc: 'ويعدّ من أكثر أنواع البقوليات شعبية خاصّة في مصر وبلاد الشام ويحضّر منه الكثير من الأطباق. وتقدم شركه الطباخ انواع عده منه معبأه ومفروزة اليا فى محتوى عبوة 25 كيلو .',
    image: 'https://images.pexels.com/photos/34693984/pexels-photo-34693984.jpeg',
    color: 'from-amber-600 to-amber-800',
    types: [
      'فول صحيح انجليزي',
      "فول صحيح استرالي",
      'مجروش استرالي',
      'مجروش ليتواني',
      'مجروش فص'
    ]
  },
  {
    name: 'crushed fava beans',
    nameAr: 'فول مجروش',
    desc: 'ويعدّ من أكثر أنواع البقوليات شعبية خاصّة في مصر وبلاد الشام ويحضّر منه الكثير من الأطباق. وتقدم شركه الطباخ انواع عده منه معبأه ومفروزة اليا فى محتوى عبوة 25 كيلو .',
    image: 'https://i.postimg.cc/BnksHvry/Gemini-Generated-Image-io8w17io8w17io8w.png',
    color: 'from-stone-500 to-stone-700',
    types: []
  },
  {
    name: 'Egyptian white pulp',
    nameAr: 'لب أبيض مصري',
    desc: 'يستمد اللب الابيض فوائده من العناصر الغذائية الرائعة التي توجد به. فهو غني بالفيتامينات والمعادن الضرورية للوظائف الحيوية للجسم. كما أنه يمد الجسم بالطاقة من خلال السعرات الحرارية وتقدم الشركه المحصول معبأ فى عبوات مخصصه',
    image: 'https://images.pexels.com/photos/28110905/pexels-photo-28110905.jpeg',
    color: 'from-yellow-600 to-yellow-800',
    types: []
  },
  {
    name: 'white beans',
    nameAr: 'الفاصوليا البيضا',
    desc: 'تعد الفاصوليا البيضاء من اهم البقوليات بسب قيمتها الغذائية العالية فهي معبأة بحمض الفوليك والبروتين و الكربوهيدرات و الألياف وبالتالي فهي غذاء أساسي عند فقدان الوزن وقد سميت الفاصوليا البيضاء بهذا الإسم لأنها ذات شكل محدب مثل الكلي وهي من أفضل الأطعمة التي تساعدك علي فقدان الوزن وذلك لأنها تحتوي علي نسبة عالية من الألياف، وبالتالي تعطي شعور بالشبع لمدة أطول وتحتوي الفاصوليا البيضاء أيضاً علي العديد من العناصر الغذائية مثل المعادن والفيتامينات و البروتينات . وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو .',
    image: 'https://i.postimg.cc/cL97cpTS/Gemini-Generated-Image-tjna4gtjna4gtjna.png',
    color: 'from-neutral-400 to-neutral-600',
    types: []
  },
  {
    name: 'Rice',
    nameAr: 'أرز',
    desc: 'الأرز الأبيض هو واحد من أشهر الأصناف التي تدخل في عديدٍ من الأطباق العربيّة المختلفة، إضافةً إلى كونه الغذاء الأساسي لأكثر من نصف سكّان العالم. وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25( كيلوجرام - 1 كيلو جرام) فى نوعين :',
    image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-yellow-700 to-amber-900',
    types: [
      '     ارزمصرى كاملينو 2( منقى الكترونيا ومعبأ اليا )',
      "ارز مصرى (منقى الكترونيا ومعالج بالبخار )"
    ]
  },
  {
    name: 'لوبيا بلدي',
    nameAr: 'لوبيا بلدي',
    desc: 'اللوبيا هو نوع من البقوليات والتي يكون لها هيكل بيضاوي قليلا مع العين السوداء وتحظى بشعبية على نطاق واسع لنكهتها الطيبة، و يعتبر نبات اللوبيا من أغنى النباتات بمادة البروتين، حيث ترتفع فيه نسبة البروتين عن بقية البقوليات والكثير من النباتات الأخرى. وتحتوي اللوبيا على العديد من العناصر الغذائيه فهى. تحتوي على ما يقرب من جميع الفيتامينات والمعادن الأساسية . وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو',
    image: 'https://images.pexels.com/photos/9362415/pexels-photo-9362415.jpeg',
    color: 'from-yellow-400 to-yellow-600',
    types: []
  },
  {
    name: 'ترمس حلو',
    nameAr: 'ترمس حلو',
    desc: 'نبات الترمس هو نبات من الفصيلة البقولية، و تعود أصوله إلى دول البحر المتوسط هو عبارة عن بذور جافة تزرع في مصر وسوريا وفلسطين والأردن ولبنان، وهو نبات من الفصيلة القرنية ويتم زراعته برياً. وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو .',
    image: 'https://images.pexels.com/photos/27680729/pexels-photo-27680729.jpeg',
    color: 'from-orange-600 to-red-800',
    types: []
  },
  {
    name: 'فول سوداني مجهز',
    nameAr: 'فول سوداني مجهز',
    desc: 'الفول السوداني هو من المحاصيل الصيفية ينتمي إلى البقوليات ذوات الفلقتين ، تنبت أزهاره فوق التربة ثم تعمل على غرس الجنين ليكتمل نموه ، يوجد منه أصناف كثيرة وترجع أصنافه حسب حجم النبتة وكبرها . وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو .',
    image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
    color: 'from-teal-600 to-teal-800',
    types: []
  },
  {
    name: 'كراوية',
    nameAr: 'كراوية',
    desc: 'الكراويه من النباتات العطريه التى لها له شهرة واسعه فى مصر والوطن العربى و تستخدم في صناعة الجبن والفطائر والحلويات والخبز والكيك ، وتضاف الى الحساء والحليب ، وتخلط بالفاكهه المطبوخة والثمار المجففة ، وتستخدم الكراوية كعلف للماشية ، وتضاف الكراوية الى الادوية لتحسين نكهتها ، ويحتوي نبات الكراوية على الزيوت الدهنية والبروتين والزيت الطيار الذي يحتوي على مادة الكارفون الهاضمة والليمونين ويحتوي النبات ايضا على زيت ثابت وفلافونيدات ومواد سكرية ، ويستخدم من النبات الثمار والزيت الطيار ، والكراوية لها طعم حريف ورائحة مميزة وتقدم الشركه معبأ ومفروز أليا',
    image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
    color: 'from-teal-600 to-teal-800',
    types: []
  },
  {
    name: 'حلبة بلدي',
    nameAr: 'حلبة بلدي',
    desc: 'من اهم النباتات الموجودة على الأرض تتبع الحلبة فصيلة البقوليات. الحلبة نبات أصفر اللون وهي بذور كما أنها نبات قديم حيث ثبت أن الحلبة كان لها إستخدامات في عصر ما قبل الميلاد لعلاج الحروق وغيره من الإستعمالات الطبية وتقدم الشركه معبأ ومفروز أليا',
    image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
    color: 'from-teal-600 to-teal-800',
    types: []
  },
];


const getDescLimit = (desc: string) =>{
  const limit = 100;
  return desc.length > limit ? desc.substring(0, limit) + '...' : desc;
}

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
              640: { slidesPerView: 2, spaceBetween: 20 },
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
                    {/* <div className="absolute top-3 left-3">
                      <span className="bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                        {product.tag}
                      </span>
                    </div> */}
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
                    <p className="text-gray-500 text-sm leading-relaxed">{getDescLimit(product.desc)}</p>
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