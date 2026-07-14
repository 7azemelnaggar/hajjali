/* ═══════════════════════════════════════════════════════════════
   Shared Product Data & Category Definitions
   ═══════════════════════════════════════════════════════════════ */

export interface Product {
  name: string;
  nameAr: string;
  desc: string;
  descAr: string;
  image: string;
  color: string;
  types: string[];
  typesAr: string[];
  category: string;
}

export interface Category {
  slug: string;
  name: string;
  nameAr: string;
  image: string;
  color: string;
}

/* ── Categories ─────────────────────────────────────────────── */

export const categories: Category[] = [
  {
    slug: 'legumes',
    name: 'Legumes',
    nameAr: 'بقوليات',
    image: 'https://res.cloudinary.com/dyissekq4/image/upload/v1784032222/legumes_dhrxry.jpg',
    color: 'from-amber-700 to-amber-900',
  },
  {
    slug: 'rice',
    name: 'Rice',
    nameAr: 'أرز',
    image: 'https://res.cloudinary.com/dyissekq4/image/upload/v1784032892/rice_category_gsxpin.jpg',
    color: 'from-yellow-700 to-amber-900',
  },
  {
    slug: 'nuts',
    name: 'Nuts',
    nameAr: 'مكسرات',
    image: 'https://res.cloudinary.com/dyissekq4/image/upload/v1784032895/nuts_y1bofq.png',
    color: 'from-stone-600 to-stone-800',
  },
  {
    slug: 'spices',
    name: 'Spices',
    nameAr: 'العطارة',
    image: 'https://res.cloudinary.com/dyissekq4/image/upload/v1784032892/Spices_p1cuzn.jpg',
    color: 'from-teal-700 to-teal-900',
  },
];

/* ── Products ───────────────────────────────────────────────── */

