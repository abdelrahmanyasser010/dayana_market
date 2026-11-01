"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  Radio,
  Phone,
  Disc,
  Coffee,
  Heart,
  ShoppingBag,
  Check,
  ArrowLeft,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Product } from "@/lib/types";
import { useStore } from "./StoreProvider";

export function HeritageClient({ products }: { products: Product[] }) {
  const { language, addToCart, wishlist, toggleWishlist } = useStore();
  const isAr = language === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [activeTheme, setActiveTheme] = useState<string>("all");
  const [addedSku, setAddedSku] = useState<string | null>(null);

  // Filter products that have isEgyptianHeritage = true
  const egyptianProducts = products.filter((p) => p.isEgyptianHeritage);

  const heritageThemes = [
    {
      id: "radios",
      icon: Radio,
      categoryMatch: "radios",
      title: isAr ? "راديو الصالون وأم كلثوم" : "Console Radios & Om Kalthoum",
      desc: isAr
        ? "طقس الخميس الأول من كل شهر حين كانت تخلو شوارع القاهرة ويلتف الجميع حول راديو الصمامات الخشبي لسماع كوكب الشرق."
        : "The sacred Thursday night broadcast ritual when Egyptian families gathered around warm vacuum tube radios.",
      cta: isAr ? "استعرض راديوهات الصالونات" : "Browse Vintage Radios"
    },
    {
      id: "phones",
      icon: Phone,
      categoryMatch: "phones",
      title: isAr ? "تليفون القرص والاتصالات الأولى" : "Rotary Telephones in Cairo Salons",
      desc: isAr
        ? "هواتف الباكليت السوداء التي كانت تتوسط صالونات جاردن سيتي ومصر الجديدة وتحمل أرقاماً خماسية وذكريات أحاديث المساء."
        : "Black Bakelite rotary phones that connected mid-century Egyptian aristocratic homes.",
      cta: isAr ? "استعرض هواتف الباكليت" : "Browse Rotary Phones"
    },
    {
      id: "decor",
      icon: Coffee,
      categoryMatch: "decor",
      title: isAr ? "صواني ودلال خان الخليلي" : "Khan el-Khalili Chiseled Brass",
      desc: isAr
        ? "أصوات مطارق أسطوات النحاس في حي الجمالية وصواني الشاي والقهوة المحفورة يدوياً بأبيات الشعر والترحاب."
        : "Hand-hammered brass tea trays crafted by master coppersmiths in Al-Gamaleya and Khan el-Khalili.",
      cta: isAr ? "استعرض نحاسيات خان الخليلي" : "Browse Chiseled Brass"
    },
    {
      id: "audio",
      icon: Disc,
      categoryMatch: "vintage-audio",
      title: isAr ? "أسطوانات الفونوغراف والجراموفون" : "Shellac 78 RPM Acoustic Records",
      desc: isAr
        ? "أوائل التسجيلات النادرة لسيد درويش ومحمد عبد الوهاب التي أطربت سرايات المحروسة ورواد سوق ديانا القديم."
        : "Historic shellac acoustic recordings by Sayed Darwish and early masters echoing through historic Cairo.",
      cta: isAr ? "استعرض الجراموفونات النادرة" : "Browse Gramophones"
    }
  ];

  const filteredPieces = activeTheme === "all"
    ? egyptianProducts
    : egyptianProducts.filter((p) => {
        const theme = heritageThemes.find((t) => t.id === activeTheme);
        return theme ? p.category.toLowerCase().includes(theme.categoryMatch) : true;
      });

  function handleAddToCart(product: Product) {
    const variant = product.variants[0];
    if (!variant) return;
    addToCart(product, {
      color: variant.color,
      size: variant.size,
      quantity: 1
    });
    setAddedSku(product.id);
    setTimeout(() => setAddedSku(null), 1800);
  }

  return (
    <div className="antiqueHeritagePage">
      {/* 1. Atmospheric Historic Cover Banner (Cairo Streetscape & Antique Tram) */}
      <section className="heritageHistoricBanner" aria-label="Heritage Banner">
        <div className="heritageBannerBackdrop">
          <img
            src="/media/extracted/banner_heritage_cairo.webp"
            alt="من ذاكرة مصر - ديانا أنتيك"
            className="heritageBannerBgImg"
          />
          <div className="heritageBannerOverlay" />
        </div>

        <div className="heritageBannerContent">
          <nav className="antiqueBreadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">{isAr ? "الرئيسية" : "Home"}</Link>
            <span className="breadcrumbSep">›</span>
            <span>{isAr ? "من ذاكرة مصر" : "Egyptian Heritage"}</span>
          </nav>
          <div className="heritageEyebrow">
            <Sparkles size={14} className="goldIcon" />
            <span>{isAr ? "نوستالجيا الزمن الجميل وسوق ديانا" : "Nostalgia of Egypt's Golden Eras"}</span>
          </div>
          <h1 className="heritageBannerTitle">
            {isAr ? "من ذاكرة مصر زمان" : "From The Memory of Egypt"}
          </h1>
          <p className="heritageBannerSubtitle">
            {isAr
              ? "رحلة في تفاصيل البيت والشارع المصري في النصف الأول من القرن العشرين. نربط كل مقتنى أثري بحكايته الواقعية في صالونات القاهرة والإسكندرية؛ لتعيش نوستالجيا زمن الفن الجميل كما كانت."
              : "A heartfelt journey into the sights, sounds, and domestic artifacts of mid-century Egypt—connecting authentic heirlooms to their living cultural stories."}
          </p>
        </div>
      </section>

      {/* 2. Interactive Cultural Themes (Now Clearly Linked to Collectibles) */}
      <section className="heritageThemesSection">
        <div className="themesSectionHeader">
          <h2>{isAr ? "أبواب الذاكرة المصرية" : "Chapters of Egyptian Heritage"}</h2>
          <p>{isAr ? "اختر باباً لتصفح حكاياته والمقتنيات المرتبطة به" : "Select a chapter to explore its stories and acquireable heirlooms"}</p>
        </div>

        <div className="heritageThemesGrid">
          {heritageThemes.map((theme) => {
            const Icon = theme.icon;
            const isActive = activeTheme === theme.id;
            return (
              <div
                key={theme.id}
                className={`heritageThemeCardUnified ${isActive ? "activeThemeCard" : ""}`}
                onClick={() => setActiveTheme(isActive ? "all" : theme.id)}
              >
                <div className="themeCardTop">
                  <div className="themeIconCircle">
                    <Icon size={22} className="goldIcon" />
                  </div>
                  <span className="themeBadge">
                    {isActive ? (isAr ? "معروض حالياً ✓" : "Active ✓") : (isAr ? "انقر للعرض" : "Click to view")}
                  </span>
                </div>
                <h3>{theme.title}</h3>
                <p>{theme.desc}</p>
                <div className="themeCardCta">
                  <span>{theme.cta}</span>
                  <ArrowIcon size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. The Real Egyptian Heritage Collectibles Available for Acquisition */}
      <section className="heritageProductsSection">
        <div className="heritageSectionHeader">
          <div className="headerLeft">
            <h2>{isAr ? "مقتنيات من ذاكرة مصر معروضة للاقتناء" : "Available Egyptian Heirlooms"}</h2>
            <p>
              {isAr
                ? "قطع أصلية مفحوصة وموثقة تاريخياً من صالونات مصر القديمة مع شحن مؤمن ومعاينة عند الاستلام."
                : "Authenticated mid-century domestic artifacts with physical inspection certificates."}
            </p>
          </div>
          {activeTheme !== "all" && (
            <button onClick={() => setActiveTheme("all")} className="heritageShowAllBtn">
              {isAr ? "عرض كل مقتنيات ذاكرة مصر" : "Show All Pieces"}
            </button>
          )}
        </div>

        <div className="heritageProductsGridUnified">
          {filteredPieces.map((product) => {
            const isWished = wishlist.includes(product.id);
            const isAdded = addedSku === product.id;
            return (
              <div key={product.id} className="heritageProductCard">
                <div className="cardTopBadges">
                  <button
                    type="button"
                    className={`antiqueWishBtn ${isWished ? "isWished" : ""}`}
                    onClick={() => toggleWishlist(product.id)}
                    aria-label="Wishlist"
                  >
                    <Heart size={15} fill={isWished ? "var(--gold)" : "none"} />
                  </button>
                  <span className="heritageOriginBadge">
                    {isAr ? "من ذاكرة مصر 🏛️" : "Heritage 🏛️"}
                  </span>
                </div>

                <Link href={`/product/${product.slug}`} className="heritageCardMedia">
                  <img src={product.images[0]} alt={product.name} loading="lazy" />
                </Link>

                <div className="heritageCardBody">
                  <div className="heritageCardMeta">
                    <span>{product.yearCirca || product.eraLabel}</span>
                    <span>• {product.origin?.split("–")[0]}</span>
                  </div>

                  <Link href={`/product/${product.slug}`}>
                    <h3 className="heritageCardTitle">{isAr ? product.name : (product.nameEn || product.name)}</h3>
                  </Link>

                  <p className="heritageCardUsage">
                    {product.originalUsage || product.subtitle}
                  </p>

                  <div className="heritageCardPriceRow">
                    <span className="heritageCardPrice">
                      {product.price.toLocaleString("ar-EG")} {isAr ? "ج.م" : "EGP"}
                    </span>
                  </div>

                  <div className="cardTrustNote">
                    <ShieldCheck size={12} className="goldIcon" />
                    <span>{isAr ? "فحص ومعاينة حية عند الاستلام" : "Live inspection on delivery"}</span>
                  </div>

                  <button
                    type="button"
                    className={`antiqueCtaBtn ${isAdded ? "btnAddedSuccess" : ""}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={isAdded}
                  >
                    {isAdded ? (
                      <>
                        <Check size={15} />
                        <span>{isAr ? "تمت الإضافة ✓" : "Added ✓"}</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={15} />
                        <span>{isAr ? "اقتنِ القطعة" : "Acquire Piece"}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
