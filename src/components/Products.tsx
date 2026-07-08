// 'use client';
// import { useRef, useState } from 'react';
// import { motion, useInView } from 'framer-motion';
// import { ArrowLeft, ArrowRight } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const products = [

//   {
//     name: 'Fava Beans',
//     nameAr: 'الفول',
//     desc: 'ويعدّ من أكثر أنواع البقوليات شعبية خاصّة في مصر وبلاد الشام ويحضّر منه الكثير من الأطباق. وتقدم شركه الطباخ انواع عده منه معبأه ومفروزة اليا فى محتوى عبوة 25 كيلو .',
//     image: 'https://images.pexels.com/photos/34693984/pexels-photo-34693984.jpeg',
//     color: 'from-amber-600 to-amber-800',
//     types: [
//       'فول صحيح انجليزي',
//       "فول صحيح استرالي",
//       'مجروش استرالي',
//       'مجروش ليتواني',
//       'مجروش فص'
//     ]
//   },
//   {
//     name: 'crushed fava beans',
//     nameAr: 'فول مجروش',
//     desc: 'ويعدّ من أكثر أنواع البقوليات شعبية خاصّة في مصر وبلاد الشام ويحضّر منه الكثير من الأطباق. وتقدم شركه الطباخ انواع عده منه معبأه ومفروزة اليا فى محتوى عبوة 25 كيلو .',
//     image: 'https://i.postimg.cc/BnksHvry/Gemini-Generated-Image-io8w17io8w17io8w.png',
//     color: 'from-stone-500 to-stone-700',
//     types: []
//   },
//   {
//     name: 'Egyptian white pulp',
//     nameAr: 'لب أبيض مصري',
//     desc: 'يستمد اللب الابيض فوائده من العناصر الغذائية الرائعة التي توجد به. فهو غني بالفيتامينات والمعادن الضرورية للوظائف الحيوية للجسم. كما أنه يمد الجسم بالطاقة من خلال السعرات الحرارية وتقدم الشركه المحصول معبأ فى عبوات مخصصه',
//     image: 'https://images.pexels.com/photos/28110905/pexels-photo-28110905.jpeg',
//     color: 'from-yellow-600 to-yellow-800',
//     types: []
//   },
//   {
//     name: 'white beans',
//     nameAr: 'الفاصوليا البيضا',
//     desc: 'تعد الفاصوليا البيضاء من اهم البقوليات بسب قيمتها الغذائية العالية فهي معبأة بحمض الفوليك والبروتين و الكربوهيدرات و الألياف وبالتالي فهي غذاء أساسي عند فقدان الوزن وقد سميت الفاصوليا البيضاء بهذا الإسم لأنها ذات شكل محدب مثل الكلي وهي من أفضل الأطعمة التي تساعدك علي فقدان الوزن وذلك لأنها تحتوي علي نسبة عالية من الألياف، وبالتالي تعطي شعور بالشبع لمدة أطول وتحتوي الفاصوليا البيضاء أيضاً علي العديد من العناصر الغذائية مثل المعادن والفيتامينات و البروتينات . وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو .',
//     image: 'https://i.postimg.cc/cL97cpTS/Gemini-Generated-Image-tjna4gtjna4gtjna.png',
//     color: 'from-neutral-400 to-neutral-600',
//     types: []
//   },
//   {
//     name: 'Rice',
//     nameAr: 'أرز',
//     desc: 'الأرز الأبيض هو واحد من أشهر الأصناف التي تدخل في عديدٍ من الأطباق العربيّة المختلفة، إضافةً إلى كونه الغذاء الأساسي لأكثر من نصف سكّان العالم. وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25( كيلوجرام - 1 كيلو جرام) فى نوعين :',
//     image: 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=600',
//     color: 'from-yellow-700 to-amber-900',
//     types: [
//       '     ارزمصرى كاملينو 2( منقى الكترونيا ومعبأ اليا )',
//       "ارز مصرى (منقى الكترونيا ومعالج بالبخار )"
//     ]
//   },
//   {
//     name: 'لوبيا بلدي',
//     nameAr: 'لوبيا بلدي',
//     desc: 'اللوبيا هو نوع من البقوليات والتي يكون لها هيكل بيضاوي قليلا مع العين السوداء وتحظى بشعبية على نطاق واسع لنكهتها الطيبة، و يعتبر نبات اللوبيا من أغنى النباتات بمادة البروتين، حيث ترتفع فيه نسبة البروتين عن بقية البقوليات والكثير من النباتات الأخرى. وتحتوي اللوبيا على العديد من العناصر الغذائيه فهى. تحتوي على ما يقرب من جميع الفيتامينات والمعادن الأساسية . وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو',
//     image: 'https://images.pexels.com/photos/9362415/pexels-photo-9362415.jpeg',
//     color: 'from-yellow-400 to-yellow-600',
//     types: []
//   },
//   {
//     name: 'ترمس حلو',
//     nameAr: 'ترمس حلو',
//     desc: 'نبات الترمس هو نبات من الفصيلة البقولية، و تعود أصوله إلى دول البحر المتوسط هو عبارة عن بذور جافة تزرع في مصر وسوريا وفلسطين والأردن ولبنان، وهو نبات من الفصيلة القرنية ويتم زراعته برياً. وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو .',
//     image: 'https://images.pexels.com/photos/27680729/pexels-photo-27680729.jpeg',
//     color: 'from-orange-600 to-red-800',
//     types: []
//   },
//   {
//     name: 'فول سوداني مجهز',
//     nameAr: 'فول سوداني مجهز',
//     desc: 'الفول السوداني هو من المحاصيل الصيفية ينتمي إلى البقوليات ذوات الفلقتين ، تنبت أزهاره فوق التربة ثم تعمل على غرس الجنين ليكتمل نموه ، يوجد منه أصناف كثيرة وترجع أصنافه حسب حجم النبتة وكبرها . وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو .',
//     image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
//     color: 'from-teal-600 to-teal-800',
//     types: []
//   },
//   {
//     name: 'كراوية',
//     nameAr: 'كراوية',
//     desc: 'الكراويه من النباتات العطريه التى لها له شهرة واسعه فى مصر والوطن العربى و تستخدم في صناعة الجبن والفطائر والحلويات والخبز والكيك ، وتضاف الى الحساء والحليب ، وتخلط بالفاكهه المطبوخة والثمار المجففة ، وتستخدم الكراوية كعلف للماشية ، وتضاف الكراوية الى الادوية لتحسين نكهتها ، ويحتوي نبات الكراوية على الزيوت الدهنية والبروتين والزيت الطيار الذي يحتوي على مادة الكارفون الهاضمة والليمونين ويحتوي النبات ايضا على زيت ثابت وفلافونيدات ومواد سكرية ، ويستخدم من النبات الثمار والزيت الطيار ، والكراوية لها طعم حريف ورائحة مميزة وتقدم الشركه معبأ ومفروز أليا',
//     image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
//     color: 'from-teal-600 to-teal-800',
//     types: []
//   },
//   {
//     name: 'حلبة بلدي',
//     nameAr: 'حلبة بلدي',
//     desc: 'من اهم النباتات الموجودة على الأرض تتبع الحلبة فصيلة البقوليات. الحلبة نبات أصفر اللون وهي بذور كما أنها نبات قديم حيث ثبت أن الحلبة كان لها إستخدامات في عصر ما قبل الميلاد لعلاج الحروق وغيره من الإستعمالات الطبية وتقدم الشركه معبأ ومفروز أليا',
//     image: 'https://images.pexels.com/photos/5988203/pexels-photo-5988203.jpeg',
//     color: 'from-teal-600 to-teal-800',
//     types: []
//   },
// ];

