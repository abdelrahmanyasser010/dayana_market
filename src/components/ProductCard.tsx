"use client";

import Link from "next/link";
import { Heart, Clock, MapPin, Sparkles } from "lucide-react";
import { Product, getLocalizedProductName, getLocalizedProductSubtitle } from "@/lib/types";
import { formatPrice } from "@/lib/format";
import { SpinPreview } from "./SpinPreview";
import { useStore } from "./StoreProvider";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { toggleWishlist, isWishlisted, t, language } = useStore();
  const wished = isWishlisted(product.id);
  const isAr = language === "ar";
  const name = getLocalizedProductName(product, language);
  const subtitle = getLocalizedProductSubtitle(product, language);

  return (
    <article className="productCard antiqueProductCard">
      <div className="productMedia">
        <Link
          href={`/product/${product.slug}`}
          aria-label={`View ${name}`}
          draggable={false}
          onDragStart={(e) => e.preventDefault()}
        >
          <SpinPreview frames={product.spinFrames} alt={name} priority={priority} />
        </Link>

        <button
          className={`wishButton ${wished ? "active" : ""}`}
          onClick={() => toggleWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          <Heart size={18} fill={wished ? "currentColor" : "none"} />
        </button>

        <div className="productFlags">
          {product.isEgyptianHeritage && (
            <span className="heritageFlagBadge">
              <Sparkles size={11} /> {t("badgeHeritage")}
            </span>
          )}
          {product.yearCirca && (
            <span className="eraFlagBadge">
              <Clock size={11} /> {product.yearCirca}
            </span>
          )}
          {product.compareAtPrice && <span>{t("badgeSale")}</span>}
        </div>
      </div>

      <div className="productMeta">
        <div className="productMetaTop">
          {product.origin && (
            <span className="originTag">
              <MapPin size={12} /> {isAr ? product.origin : (product.originEn || product.origin)}
            </span>
          )}
          {product.authenticity && (
            <span className="authenticityTag">
              {isAr ? product.authenticity : (product.authenticityEn || product.authenticity)}
            </span>
          )}
        </div>

        <Link href={`/product/${product.slug}`}>
          <h3>{name}</h3>
          <p className="cardSubtitle">{subtitle}</p>
        </Link>

        <div className="priceLine">
          <strong>{formatPrice(product.price)}</strong>
          {product.compareAtPrice && <del>{formatPrice(product.compareAtPrice)}</del>}
        </div>

        <div className="cardStorySnippet">
          <Link href={`/product/${product.slug}#story`} className="storyPreviewLink">
            <span>{isAr ? "اكتشف حكاية القطعة وفحصها ←" : "Explore Story & Verification →"}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
