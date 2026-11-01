export type ProductColor = {
  name: string;
  value: string;
};

export type ProductVariant = {
  id: string;
  sku: string;
  color: string;
  size: string;
  stock: number;
  lowStockAt?: number;
  active?: boolean;
};

export type StoryBehind = {
  eraContext: string;
  eraContextEn?: string;
  originAndUsage: string;
  originAndUsageEn?: string;
  designAndMaterials: string;
  designAndMaterialsEn?: string;
  historicalNotes: string;
  historicalNotesEn?: string;
  rarityNotes: string;
  rarityNotesEn?: string;
};

export type HistoricalEra = {
  id: string;
  label: string;
  labelEn: string;
  years: string;
  description: string;
  descriptionEn: string;
};

export const HISTORICAL_ERAS: HistoricalEra[] = [
  {
    id: "pre-1900",
    label: "ما قبل 1900",
    labelEn: "Pre-1900",
    years: "القرن التاسع عشر وما قبله",
    description: "عصر الثورة الصناعية الأولى، الساعات البندولية الفكتورية، الآلات النحاسية والملاحة البحرية.",
    descriptionEn: "Early industrial era, Victorian pendulum horology, maritime brass navigation instruments."
  },
  {
    id: "1900-1920",
    label: "1900 – 1920",
    labelEn: "1900 – 1920",
    years: "عصر البدايات والموسيقى الميكانيكية",
    description: "بداية انتشار الجراموفون بالنفير النحاسي، الساعات الميكانيكية، ووثائق وقطع البدايات الحديثة.",
    descriptionEn: "The birth of acoustic gramophones, mechanical brass horns, and dawn of modern domestic inventions."
  },
  {
    id: "1920-1940",
    label: "1920 – 1940",
    labelEn: "1920 – 1940",
    years: "عصر الآرت ديكو وزمن الفن الجميل",
    description: "ذروة حركة الآرت ديكو الهندسية، الآلات الكاتبة الكلاسيكية، وصواني النحاس المطروقة في خان الخليلي.",
    descriptionEn: "Golden Art Deco era, mechanical Arabic typewriters, hand-engraved Egyptian brass masterpieces."
  },
  {
    id: "1940-1960",
    label: "1940 – 1960",
    labelEn: "1940 – 1960",
    years: "عصر الباكليت والراديو الذهبي",
    description: "هواتف القرص الدوار المصنوعة من الباكليت الأسود، وراديوهات الصمامات الخشبية في صالونات مصر والشرق.",
    descriptionEn: "Bakelite rotary phones, warm glowing vacuum tube console radios, mid-century design icons."
  },
  {
    id: "1960-1980",
    label: "1960 – 1980",
    labelEn: "1960 – 1980",
    years: "عصر الكاميرات الفيلمية والريترو الملون",
    description: "ثورة التصوير التناظري 35mm، أجهزة الترانزستور، والمقتنيات الكلاسيكية ذات الطابع الريترو الجريء.",
    descriptionEn: "The golden age of 35mm mechanical film cameras, transistor portables, and bold retro aesthetics."
  },
  {
    id: "1980-2000",
    label: "1980 – 2000",
    labelEn: "1980 – 2000",
    years: "عصر الفينتاج المتأخر والمشغلات الأولى",
    description: "أجهزة الكاسيت والكاميرات الفورية ومقتنيات أواخر القرن العشرين التي أصبحت اليوم قطعاً نادرة للاقتناء.",
    descriptionEn: "Late vintage, classic cassette decks, instant film cameras, and nostalgic late 20th-century memorabilia."
  }
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  nameEn?: string;
  subtitle: string;
  subtitleEn?: string;
  description: string;
  descriptionEn?: string;
  price: number;
  compareAtPrice?: number;
  costPrice?: number;
  category: string;
  collection: string;
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  colors: ProductColor[];
  sizes: string[];
  variants: ProductVariant[];
  images: string[];
  spinFrames: string[];
  featured?: boolean;
  isNew?: boolean;
  material: string;
  fit: string;
  care: string;
  
  // Antique & History Specific Properties
  eraId?: string;
  eraLabel?: string;
  eraLabelEn?: string;
  origin?: string;
  originEn?: string;
  originalUsage?: string;
  originalUsageEn?: string;
  conditionState?: string;
  conditionStateEn?: string;
  authenticity?: string;
  authenticityEn?: string;
  rarity?: string;
  rarityEn?: string;
  dimensions?: string;
  weight?: string;
  yearCirca?: string;
  isEgyptianHeritage?: boolean;
  relatedArticleSlug?: string;
  story?: StoryBehind;
};

export function getLocalizedProductName(product: { name: string; nameEn?: string }, language: string): string {
  if (language === "en" && product.nameEn?.trim()) return product.nameEn.trim();
  return product.name;
}

