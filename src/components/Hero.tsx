"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useStore } from "./StoreProvider";
import {
  ChevronRight,
  ChevronLeft,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Award,
  Truck
} from "lucide-react";

interface HeroSlide {
  id: string;
  image: string;
  eyebrowAr: string;
  eyebrowEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  descAr: string;
  descEn: string;
  ctaTextAr: string;
  ctaTextEn: string;
  ctaLink: string;
  secondaryLink?: string;
  secondaryTextAr?: string;
  secondaryTextEn?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "global-antiques",
    image: "/media/generated/hero_slide_global_antiques.webp",
    eyebrowAr: "ديوان الأنتيكات والمقتنيات النادرة حول العالم",
    eyebrowEn: "Rare Historical Collectibles & Global Antiques",
    titleAr: "اكتشف سحر الماضي",
    titleEn: "Discover The Magic Of The Past",
    subtitleAr: "في عالم الأنتيكات والتحف",
    subtitleEn: "In The World Of Antiques & Fine Relics",
    descAr: "قطع مختارة بعناية.. مع قصص وتاريخ يروي الماضي",
    descEn: "Meticulously curated relics, each carrying verified provenance and a timeless story.",
    ctaTextAr: "تصفح المقتنيات",
    ctaTextEn: "Browse Collectibles",
    ctaLink: "/shop",
    secondaryLink: "/about",
    secondaryTextAr: "قصة ديانا أنتيك",
    secondaryTextEn: "Our Story"
  },
  {
    id: "souq-diana",
    image: "/media/generated/hero_slide_souq_diana.webp",
    eyebrowAr: "من قلب القاهرة الخديوية وشارع عماد الدين",
    eyebrowEn: "From Downtown Cairo & Historic Emad El-Deen Street",
    titleAr: "سوق ديانا العريق",
    titleEn: "Historic Souq Diana",
    subtitleAr: "أصالة الزمن الجميل وروائع التراث",
    subtitleEn: "Authentic Belle Époque Heritage & Hidden Gems",
    descAr: "حكايات الماضي وفخامة الصالونات الكلاسيكية.. نوادر موثقة ومعاينة حية عند الاستلام.",
    descEn: "Live inspection upon delivery, insured white-glove shipping, and authentic period items.",
    ctaTextAr: "استكشف مقتنيات مصر",
    ctaTextEn: "Explore Egypt's Heritage",
    ctaLink: "/shop?era=pre-1900",
    secondaryLink: "/encyclopedia",
    secondaryTextAr: "موسوعة الأنتيكات",
    secondaryTextEn: "Encyclopedia"
  }
];

export function Hero() {
  const { language } = useStore();
  const isAr = language === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto advance every 7 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="antiqueHeroInteractive"
      aria-label="Diana Antique Hero Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Background Image Asset Layer (Zero baked text or logos) */}
      <div className="heroBackdropLayer">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={`heroSlideBg ${idx === currentIndex ? "heroSlideActive" : "heroSlideHidden"}`}
            aria-hidden={idx !== currentIndex}
          >
            <img
              src={slide.image}
              alt={isAr ? slide.titleAr : slide.titleEn}
              className="heroCoverImg"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Ambient Dark-Gold Vignette Gradient (enhances HTML text readability while keeping left collectibles vibrant) */}
        <div className="heroAmbientOverlay" />
      </div>

      {/* 2. Interactive HTML Content Layer (Floating on top of image) */}
      <div className="heroContentContainer">
        <div className="heroTextCard">
          {/* Eyebrow badge */}
          <div className="heroEyebrow">
            <Sparkles size={14} className="heroGoldSparkle" />
            <span>{isAr ? activeSlide.eyebrowAr : activeSlide.eyebrowEn}</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="heroMainTitle">{isAr ? activeSlide.titleAr : activeSlide.titleEn}</h1>
          <h2 className="heroSubTitle">{isAr ? activeSlide.subtitleAr : activeSlide.subtitleEn}</h2>

          {/* Decorative antique flourish divider */}
          <div className="heroFlourishDivider" aria-hidden="true">
            <span className="flourishLine" />
            <span className="flourishDiamond">❖</span>
            <span className="flourishLine" />
          </div>

          {/* Rich Description */}
          <p className="heroDescription">{isAr ? activeSlide.descAr : activeSlide.descEn}</p>

          {/* Action CTAs */}
          <div className="heroActionsGroup">
            <Link href={activeSlide.ctaLink} className="heroPrimaryBtn">
              <span>{isAr ? activeSlide.ctaTextAr : activeSlide.ctaTextEn}</span>
              <ArrowIcon size={16} className="btnArrow" />
            </Link>

            {activeSlide.secondaryLink && (
              <Link href={activeSlide.secondaryLink} className="heroSecondaryBtn">
                <span>{isAr ? activeSlide.secondaryTextAr : activeSlide.secondaryTextEn}</span>
              </Link>
            )}
          </div>

          {/* Live Guarantees Pill */}
          <div className="heroTrustBadgesRow">
            <span className="trustPill">
              <ShieldCheck size={13} className="trustIcon" />
              <span>{isAr ? "معاينة حية عند الاستلام" : "Live Inspection On Delivery"}</span>
            </span>
            <span className="trustPill">
              <Award size={13} className="trustIcon" />
              <span>{isAr ? "توثيق تاريخي معتمد" : "Verified Provenance"}</span>
            </span>
            <span className="trustPill">
              <Truck size={13} className="trustIcon" />
              <span>{isAr ? "شحن مصفح مؤمن" : "White-Glove Shipping"}</span>
            </span>
          </div>
        </div>
      </div>

      {/* 3. Carousel Navigation Controls (Arrows) */}
      {HERO_SLIDES.length > 1 && (
        <div className="heroCarouselControls" aria-label="Hero Carousel Navigation">
          <button
            type="button"
            onClick={prevSlide}
            className="carouselNavBtn carouselPrevBtn"
            aria-label="Previous Slide"
            title={isAr ? "الشريحة السابقة" : "Previous Slide"}
          >
            <ChevronRight size={22} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            className="carouselNavBtn carouselNextBtn"
            aria-label="Next Slide"
            title={isAr ? "الشريحة التالية" : "Next Slide"}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Dots Indicators */}
          <div className="carouselDotsWrap">
            {HERO_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`carouselDot ${idx === currentIndex ? "activeDot" : ""}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
