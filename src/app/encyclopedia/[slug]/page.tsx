import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Gem,
  Scale,
  Layers,
  ShoppingBag,
  Eye,
  Info
} from "lucide-react";
import { getArticleBySlug } from "@/lib/encyclopedia";
import { getStorefrontProducts } from "@/server/store-db";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "مقال غير موجود | ديانا أنتيك" };
  return {
    title: `${article.title} | موسوعة الأنتيكات – ديانا أنتيك`,
    description: article.summary
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const allProducts = await getStorefrontProducts();
  const linkedProducts = allProducts.filter((p) => article.relatedProductSlugs.includes(p.slug));

  return (
    <article className="antiqueArticlePage">
      {/* 1. Article Hero & Header */}
      <header className="articlePageHeader">
        <div className="articleBreadcrumbNav">
          <Link href="/encyclopedia" className="backToEncyclopediaLink">
            <ArrowRight size={15} />
            <span>العودة لموسوعة الأنتيكات والتاريخ</span>
          </Link>
          <span className="breadcrumbDivider">•</span>
          <span className="articleEraBadge">{article.eraLabel}</span>
          <span className="breadcrumbDivider">•</span>
          <span className="articleCategoryBadgeTag">{article.category}</span>
        </div>

        <h1 className="articleMainTitle">{article.title}</h1>
        <p className="articleSubtitleLead">{article.subtitle}</p>

        <div className="articleMetaBar">
          <span className="metaAuthor">{article.publishDate}</span>
          <span className="metaDivider">•</span>
          <span className="metaReadTime">
            <Clock size={14} className="goldIcon" />
            {article.readTimeMinutes} دقائق قراءة توثيقية
          </span>
        </div>
      </header>

      {/* 2. Hero Visual Showcase */}
      <div className="articleHeroVisualBox">
        <img src={article.heroImage} alt={article.title} className="articleHeroImg" />
        <div className="articleHeroCaption">
          <Info size={14} className="goldIcon" />
          <span>توثيق أرشيفي ومطابقة فنية معتمدة من خبراء ديانا أنتيك</span>
        </div>
      </div>

      {/* 3. Main Body Container */}
      <div className="articleBodyWrapper">
        {/* Executive Summary Card */}
        <div className="articleExecutiveSummaryCard">
          <div className="summaryCardBadge">
            <Sparkles size={16} className="goldIcon" />
            <span>خلاصة التوثيق التاريخي</span>
          </div>
          <p>{article.summary}</p>
        </div>

        {/* Narrative Sections */}
        <div className="articleTextFlow">
          {article.content.map((section, idx) => (
            <section key={idx} className="articleChapterSection">
              <h2 className="chapterHeading">{section.heading}</h2>
              <p className="chapterParagraph">{section.text}</p>
            </section>
          ))}
        </div>

        {/* 4. VISUAL VARIANTS: معرض الأنماط والأشكال التاريخية */}
        {article.visualVariants && article.visualVariants.length > 0 && (
          <section className="articleVisualVariantsSection" aria-label="Visual Variants">
            <div className="sectionHeaderOrnament">
              <div className="headerOrnamentIcon">
                <Layers size={18} className="goldIcon" />
              </div>
              <h2 className="sectionOrnamentTitle">معرض الأنماط والأشكال التاريخية لهذا المقتنى</h2>
              <p className="sectionOrnamentSubtitle">
                تطور شكل وتصميم هذه القطعة عبر العصور؛ من النماذج الملكية الأولى إلى التصميمات المدمجة
              </p>
            </div>

            <div className="visualVariantsGrid">
              {article.visualVariants.map((variant, idx) => (
                <div key={idx} className="variantCard">
                  <div className="variantCardMedia">
                    <img src={variant.image} alt={variant.title} loading="lazy" />
                    <span className="variantRarityBadge">{variant.rarity}</span>
                  </div>
                  <div className="variantCardBody">
                    <span className="variantEraBadge">{variant.era}</span>
                    <h3 className="variantTitle">{variant.title}</h3>
                    <p className="variantDesc">{variant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 5. AUTHENTICITY GUIDE: دليل الفحص البصري (الأصلي مقابل المقلد) */}
        {article.authenticityGuide && (
          <section className="articleAuthenticitySection" aria-label="Authenticity Comparison">
            <div className="sectionHeaderOrnament">
              <div className="headerOrnamentIcon">
                <ShieldCheck size={20} className="goldIcon" />
              </div>
              <h2 className="sectionOrnamentTitle">دليل الفحص البصري: كيف تفرق بين الأصلي والمقلد؟</h2>
              <p className="sectionOrnamentSubtitle">
                مقارنة معملية دقيقة بين علامات الزمن الأصلية ومحاولات التعتيق الصناعي التجاري
              </p>
            </div>

            <div className="authenticityComparisonGrid">
              {/* Genuine Column */}
              <div className="authColumn genuineColumn">
                <div className="authColumnHeader genuineHeader">
                  <CheckCircle2 size={18} />
                  <h3>علامات القطعة الأصلية (Genuine Marks)</h3>
                </div>
                <ul className="authPointsList">
                  {article.authenticityGuide.genuinePoints.map((point, idx) => (
                    <li key={idx}>
                      <span className="authCheckDot">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Replica / Fake Column */}
              <div className="authColumn replicaColumn">
                <div className="authColumnHeader replicaHeader">
                  <AlertTriangle size={18} />
                  <h3>علامات النسخ المقلدة والتعتيق الصناعي (Warning Signs)</h3>
                </div>
                <ul className="authPointsList">
                  {article.authenticityGuide.replicaWarnings.map((warning, idx) => (
                    <li key={idx}>
                      <span className="authAlertDot">⚠️</span>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Test Method Placard */}
            <div className="authTestMethodPlacard">
              <div className="testMethodIcon">
                <Eye size={20} className="goldIcon" />
              </div>
              <div>
                <h4>نصيحة الخبير للاختبار العملي:</h4>
                <p>{article.authenticityGuide.testMethod}</p>
              </div>
            </div>
          </section>
        )}

        {/* 6. VALUE LADDER: سُلّم القيمة ومحددات السعر في السوق */}
        {article.valueTiers && article.valueTiers.length > 0 && (
          <section className="articleValueTiersSection" aria-label="Market Value Ladder">
            <div className="sectionHeaderOrnament">
              <div className="headerOrnamentIcon">
                <Scale size={20} className="goldIcon" />
              </div>
              <h2 className="sectionOrnamentTitle">سُلّم القيمة التقديرية ومحددات السعر في السوق</h2>
              <p className="sectionOrnamentSubtitle">
                الأسعار السوقية العادلة للقطع التراثية بحسب عصر الصنع، الحالة الميكانيكية، ودرجة الندرة
              </p>
            </div>

            <div className="valueTiersGrid">
              {article.valueTiers.map((tier, idx) => (
                <div key={idx} className={`valueTierCard tier-${tier.tierLevel}`}>
                  <div className="tierCardTop">
                    <span className="tierIconMarker">
                      {tier.tierLevel === "high" ? "👑" : tier.tierLevel === "mid" ? "⚖️" : "📜"}
                    </span>
                    <h3 className="tierTitle">{tier.title}</h3>
                  </div>

                  <div className="tierPriceDisplay">
                    <span className="tierPriceRange">{tier.priceRangeEgp}</span>
                    <small className="tierPriceNote">قيمة تقديرية متداولة بالسوق</small>
                  </div>

                  <p className="tierCriteria">{tier.criteria}</p>

                  <ul className="tierFeaturesList">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span className="featBullet">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Specific Pricing Explanation Rule */}
            {article.pricingRule && (
              <div className="pricingRuleHighlightBox">
                <div className="pricingRuleHeader">
                  <Gem size={18} className="goldIcon" />
                  <h4>لماذا تختلف الأسعار بين القطع من نفس النوع؟</h4>
                </div>
                <p>{article.pricingRule}</p>
              </div>
            )}
          </section>
        )}
      </div>

      {/* 7. LIVE RELATED STORE ARTIFACTS: قطع متوفرة للاقتناء مرتبطة بهذا البحث */}
      {linkedProducts.length > 0 && (
        <section className="articleLinkedProductsSection" aria-label="Related Products in Store">
          <div className="linkedSectionHeader">
            <div>
              <span className="linkedEyebrow">سوق ديانا للمقتنيات</span>
              <h2 className="linkedTitle">قطع أصلية متوفرة للاقتناء مرتبطة بهذا البحث</h2>
              <p className="linkedSubtitle">
                يمكنك فحص واقتناء هذه القطع الموثقة مباشرة من ديوان معارضنا، مع ميزة المعاينة الحية عند الاستلام.
              </p>
            </div>
            <Link href="/shop" className="browseAllShopLink">
              <span>تصفح كل المعروضات</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="linkedProductsGrid">
            {linkedProducts.map((product) => (
              <div key={product.id} className="linkedProductCard">
                <div className="linkedCardMedia">
                  <img src={product.images[0]} alt={product.name} loading="lazy" />
                  <span className="inspectedLiveBadge">مفحوصة ومعاينة حية ✓</span>
                </div>
                <div className="linkedCardBody">
                  <div className="linkedMeta">
                    <span className="linkedYear">{product.yearCirca || product.eraLabel}</span>
                    {product.origin && <span className="linkedOrigin">• {product.origin.split("–")[0]}</span>}
                  </div>
                  <Link href={`/product/${product.slug}`}>
                    <h3 className="linkedCardTitle">{product.name}</h3>
                  </Link>
                  <div className="linkedPriceRow">
                    <span className="linkedPrice">{product.price.toLocaleString("ar-EG")} ج.م</span>
                  </div>
                  <div className="linkedTrustNote">
                    <ShieldCheck size={12} className="goldIcon" />
                    <span>فحص ومعاينة حية عند الاستلام</span>
                  </div>
                  <Link href={`/product/${product.slug}`} className="linkedAcquireBtn">
                    <ShoppingBag size={14} />
                    <span>اقتنِ القطعة أو عاينها</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Navigation */}
      <footer className="articlePageFooter">
        <Link href="/encyclopedia" className="footerReturnBtn">
          <ArrowRight size={16} />
          <span>العودة لفهرس موسوعة الأنتيكات</span>
        </Link>
        <Link href="/shop" className="footerShopBtn">
          <span>تصفح متجر المقتنيات النادرة</span>
          <ArrowLeft size={16} />
        </Link>
      </footer>
    </article>
  );
}
