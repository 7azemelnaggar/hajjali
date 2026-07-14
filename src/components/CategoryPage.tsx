'use client';
import { useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, X, Package, Home, ChevronRight, ChevronLeft, PackageOpen } from 'lucide-react';
import { getCategoryBySlug, getProductsForCategory, type Product } from './productData';

/* ───────────────────── Animation Variants ──────────────────── */

const popupVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15 } },
  exit: { opacity: 0, scale: 0.96, y: 8, transition: { duration: 0.1 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.1 } },
};

const getDescLimit = (desc: string) => {
  const limit = 100;
  return desc.length > limit ? desc.substring(0, limit) + '...' : desc;
};

/* ═══════════════════════════════════════════════════════════════
   Category Page — renders at /:categorySlug
   ═══════════════════════════════════════════════════════════════ */

interface CategoryPageProps {
  language: 'en' | 'ar';
}

export default function CategoryPage({ language }: CategoryPageProps) {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  const isAr = language === 'ar';

  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const categoryProducts = categorySlug ? getProductsForCategory(categorySlug) : [];

  const getDisplayName = (p: Product) => isAr ? p.nameAr : p.name;
  const getDisplayDesc = (p: Product) => isAr ? p.descAr : p.desc;
  const getDisplayTypes = (p: Product) => isAr ? p.typesAr : p.types;

  const content = isAr
    ? {
        home: 'الرئيسية',
        products: 'المنتجات',
        backToCategories: 'العودة لجميع الأصناف',
        availableTypes: 'الأنواع المتاحة',
        emptyTitle: 'لا توجد منتجات حالياً',
        emptyDesc: 'سيتم إضافة منتجات جديدة قريباً في هذا القسم.',
        browseCategories: 'تصفح الأقسام',
        notFoundTitle: 'القسم غير موجود',
        notFoundDesc: 'لم نتمكن من العثور على هذا القسم. يرجى العودة للصفحة الرئيسية.',
        goHome: 'العودة للرئيسية',
      }
    : {
        home: 'Home',
        products: 'Products',
        backToCategories: 'Back to All Categories',
        availableTypes: 'Available Types',
        emptyTitle: 'No Products Yet',
        emptyDesc: 'New products will be added to this category soon.',
        browseCategories: 'Browse Categories',
        notFoundTitle: 'Category Not Found',
        notFoundDesc: 'We couldn\'t find this category. Please go back to the home page.',
        goHome: 'Go Home',
      };

  const Chevron = isAr ? ChevronLeft : ChevronRight;
  const BackArrow = isAr ? ArrowRight : ArrowLeft;

  const openPopup = (product: Product) => setSelectedProduct(product);
  const closePopup = () => setSelectedProduct(null);

  /* ── 404: Category not found ── */
  if (!category) {
    return (
      <section className="section-padding bg-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="container-max text-center">
          <div className="w-20 h-20 rounded-full bg-cream-100 flex items-center justify-center mb-6 mx-auto">
            <PackageOpen size={36} className="text-brand-400" />
          </div>
          <h2 className="font-display text-3xl font-bold text-navy-800 mb-3">
            {content.notFoundTitle}
          </h2>
          <p className="text-gray-500 max-w-md mx-auto mb-6">{content.notFoundDesc}</p>
          <Link to="/" className="btn-primary inline-flex">
            {content.goHome}
            {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 arabic-pattern pointer-events-none" />

      {/* ── Product Detail Popup ── */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closePopup}
              className="fixed inset-0 z-50 bg-black/55"
            />
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
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white leading-tight">
                      {getDisplayName(selectedProduct)}
                    </h3>
                  </div>
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
                    {getDisplayDesc(selectedProduct)}
                  </p>
                  {getDisplayTypes(selectedProduct).length > 0 && (
                    <div className="bg-cream-50 border border-cream-200 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Package size={15} className="text-brand-500" />
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                          {content.availableTypes}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {getDisplayTypes(selectedProduct).map((type, i) => (
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
        {/* ── Category Hero Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl mb-10"
        >
          <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-3xl">
            <img
              src={category.image}
              alt={isAr ? category.nameAr : category.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-1.5 text-white/70 text-sm mb-3 flex-wrap">
                <Link
                  to="/"
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  <Home size={13} />
                  <span>{content.home}</span>
                </Link>
                <Chevron size={13} className="text-white/40" />
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors"
                >
                  {content.products}
                </button>
                <Chevron size={13} className="text-white/40" />
                <span className="text-white font-medium">
                  {isAr ? category.nameAr : category.name}
                </span>
              </nav>

              {/* Category title */}
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                {isAr ? category.nameAr : category.name}
              </h2>
            </div>
          </div>
        </motion.div>

        {/* ── Back Button ── */}
        <motion.div
          initial={{ opacity: 0, x: isAr ? 20 : -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 font-semibold transition-colors group text-sm"
          >
            <BackArrow size={16} className="group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
            {content.backToCategories}
          </button>
        </motion.div>

        {/* ── Products Grid or Empty State ── */}
        {categoryProducts.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.08 * index }}
                className="group relative bg-white rounded-3xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 cursor-pointer h-full"
                onClick={() => openPopup(product)}
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
                      <h3 className="font-display font-bold text-navy-800 text-lg leading-tight">{getDisplayName(product)}</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-cream-100 group-hover:bg-brand-500 flex items-center justify-center transition-colors mt-1 shrink-0">
                      <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{getDescLimit(getDisplayDesc(product))}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* ── Empty State ── */
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-cream-100 flex items-center justify-center mb-6">
              <PackageOpen size={36} className="text-brand-400" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-800 mb-3">
              {content.emptyTitle}
            </h3>
            <p className="text-gray-500 max-w-md mb-6">{content.emptyDesc}</p>
            <Link to="/" className="btn-primary inline-flex">
              {content.browseCategories}
              {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
            </Link>
          </motion.div>
        )}

        {/* ── Bottom Back Button ── */}
        {categoryProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="btn-outline"
            >
              <BackArrow size={16} />
              {content.backToCategories}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
