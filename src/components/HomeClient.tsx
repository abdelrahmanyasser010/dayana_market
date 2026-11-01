"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Mail,
  Send,
  Check,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Store
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { useStore } from "@/components/StoreProvider";
import { type Product } from "@/lib/types";

export function HomeClient({ products }: { products: Product[] }) {
  const { language, addToCart, wishlist, toggleWishlist } = useStore();
  const isAr = language === "ar";

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [addedSku, setAddedSku] = useState<string | null>(null);

  // 5 primary featured products matching Image 1
  const featured = products.slice(0, 5);

  const categories = [
    { id: "furniture", nameAr: "أثاث كلاسيكي", nameEn: "Classic Furniture", img: "/media/extracted/cat_furniture.webp" },
    { id: "phones", nameAr: "تليفونات", nameEn: "Vintage Phones", img: "/media/extracted/cat_phones.webp" },
    { id: "clocks", nameAr: "ساعات", nameEn: "Antique Clocks", img: "/media/extracted/cat_clocks.webp" },
    { id: "radios", nameAr: "راديوهات", nameEn: "Vintage Radios", img: "/media/extracted/cat_radios.webp" },
    { id: "cameras", nameAr: "كاميرات", nameEn: "Classic Cameras", img: "/media/extracted/cat_cameras.webp" },
    { id: "decor", nameAr: "تحف وديكورات", nameEn: "Porcelain & Decor", img: "/media/extracted/cat_decor.webp" },
    { id: "books", nameAr: "كتب ومطبوعات", nameEn: "Rare Books", img: "/media/extracted/cat_books.webp" },
    { id: "toys", nameAr: "ألعاب قديمة", nameEn: "Vintage Toys", img: "/media/extracted/cat_toys.webp" }
  ];

  const timelineEpochs = [
    { id: "pre-1900-med", labelAr: "العصور الوسطى", years: "500–1400", img: "/media/extracted/epoch_medieval.webp", eraId: "pre-1900" },
    { id: "pre-1900-ren", labelAr: "عصر النهضة", years: "1400–1800", img: "/media/extracted/epoch_renaissance.webp", eraId: "pre-1900" },
    { id: "pre-1900-19th", labelAr: "القرن التاسع عشر", years: "1800–1900", img: "/media/extracted/epoch_train.webp", eraId: "pre-1900" },
    { id: "1900-1920", labelAr: "أوائل القرن العشرين", years: "1900–1920", img: "/media/extracted/epoch_biplane.webp", eraId: "1900-1920" },
    { id: "1940-1960", labelAr: "منتصف القرن العشرين", years: "1920–1960", img: "/media/extracted/epoch_car.webp", eraId: "1940-1960" }
  ];

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

  function handleNewsletterSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    setNewsletterEmail("");
  }

  return (
    <>
      {/* 1. Masterpiece Hero Banner (Full width HD, No ghost text, No double button) */}
      <Hero />

      {/* 2. SECTION: Browse by Category («تصفح حسب النوع») — Exactly matching Image 1 */}
      <section className="antiqueCategorySection" aria-label="Browse by Category">
        <div className="antiqueSectionHeader">
          <div className="antiqueDividerLine" />
          <h2 className="antiqueSectionTitle">
            {isAr ? "تصفح حسب النوع" : "BROWSE BY CATEGORY"}
          </h2>
          <div className="antiqueDividerLine" />
        </div>

        <div className="unifiedCategoryRow">
          {/* 8 Rounded Parchment Category Cards Spanning Full Width with Generous Equal Spacing */}
          <div className="categoryCardsTrackUnified">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                className="antiqueCategoryCardUnified"
              >
                <div className="catCardImageWrapUnified">
                  <img src={cat.img} alt={isAr ? cat.nameAr : cat.nameEn} loading="lazy" />
                </div>
                <span className="catCardLabelUnified">
                  {isAr ? cat.nameAr : cat.nameEn}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION: Timeline Journey Track («رحلة عبر الزمن .. اكتشف مقتنيات من عصور مختلفة») */}
      <section className="antiqueTimelineSection" id="timeline" aria-label="Timeline Journey">
        <div className="antiqueSectionHeader lightHeader">
          <div className="antiqueDividerLine lightLine" />
          <h2 className="antiqueSectionTitle lightTitle">
            {isAr
              ? "رحلة عبر الزمن .. اكتشف مقتنيات من عصور مختلفة"
              : "JOURNEY THROUGH TIME .. RELICS ACROSS ERAS"}
          </h2>
          <div className="antiqueDividerLine lightLine" />
        </div>

        <div className="unifiedTimelineRow">
          {/* Side Card on Right in RTL: "كل قطعة .. قصة" with Roman Marble Sculpture */}
          <Link
            href="/timeline"
            className="storySideCardExact"
            title={isAr ? "كل قطعة .. قصة - اكتشف المزيد" : "Every Relic .. A Story"}
          >
            <img
              src="/media/extracted/story_sculpture_card.webp"
              alt="كل قطعة قصة - تعرف على التاريخ والقصص وراء كل مقتنى"
            />
          </Link>

          {/* Timeline Track with 5 Sliced Epoch Cards */}
          <div className="timelineTrackContainerUnified">
            <div className="timelineConnectingLineUnified" />
            <div className="timelineCardsTrackUnified">
              {timelineEpochs.map((ep) => (
                <Link
                  key={ep.id}
                  href={`/shop?era=${ep.eraId}`}
                  className="antiqueEpochCardUnified"
                >
                  <div className="epochImageWrapUnified">
                    <img src={ep.img} alt={ep.labelAr} loading="lazy" />
                  </div>
                  <div className="epochMetaUnified">
                    <span className="epochTitleUnified">{ep.labelAr}</span>
                    <span className="epochYearsUnified">({ep.years})</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: Featured Collectibles («قطع مميزة») — Exactly matching Image 1 */}
      <section className="antiqueFeaturedSection" aria-label="Featured Collectibles">
        <div className="antiqueSectionHeader">
          <div className="antiqueDividerLine" />
          <h2 className="antiqueSectionTitle">
            {isAr ? "قطع مميزة" : "FEATURED COLLECTIBLES"}
          </h2>
          <div className="antiqueDividerLine" />
        </div>

        <div className="unifiedFeaturedRow">
          {/* Side Card on Right in RTL: Piece of the Week («قطعة الأسبوع») from Image 1 */}
          <Link
            href="/product/classic-antique-gramophone"
            className="pieceWeekCardExact"
            title={isAr ? "قطعة الأسبوع - اعرف حكايتها" : "Relic of the Week"}
          >
            <img
              src="/media/extracted/piece_week_train_exact.webp"
              alt="قطعة الأسبوع - جراموفون نادر من القرن العشرين"
            />
          </Link>

          {/* Grid of 5 Product Cards with Clean Object Photos & Single HTML Title/Price */}
          <div className="featuredProductsGridUnified">
            {featured.map((product) => {
              const isWished = wishlist.includes(product.id);
              const isAdded = addedSku === product.id;
              return (
                <div key={product.id} className="antiqueParchmentCardUnified">
                  {/* Top Bar: Wishlist Toggle & Verification Tag */}
                  <div className="cardTopBadgesUnified">
                    <button
                      type="button"
                      className={`antiqueWishBtnUnified ${isWished ? "isWished" : ""}`}
                      onClick={() => toggleWishlist(product.id)}
                      aria-label={isWished ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <Heart size={15} fill={isWished ? "var(--gold)" : "none"} />
                    </button>
                    <span className="verifiedInspectionBadgeUnified">
                      {isAr ? "مفحوصة ✓" : "Inspected ✓"}
                    </span>
                  </div>

                  {/* Clean Object Photo Link (NO TEXT INSIDE PHOTO!) */}
                  <Link href={`/product/${product.slug}`} className="antiqueCardMediaLinkUnified">
                    <img
                      src={product.images[0]}
                      alt={isAr ? product.name : (product.nameEn || product.name)}
                      loading="lazy"
                    />
                  </Link>

                  {/* Single Clean Product Title & Price in HTML */}
                  <div className="antiqueCardBodyUnified">
                    <Link href={`/product/${product.slug}`}>
                      <h3 className="antiqueProductTitleUnified">
                        {isAr ? product.name : (product.nameEn || product.name)}
                      </h3>
                    </Link>
                    <div className="antiquePriceRowUnified">
                      <span className="antiquePriceValueUnified">
                        {product.price.toLocaleString("ar-EG")} {isAr ? "ج.م" : "EGP"}
                      </span>
                    </div>

                    <div className="cardTrustNote">
                      <ShieldCheck size={12} className="goldIcon" />
                      <span>{isAr ? "معاينة حية عند الاستلام" : "Inspection upon delivery"}</span>
                    </div>

                    {/* Add to Cart Button */}
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
        </div>
      </section>



      {/* 6. SECTION: Trust Bar (Image 3 & 1 Fusion) */}
      <section className="antiqueTrustBar" aria-label="Customer Trust Commitments">
        <div className="trustBarInner">
          <div className="trustItem">
            <div className="trustIconCircle">
              <Sparkles size={20} className="goldIcon" />
            </div>
            <div className="trustText">
              <h4>{isAr ? "محتوى تاريخي مميز" : "Rich Historical Content"}</h4>
              <p>{isAr ? "لأن لكل قطعة حكاية وتاريخ" : "Every relic holds an authentic past"}</p>
            </div>
          </div>

          <div className="trustItem">
            <div className="trustIconCircle">
              <ShieldCheck size={20} className="goldIcon" />
            </div>
            <div className="trustText">
              <h4>{isAr ? "تجربة شراء آمنة" : "Secure Purchase"}</h4>
              <p>{isAr ? "معاينة عند الاستلام لجميع محافظات مصر" : "Doorstep inspection across all Egypt"}</p>
            </div>
          </div>

          <div className="trustItem">
            <div className="trustIconCircle">
              <CheckCircle2 size={20} className="goldIcon" />
            </div>
            <div className="trustText">
              <h4>{isAr ? "قطع أصلية ومفحوصة" : "Verified & Inspected"}</h4>
              <p>{isAr ? "بطاقة هوية وفحص مادي دقيق" : "Physical inspection placard included"}</p>
            </div>
          </div>

          <div className="trustItem">
            <div className="trustIconCircle">
              <Store size={20} className="goldIcon" />
            </div>
            <div className="trustText">
              <h4>{isAr ? "شحن متخصص ومؤمن" : "Specialized Insured Courier"}</h4>
              <p>{isAr ? "تغليف وحماية خاصة للتحف الثمينة" : "White-glove antique handling"}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