// interface Product {
//   name: string;
//   nameAr: string;
//   desc: string;
//   image: string;
//   color: string;
//   types: string[];
// }

// const getDescLimit = (desc: string) => {
//   const limit = 100;
//   return desc.length > limit ? desc.substring(0, limit) + '...' : desc;
// }

// export default function Products() {
//   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const ref = useRef(null);
//   const inView = useInView(ref, { once: true, margin: '-60px' });

//   const openPopup = (product: any) => {
//     setSelectedProduct(product);
//     setIsPopupOpen(true);
//   }
//   return (
//     <section id="products" className="section-padding bg-white relative overflow-hidden">
//       <div className="absolute inset-0 arabic-pattern pointer-events-none" />

//       {/* open popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black/50 z-50 hidden" id="popup-overlay">
//           <div className="fixed inset-0 z-50 hidden" id="popup-content">
//             <img src={selectedProduct?.image} alt={selectedProduct?.name} className="absolute top-0 left-0 w-full h-full object-cover opacity-20" />
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-lg">
//               <h3 className="font-display text-2xl font-bold text-navy-800 mb-4" id="popup-title">{selectedProduct?.name}</h3>
//               <p className="text-gray-600 mb-4" id="popup-desc">{selectedProduct?.desc}</p>
//               <ul className="list-disc list-inside text-gray-600 mb-4" id="popup-types">
//                 {selectedProduct?.types.map((type, index) => (
//                   <li key={index}>{type}</li>
//                 ))}
//               </ul>
//               <button
//                 className="btn-primary"
//                 onClick={() => document.getElementById('popup-overlay')?.classList.add('hidden')}
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>)
//       }

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

