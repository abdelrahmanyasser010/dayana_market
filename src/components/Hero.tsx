"use client";

import Link from "next/link";
import { useStore } from "./StoreProvider";

export function Hero() {
  const { language } = useStore();
  const isAr = language === "ar";

  return (
    <section className="antiqueHeroMasterSection" aria-label="Diana Antique Hero">
      <div className="heroBannerContainer">
        {/* The Exact Beloved Diana Antique Cover from the User's Design Mockup */}
        <img
          src="/media/extracted/hero_cover_no_header.webp"
          alt={isAr ? "ديانا أنتيك - اكتشف سحر الماضي في عالم الأنتيكات والتحف" : "Diana Antique - World of Historical Collectibles"}
          className="heroMasterCoverImg"
          loading="eager"
        />

        {/* Clickable CTA overlay positioned exactly over the button in the image */}
        <Link
          href="/shop"
          className="heroDirectCtaOverlay"
          aria-label={isAr ? "تصفح القطع والمقتنيات" : "Browse Collectibles"}
          title={isAr ? "تصفح القطع والمقتنيات" : "Browse Collectibles"}
        />
      </div>
    </section>
  );
}
