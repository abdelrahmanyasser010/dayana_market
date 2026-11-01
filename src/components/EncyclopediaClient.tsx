"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Clock, Search, ArrowLeft, ArrowRight, ShieldCheck, Scale, Sparkles } from "lucide-react";
import { ENCYCLOPEDIA_ARTICLES } from "@/lib/encyclopedia";
import { useStore } from "./StoreProvider";

export function EncyclopediaClient() {
  const { language } = useStore();
  const isAr = language === "ar";
  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["all", ...Array.from(new Set(ENCYCLOPEDIA_ARTICLES.map((a) => a.category)))];

  const filteredArticles = ENCYCLOPEDIA_ARTICLES.filter((article) => {
    if (selectedCategory !== "all" && article.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = (article.title + " " + article.titleEn).toLowerCase().includes(q);
      const matchSummary = (article.summary + " " + article.summaryEn).toLowerCase().includes(q);
      return matchTitle || matchSummary;
    }
    return true;
  });

  return (
    <div className="antiqueEncyclopediaPage">
      {/* 1. Atmospheric Historic Library Banner (No Black Void) */}
      <section className="encyclopediaHistoricBanner" aria-label="Encyclopedia Banner">
        <div className="encyclopediaBannerBackdrop">
          <img
            src="/media/extracted/banner_encyclopedia_library.webp"
            alt="موسوعة الأنتيكات - ديانا أنتيك"
            className="encyclopediaBannerBgImg"
          />
          <div className="encyclopediaBannerOverlay" />
        </div>

        <div className="encyclopediaBannerContent">
          <nav className="antiqueBreadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">{isAr ? "الرئيسية" : "Home"}</Link>
            <span className="breadcrumbSep">›</span>
            <span>{isAr ? "موسوعة الأنتيكات" : "Encyclopedia"}</span>
          </nav>
          <div className="encyclopediaEyebrow">
            <BookOpen size={14} className="goldIcon" />
            <span>{isAr ? "المرجع المعرفي للتوثيق والأصالة" : "Authoritative Antiquarian Knowledge"}</span>
          </div>
          <h1 className="encyclopediaBannerTitle">
            {isAr ? "موسوعة الأنتيكات والتاريخ" : "Antique Encyclopedia"}
          </h1>
          <p className="encyclopediaBannerSubtitle">
            {isAr
              ? "دليل معرفي مستقل وموثق لجميع عشاق التاريخ والمقتنين. يغطي تاريخ الخامات القديمة كالباكليت، وتطور الأجهزة التي اختفت، وقواعد التمييز بين الأنتيك الأصلي والنسخ المقلدة."
              : "An authoritative knowledge archive covering historical materials, defunct technologies, horology, and masterclass verification guides."}
          </p>

          {/* Integrated Search Input */}
          <div className="encyclopediaSearchPill">
            <Search size={16} className="goldIcon" />
            <input
              type="search"
              placeholder={isAr ? "ابحث عن خامة، حقبة، أو نوع مقتنى (باكليت، جراموفون، ساعات)..." : "Search materials, eras, or artifacts..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* 2. Category Filters Navigation */}
      <section className="encyclopediaCategoryBar">
        <div className="categoryPillsWrap">
          <button
            className={`encyclopediaCategoryBtn ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            {isAr ? "جميع الأبحاث والمقالات" : "All Articles"}
          </button>
          {categories.filter((c) => c !== "all").map((cat) => (
            <button
              key={cat}
              className={`encyclopediaCategoryBtn ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Compact, Balanced Articles Grid (NOT taller than the screen!) */}
      <section className="encyclopediaArticlesSection">
        <div className="articlesGridCompact">
          {filteredArticles.map((article) => (
            <article key={article.slug} className="compactArticleCard">
              <Link href={`/encyclopedia/${article.slug}`} className="articleMediaLink">
                <img
                  src={article.heroImage}
                  alt={article.title}
                  loading="lazy"
                  className="articleCardThumbnail"
                />
                <span className="articleCategoryBadge">
                  {isAr ? article.category : article.categoryEn}
                </span>
              </Link>

              <div className="compactArticleBody">
                <div className="articleMetaRow">
                  <span className="articleReadTime">
                    <Clock size={12} /> {article.readTimeMinutes} {isAr ? "دقائق قراءة" : "min read"}
                  </span>
                  <span className="articleEra">{article.eraLabel}</span>
                </div>

                <Link href={`/encyclopedia/${article.slug}`}>
                  <h3 className="compactArticleTitle">
                    {isAr ? article.title : article.titleEn}
                  </h3>
                </Link>

                <p className="compactArticleSummary">
                  {isAr ? article.summary : article.summaryEn}
                </p>

                <div className="compactArticleFoot">
                  <div className="articleGuideTags">
                    <span className="verificationTipBadge">
                      <ShieldCheck size={12} className="goldIcon" />
                      <span>{isAr ? "دليل فحص الأصلي vs المقلد" : "Authentication Guide"}</span>
                    </span>
                    <span className="verificationTipBadge valueBadge">
                      <Scale size={12} className="goldIcon" />
                      <span>{isAr ? "سُلّم القيمة المادية" : "Value Tiers"}</span>
                    </span>
                  </div>
                  <Link href={`/encyclopedia/${article.slug}`} className="readMoreLink">
                    <span>{isAr ? "اقرأ البحث والتوثيق" : "Read Research"}</span>
                    <ArrowIcon size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