//         {/* Product Swiper */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="pb-12" // space for pagination dots
//         >
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             slidesPerView={1}
//             spaceBetween={24}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
//             breakpoints={{
//               640: { slidesPerView: 2, spaceBetween: 20 },
//               1024: { slidesPerView: 3, spaceBetween: 24 },
//               1280: { slidesPerView: 4, spaceBetween: 24 },
//             }}
//             className="!pb-10" // extra bottom padding for dots inside swiper
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.name} onClick={() => { openPopup(product); }}>
//                 <div className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full">
//                   {/* Image */}
//                   <div className="relative h-52 overflow-hidden">
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

//                     {/* Tag */}
//                     {/* <div className="absolute top-3 left-3">
//                       <span className="bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
//                         {product.tag}
//                       </span>
//                     </div> */}
//                   </div>

//                   {/* Content */}
//                   <div className="p-5">
//                     <div className="flex items-start justify-between mb-2">
//                       <div>
//                         <h3 className="font-display font-bold text-navy-800 text-lg leading-tight">{product.name}</h3>
//                         <p className="font-arabic text-brand-500 text-sm">{product.nameAr}</p>
//                       </div>
//                       <div className="w-8 h-8 rounded-full bg-cream-100 group-hover:bg-brand-500 flex items-center justify-center transition-colors mt-1 shrink-0">
//                         <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
//                       </div>
//                     </div>
//                     <p className="text-gray-500 text-sm leading-relaxed">{getDescLimit(product.desc)}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </motion.div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="text-center mt-4"
//         >
//           <button
//             onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
//             className="btn-primary"
//           >
//             Request a Catalog
//             <ArrowLeft size={18} />
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
'use client';
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Package } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const products = [
  {
    name: 'Fava Beans',
    nameAr: 'الفول',
    desc: 'ويعدّ من أكثر أنواع البقوليات شعبية خاصّة في مصر وبلاد الشام ويحضّر منه الكثير من الأطباق. وتقدم شركه الطباخ انواع عده منه معبأه ومفروزة اليا فى محتوى عبوة 25 كيلو.',
    image: 'https://i.postimg.cc/13jkqXjK/fava-beans.jpg',
    color: 'from-amber-600 to-amber-800',
    types: ['فول صحيح انجليزي', 'فول صحيح استرالي', 'مجروش استرالي', 'مجروش ليتواني', 'مجروش فص'],
  },
  {
    name: 'Crushed Fava Beans',
    nameAr: 'فول مجروش',
    desc: 'ويعدّ من أكثر أنواع البقوليات شعبية خاصّة في مصر وبلاد الشام ويحضّر منه الكثير من الأطباق. وتقدم شركه الطباخ انواع عده منه معبأه ومفروزة اليا فى محتوى عبوة 25 كيلو.',
    image: 'https://i.postimg.cc/ZRkXwgZY/crushed-fava-beans.jpg',
    color: 'from-stone-500 to-stone-700',
    types: [],
  },
  {
    name: 'Yellow Pulp',
    nameAr: 'لب سوبر',
    desc: 'يستمد اللب الابيض فوائده من العناصر الغذائية الرائعة التي توجد به. فهو غني بالفيتامينات والمعادن الضرورية للوظائف الحيوية للجسم.',
    image: 'https://i.postimg.cc/kGP7MTLz/Whats-App-Image-2026-07-05-at-4-20-25-PM.jpg',
    color: 'from-yellow-600 to-yellow-800',
    types: [],
  },
  {
    name: 'White Beans',
    nameAr: 'الفاصوليا البيضا',
    desc: 'تعد الفاصوليا البيضاء من اهم البقوليات بسب قيمتها الغذائية العالية فهي معبأة بحمض الفوليك والبروتين والكربوهيدرات والألياف.',
    image: 'https://i.postimg.cc/3wxsyp1T/pexels-enginakyurt-10111852.jpg',
    color: 'from-neutral-400 to-neutral-600',
    types: [],
  },
  {
    name: 'Rice',
    nameAr: 'أرز',
    desc: 'الأرز الأبيض هو واحد من أشهر الأصناف التي تدخل في عديدٍ من الأطباق العربيّة المختلفة. وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلوجرام.',
    image: 'https://i.postimg.cc/W1brxbS7/pexels-maddyfreddie-7851798.jpg',
    color: 'from-yellow-700 to-amber-900',
    types: ['ارز مصرى كاملينو 2 (منقى الكترونيا ومعبأ اليا)', 'ارز مصرى (منقى الكترونيا ومعالج بالبخار)'],
  },
  {
    name: 'Black-eyed Peas',
    nameAr: 'لوبيا بلدي',
    desc: 'اللوبيا هو نوع من البقوليات والتي يكون لها هيكل بيضاوي قليلا مع العين السوداء وتحظى بشعبية على نطاق واسع لنكهتها الطيبة.',
    image: 'https://i.postimg.cc/MTPV6kTp/Black-eyed-peas.webp',
    color: 'from-yellow-400 to-yellow-600',
    types: [],
  },
  {
    name: 'Sweet Lupins',
    nameAr: 'ترمس حلو',
    desc: 'نبات الترمس هو نبات من الفصيلة البقولية، وتعود أصوله إلى دول البحر المتوسط. هو عبارة عن بذور جافة تزرع في مصر وسوريا وفلسطين والأردن ولبنان.',
    image: 'https://i.postimg.cc/xTSTXxbF/sweet-lupin.webp',
    color: 'from-orange-600 to-red-800',
    types: [],
  },
  {
    name: 'Prepared Peanuts',
    nameAr: 'فول سوداني مجهز',
    desc: 'الفول السوداني هو من المحاصيل الصيفية ينتمي إلى البقوليات ذوات الفلقتين. وتقدم الشركه معبأ ومفروز أليا فى محتوى عبوة 25 كيلو.',
    image: 'https://i.postimg.cc/pTtffHjx/Whats-App-Image-2026-07-05-at-4-10-30-PM.jpg',
    color: 'from-teal-600 to-teal-800',
    types: [],
  },
  {
    name: 'Cumin',
    nameAr: 'كراوية',
    desc: 'الكراويه من النباتات العطريه التى لها شهرة واسعه فى مصر والوطن العربى وتستخدم في صناعة الجبن والفطائر والحلويات والخبز والكيك.',
    image: 'https://i.postimg.cc/d33PzC7y/product-10.png',
    color: 'from-teal-600 to-teal-800',
    types: [],
  },
  {
    name: 'Fenugreek',
    nameAr: 'حلبة بلدي',
    desc: 'من اهم النباتات الموجودة على الأرض تتبع الحلبة فصيلة البقوليات. الحلبة نبات أصفر اللون وهي بذور كما أنها نبات قديم.',
    image: 'https://i.postimg.cc/c1bVvrtZ/product-11.png',
    color: 'from-teal-600 to-teal-800',
    types: [],
  },
];

