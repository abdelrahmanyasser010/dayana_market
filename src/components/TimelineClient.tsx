"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Clock,
  Sparkles,
  Heart,
  ShoppingBag,
  Check,
  Calendar,
  Compass,
  ArrowUpRight
} from "lucide-react";
import { HISTORICAL_ERAS, type Product } from "@/lib/types";
import { useStore } from "./StoreProvider";

export function TimelineClient({ products }: { products: Product[] }) {
  const { language, addToCart, wishlist, toggleWishlist } = useStore();
  const isAr = language === "ar";

  const [activeEraId, setActiveEraId] = useState<string>("1900-1920");
  const [addedSku, setAddedSku] = useState<string | null>(null);

  const eraArtworkMap: Record<string, string> = {
    "pre-1900": "/media/extracted/epoch_medieval.webp",
    "1900-1920": "/media/extracted/epoch_biplane.webp",
    "1920-1940": "/media/extracted/epoch_train.webp",
    "1940-1960": "/media/extracted/epoch_car.webp",
    "1960-1980": "/media/extracted/prod_wooden_radio.webp",
    "1980-2000": "/media/extracted/cat_toys.webp"
  };

  const selectedEra = HISTORICAL_ERAS.find((e) => e.id === activeEraId) || HISTORICAL_ERAS[1];
  const eraProducts = products.filter((p) => p.eraId === selectedEra.id);

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
    <div className="antiqueTimelinePage">
      {/* 1. Atmospheric Historic Cover Banner (No Black Void) */}
      <section className="timelineHistoricBanner" aria-label="Timeline Banner">
        <div className="timelineBannerBackdrop">
          <img
            src="/media/extracted/banner_timeline_eras.webp"
            alt="رحلة عبر الزمن - ديانا أنتيك"
            className="timelineBannerBgImg"
          />
          <div className="timelineBannerOverlay" />
        </div>

        <div className="timelineBannerContent">
          <nav className="antiqueBreadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">{isAr ? "الرئيسية" : "Home"}</Link>
            <span className="breadcrumbSep">›</span>
            <span>{isAr ? "رحلة عبر الزمن" : "Journey Through Time"}</span>
          </nav>
          <div className="timelineEyebrow">
            <Compass size={14} className="goldIcon" />
            <span>{isAr ? "الاستكشاف الكرونولوجي والتاريخي" : "Chronological Archive Navigation"}</span>
          </div>
          <h1 className="timelineBannerTitle">
            {isAr ? "رحلة عبر الزمن .. استكشف المقتنيات عبر العصور" : "Journey Through Time"}
          </h1>
          <p className="timelineBannerSubtitle">
            {isAr
              ? "سافر عبر محطات التاريخ من عصر النهضة والقرن التاسع عشر إلى أواخر القرن العشرين. شاهد كيف تطورت أدوات الحياة والاتصال والموسيقى، واقتنِ قطعاً حقيقية عاشت تلك الأزمنة."
              : "Travel chronologically through historical epochs: from Victorian horology and Edwardian acoustic recordings to mid-century industrial design."}
          </p>
        </div>
      </section>

      {/* 2. Interactive Chronological Epochs Bar */}
      <section className="timelineErasNavigatorSection">
        <div className="erasNavigatorHeader">
          <h2>{isAr ? "اختر عصراً تاريخياً لبدء الرحلة" : "Select an Era to Begin Journey"}</h2>
        </div>

        <div className="erasTabsTrack">
          {HISTORICAL_ERAS.map((era) => {
            const isActive = activeEraId === era.id;
            const artwork = eraArtworkMap[era.id] || "/media/extracted/epoch_car.webp";
            return (
              <button
                key={era.id}
                type="button"
                onClick={() => setActiveEraId(era.id)}
                className={`eraTabCardUnified ${isActive ? "activeEraTabCard" : ""}`}
              >
                <div className="eraTabThumbWrap">
                  <img src={artwork} alt={era.label} />
                </div>
                <div className="eraTabInfo">
                  <span className="eraTabYears">{era.years}</span>
                  <span className="eraTabLabel">{isAr ? era.label : era.labelEn}</span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. Selected Era Spotlight Card + Products */}
      <section className="selectedEraShowcaseSection">
        <div className="eraSpotlightCard">
          <div className="eraSpotlightHeader">
            <div className="eraSpotlightYearsBadge">
              <Calendar size={15} className="goldIcon" />
              <span>{selectedEra.years}</span>
            </div>
            <h2>{isAr ? selectedEra.label : selectedEra.labelEn}</h2>
            <p className="eraSpotlightDesc">
              {isAr ? selectedEra.description : selectedEra.descriptionEn}
            </p>
          </div>

          <div className="eraSpotlightMetaBar">
            <span className="eraItemsCount">
              {eraProducts.length} {isAr ? "مقتنيات موثقة من هذا العصر" : "verified artifacts catalogued"}
            </span>
            <Link href={`/shop?era=${selectedEra.id}`} className="eraShopLink">
              <span>{isAr ? "تصفح معروضات هذا العصر في المتجر" : "Explore Marketplace"}</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Products of the Selected Era */}
        <div className="eraProductsContainer">
          <h3 className="eraProductsTitle">
            {isAr
              ? `المقتنيات المتاحة للاقتناء من ${selectedEra.label}`
              : `Available Artifacts from ${selectedEra.labelEn}`}
          </h3>

          {eraProducts.length > 0 ? (
            <div className="eraProductsGrid">
              {eraProducts.map((product) => {
                const isWished = wishlist.includes(product.id);
                const isAdded = addedSku === product.id;
                return (
                  <div key={product.id} className="antiqueShopCard">
                    <div className="shopCardBadges">
                      <button
                        type="button"
                        className={`antiqueWishBtn ${isWished ? "isWished" : ""}`}
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Wishlist"
                      >
                        <Heart size={15} fill={isWished ? "var(--gold)" : "none"} />
                      </button>
                      <span className="verifiedInspectionBadge">
                        {isAr ? "مفحوصة ✓" : "Inspected ✓"}
                      </span>
                    </div>

                    <Link href={`/product/${product.slug}`} className="shopCardMedia">
                      <img src={product.images[0]} alt={product.name} loading="lazy" />
                    </Link>

                    <div className="shopCardBody">
                      <div className="shopCardMeta">
                        <span className="shopCardEra">{product.yearCirca || product.eraLabel}</span>
                        {product.origin && (
                          <span className="shopCardOrigin">• {product.origin.split("–")[0]}</span>
                        )}
                      </div>

                      <Link href={`/product/${product.slug}`}>
                        <h3 className="shopCardTitle">
                          {isAr ? product.name : (product.nameEn || product.name)}
                        </h3>
                      </Link>

                      <div className="shopCardPriceRow">
                        <span className="shopCardPrice">
                          {product.price.toLocaleString("ar-EG")} {isAr ? "ج.م" : "EGP"}
                        </span>
                      </div>

                      <button
                        type="button"
                        className={`shopAddToCartBtn ${isAdded ? "btnAddedSuccess" : ""}`}
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
                            <span>{isAr ? "أضف للسلة" : "Add to Bag"}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="emptyEraState">
              <Clock size={36} className="goldIcon" />
              <p>
                {isAr
                  ? "جاري أرشفة وتوثيق مقتنيات إضافية لهذا العصر التاريخي قريباً."
                  : "Curators are currently documenting additional acquisitions for this epoch."}
              </p>
              <Link href="/shop" className="antiqueGoldCta">
                {isAr ? "تصفح جميع المقتنيات" : "View All Collectibles"}
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
