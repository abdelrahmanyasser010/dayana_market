"use client";

import Link from "next/link";
import { useStore } from "./StoreProvider";

export function Hero() {
  const { language } = useStore();
  const isAr = language === "ar";

  return (
    <section className="antiqueHeroClean" aria-label="Hero Banner">
      {/* The Classic Beloved Diana Antique Banner */}
      <Link
        href="/shop"
        className="heroBannerFullLink"
      >
        <img
          src="/media/extracted/hero_diana_hd.webp"
          alt={isAr ? "ديانا أنتيك - سوق وعالم الأنتيكات" : "Diana Antique - World of Antiques"}
          className="heroBannerImage"
          loading="eager"
        />
      </Link>
    </section>
  );
}