export function getLocalizedProductSubtitle(product: { subtitle?: string; subtitleEn?: string }, language: string): string {
  if (language === "en" && product.subtitleEn?.trim()) return product.subtitleEn.trim();
  return product.subtitle || "";
}

export function getLocalizedProductDescription(product: { description?: string; descriptionEn?: string }, language: string): string {
  if (language === "en" && product.descriptionEn?.trim()) return product.descriptionEn.trim();
  return product.description || "";
}

export function getLocalizedCategory(category: string, language: string): string {
  if (language === "ar") {
    const map: Record<string, string> = {
      "vintage-phones": "هواتف القرص والاتصالات",
      "vintage-audio": "الراديو والفونوغراف والموسيقى",
      "vintage-cameras": "كاميرات وبصريات فيلمية",
      "antiques-clocks": "ساعات أثرية ومقاييس الوقت",
      "copper-brass": "نحاسيات ومشغولات يدوية",
      "egyptian-heritage": "من ذاكرة مصر زمان",
      "classic-tools": "آلات كاتبة وأدوات كلاسيكية",
      "marine-scientific": "ملاحة وأجهزة علمية قديمة",
      // Backwards compatible apparel terms if ever needed
      "t-shirts": "مقتنيات نادرة",
      "hoodies": "تحف مكتبية",
      "sweatshirts": "أجهزة كلاسيكية",
      "pants": "أثاث عتيق",
      "jackets": "تحف معدنية",
      "accessories": "إكسسوارات تراثية"
    };
    return map[category.toLowerCase()] || category;
  } else {
    const enMap: Record<string, string> = {
      "vintage-phones": "Rotary Phones & Comms",
      "vintage-audio": "Gramophones & Vintage Audio",
      "vintage-cameras": "Classic Film Cameras",
      "antiques-clocks": "Antique Clocks & Horology",
      "copper-brass": "Handmade Copper & Brass",
      "egyptian-heritage": "Egyptian Heritage & Memory",
      "classic-tools": "Typewriters & Classic Tools",
      "marine-scientific": "Naval & Scientific Antiques"
    };
    return enMap[category.toLowerCase()] || category;
  }
}

export function getLocalizedCollection(collection: string, language: string): string {
  if (language === "ar") {
    const map: Record<string, string> = {
      "egyptian-memory": "من ذاكرة مصر",
      "rare-masterpieces": "مقتنيات نادرة ومميزة",
      "mid-century": "روائع منتصف القرن العشرين",
      "victorian-era": "العصر الفكتوري وما قبله",
      "art-deco": "طراز الآرت ديكو الأصيل",
      "essentials": "مقتنيات كلاسيكية",
      "new drop": "وصل حديثاً للمتحف",
      "signature": "قطعة الأسبوع النادرة"
    };
    return map[collection.toLowerCase()] || collection;
  }
  return collection;
}

export function getLocalizedColorName(color: string, language: string): string {
  const arToEn: Record<string, string> = {
    "باكليت أسود": "Black Bakelite",
    "نحاس أصفر": "Polished Brass",
    "نحاس أحمر ومكفت": "Engraved Copper",
    "خشب ماهوجني": "Mahogany Wood",
    "خشب جوز مصقول": "Polished Walnut",
    "كروم وجلد أسود": "Chrome & Black Leather",
    "حديد صلب مطلي": "Enameled Cast Iron",
    "أسود": "Black",
    "أبيض": "White",
    "بيج": "Beige",
    "رمادي": "Grey",
    "بني": "Brown",
    "ذهبي عتيق": "Antique Gold",
    "برونزي": "Bronze"
  };
  const enToAr: Record<string, string> = {
    "black": "أسود",
    "brass": "نحاس أصفر",
    "copper": "نحاس أحمر",
    "wood": "خشب عتيق",
    "bronze": "برونزي",
    "gold": "ذهبي عتيق"
  };
  if (language === "en") {
    return arToEn[color] || color;
  } else {
    return enToAr[color.toLowerCase()] || color;
  }
}

export function getLocalizedSize(size: string, language: string): string {
  if (language === "ar") {
    if (size.toLowerCase() === "oversized" || size.toLowerCase() === "free size" || size === "قطعة فريدة") return "قطعة فريدة";
    if (size === "original") return "أصلية وحيدة";
  }
  return size;
}

export function getImagesForColor(product: Product, colorName: string): string[] {
  if (!colorName || !product.images || !product.images.length) {
    return product.images || [];
  }
  return product.images;
}

export type CartItem = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  nameEn?: string;
  image: string;
  price: number;
  color: string;
  size: string;
  sku: string;
  quantity: number;
  variantId?: string;
  maxStock?: number;
};
