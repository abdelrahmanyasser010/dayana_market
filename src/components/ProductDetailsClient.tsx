"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Check,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  Clock,
  MapPin,
  Sparkles,
  BookOpen,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  ArrowUpRight
} from "lucide-react";
import {
  Product,
  getLocalizedProductName,
  getLocalizedProductSubtitle,
  getLocalizedProductDescription,
  getLocalizedCategory,
  getLocalizedCollection,
  getLocalizedColorName,
  getImagesForColor
} from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { getArticleBySlug } from "@/lib/encyclopedia";
import { useStore } from "./StoreProvider";
import { SpinPreview } from "./SpinPreview";
import { AddToCartToast } from "./AddToCartToast";

export function ProductDetailsClient({ product }: { product: Product }) {
  const firstAvailable = product.variants.find((variant) => variant.stock > 0 && variant.active !== false);
  const [color, setColor] = useState(firstAvailable?.color ?? product.colors[0]?.name ?? "");
  const [size, setSize] = useState(firstAvailable?.size ?? product.sizes[0] ?? "قطعة فريدة");
  const [activeFrame, setActiveFrame] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [notice, setNotice] = useState("");
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const { addToCart, toggleWishlist, isWishlisted, t, language } = useStore();

  const isAr = language === "ar";
  const name = getLocalizedProductName(product, language);
  const subtitle = getLocalizedProductSubtitle(product, language);
  const description = getLocalizedProductDescription(product, language);
  const categoryName = getLocalizedCategory(product.category, language);
  const collectionName = getLocalizedCollection(product.collection, language);

  const activeImages = useMemo(() => getImagesForColor(product, color), [product, color]);

  const selectedVariant = useMemo(
    () => product.variants.find((variant) => variant.color === color) || product.variants[0],
    [product.variants, color]
  );

  const relatedArticle = product.relatedArticleSlug ? getArticleBySlug(product.relatedArticleSlug) : null;

  const submit = () => {
    const ok = addToCart(product, { color, size: selectedVariant?.size || "قطعة فريدة", quantity: 1 });
    if (ok) {
      setNotice("");
      setAddedSuccess(true);
      setShowToast(true);
      setTimeout(() => setAddedSuccess(false), 2800);
      setTimeout(() => setShowToast(false), 5500);
    } else {
      setNotice(t("unavailableNotice"));
    }
  };

  return (
    <div className="productPageGrid antiqueProductPageGrid">
      {/* Product Gallery & Visuals */}
      <div className="productGallery">
        <div className="productMainSpinWrap">
          <SpinPreview
            key={color}
            frames={activeImages}
            alt={name}
            priority
            auto={false}
            className="productMainSpin"
            activeFrame={activeFrame}
            onFrameChange={setActiveFrame}
          />
          {product.isEgyptianHeritage && (
            <div className="heritageOverlayTag">
              <Sparkles size={14} />
              <span>{isAr ? "من ذاكرة مصر التراثية" : "Egyptian Heritage"}</span>
            </div>
          )}
        </div>

        {activeImages.length > 1 && (
          <div className="galleryStrip">
            {activeImages.map((src, index) => (
              <div
                className={`galleryTile ${index === activeFrame ? "activeTile" : ""}`}
                key={src}
                style={{ backgroundImage: `url(${src})` }}
                onClick={() => setActiveFrame(index)}
                role="button"
                tabIndex={0}
                aria-label={`${name} view ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Safe Courier & Inspection Highlights */}
        <div className="productAssuranceBanner">
          <div className="assuranceItem">
            <Truck size={20} className="goldIcon" />
            <div>
              <strong>{t("fastDeliveryTitle")}</strong>
              <p>{t("fastDeliveryDesc")}</p>
            </div>
          </div>
          <div className="assuranceItem">
            <ShieldCheck size={20} className="goldIcon" />
            <div>
              <strong>{t("easyExchangeTitle")}</strong>
              <p>{t("easyExchangeDesc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Info & Stories */}
      <section className="productInfo">
        <div className="productBreadcrumbMeta">
          <span className="eraPillBadge">
            <Clock size={13} /> {product.eraLabel || product.yearCirca || "مقتنى تاريخي"}
          </span>
          <span className="categoryMetaTag">{categoryName}</span>
          {product.origin && (
            <span className="originMetaTag">
              <MapPin size={13} /> {isAr ? product.origin : (product.originEn || product.origin)}
            </span>
          )}
        </div>

        <h1 className="productTitleH1">{name}</h1>
        {subtitle && <p className="productSubtitle">{subtitle}</p>}

        <div className="productPrice">
          <strong>{formatPrice(product.price)}</strong>
          {product.compareAtPrice && <del>{formatPrice(product.compareAtPrice)}</del>}
          <span className="rarityBadge">
            {isAr ? (product.rarity || "قطعة اقتناء نادرة") : (product.rarityEn || product.rarity)}
          </span>
        </div>

        {description && <p className="productDescription">{description}</p>}

        {/* Acquisition Action Bar */}
        <div className="buyRow desktopBuyRow" style={{ marginTop: "24px" }}>
          <button
            className={`primaryButton grow ${addedSuccess ? "addedSuccessBtn" : ""}`}
            onClick={submit}
            disabled={!selectedVariant || selectedVariant.stock < 1}
          >
            {addedSuccess ? (
              <span className="btnAddedContent">
                <Check size={18} className="checkIconAnim" />
                {isAr ? "تمت الإضافة لسلة الاقتناء ✓" : "Added to Acquisition Bag ✓"}
              </span>
            ) : (
              <span>{t("addToBag")} — {formatPrice(product.price)}</span>
            )}
          </button>
          <button
            className={`squareButton ${isWishlisted(product.id) ? "active" : ""}`}
            onClick={() => toggleWishlist(product.id)}
            aria-label="Add to wishlist"
          >
            <Heart size={20} />
          </button>
        </div>
        {notice && <p className="inlineNotice">{notice}</p>}

        {/* 1. Historical Placard & Verification (بطاقة الهوية والفحص) */}
        <section className="historicalPlacardCard" id="placard">
          <div className="placardHeader">
            <FileCheck2 size={20} className="goldIcon" />
            <div>
              <h3>{t("historicalPlacardTitle")}</h3>
              <p className="placardSub">{t("historicalPlacardNotice")}</p>
            </div>
          </div>

          <table className="placardTable">
            <tbody>
              <tr>
                <td className="propLabel">{t("propEstimatedEra")}</td>
                <td className="propVal"><strong>{product.eraLabel || product.yearCirca || "غير مؤكد بدقة"}</strong></td>
              </tr>
              <tr>
                <td className="propLabel">{t("propMaterial")}</td>
                <td className="propVal">{product.material || "وفق الوصف والمعاينة"}</td>
              </tr>
              <tr>
                <td className="propLabel">{t("propOriginalUsage")}</td>
                <td className="propVal">{isAr ? product.originalUsage : (product.originalUsageEn || product.originalUsage)}</td>
              </tr>
              <tr>
                <td className="propLabel">{t("propOrigin")}</td>
                <td className="propVal">{isAr ? product.origin : (product.originEn || product.origin || "غير مؤكد")}</td>
              </tr>
              <tr>
                <td className="propLabel">{t("propCondition")}</td>
                <td className="propVal"><span className="conditionTag">{isAr ? product.conditionState : (product.conditionStateEn || product.conditionState)}</span></td>
              </tr>
              <tr>
                <td className="propLabel">{t("propAuthenticity")}</td>
                <td className="propVal"><span className="authenticityPill">{isAr ? product.authenticity : (product.authenticityEn || product.authenticity)}</span></td>
              </tr>
              {product.dimensions && (
                <tr>
                  <td className="propLabel">{t("propDimensions")}</td>
                  <td className="propVal">{product.dimensions} {product.weight ? `• ${product.weight}` : ""}</td>
                </tr>
              )}
              <tr>
                <td className="propLabel">{isAr ? "رقم الأرشيف والتوثيق" : "Archive SKU"}</td>
                <td className="propVal"><code>{selectedVariant?.sku || product.slug}</code></td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 2. The Story Behind (حكاية القطعة) */}
        {product.story && (
          <section className="storyBehindCard" id="story">
            <div className="storyHeader">
              <BookOpen size={20} className="goldIcon" />
              <h3>{t("storyBehindTitle")}</h3>
            </div>

            <div className="storyBlocksGrid">
              <div className="storyBlock">
                <h4>{t("storyEraSection")}</h4>
                <p>{isAr ? product.story.eraContext : (product.story.eraContextEn || product.story.eraContext)}</p>
              </div>

              <div className="storyBlock">
                <h4>{t("storyUsageSection")}</h4>
                <p>{isAr ? product.story.originAndUsage : (product.story.originAndUsageEn || product.story.originAndUsage)}</p>
              </div>

              <div className="storyBlock">
                <h4>{t("storyDesignSection")}</h4>
                <p>{isAr ? product.story.designAndMaterials : (product.story.designAndMaterialsEn || product.story.designAndMaterials)}</p>
              </div>

              <div className="storyBlock">
                <h4>{t("storyHistorySection")}</h4>
                <p>{isAr ? product.story.historicalNotes : (product.story.historicalNotesEn || product.story.historicalNotes)}</p>
              </div>

              <div className="storyBlock">
                <h4>{t("storyRaritySection")}</h4>
                <p>{isAr ? product.story.rarityNotes : (product.story.rarityNotesEn || product.story.rarityNotes)}</p>
              </div>
            </div>
          </section>
        )}

        {/* 3. Link to Related Encyclopedia Article */}
        {relatedArticle && (
          <div className="relatedArticleBanner">
            <div className="articleBannerContent">
              <span className="goldEyebrow">{isAr ? "من موسوعة الأنتيكات" : "From the Encyclopedia"}</span>
              <h4>{isAr ? relatedArticle.title : relatedArticle.titleEn}</h4>
              <p>{isAr ? relatedArticle.summary : relatedArticle.summaryEn}</p>
            </div>
            <Link href={`/encyclopedia/${relatedArticle.slug}`} className="ghostButton compactBtn">
              {t("readArticleLink")}
            </Link>
          </div>
        )}

        {/* Care & Handling Accordions */}
        <div className="productAccordions" style={{ marginTop: "24px" }}>
          <details open>
            <summary>{isAr ? "العناية والحفظ الأرشيفي" : "Archival Care Instructions"}</summary>
            <p>{product.care}</p>
          </details>
          <details>
            <summary>{isAr ? "سياسة المعاينة عند الاستلام والشحن" : "Courier Inspection & Shipping Policy"}</summary>
            <p>{t("fastDeliveryDesc")} {t("easyExchangeDesc")}</p>
          </details>
        </div>
      </section>

      {/* Mobile Sticky Buy Button */}
      <div className="mobileStickyBuy">
        <div>
          <span>{name}</span>
          <strong>{formatPrice(product.price)}</strong>
        </div>
        <button
          className={addedSuccess ? "addedSuccessBtn" : ""}
          onClick={submit}
          disabled={!selectedVariant || selectedVariant.stock < 1}
        >
          {addedSuccess ? (
            <span className="btnAddedContent">
              <Check size={16} className="checkIconAnim" />
              {isAr ? "تمت الإضافة ✓" : "Added ✓"}
            </span>
          ) : (
            t("addToBag")
          )}
        </button>
      </div>

      <AddToCartToast
        isOpen={showToast}
        onClose={() => setShowToast(false)}
        productName={name}
        image={activeImages[0] || product.images[0] || ""}
        color={getLocalizedColorName(color, language)}
        size={selectedVariant?.size || "قطعة فريدة"}
        price={product.price}
        quantity={1}
        isAr={isAr}
      />
    </div>
  );
}
