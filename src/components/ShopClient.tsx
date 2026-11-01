"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  SlidersHorizontal,
  Clock,
  Sparkles,
  Heart,
  ShoppingBag,
  Check,
  CheckCircle2,
  RotateCcw,
  Landmark,
  Calendar,
  Layers,
  ShieldCheck,
  Hourglass,
  Store,
  Gem,
  History
} from "lucide-react";
import { Product, HISTORICAL_ERAS } from "@/lib/types";
import { useStore } from "./StoreProvider";

const slug = (value: string) =>
  value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function ShopClient({
  products,
  initialCategory = "",
  initialEra = "",
  initialHeritage = false,
  initialSearch = ""
}: {
  products: Product[];
  initialCategory?: string;
  initialEra?: string;
  initialHeritage?: boolean;
  initialSearch?: string;
}) {
  const { language, addToCart, wishlist, toggleWishlist } = useStore();
  const isAr = language === "ar";

  // Mode: "all" | "heritage" | "timeline"
  const [activeMode, setActiveMode] = useState<"all" | "heritage" | "timeline">(
    initialHeritage ? "heritage" : initialEra ? "timeline" : "all"
  );

  const [category, setCategory] = useState<string>(initialCategory || "All");
  const [selectedEra, setSelectedEra] = useState<string>(initialEra || "All");
  const [egyptianOnly, setEgyptianOnly] = useState<boolean>(initialHeritage);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [sort, setSort] = useState("featured");
  const [inStockOnly, setInStockOnly] = useState(false);
  const [addedSku, setAddedSku] = useState<string | null>(null);

  // Dynamic Categories extracted directly from the database, updated dynamically per active scope
  const dynamicCategories = useMemo(() => {
    // Products scoped to active heritage or era filter
    const scoped = products.filter((p) => {
      if (egyptianOnly && !p.isEgyptianHeritage) return false;
      if (selectedEra !== "All" && p.eraId !== selectedEra) return false;
      return true;
    });

    const counts: Record<string, number> = {};
    scoped.forEach((p) => {
      const cat = p.category || "other";
      counts[cat] = (counts[cat] || 0) + 1;
    });

    const categoryNames: Record<string, { ar: string; en: string }> = {
      "furniture": { ar: "أثاث كلاسيكي", en: "Classic Furniture" },
      "phones": { ar: "تليفونات فينتيدج", en: "Vintage Phones" },
      "vintage-phones": { ar: "تليفونات فينتيدج", en: "Vintage Phones" },
      "clocks": { ar: "ساعات أنتيك", en: "Antique Clocks" },
      "antiques-clocks": { ar: "ساعات أنتيك", en: "Antique Clocks" },
      "radios": { ar: "راديوهات صالون", en: "Vintage Tube Radios" },
      "cameras": { ar: "كاميرات كلاسيكية", en: "Classic Cameras" },
      "vintage-cameras": { ar: "كاميرات كلاسيكية", en: "Classic Cameras" },
      "copper-brass": { ar: "نحاسيات وبورسلين", en: "Brass & Porcelain" },
      "decor": { ar: "تحف وديكورات", en: "Porcelain & Decor" },
      "vintage-audio": { ar: "جرامفونات وصوتيات", en: "Gramophones & Audio" }
    };

    const list = [
      { id: "All", labelAr: "جميع الأقسام", labelEn: "All Departments", count: scoped.length }
    ];

    // Collect unique keys
    const seenLabels = new Set<string>();
    Object.keys(counts).forEach((catId) => {
      const meta = categoryNames[catId] || { ar: catId, en: catId };
      if (!seenLabels.has(meta.ar)) {
        seenLabels.add(meta.ar);
        list.push({
          id: catId,
          labelAr: meta.ar,
          labelEn: meta.en,
          count: counts[catId] || 0
        });
      }
    });

    return list;
  }, [products, egyptianOnly, selectedEra]);

  // Historical Era Counts calculated dynamically
  const eraCounts = useMemo(() => {
    const scoped = egyptianOnly ? products.filter((p) => p.isEgyptianHeritage) : products;
    const counts: Record<string, number> = {};
    scoped.forEach((p) => {
      if (p.eraId) {
        counts[p.eraId] = (counts[p.eraId] || 0) + 1;
      }
    });
    return counts;
  }, [products, egyptianOnly]);

  const ERA_ICONS: Record<string, string> = {
    "pre-1900": "📜",
    "1900-1920": "🕰️",
    "1920-1940": "📻",
    "1940-1960": "📷",
    "1960-1980": "📺",
    "1980-2000": "📼"
  };

  // Switch between Experience Modes (All, Egyptian Heritage, Chronological Eras)
  function handleModeChange(mode: "all" | "heritage" | "timeline") {
    setActiveMode(mode);
    if (mode === "all") {
      setEgyptianOnly(false);
      setSelectedEra("All");
    } else if (mode === "heritage") {
      setEgyptianOnly(true);
      setSelectedEra("All");
    } else if (mode === "timeline") {
      setEgyptianOnly(false);
    }
  }

  const activeFilterCount =
    Number(category !== "All") +
    Number(selectedEra !== "All") +
    Number(egyptianOnly) +
    Number(Boolean(searchQuery.trim())) +
    Number(inStockOnly);

  const visible = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    let next = products.filter((product) => {
      if (category !== "All") {
        const catSlug = slug(category);
        const prodCatSlug = slug(product.category);
        if (catSlug !== prodCatSlug && !prodCatSlug.includes(catSlug) && !catSlug.includes(prodCatSlug)) {
          return false;
        }
      }
      if (selectedEra !== "All" && product.eraId !== selectedEra) return false;
      if (egyptianOnly && !product.isEgyptianHeritage) return false;
      if (q) {
        const textMatch =
          product.name.toLowerCase().includes(q) ||
          (product.nameEn && product.nameEn.toLowerCase().includes(q)) ||
          product.description.toLowerCase().includes(q) ||
          (product.eraLabel && product.eraLabel.toLowerCase().includes(q)) ||
          (product.origin && product.origin.toLowerCase().includes(q)) ||
          (product.story?.historicalNotes && product.story.historicalNotes.toLowerCase().includes(q));
        if (!textMatch) return false;
      }
      const available = product.variants.filter((variant) => variant.active !== false && variant.stock > 0);
      if (inStockOnly && available.length === 0) return false;
      return true;
    });

    next = [...next];
    if (sort === "price-low") next.sort((a, b) => a.price - b.price);
    if (sort === "price-high") next.sort((a, b) => b.price - a.price);
    if (sort === "new") next.sort((a, b) => Number(b.isNew) - Number(a.isNew));
    if (sort === "featured") next.sort((a, b) => Number(b.featured) - Number(a.featured));
    return next;
  }, [products, category, selectedEra, egyptianOnly, searchQuery, sort, inStockOnly]);

  function clearFilters() {
    setCategory("All");
    setSelectedEra("All");
    setEgyptianOnly(false);
    setSearchQuery("");
    setInStockOnly(false);
    setActiveMode("all");
  }

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
    <div className="antiqueShopPage">
      {/* 1. Atmospheric Historic Cover Banner */}
      <section className="shopHistoricBanner" aria-label="Shop Header Banner">
        <div className="shopBannerBackdrop">
          <img
            src="/media/extracted/banner_shop_marketplace.webp"
            alt="سوق ديانا للأنتيكات والمقتنيات التاريخية"
            className="shopBannerBgImg"
          />
          <div className="shopBannerOverlay" />
        </div>

        <div className="shopBannerContent">
          <nav className="antiqueBreadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">{isAr ? "الرئيسية" : "Home"}</Link>
            <span className="breadcrumbSep">›</span>
            <span>{isAr ? "متجر المقتنيات" : "Collectibles Shop"}</span>
          </nav>
          <h1 className="shopBannerTitle">
            {isAr ? "سوق ديانا للمقتنيات والتحف التاريخية" : "Diana Antique Collectibles Marketplace"}
          </h1>
          <p className="shopBannerSubtitle">
            {isAr
              ? "قطع نادرة ومفحوصة ماديةً مع توثيق كامل لأصلها وحكاياتها .. تجربة اقتناء آمنة مع المعاينة عند الاستلام."
              : "Verified rare antiques and authentic historical acquisitions with physical inspection certificates and white-glove delivery."}
          </p>
        </div>
      </section>

      {/* 2. Interactive Experience Selector Strip (Unified All-in-One Solution) */}
      <section className="shopExperienceBar" aria-label="Shopping Experience Modes">
        <div className="experienceBarInner">
          <button
            type="button"
            className={`experiencePill ${activeMode === "all" ? "activePill" : ""}`}
            onClick={() => handleModeChange("all")}
          >
            <span className="antiquePillMedallion allMedallion">
              <Store size={15} />
            </span>
            <span className="pillTitleText">{isAr ? "جميع المعروضات والتحف" : "All Collectibles"}</span>
            <span className="pillBadge">{products.length}</span>
          </button>

          <button
            type="button"
            className={`experiencePill ${activeMode === "heritage" ? "activePill" : ""}`}
            onClick={() => handleModeChange("heritage")}
          >
            <span className="antiquePillMedallion egyptMedallion">
              <Landmark size={15} />
            </span>
            <span className="pillTitleText">{isAr ? "من ذاكرة مصر زمان" : "Egyptian Heritage"}</span>
            <span className="pillBadge egyptBadge">
              {products.filter((p) => p.isEgyptianHeritage).length}
            </span>
          </button>

          <button
            type="button"
            className={`experiencePill ${activeMode === "timeline" ? "activePill" : ""}`}
            onClick={() => handleModeChange("timeline")}
          >
            <span className="antiquePillMedallion timeMedallion">
              <Hourglass size={15} />
            </span>
            <span className="pillTitleText">{isAr ? "رحلة العصور التاريخية" : "Historical Eras"}</span>
            {selectedEra !== "All" && (
              <span className="pillBadge eraSelectedBadge">
                {HISTORICAL_ERAS.find((e) => e.id === selectedEra)?.label || selectedEra}
              </span>
            )}
          </button>
        </div>

        {/* When Timeline Mode is Active: Show Timeline Era Track with historical icons */}
        {activeMode === "timeline" && (
          <div className="shopTimelineErasStrip">
            <button
              type="button"
              className={`eraChip ${selectedEra === "All" ? "activeEraChip" : ""}`}
              onClick={() => setSelectedEra("All")}
            >
              <span>{isAr ? "كل العصور" : "All Eras"}</span>
              <span className="eraChipCount">{products.length}</span>
            </button>
            {HISTORICAL_ERAS.map((era) => (
              <button
                key={era.id}
                type="button"
                className={`eraChip ${selectedEra === era.id ? "activeEraChip" : ""}`}
                onClick={() => setSelectedEra(era.id)}
              >
                <span className="eraChipIcon">{ERA_ICONS[era.id] || "⏳"}</span>
                <span>{isAr ? era.label : era.labelEn}</span>
                <small className="eraChipYears">({era.years})</small>
                <span className="eraChipCount">({eraCounts[era.id] || 0})</span>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* 3. Main Shop Area: Sidebar Filters on Right + Products Catalog on Left */}
      <div className="shopMainContainer">
        {/* SIDEBAR: Dynamic Filters generated from actual database */}
        <aside className="shopFiltersSidebar" aria-label="Filters">
          <div className="sidebarHeader">
            <div className="sidebarTitleWrap">
              <SlidersHorizontal size={18} className="goldIcon" />
              <h3>{isAr ? "تصفية النتائج" : "Filter Results"}</h3>
            </div>
            {activeFilterCount > 0 && (
              <button onClick={clearFilters} className="sidebarResetBtn" title="Reset Filters">
                <RotateCcw size={13} />
                <span>{isAr ? "إعادة ضبط" : "Reset"}</span>
              </button>
            )}
          </div>

          {/* Active Mode Notice Banner in Sidebar */}
          {activeMode === "heritage" && (
            <div className="sidebarActiveModeNotice heritageNotice">
              <Landmark size={14} className="goldIcon" />
              <span>{isAr ? "تصفية نشطة: من ذاكرة مصر زمان 🏛️" : "Egyptian Heritage Active"}</span>
            </div>
          )}
          {activeMode === "timeline" && (
            <div className="sidebarActiveModeNotice timelineNotice">
              <Hourglass size={14} className="goldIcon" />
              <span>{isAr ? "تصفية نشطة: رحلة العصور التاريخية ⏳" : "Historical Timeline Active"}</span>
            </div>
          )}

          {/* Quick Egyptian Heritage Filter */}
          <div className={`sidebarGroup heritageSpecialGroup ${egyptianOnly ? "activeHeritageSidebarBox" : ""}`}>
            <label className="antiqueCheckboxLabel">
              <input
                type="checkbox"
                checked={egyptianOnly}
                onChange={(e) => {
                  setEgyptianOnly(e.target.checked);
                  if (e.target.checked) {
                    setActiveMode("heritage");
                    setSelectedEra("All");
                  } else {
                    setActiveMode("all");
                  }
                }}
              />
              <span className="checkboxCustom" />
              <span className="checkboxText">
                <Sparkles size={14} className="goldIcon" />
                <b>{isAr ? "مقتنيات من ذاكرة مصر فقط" : "Egyptian Heritage Only"}</b>
                <small className="catCount">({products.filter((p) => p.isEgyptianHeritage).length})</small>
              </span>
            </label>
          </div>

          {/* Dynamic Department / Category Filter */}
          <div className="sidebarGroup">
            <h4 className="groupTitle">{isAr ? "الفئة وقسم التحفة" : "Department"}</h4>
            <div className="filterOptionsList">
              {dynamicCategories.map((cat) => (
                <label key={cat.id} className="antiqueRadioLabel">
                  <input
                    type="radio"
                    name="category"
                    checked={category === cat.id}
                    onChange={() => setCategory(cat.id)}
                  />
                  <span className="radioCustom" />
                  <span className="radioText">
                    {isAr ? cat.labelAr : cat.labelEn}
                    <small className="catCount">({cat.count})</small>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Historical Era Filter */}
          <div className={`sidebarGroup ${activeMode === "timeline" || selectedEra !== "All" ? "activeEraSidebarBox" : ""}`}>
            <h4 className="groupTitle">{isAr ? "الفترة الزمنية والعصر" : "Historical Era"}</h4>
            <div className="filterOptionsList">
              <label className="antiqueRadioLabel">
                <input
                  type="radio"
                  name="era"
                  checked={selectedEra === "All"}
                  onChange={() => setSelectedEra("All")}
                />
                <span className="radioCustom" />
                <span className="radioText">
                  <span>{isAr ? "كل الفترات" : "All Eras"}</span>
                  <small className="catCount">({products.length})</small>
                </span>
              </label>
              {HISTORICAL_ERAS.map((era) => (
                <label key={era.id} className="antiqueRadioLabel">
                  <input
                    type="radio"
                    name="era"
                    checked={selectedEra === era.id}
                    onChange={() => {
                      setSelectedEra(era.id);
                      setActiveMode("timeline");
                    }}
                  />
                  <span className="radioCustom" />
                  <span className="radioText">
                    <span className="eraRadioIcon">{ERA_ICONS[era.id] || "⏳"}</span>
                    <span>{isAr ? era.label : era.labelEn}</span>
                    <small className="catCount">({eraCounts[era.id] || 0})</small>
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* In Stock Toggle */}
          <div className="sidebarGroup">
            <label className="antiqueCheckboxLabel">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
              />
              <span className="checkboxCustom" />
              <span className="checkboxText">
                {isAr ? "المتاح للاقتناء الفوري فقط" : "In Stock Only"}
              </span>
            </label>
          </div>
        </aside>

        {/* CATALOG AREA: Top Toolbar + Products Grid */}
        <main className="shopCatalogArea">
          {/* Catalog Top Toolbar */}
          <div className="catalogToolbar">
            <div className="catalogCountInfo">
              <span className="piecesCount">
                <b>{visible.length}</b> {isAr ? "مقتنيات متاحة" : "artifacts found"}
              </span>
              {egyptianOnly && (
                <span className="activeHeritageBadge">
                  {isAr ? "🏛️ مقتنيات من ذاكرة مصر والزمن الجميل" : "🏛️ Egyptian Heritage Collection"}
                </span>
              )}
            </div>

            <div className="catalogSortWrap">
              <label htmlFor="shopSort" className="sortLabel">
                {isAr ? "ترتيب حسب:" : "Sort by:"}
              </label>
              <select
                id="shopSort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="antiqueSortSelect"
              >
                <option value="featured">{isAr ? "المميز والموصى به" : "Featured"}</option>
                <option value="new">{isAr ? "أحدث المقتنيات المضافة" : "Newest Arrivals"}</option>
                <option value="price-low">{isAr ? "السعر: من الأقل للأعلى" : "Price: Low to High"}</option>
                <option value="price-high">{isAr ? "السعر: من الأعلى للأقل" : "Price: High to Low"}</option>
              </select>
            </div>
          </div>

          {/* Active Filter Tags */}
          {activeFilterCount > 0 && (
            <div className="activeFilterPills">
              {category !== "All" && (
                <span className="filterTagPill">
                  {dynamicCategories.find((c) => c.id === category)?.labelAr || category}
                  <button onClick={() => setCategory("All")}>×</button>
                </span>
              )}
              {selectedEra !== "All" && (
                <span className="filterTagPill">
                  {HISTORICAL_ERAS.find((e) => e.id === selectedEra)?.label || selectedEra}
                  <button onClick={() => setSelectedEra("All")}>×</button>
                </span>
              )}
              {egyptianOnly && (
                <span className="filterTagPill">
                  {isAr ? "من ذاكرة مصر" : "Heritage"}
                  <button onClick={() => setEgyptianOnly(false)}>×</button>
                </span>
              )}
              <button onClick={clearFilters} className="clearAllTagsBtn">
                {isAr ? "مسح جميع الفلاتر" : "Clear all"}
              </button>
            </div>
          )}

          {/* Products Grid with Uniform Proportions & Aligned Bottom Buttons */}
          {visible.length > 0 ? (
            <div className="shopProductsGrid">
              {visible.map((product) => {
                const isWished = wishlist.includes(product.id);
                const isAdded = addedSku === product.id;
                return (
                  <div key={product.id} className="antiqueShopCard">
                    {/* Top Badges */}
                    <div className="shopCardBadges">
                      <button
                        type="button"
                        className={`antiqueWishBtn ${isWished ? "isWished" : ""}`}
                        onClick={() => toggleWishlist(product.id)}
                        aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
                      >
                        <Heart size={15} fill={isWished ? "var(--gold)" : "none"} />
                      </button>
                      <span className="verifiedInspectionBadge">
                        {isAr ? "مفحوصة ✓" : "Inspected ✓"}
                      </span>
                    </div>

                    {/* Clean Object Photo */}
                    <Link href={`/product/${product.slug}`} className="shopCardMedia">
                      <img
                        src={product.images[0]}
                        alt={isAr ? product.name : (product.nameEn || product.name)}
                        loading="lazy"
                      />
                    </Link>

                    {/* Card Content with Flex-1 to push button to bottom */}
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
          ) : (
            <div className="emptyShopState">
              <Clock size={42} className="goldIcon" />
              <h3>{isAr ? "لم نجد قطعاً تطابق هذا الفلتر حالياً" : "No artifacts match these filters"}</h3>
              <p>{isAr ? "جرّب تغيير فلاتر العصر أو الفئة لعرض المزيد من المقتنيات التاريخية." : "Try adjusting your era or category filters to explore other historical pieces."}</p>
              <button onClick={clearFilters} className="antiqueGoldCta">
                {isAr ? "عرض جميع المقتنيات" : "View All Collectibles"}
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