interface Product {
  name: string;
  nameAr: string;
  desc: string;
  image: string;
  color: string;
  types: string[];
}

const getDescLimit = (desc: string) => {
  const limit = 100;
  return desc.length > limit ? desc.substring(0, limit) + '...' : desc;
};

// Fastest possible spring — feels instant but still has motion
const popupVariants = {
  hidden:  { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1,    y: 0,
    transition: { duration: 0.15, ease: 'easeOut' } },
  exit:    { opacity: 0, scale: 0.96, y: 8,
    transition: { duration: 0.1,  ease: 'easeIn' } },
};

const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.12 } },
  exit:    { opacity: 0, transition: { duration: 0.1  } },
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const featuredProducts = products.slice(0, 4);
  const remainingProducts = products.slice(4);

  const openPopup  = (product: Product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern pointer-events-none" />

      {/* ── Popup ── */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop — no blur, just dark opacity (blur causes GPU stutter) */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closePopup}
              className="fixed inset-0 z-50 bg-black/55"
            />

            {/* Modal */}
            <motion.div
              key="modal"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto"
              >
                {/* Hero image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedProduct.color} opacity-40`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Title over image */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">
                      {selectedProduct.name}
                    </h3>
                    <p className="font-arabic text-brand-300 text-base mt-0.5">
                      {selectedProduct.nameAr}
                    </p>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={closePopup}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 border border-white/20 flex items-center justify-center text-white hover:bg-black/60 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Body */}
                <div className="p-6" dir="ltr">
                  <p className="text-gray-600 leading-relaxed text-sm mb-5 font-arabic text-left">
                    {selectedProduct.desc}
                  </p>

                  {selectedProduct.types.length > 0 && (
                    <div className="bg-cream-50 border border-cream-200 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Package size={15} className="text-brand-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                          الأنواع المتاحة
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {selectedProduct.types.map((type, i) => (
                          <li key={i} className="flex items-center gap-2.5 text-sm text-gray-700 font-arabic">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400 shrink-0" />
                            {type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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
            Featured
            <span className="text-gradient"> Selection</span>
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
          className={showAll ? 'pb-6' : 'pb-12'}
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
            className="!pb-10"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.name} onClick={() => openPopup(product)}>
                <div className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-3 right-3 bg-brand-500 text-white text-[11px] font-semibold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full shadow-lg">
                      الأكثر مبيعا
                    </span>
                  </div>
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

        <AnimatePresence mode="wait">
          {showAll && (
            <motion.div
              key="expanded-products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.35 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              layout
            >
              {remainingProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full"
                  onClick={() => openPopup(product)}
                  layout
                >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
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
              </motion.div>
            ))}
          </motion.div>
        )}
        </AnimatePresence>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-8"
          >
            <button
              onClick={() => setShowAll(true)}
              className="btn-primary"
            >
              Show More
              <ArrowLeft size={18} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}