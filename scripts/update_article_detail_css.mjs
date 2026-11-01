import fs from 'fs';

let content = fs.readFileSync('src/app/globals.css', 'utf8');

const newArticleStyles = `
/* ==========================================================================
   EXPANDED ENCYCLOPEDIA ARTICLE DETAIL PAGE (Variants, Auth, Values, Shop)
   ========================================================================== */
.antiqueArticlePage {
  background: var(--antique-bg);
  color: var(--antique-ink);
  min-height: 100vh;
  padding-top: calc(72px + 24px);
  padding-bottom: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.articlePageHeader {
  max-width: 1100px;
  margin: 0 auto 36px;
  padding: 0 clamp(16px, 3vw, 40px);
}

.articleBreadcrumbNav {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 13.5px;
  margin-bottom: 16px;
}

.backToEncyclopediaLink {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--antique-gold);
  text-decoration: none;
  font-weight: 700;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.backToEncyclopediaLink:hover {
  transform: translateX(4px);
  opacity: 0.9;
}

.breadcrumbDivider {
  color: var(--antique-border);
  opacity: 0.6;
}

.articleEraBadge {
  background: var(--antique-gold-bg);
  border: 1px solid var(--antique-gold);
  color: var(--antique-gold);
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 11.5px;
  font-weight: 700;
}

.articleCategoryBadgeTag {
  color: var(--antique-ink-muted);
  font-size: 13px;
}

.articleMainTitle {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(26px, 3.8vw, 44px);
  color: var(--antique-ink);
  line-height: 1.3;
  margin: 0 0 16px;
  font-weight: 700;
}

.articleSubtitleLead {
  font-size: clamp(15.5px, 1.8vw, 19px);
  color: var(--antique-ink-muted);
  line-height: 1.65;
  margin: 0 0 20px;
}

.articleMetaBar {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--antique-gold);
}

.metaDivider {
  opacity: 0.5;
}

.metaReadTime {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.articleHeroVisualBox {
  max-width: 1200px;
  margin: 0 auto 48px;
  padding: 0 clamp(16px, 3vw, 40px);
}

.articleHeroImg {
  width: 100%;
  max-height: 520px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
  border: 1px solid var(--antique-border);
  box-shadow: 0 12px 36px rgba(18, 12, 6, 0.5);
}

.articleHeroCaption {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 12.5px;
  color: var(--antique-gold);
  opacity: 0.9;
  text-align: center;
  margin-top: 8px;
}

.articleBodyWrapper {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(16px, 3vw, 40px);
}

.articleExecutiveSummaryCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-right: 4px solid var(--antique-gold);
  border-radius: 12px;
  padding: 24px 28px;
  margin-bottom: 40px;
  box-shadow: var(--antique-card-shadow);
}

[dir="ltr"] .articleExecutiveSummaryCard {
  border-right: 1px solid var(--antique-border);
  border-left: 4px solid var(--antique-gold);
}

.summaryCardBadge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: var(--antique-gold);
  margin-bottom: 10px;
}

.articleExecutiveSummaryCard p {
  font-size: 16.5px;
  line-height: 1.8;
  color: var(--antique-ink);
  margin: 0;
}

.articleTextFlow {
  margin-bottom: 50px;
}

.articleChapterSection {
  margin-bottom: 32px;
}

.chapterHeading {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(20px, 2.4vw, 26px);
  color: var(--antique-gold);
  margin: 0 0 12px;
  line-height: 1.35;
}

.chapterParagraph {
  font-size: 16.5px;
  line-height: 1.85;
  color: var(--antique-ink);
  opacity: 0.92;
  margin: 0;
}

/* Section Header Ornaments */
.sectionHeaderOrnament {
  text-align: center;
  margin-bottom: 28px;
  padding: 0 16px;
}

.headerOrnamentIcon {
  width: 44px;
  height: 44px;
  margin: 0 auto 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  box-shadow: 0 4px 12px rgba(18, 10, 5, 0.3);
}

.sectionOrnamentTitle {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(21px, 2.6vw, 28px);
  color: var(--antique-gold);
  margin: 0 0 8px;
}

.sectionOrnamentSubtitle {
  font-size: 14.5px;
  color: var(--antique-ink-muted);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Visual Variants Gallery */
.articleVisualVariantsSection {
  background: var(--antique-surface-subtle);
  border: 1px solid var(--antique-border);
  border-radius: 18px;
  padding: 36px clamp(16px, 3vw, 36px);
  margin-bottom: 50px;
}

.visualVariantsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 900px) {
  .visualVariantsGrid {
    grid-template-columns: 1fr;
  }
}

.variantCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--antique-card-shadow);
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.variantCard:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
}

.variantCardMedia {
  position: relative;
  height: 180px;
  background: var(--antique-inner-bg);
  overflow: hidden;
}

.variantCardMedia img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.variantCard:hover .variantCardMedia img {
  transform: scale(1.05);
}

.variantRarityBadge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(22, 12, 6, 0.85);
  border: 1px solid var(--antique-gold);
  color: var(--antique-gold);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 700;
  backdrop-filter: blur(4px);
}

.variantCardBody {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.variantEraBadge {
  font-size: 11px;
  color: var(--antique-gold);
  font-weight: 700;
  margin-bottom: 6px;
}

.variantTitle {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 16.5px;
  color: var(--antique-ink);
  margin: 0 0 8px;
  line-height: 1.35;
}

.variantDesc {
  font-size: 13.5px;
  color: var(--antique-ink-muted);
  line-height: 1.6;
  margin: 0;
}

/* Authenticity Guide */
.articleAuthenticitySection {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 18px;
  padding: 36px clamp(16px, 3vw, 36px);
  margin-bottom: 50px;
}

.authenticityComparisonGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 22px;
  margin-bottom: 24px;
}

@media (max-width: 800px) {
  .authenticityComparisonGrid {
    grid-template-columns: 1fr;
  }
}

.authColumn {
  border-radius: 14px;
  padding: 20px;
  border: 1px solid var(--antique-border);
}

.authColumn.genuineColumn {
  background: rgba(46, 125, 50, 0.08);
  border-color: rgba(46, 125, 50, 0.35);
}

.authColumn.replicaColumn {
  background: rgba(198, 40, 40, 0.08);
  border-color: rgba(198, 40, 40, 0.35);
}

.authColumnHeader {
  display: flex;
  align-items: center;
  gap: 8px;
  padding-bottom: 12px;
  margin-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.genuineHeader {
  color: #81c784;
}

.replicaHeader {
  color: #e57373;
}

.authColumnHeader h3 {
  font-family: Georgia, serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
}

.authPointsList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.authPointsList li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--antique-ink);
}

.authCheckDot {
  color: #81c784;
  font-weight: 900;
  font-size: 16px;
  flex-shrink: 0;
}

.authAlertDot {
  font-size: 14px;
  flex-shrink: 0;
}

.authTestMethodPlacard {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--antique-surface-subtle);
  border: 1px solid var(--antique-border);
  border-radius: 12px;
  padding: 16px 20px;
}

.testMethodIcon {
  margin-top: 2px;
  flex-shrink: 0;
}

.authTestMethodPlacard h4 {
  margin: 0 0 4px;
  font-size: 14px;
  color: var(--antique-gold);
}

.authTestMethodPlacard p {
  margin: 0;
  font-size: 13.5px;
  color: var(--antique-ink);
  line-height: 1.6;
}

/* Value Tiers Section */
.articleValueTiersSection {
  background: var(--antique-surface-subtle);
  border: 1px solid var(--antique-border);
  border-radius: 18px;
  padding: 36px clamp(16px, 3vw, 36px);
  margin-bottom: 50px;
}

.valueTiersGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 24px;
}

@media (max-width: 900px) {
  .valueTiersGrid {
    grid-template-columns: 1fr;
  }
}

.valueTierCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: var(--antique-card-shadow);
  position: relative;
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.valueTierCard:hover {
  transform: translateY(-4px);
}

.valueTierCard.tier-high {
  border-color: var(--antique-gold);
  background: radial-gradient(circle at 50% 0%, rgba(212, 163, 75, 0.12) 0%, var(--antique-surface) 80%);
}

.tierCardTop {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.tierIconMarker {
  font-size: 20px;
}

.tierTitle {
  font-family: Georgia, serif;
  font-size: 16px;
  color: var(--antique-gold);
  margin: 0;
  line-height: 1.35;
}

.tierPriceDisplay {
  background: var(--antique-inner-bg);
  border: 1px solid var(--antique-border);
  border-radius: 10px;
  padding: 10px 14px;
  margin-bottom: 14px;
}

.tierPriceRange {
  display: block;
  font-size: 19px;
  font-weight: 800;
  color: var(--antique-gold);
  font-family: Georgia, serif;
}

.tierPriceNote {
  font-size: 11px;
  color: var(--antique-ink-muted);
}

.tierCriteria {
  font-size: 13.5px;
  color: var(--antique-ink);
  line-height: 1.6;
  margin: 0 0 14px;
  flex: 1;
}

.tierFeaturesList {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tierFeaturesList li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  color: var(--antique-ink-muted);
}

.featBullet {
  color: var(--antique-gold);
}

.pricingRuleHighlightBox {
  background: var(--antique-surface);
  border: 1px solid rgba(212, 163, 75, 0.4);
  border-radius: 12px;
  padding: 20px 24px;
}

.pricingRuleHeader {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.pricingRuleHeader h4 {
  font-family: Georgia, serif;
  font-size: 16px;
  color: var(--antique-gold);
  margin: 0;
}

.pricingRuleHighlightBox p {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--antique-ink);
}

/* Related Products in Store */
.articleLinkedProductsSection {
  max-width: 1200px;
  margin: 0 auto 60px;
  padding: 40px clamp(16px, 3vw, 40px);
  background: var(--antique-surface-subtle);
  border-top: 1px solid var(--antique-border);
  border-bottom: 1px solid var(--antique-border);
}

.linkedSectionHeader {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 16px;
}

.linkedEyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: var(--antique-gold);
  letter-spacing: 0.5px;
  margin-bottom: 4px;
}

.linkedTitle {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(20px, 2.4vw, 28px);
  color: var(--antique-ink);
  margin: 0 0 6px;
}

.linkedSubtitle {
  font-size: 14px;
  color: var(--antique-ink-muted);
  max-width: 650px;
  margin: 0;
  line-height: 1.6;
}

.browseAllShopLink {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  color: var(--antique-gold);
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.browseAllShopLink:hover {
  border-color: var(--antique-gold);
  transform: translateY(-2px);
}

.linkedProductsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.linkedProductCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--antique-card-shadow);
  transition: transform 0.22s ease, border-color 0.22s ease;
}

.linkedProductCard:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
}

.linkedCardMedia {
  position: relative;
  height: 200px;
  background: var(--antique-inner-bg);
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--antique-border);
}

.linkedCardMedia img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.linkedProductCard:hover .linkedCardMedia img {
  transform: scale(1.06);
}

.inspectedLiveBadge {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(22, 12, 6, 0.85);
  border: 1px solid var(--antique-gold);
  color: var(--antique-gold);
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 10.5px;
  font-weight: 700;
}

.linkedCardBody {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.linkedMeta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--antique-gold);
  margin-bottom: 6px;
}

.linkedCardTitle {
  font-size: 15px;
  color: var(--antique-ink);
  margin: 0 0 10px;
  line-height: 1.4;
  font-weight: 700;
}

.linkedPriceRow {
  margin-bottom: 8px;
}

.linkedPrice {
  font-size: 18px;
  font-weight: 800;
  color: var(--antique-gold);
  font-family: Georgia, serif;
}

.linkedTrustNote {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: var(--antique-gold);
  opacity: 0.9;
  margin-top: auto;
  margin-bottom: 12px;
}

.linkedAcquireBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: var(--antique-gold);
  color: #120e0a;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.linkedAcquireBtn:hover {
  background: #f0cb7d;
  box-shadow: 0 4px 12px rgba(184, 134, 11, 0.35);
}

/* Article Page Footer */
.articlePageFooter {
  max-width: 1100px;
  margin: 0 auto;
  padding: 30px clamp(16px, 3vw, 40px) 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  border-top: 1px solid var(--antique-border);
}

.footerReturnBtn,
.footerShopBtn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;
}

.footerReturnBtn {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  color: var(--antique-ink);
}

.footerReturnBtn:hover {
  border-color: var(--antique-gold);
  color: var(--antique-gold);
}

.footerShopBtn {
  background: var(--antique-gold);
  color: #120e0a;
}

.footerShopBtn:hover {
  background: #f0cb7d;
}

.articleGuideTags {
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

.verificationTipBadge.valueBadge {
  background: rgba(180, 130, 20, 0.12);
  border-color: rgba(212, 163, 75, 0.4);
}
`;

if (!content.includes('/* ==========================================================================\n   EXPANDED ENCYCLOPEDIA ARTICLE DETAIL PAGE')) {
  content += '\n' + newArticleStyles;
  fs.writeFileSync('src/app/globals.css', content, 'utf8');
  console.log('Appended expanded article detail CSS successfully!');
} else {
  console.log('Already exists!');
}