export const products: Product[] = [
  // ── Legumes ──────────────────────────────────────────────────
  {
    name: 'Faba Beans',
    nameAr: 'الفول',
    desc: 'A staple legume valued for its rich flavor, versatility, and strong presence in traditional dishes.',
    descAr: 'بقوليات أساسية تُقدر بنكهتها الغنية وتعدد استخداماتها ووجودها القوي في الأطباق التقليدية.',
    image: 'https://i.postimg.cc/13jkqXjK/fava-beans.jpg',
    color: 'from-amber-600 to-amber-800',
    types: ['English fava beans', 'Australian fava beans', 'Crushed Australian beans', 'Lithuanian crushed beans', 'Split crushed beans'],
    typesAr: ['فول إنجليزي', 'فول أسترالي', 'فول مجروش أسترالي', 'فول مجروش ليتواني', 'فول مجروش فص'],
    category: 'legumes',
  },
  {
    name: 'Crushed Faba Beans',
    nameAr: 'فول مجروش',
    desc: 'Finely processed for quick cooking, soups, and classic recipes with a smooth texture.',
    descAr: 'مُعالجة بدقة للطبخ السريع والحساء والوصفات التقليدية مع قوام ناعم.',
    image: 'https://i.postimg.cc/ZRkXwgZY/crushed-fava-beans.jpg',
    color: 'from-stone-500 to-stone-700',
    types: [],
    typesAr: [],
    category: 'legumes',
  },
  {
    name: 'White Beans',
    nameAr: 'فاصوليا بيضاء',
    desc: 'Nutritious and filling, white beans are a practical choice for healthy, balanced cooking.',
    descAr: 'غنية ومشبعة، وهي خيار عملي للطهي الصحي والمتوازن.',
    image: 'https://i.postimg.cc/3wxsyp1T/pexels-enginakyurt-10111852.jpg',
    color: 'from-neutral-400 to-neutral-600',
    types: [],
    typesAr: [],
    category: 'legumes',
  },
  {
    name: 'Black-eyed Peas',
    nameAr: 'لوبيا بلدي',
    desc: 'A versatile legume with a mild flavor and a long-standing place in home cooking.',
    descAr: 'بقوليات متعددة الاستخدامات بنكهة خفيفة ومكانة راسخة في الطهي المنزلي.',
    image: 'https://i.postimg.cc/MTPV6kTp/Black-eyed-peas.webp',
    color: 'from-yellow-400 to-yellow-600',
    types: [],
    typesAr: [],
    category: 'legumes',
  },
  {
    name: 'Lupines',
    nameAr: 'ترمس',
    desc: 'A protein-rich legume, traditionally soaked and cured to produce a popular savory snack.',
    descAr: 'بقوليات غنية بالبروتين، تُنقع وتُخلل تقليديًا لإنتاج وجبة خفيفة مالحة شهيرة.',
    image: 'https://i.postimg.cc/qq4KNdrH/lupine.jpg',
    color: 'from-yellow-600 to-lime-800',
    types: [],
    typesAr: [],
    category: 'legumes',
  },
  {
    name: 'Fenugreek',
    nameAr: 'حلبة',
    desc: 'A traditional herb with a distinctive aroma and a valued role in many recipes.',
    descAr: 'عشب تقليدي بنكهة مميزة ودور قيم في العديد من الوصفات.',
    image: 'https://i.postimg.cc/c1bVvrtZ/product-11.png',
    color: 'from-teal-600 to-teal-800',
    types: [],
    typesAr: [],
    category: 'legumes',
  },

  // ── Rice ─────────────────────────────────────────────────────
  {
    name: 'Rice',
    nameAr: 'أرز',
    desc: 'Premium rice selected for consistent quality, easy preparation, and excellent results in a range of dishes.',
    descAr: 'أرز متميز يُختار لضمان الجودة المتسقة وسهولة التحضير ونتائج ممتازة في مجموعة متنوعة من الأطباق.',
    image: 'https://i.postimg.cc/D0J94RPy/white-rice.jpg',
    color: 'from-yellow-700 to-amber-900',
    types: ['Egyptian rice fullino 2', 'Egyptian rice steam processed'],
    typesAr: ['أرز مصري فولينو 2', 'أرز مصري معالجة بالبخار'],
    category: 'rice',
  },

  // ── Nuts ──────────────────────────────────────────────────────
  {
    name: 'Yellow Pulp',
    nameAr: 'لب أصفر',
    desc: 'A fresh ingredient known for its natural taste and dependable quality in everyday meals.',
    descAr: 'مكوّن طازج يُعرف بنكهته الطبيعية وجودته الموثوقة في الوجبات اليومية.',
    image: 'https://i.postimg.cc/kGP7MTLz/Whats-App-Image-2026-07-05-at-4-20-25-PM.jpg',
    color: 'from-yellow-600 to-yellow-800',
    types: [],
    typesAr: [],
    category: 'nuts',
  },
  {
    name: 'Prepared Peanuts',
    nameAr: 'فول سوداني جاهز',
    desc: 'Carefully prepared peanuts that add texture and flavor to snacks and meals.',
    descAr: 'فول سوداني جاهز بعناية يضيف قوامًا ونكهة لوجبات والوجبات الخفيفة.',
    image: 'https://i.postimg.cc/pTtffHjx/Whats-App-Image-2026-07-05-at-4-10-30-PM.jpg',
    color: 'from-teal-600 to-teal-800',
    types: [],
    typesAr: [],
    category: 'nuts',
  },
  {
    name: 'Egyptian Golden Sesame',
    nameAr: 'سمسم مصري ذهبي',
    desc: 'Premium golden sesame seeds prized for their rich oil content and nutty flavor in cooking and oil pressing.',
    descAr: 'حبوب سمسم ذهبي فاخرة تتميز بمحتواها الغني من الزيت ونكهتها المميزة في الطهي وعصر الزيت.',
    image: 'https://i.postimg.cc/TPNgNsn2/Sesame-Seeds.jpg',
    color: 'from-yellow-500 to-amber-700',
    types: [],
    typesAr: [],
    category: 'nuts',
  },
  {
    name: 'Egyptian Raisins',
    nameAr: 'زبيب مصري',
    desc: 'Naturally sun-dried raisins with a rich sweetness, ideal for snacking, baking, and traditional dishes.',
    descAr: 'زبيب مجفف طبيعيًا بالشمس بحلاوة غنية، مثالي للتناول المباشر والخَبز والأطباق التقليدية.',
    image: 'https://i.postimg.cc/MTr5RT9s/raisins.webp',
    color: 'from-purple-700 to-purple-900',
    types: [],
    typesAr: [],
    category: 'nuts',
  },
  {
    name: 'Egyptian Dates',
    nameAr: 'تمر مصري',
    desc: 'Naturally sweet, energy-rich dates sourced for their soft texture and premium quality.',
    descAr: 'تمر طبيعي الحلاوة وغني بالطاقة، يُختار لقوامه الطري وجودته الفائقة.',
    image: 'https://i.postimg.cc/jSZMKZyM/Dates.webp',
    color: 'from-amber-800 to-red-900',
    types: [],
    typesAr: [],
    category: 'nuts',
  },

  // ── Aromatic Products ────────────────────────────────────────
  {
    name: 'Cumin',
    nameAr: 'كمون',
    desc: 'A fragrant spice used to bring warmth and depth to both savory dishes and baked goods.',
    descAr: 'توابل عطرية تُستخدم لإضفاء الدفء والعمق على الأطباق المالحة والمخبوزات.',
    image: 'https://i.postimg.cc/d33PzC7y/product-10.png',
    color: 'from-teal-600 to-teal-800',
    types: [],
    typesAr: [],
    category: 'spices',
  },
  {
    name: 'Fennel',
    nameAr: 'شمر',
    desc: 'An aromatic seed with a subtly sweet, licorice-like flavor used in teas, spice blends, and traditional remedies.',
    descAr: 'بذور عطرية بنكهة حلوة خفيفة تشبه العرقسوس، تُستخدم في الشاي وخلطات التوابل والوصفات التقليدية.',
    image: 'https://i.postimg.cc/K8q1mMjJ/FENNEL.webp',
    color: 'from-lime-600 to-green-800',
    types: [],
    typesAr: [],
    category: 'spices',
  },
];

/* ── Helpers ────────────────────────────────────────────────── */

export function getProductsForCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
