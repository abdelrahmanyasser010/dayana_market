import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const startMarker = `/* ==========================================================================
   DIANA ANTIQUE (ديانا أنتيك) - LIVING MUSEUM & COLLECTIBLES VISUAL IDENTITY`;

const endMarker = `/* ==========================================================================
   14. RESPONSIVE BREAKPOINTS`;

const startIndex = css.indexOf(startMarker);
const endIndex = css.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  console.error('Markers not found! startIndex:', startIndex, 'endIndex:', endIndex);
  process.exit(1);
}

const newAntiqueCss = `/* ==========================================================================
   DIANA ANTIQUE (ديانا أنتيك) - LIVING MUSEUM & COLLECTIBLES VISUAL IDENTITY
   ANTIQUE THEME SYSTEM: DARK MUSEUM (DEFAULT) & CLASSIC PARCHMENT (LIGHT)
   ========================================================================== */

:root,
[data-theme="dark"] {
  --antique-bg: #110c08;
  --antique-bg-subtle: #17100b;
  --antique-surface: #1a130d;
  --antique-surface-hover: #241a12;
  --antique-surface-subtle: #140d09;
  --antique-inner-bg: #120b07;
  --antique-border: rgba(223, 190, 118, 0.22);
  --antique-border-strong: rgba(223, 190, 118, 0.45);
  --antique-ink: #f7ebd3;
  --antique-ink-muted: #c5b49e;
  --antique-ink-subtle: #8e7c69;
  --antique-gold: #dfbe76;
  --antique-gold-hover: #f0cf85;
  --antique-gold-bg: rgba(223, 190, 118, 0.12);
  --antique-card-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
  --antique-divider: rgba(223, 190, 118, 0.2);
  --antique-tag-bg: rgba(30, 22, 16, 0.9);
  --antique-btn-bg: #221710;
  --antique-btn-border: #dfbe76;
  --antique-btn-text: #ffebb0;
  --antique-verified-bg: rgba(20, 75, 42, 0.38);
  --antique-verified-text: #6ee7b7;
  --antique-verified-border: rgba(110, 231, 183, 0.4);
  --antique-input-bg: #1a120c;
  --antique-input-border: rgba(223, 190, 118, 0.28);
}

[data-theme="light"] {
  --antique-bg: #f8f3ea;
  --antique-bg-subtle: #f3ede2;
  --antique-surface: #fffdf9;
  --antique-surface-hover: #fcf6ec;
  --antique-surface-subtle: #f5ede0;
  --antique-inner-bg: #f7f1e7;
  --antique-border: #e2d4c0;
  --antique-border-strong: #c8b497;
  --antique-ink: #2a1f16;
  --antique-ink-muted: #6e5945;
  --antique-ink-subtle: #96826d;
  --antique-gold: #b8860b;
  --antique-gold-hover: #966c04;
  --antique-gold-bg: rgba(184, 134, 11, 0.1);
  --antique-card-shadow: 0 4px 14px rgba(44, 34, 25, 0.08);
  --antique-divider: #e7dcce;
  --antique-tag-bg: #f2e9dc;
  --antique-btn-bg: #f4ecdf;
  --antique-btn-border: #dfbe76;
  --antique-btn-text: #241a12;
  --antique-verified-bg: #e8f5ec;
  --antique-verified-text: #1b733f;
  --antique-verified-border: #b7e4c7;
  --antique-input-bg: #fffdf9;
  --antique-input-border: #decbba;
}

/* 1. Header & Navigation Refinement - Strict Single Row, No Wrapping */
.antiqueSiteHeader {
  background: rgba(18, 13, 9, 0.96) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  border-bottom: 1px solid rgba(223, 190, 118, 0.25) !important;
  height: 68px !important;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  z-index: 100 !important;
}

.antiqueHeaderInner {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  flex-wrap: nowrap !important;
  gap: 14px !important;
  height: 100% !important;
  max-width: 1540px !important;
  margin: 0 auto !important;
  padding: 0 clamp(14px, 2.5vw, 32px) !important;
}

.headerLogoWrap {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.antiqueNav {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 1;
}

.navItemLink {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 13.5px;
  color: #e5dfd3;
  font-weight: 500;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.2s;
  white-space: nowrap;
}

.navItemLink .navIcon {
  color: var(--gold);
  opacity: 0.9;
}

.navItemLink:hover {
  color: #ffebb0;
  background: rgba(223, 190, 118, 0.1);
}

.headerSearchBar {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(30, 22, 16, 0.9);
  border: 1px solid rgba(223, 190, 118, 0.35);
  border-radius: 999px;
  padding: 5px 14px;
  width: clamp(140px, 14vw, 220px);
  transition: all 0.25s;
}

.headerSearchBar:focus-within {
  width: clamp(180px, 18vw, 280px);
  border-color: var(--gold);
  background: rgba(24, 18, 12, 0.98);
  box-shadow: 0 0 14px rgba(223, 190, 118, 0.2);
}

.headerSearchBar input {
  background: transparent;
  border: 0;
  outline: 0;
  font-size: 12.5px;
  color: #fff;
  width: 100%;
}

.headerSearchBar input::placeholder {
  color: rgba(229, 223, 211, 0.55);
}

.searchSubmitBtn {
  background: transparent;
  border: 0;
  color: var(--gold);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
}

.antiqueActions {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
  flex-shrink: 0 !important;
}

/* Theme Switcher Button */
.themeSwitchBtn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  background: rgba(223, 190, 118, 0.12);
  border: 1px solid rgba(223, 190, 118, 0.35);
  border-radius: 999px;
  color: var(--antique-gold);
  font-size: 11.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.themeSwitchBtn:hover {
  background: rgba(223, 190, 118, 0.22);
  border-color: var(--antique-gold);
  transform: translateY(-1px);
}

.themeIconGold {
  color: var(--antique-gold);
}

.themeText {
  color: #f7ebd3;
  font-size: 11.5px;
  font-weight: 700;
}

.headerAccountLink {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #e5dfd3;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 8px;
  transition: color 0.2s;
}

.headerAccountLink:hover {
  color: #ffebb0;
}

.antiqueIconBtn {
  color: #e5dfd3 !important;
  width: 36px !important;
  height: 36px !important;
}

.antiqueIconBtn:hover {
  color: #ffebb0 !important;
  background: rgba(223, 190, 118, 0.1) !important;
}

.antiqueBadge {
  background: var(--gold-dark) !important;
  color: #fff !important;
}

.cartBadge {
  background: #c93b2b !important;
  color: #fff !important;
}

/* 2. Hero Section - PURE HD BANNER WITH ZERO MOCKUP HEADER ARTIFACTS */
.antiqueHeroClean {
  padding-top: 68px;
  background: var(--antique-bg);
  width: 100%;
  position: relative;
  line-height: 0;
  overflow: hidden;
}

.heroBannerFullLink {
  display: block;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  cursor: pointer;
}

.heroBannerImage {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
}

/* 3. Global Section Header with Ornamental Dividers */
.antiqueSectionHeader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
  padding: 0 16px;
}

.antiqueDividerLine {
  flex: 1;
  max-width: 140px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c8973d, transparent);
}

.antiqueSectionTitle {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(20px, 2.3vw, 28px);
  color: var(--antique-ink);
  margin: 0;
  letter-spacing: 0.04em;
  font-weight: 700;
  text-align: center;
}

.lightHeader .lightLine {
  background: linear-gradient(90deg, transparent, rgba(223, 190, 118, 0.7), transparent);
}

.lightHeader .lightTitle {
  color: #fffdf9;
}

/* 4. Home Categories Row - Never Cropped, Natural Proportions */
.antiqueCategorySection {
  background: var(--antique-bg-subtle);
  padding: 40px clamp(14px, 3vw, 48px);
  border-bottom: 1px solid var(--antique-divider);
  transition: background-color 0.3s ease;
}

.unifiedCategoryRow {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 1480px;
  margin: 0 auto;
  overflow-x: auto;
  padding: 4px 6px 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--antique-gold) var(--antique-inner-bg);
}

.provenanceSideCardExact {
  width: 140px;
  height: 122px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--antique-card-shadow);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.provenanceSideCardExact:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(184, 134, 11, 0.25);
}

.provenanceSideCardExact img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.categoryCardsTrackUnified {
  display: flex;
  gap: 10px;
  align-items: center;
  flex: 1;
  min-width: min-content;
}

.antiqueCategoryCardUnified {
  width: 105px;
  height: 122px;
  flex-shrink: 0;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 12px;
  padding: 10px 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: var(--antique-card-shadow);
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.antiqueCategoryCardUnified:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
  box-shadow: 0 6px 16px rgba(184, 134, 11, 0.2);
}

.catCardImageWrapUnified {
  width: 66px;
  height: 66px;
  border-radius: 10px;
  background: var(--antique-inner-bg);
  overflow: hidden;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.catCardImageWrapUnified img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.catCardLabelUnified {
  font-size: 12px;
  font-weight: 600;
  color: var(--antique-ink);
  line-height: 1.25;
}

/* 5. Home Timeline Track Row - Never Cropped */
.antiqueTimelineSection {
  background: #0e0906;
  padding: 40px clamp(14px, 3vw, 48px);
  border-bottom: 1px solid rgba(223, 190, 118, 0.15);
}

.unifiedTimelineRow {
  display: flex;
  align-items: center;
  gap: 14px;
  max-width: 1480px;
  margin: 0 auto;
}

.storySideCardExact {
  width: 235px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.storySideCardExact:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(223, 190, 118, 0.25);
}

.storySideCardExact img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.timelineTrackContainerUnified {
  flex: 1;
  position: relative;
  overflow-x: auto;
  padding: 10px 4px;
}

.timelineConnectingLineUnified {
  position: absolute;
  top: 50%;
  left: 30px;
  right: 30px;
  height: 2px;
  background: linear-gradient(90deg, rgba(223, 190, 118, 0.1), #dfbe76, rgba(223, 190, 118, 0.1));
  z-index: 1;
  transform: translateY(-16px);
}

.timelineCardsTrackUnified {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: relative;
  z-index: 2;
}

.antiqueEpochCardUnified {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 110px;
  transition: transform 0.2s;
}

.antiqueEpochCardUnified:hover {
  transform: translateY(-4px);
}

.epochImageWrapUnified {
  width: 90px;
  height: 60px;
  border-radius: 10px;
  overflow: hidden;
  background: #1e1610;
  border: 1px solid rgba(223, 190, 118, 0.35);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.epochImageWrapUnified img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.epochMetaUnified {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.epochTitleUnified {
  font-size: 12px;
  font-weight: 700;
  color: #ffebb0;
}

.epochYearsUnified {
  font-size: 11px;
  color: #c7c3bb;
}

/* 6. Home Featured Collectibles - Never Cropped, Clean Object Photos */
.antiqueFeaturedSection {
  background: var(--antique-bg-subtle);
  padding: 40px clamp(14px, 3vw, 48px);
  border-bottom: 1px solid var(--antique-divider);
  transition: background-color 0.3s ease;
}

.unifiedFeaturedRow {
  display: flex;
  align-items: stretch;
  gap: 14px;
  max-width: 1480px;
  margin: 0 auto;
  overflow-x: auto;
  padding: 6px 4px 12px;
  scrollbar-width: thin;
  scrollbar-color: var(--antique-gold) var(--antique-inner-bg);
}

.pieceWeekCardExact {
  width: 232px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: var(--antique-card-shadow);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.pieceWeekCardExact:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(223, 190, 118, 0.25);
}

.pieceWeekCardExact img {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: block;
}

.featuredProductsGridUnified {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
  flex: 1;
  min-width: min-content;
}

.antiqueParchmentCardUnified {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: var(--antique-card-shadow);
  transition: all 0.22s;
}

.antiqueParchmentCardUnified:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
  box-shadow: 0 8px 20px rgba(184, 134, 11, 0.22);
}

.cardTopBadgesUnified {
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}

.antiqueWishBtnUnified {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 50%;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--antique-gold);
  cursor: pointer;
  transition: all 0.2s;
}

.antiqueWishBtnUnified:hover {
  border-color: var(--antique-gold);
}

.antiqueWishBtnUnified.isWished {
  color: #c93b2b;
  border-color: #c93b2b;
}

.verifiedInspectionBadgeUnified,
.verifiedInspectionBadge {
  background: var(--antique-verified-bg);
  color: var(--antique-verified-text);
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  border: 1px solid var(--antique-verified-border);
  backdrop-filter: blur(4px);
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
}

.antiqueCardMediaLinkUnified {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--antique-inner-bg);
  aspect-ratio: 1.15;
  overflow: hidden;
  padding: 10px;
}

.antiqueCardMediaLinkUnified img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.antiqueParchmentCardUnified:hover .antiqueCardMediaLinkUnified img {
  transform: scale(1.06);
}

.antiqueCardBodyUnified {
  padding: 10px 10px 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.antiqueProductTitleUnified {
  font-size: 13px;
  font-weight: 700;
  color: var(--antique-ink);
  margin: 0 0 4px;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 36px;
}

.antiquePriceRowUnified {
  margin-bottom: 8px;
}

.antiquePriceValueUnified {
  font-size: 15px;
  font-weight: 800;
  color: var(--antique-gold);
}

.antiqueAddToCartBtnUnified {
  background: var(--antique-btn-bg);
  border: 1px solid var(--antique-btn-border);
  color: var(--antique-btn-text);
  font-size: 12px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  transition: all 0.2s;
}

.antiqueAddToCartBtnUnified:hover {
  background: var(--antique-gold);
  color: #17110c;
}

.antiqueAddToCartBtnUnified.btnAddedSuccess {
  background: #1e7e44;
  color: #fff;
  border-color: #1e7e44;
}

/* 7. Discovery Quad Cards (Images 1 & 3 Fusion) */
.discoverySectionUnified {
  background: var(--antique-bg);
  padding: 40px clamp(14px, 3vw, 48px);
  border-bottom: 1px solid var(--antique-divider);
  transition: background-color 0.3s ease;
}

.discoveryCardsGridUnified {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  max-width: 1480px;
  margin: 0 auto;
}

.antiqueDiscoveryCardUnified {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--antique-card-shadow);
  border: 1px solid var(--antique-border);
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
}

.antiqueDiscoveryCardUnified:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
  box-shadow: 0 8px 24px rgba(184, 134, 11, 0.25);
}

.discoveryCardBannerWrap {
  width: 100%;
  height: 100%;
}

.discoveryCardBannerWrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* 8. Trust Bar */
.antiqueTrustBar {
  background: #110c08;
  border-bottom: 1px solid rgba(223, 190, 118, 0.15);
  padding: 24px clamp(14px, 3vw, 48px);
}

.trustBarInner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  max-width: 1480px;
  margin: 0 auto;
}

.trustBarItem {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
}

.trustItemText {
  display: flex;
  flex-direction: column;
}

.trustItemText strong {
  font-size: 13.5px;
  color: #ffebb0;
  font-weight: 700;
}

.trustItemText span {
  font-size: 11.5px;
  color: #a89f91;
}

/* 9. Antique Newsletter */
.antiqueNewsletterSection {
  background: #18110b;
  padding: 36px clamp(14px, 3vw, 48px);
  border-bottom: 1px solid rgba(223, 190, 118, 0.15);
}

.newsletterInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
}

.newsletterTextWrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.newsletterTitle {
  font-size: 16px;
  color: #ffebb0;
  font-weight: 700;
  margin: 0 0 2px;
}

.newsletterDesc {
  font-size: 12.5px;
  color: #a89f91;
  margin: 0;
}

.newsletterForm {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  max-width: 480px;
}

.newsletterForm input {
  flex: 1;
  background: rgba(30, 22, 16, 0.9);
  border: 1px solid rgba(223, 190, 118, 0.35);
  border-radius: 999px;
  padding: 9px 18px;
  color: #fff;
  font-size: 13px;
  outline: 0;
}

.newsletterSubmitBtn {
  background: var(--gold);
  border: 0;
  color: #17110c;
  font-weight: 700;
  padding: 9px 20px;
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  transition: all 0.2s;
}

.newsletterSubmitBtn:hover {
  background: #ffebb0;
}

.newsletterSuccessMsg {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #8da37c;
  background: rgba(45, 90, 63, 0.2);
  border: 1px solid rgba(141, 163, 124, 0.3);
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 13px;
}

/* ==========================================================================
   10. SHOP PAGE STYLING (Rich Dark Museum Atmosphere & Parchment Light Mode)
   ========================================================================== */
.antiqueShopPage {
  background: var(--antique-bg);
  min-height: 100vh;
  padding-top: 68px;
  color: var(--antique-ink);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.shopHistoricBanner,
.heritageHistoricBanner,
.encyclopediaHistoricBanner,
.timelineHistoricBanner {
  position: relative;
  padding: 44px clamp(16px, 4vw, 56px) 34px;
  background: #110c08;
  color: #fff;
  overflow: hidden;
  border-bottom: 1px solid var(--antique-border);
}

.shopBannerBackdrop,
.heritageBannerBackdrop,
.encyclopediaBannerBackdrop,
.timelineBannerBackdrop {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.shopBannerBgImg,
.heritageBannerBgImg,
.encyclopediaBannerBgImg,
.timelineBannerBgImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.68) contrast(1.18);
}

.shopBannerOverlay,
.heritageBannerOverlay,
.encyclopediaBannerOverlay,
.timelineBannerOverlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(18, 12, 8, 0.35) 0%, rgba(18, 12, 8, 0.85) 100%),
              linear-gradient(to bottom, rgba(18, 12, 8, 0.65) 0%, rgba(18, 12, 8, 0.98) 100%);
}

.shopBannerContent,
.heritageBannerContent,
.encyclopediaBannerContent,
.timelineBannerContent {
  position: relative;
  z-index: 2;
  max-width: 1480px;
  margin: 0 auto;
}

.antiqueBreadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: var(--antique-gold);
  margin-bottom: 8px;
}

.breadcrumbSep {
  opacity: 0.6;
}

.shopBannerTitle,
.heritageBannerTitle,
.encyclopediaBannerTitle,
.timelineBannerTitle {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(24px, 3.2vw, 38px);
  color: #fffdfa;
  margin: 0 0 10px;
  font-weight: 700;
  line-height: 1.25;
}

.shopBannerSubtitle,
.heritageBannerSubtitle,
.encyclopediaBannerSubtitle,
.timelineBannerSubtitle {
  font-size: clamp(13.5px, 1.4vw, 16px);
  color: #e5ded2;
  max-width: 760px;
  margin: 0;
  line-height: 1.6;
}

/* Shop Main Container: Sidebar + Catalog */
.shopMainContainer {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 22px;
  max-width: 1480px;
  margin: 0 auto;
  padding: 30px clamp(14px, 2.5vw, 32px) 60px;
  align-items: start;
}

[dir="rtl"] .shopMainContainer {
  grid-template-columns: 260px 1fr;
}

.shopFiltersSidebar {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  padding: 18px 16px;
  box-shadow: var(--antique-card-shadow);
  position: sticky;
  top: 86px;
  color: var(--antique-ink);
}

.sidebarHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--antique-divider);
}

.sidebarTitleWrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sidebarTitleWrap h3 {
  font-size: 15px;
  font-family: Georgia, serif;
  color: var(--antique-ink);
  margin: 0;
  font-weight: 700;
}

.sidebarResetBtn {
  background: transparent;
  border: 0;
  color: var(--antique-gold);
  font-size: 11.5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}

.sidebarGroup {
  margin-bottom: 18px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--antique-divider);
}

.sidebarGroup:last-child {
  border-bottom: 0;
  margin-bottom: 0;
  padding-bottom: 0;
}

.heritageSpecialGroup {
  background: rgba(223, 190, 118, 0.1);
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid var(--antique-border);
}

.groupTitle {
  font-size: 13px;
  color: var(--antique-ink);
  margin: 0 0 10px;
  font-weight: 700;
}

.filterOptionsList {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.antiqueRadioLabel,
.antiqueCheckboxLabel {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--antique-ink-muted);
  cursor: pointer;
}

.antiqueRadioLabel input,
.antiqueCheckboxLabel input {
  display: none;
}

.radioCustom,
.checkboxCustom {
  width: 16px;
  height: 16px;
  border: 1px solid var(--antique-border-strong);
  display: inline-block;
  position: relative;
  transition: all 0.2s;
  background: var(--antique-input-bg);
}

.radioCustom {
  border-radius: 50%;
}

.checkboxCustom {
  border-radius: 4px;
}

.antiqueRadioLabel input:checked + .radioCustom,
.antiqueCheckboxLabel input:checked + .checkboxCustom {
  border-color: var(--antique-gold);
  background: var(--antique-gold);
}

.antiqueRadioLabel input:checked + .radioCustom::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #17110c;
}

.antiqueCheckboxLabel input:checked + .checkboxCustom::after {
  content: "✓";
  position: absolute;
  top: -2px;
  left: 2px;
  font-size: 12px;
  color: #17110c;
  font-weight: 900;
}

.antiqueRadioLabel input:checked ~ .radioText,
.antiqueCheckboxLabel input:checked ~ .checkboxText {
  color: var(--antique-gold);
  font-weight: 700;
}

.catalogToolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  padding: 10px 14px;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 10px;
}

.piecesCount {
  font-size: 13px;
  color: var(--antique-ink-muted);
}

.piecesCount b {
  color: var(--antique-gold);
}

.catalogSortWrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sortLabel {
  font-size: 12.5px;
  color: var(--antique-ink-muted);
}

.antiqueSortSelect {
  background: var(--antique-input-bg);
  border: 1px solid var(--antique-border);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 12.5px;
  color: var(--antique-ink);
  outline: 0;
}

.activeFilterPills {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.filterTagPill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
  color: var(--antique-ink);
}

.filterTagPill button {
  background: transparent;
  border: 0;
  color: var(--antique-gold);
  cursor: pointer;
  font-size: 14px;
}

.clearAllTagsBtn {
  background: transparent;
  border: 0;
  color: var(--antique-gold);
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
}

/* Products Grid on Shop Page */
.shopProductsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.antiqueShopCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: var(--antique-card-shadow);
  transition: all 0.22s;
}

.antiqueShopCard:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
  box-shadow: 0 10px 24px rgba(184, 134, 11, 0.2);
}

.shopCardBadges {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
}

.shopCardMedia {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--antique-inner-bg);
  aspect-ratio: 1.15;
  overflow: hidden;
  padding: 10px;
}

.shopCardMedia img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s;
}

.antiqueShopCard:hover .shopCardMedia img {
  transform: scale(1.06);
}

.shopCardBody {
  padding: 10px 10px 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
}

.shopCardMeta {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  color: var(--antique-ink-subtle);
  margin-bottom: 4px;
}

.shopCardTitle {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--antique-ink);
  margin: 0 0 8px;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 38px;
}

.shopCardPriceRow {
  margin-bottom: 10px;
}

.shopCardPrice {
  font-size: 16px;
  font-weight: 800;
  color: var(--antique-gold);
}

.shopAddToCartBtn {
  background: var(--antique-btn-bg);
  border: 1px solid var(--antique-btn-border);
  color: var(--antique-btn-text);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s;
}

.shopAddToCartBtn:hover {
  background: var(--antique-gold);
  color: #17110c;
}

.shopAddToCartBtn.btnAddedSuccess {
  background: #1e7e44;
  color: #fff;
  border-color: #1e7e44;
}

.emptyShopState {
  text-align: center;
  padding: 60px 20px;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  max-width: 500px;
  margin: 40px auto;
}

.emptyShopState h3 {
  font-family: Georgia, serif;
  font-size: 18px;
  color: var(--antique-ink);
  margin: 12px 0 6px;
}

.emptyShopState p {
  font-size: 13px;
  color: var(--antique-ink-muted);
  margin: 0 0 16px;
}

.antiqueGoldCta {
  background: var(--gold);
  border: 0;
  color: #17110c;
  font-weight: 700;
  padding: 9px 20px;
  border-radius: 999px;
  cursor: pointer;
}

/* ==========================================================================
   11. HERITAGE PAGE STYLING («من ذاكرة مصر»)
   ========================================================================== */
.antiqueHeritagePage {
  background: var(--antique-bg);
  min-height: 100vh;
  padding-top: 68px;
  color: var(--antique-ink);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.heritageEyebrow,
.encyclopediaEyebrow,
.timelineEyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(223, 190, 118, 0.15);
  border: 1px solid rgba(223, 190, 118, 0.4);
  color: var(--gold);
  font-size: 11.5px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}

.heritageThemesSection {
  padding: 30px clamp(14px, 3vw, 48px) 20px;
  max-width: 1480px;
  margin: 0 auto;
}

.themesSectionHeader {
  text-align: center;
  margin-bottom: 24px;
}

.themesSectionHeader h2 {
  font-family: Georgia, serif;
  font-size: 24px;
  color: var(--antique-ink);
  margin: 0 0 6px;
}

.themesSectionHeader p {
  font-size: 13.5px;
  color: var(--antique-ink-muted);
  margin: 0;
}

.heritageThemesGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.heritageThemeCardUnified {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.22s;
  box-shadow: var(--antique-card-shadow);
}

.heritageThemeCardUnified:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
  box-shadow: 0 8px 20px rgba(184, 134, 11, 0.22);
}

.activeThemeCard {
  border-color: var(--antique-gold) !important;
  box-shadow: 0 8px 24px rgba(184, 134, 11, 0.28) !important;
  transform: translateY(-4px);
}

.themeCardTop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.themeIconCircle {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--antique-gold-bg);
  border: 1px solid var(--antique-border-strong);
  display: flex;
  align-items: center;
  justify-content: center;
}

.themeBadge {
  font-size: 11px;
  color: var(--antique-gold);
  background: var(--antique-gold-bg);
  padding: 3px 8px;
  border-radius: 999px;
  font-weight: 600;
}

.heritageThemeCardUnified h3 {
  font-size: 15px;
  font-family: Georgia, serif;
  color: var(--antique-ink);
  margin: 0 0 6px;
  font-weight: 700;
}

.heritageThemeCardUnified p {
  font-size: 12.5px;
  color: var(--antique-ink-muted);
  line-height: 1.5;
  margin: 0 0 14px;
  flex: 1;
}

.themeCardCta {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12.5px;
  font-weight: 700;
  color: var(--antique-gold);
}

.heritageProductsSection {
  padding: 16px clamp(14px, 3vw, 48px) 60px;
  max-width: 1480px;
  margin: 0 auto;
}

.heritageSectionHeader {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.headerLeft h2 {
  font-family: Georgia, serif;
  font-size: 22px;
  color: var(--antique-ink);
  margin: 0 0 4px;
}

.headerLeft p {
  font-size: 13px;
  color: var(--antique-ink-muted);
  margin: 0;
}

.heritageShowAllBtn {
  background: var(--antique-btn-bg);
  border: 1px solid var(--antique-btn-border);
  color: var(--antique-btn-text);
  font-size: 12.5px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 999px;
  cursor: pointer;
}

.heritageProductsGridUnified {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.heritageProductCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: var(--antique-card-shadow);
  transition: all 0.22s;
}

.heritageProductCard:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
  box-shadow: 0 10px 24px rgba(184, 134, 11, 0.22);
}

.heritageCardMedia {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--antique-inner-bg);
  aspect-ratio: 1.15;
  overflow: hidden;
  padding: 10px;
}

.heritageCardMedia img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s;
}

.heritageProductCard:hover .heritageCardMedia img {
  transform: scale(1.06);
}

.heritageOriginBadge {
  background: rgba(223, 190, 118, 0.15);
  color: var(--antique-gold);
  border: 1px solid var(--antique-border-strong);
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}

.heritageAddToCartBtn {
  background: var(--antique-btn-bg);
  border: 1px solid var(--antique-btn-border);
  color: var(--antique-btn-text);
  font-size: 12px;
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.2s;
}

.heritageAddToCartBtn:hover {
  background: var(--gold);
  color: #17110c;
}

.heritageAddToCartBtn.btnAddedSuccess {
  background: #1e7e44;
  color: #fff;
  border-color: #1e7e44;
}

/* ==========================================================================
   12. ENCYCLOPEDIA PAGE STYLING («موسوعة الأنتيكات»)
   ========================================================================== */
.antiqueEncyclopediaPage {
  background: var(--antique-bg);
  min-height: 100vh;
  padding-top: 68px;
  color: var(--antique-ink);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.encyclopediaSearchPill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(30, 22, 16, 0.95);
  border: 1px solid rgba(223, 190, 118, 0.4);
  border-radius: 999px;
  padding: 8px 16px;
  max-width: 480px;
  width: 100%;
  margin-top: 16px;
}

.encyclopediaSearchPill input {
  background: transparent;
  border: 0;
  outline: 0;
  color: #fff;
  font-size: 13.5px;
  width: 100%;
}

.encyclopediaSearchPill input::placeholder {
  color: rgba(229, 223, 211, 0.6);
}

.encyclopediaCategoryBar {
  padding: 24px clamp(14px, 3vw, 48px) 10px;
  max-width: 1480px;
  margin: 0 auto;
}

.categoryPillsWrap {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.encyclopediaCategoryBtn {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 999px;
  padding: 6px 14px;
  font-size: 13px;
  color: var(--antique-ink);
  cursor: pointer;
  transition: all 0.2s;
}

.encyclopediaCategoryBtn:hover {
  border-color: var(--antique-gold);
}

.encyclopediaCategoryBtn.active {
  background: var(--antique-gold);
  border-color: var(--antique-gold);
  color: #17110c;
  font-weight: 700;
}

.encyclopediaArticlesSection {
  padding: 14px clamp(14px, 3vw, 48px) 60px;
  max-width: 1480px;
  margin: 0 auto;
}

.articlesGridCompact {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.compactArticleCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: var(--antique-card-shadow);
  display: flex;
  flex-direction: column;
  transition: transform 0.22s, box-shadow 0.22s;
}

.compactArticleCard:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
  box-shadow: 0 10px 24px rgba(184, 134, 11, 0.22);
}

.articleMediaLink {
  display: block;
  position: relative;
  height: 190px;
  overflow: hidden;
  background: #110d09;
}

.articleCardThumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.compactArticleCard:hover .articleCardThumbnail {
  transform: scale(1.06);
}

.articleCategoryBadge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(26, 19, 14, 0.88);
  color: #ffebb0;
  border: 1px solid rgba(223, 190, 118, 0.4);
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
}

.compactArticleBody {
  padding: 14px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.articleMetaRow {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
}

.articleReadTime {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  color: var(--antique-gold);
  font-weight: 600;
}

.articleEra {
  font-size: 11.5px;
  color: var(--antique-ink-subtle);
}

.compactArticleTitle {
  font-size: 15px;
  font-weight: 700;
  color: var(--antique-ink);
  margin: 0 0 8px;
  line-height: 1.4;
  font-family: Georgia, serif;
}

.compactArticleSummary {
  font-size: 12.5px;
  color: var(--antique-ink-muted);
  line-height: 1.55;
  margin: 0 0 14px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.compactArticleFoot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid var(--antique-divider);
}

.verificationTipBadge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11.5px;
  color: #2d7a4f;
  font-weight: 600;
}

.readMoreLink {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 700;
  color: var(--antique-gold);
}

.readMoreLink:hover {
  color: var(--antique-gold-hover);
}

/* ==========================================================================
   13. TIMELINE PAGE STYLING («رحلة عبر الزمن»)
   ========================================================================== */
.antiqueTimelinePage {
  background: var(--antique-bg);
  min-height: 100vh;
  padding-top: 68px;
  color: var(--antique-ink);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.timelineErasNavigatorSection {
  padding: 24px clamp(14px, 3vw, 48px) 10px;
  max-width: 1480px;
  margin: 0 auto;
}

.erasNavigatorHeader {
  text-align: center;
  margin-bottom: 16px;
}

.erasNavigatorHeader h2 {
  font-family: Georgia, serif;
  font-size: 22px;
  color: var(--antique-ink);
  margin: 0;
}

.erasTabsTrack {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

.eraTabCardUnified {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 12px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: var(--antique-card-shadow);
}

.eraTabCardUnified:hover {
  transform: translateY(-3px);
  border-color: var(--antique-gold);
  box-shadow: 0 6px 16px rgba(184, 134, 11, 0.2);
}

.activeEraTabCard {
  border-color: var(--antique-gold) !important;
  box-shadow: 0 6px 20px rgba(184, 134, 11, 0.28) !important;
  transform: translateY(-3px);
}

.eraTabThumbWrap {
  width: 72px;
  height: 48px;
  border-radius: 6px;
  overflow: hidden;
  background: #110c08;
  margin-bottom: 6px;
}

.eraTabThumbWrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.eraTabInfo {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.eraTabYears {
  font-size: 11px;
  color: var(--antique-gold);
  font-weight: 700;
}

.eraTabLabel {
  font-size: 12px;
  font-weight: 600;
  color: var(--antique-ink);
}

.selectedEraShowcaseSection {
  padding: 16px clamp(14px, 3vw, 48px) 60px;
  max-width: 1480px;
  margin: 0 auto;
}

.eraSpotlightCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border-strong);
  border-radius: 16px;
  padding: 22px 24px;
  color: var(--antique-ink);
  margin-bottom: 24px;
  box-shadow: var(--antique-card-shadow);
}

.eraSpotlightHeader h2 {
  font-family: Georgia, serif;
  font-size: 24px;
  color: var(--antique-gold);
  margin: 8px 0 6px;
}

.eraSpotlightYearsBadge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--antique-gold);
  font-weight: 700;
}

.eraSpotlightDesc {
  font-size: 13.5px;
  color: var(--antique-ink-muted);
  line-height: 1.6;
  margin: 0 0 16px;
}

.eraSpotlightMetaBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--antique-divider);
}

.eraItemsCount {
  font-size: 13px;
  color: var(--antique-gold);
  font-weight: 600;
}

.eraShopLink {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--antique-gold);
  font-size: 12.5px;
  font-weight: 700;
}

.eraShopLink:hover {
  color: var(--antique-gold-hover);
}

.eraProductsContainer {
  margin-top: 20px;
}

.eraProductsTitle {
  font-family: Georgia, serif;
  font-size: 20px;
  color: var(--antique-ink);
  margin: 0 0 16px;
}

.eraProductsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.emptyEraState {
  text-align: center;
  padding: 40px 20px;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
}

.emptyEraState p {
  font-size: 14px;
  color: var(--antique-ink-muted);
  margin: 10px 0 16px;
}

`;

const updatedCss = css.slice(0, startIndex) + newAntiqueCss + css.slice(endIndex);
fs.writeFileSync(cssPath, updatedCss, 'utf8');
console.log('Successfully updated globals.css with Antique Theme System!');
