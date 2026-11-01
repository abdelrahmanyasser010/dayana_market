import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update heritage styling
const heritageStart = '.heritageProductsGridUnified {';
const heritageEnd = '.heritageAddToCartBtn:hover {';

const idxStart = css.indexOf(heritageStart);
const idxEnd = css.indexOf(heritageEnd);

if (idxStart !== -1 && idxEnd !== -1) {
  const afterHover = css.indexOf('}', idxEnd) + 1;
  const newHeritageCss = `.heritageProductsGridUnified {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  align-items: stretch;
}

.heritageProductCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  box-shadow: var(--antique-card-shadow);
  transition: all 0.22s ease;
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
  height: 200px;
  width: 100%;
  overflow: hidden;
  padding: 12px;
  border-bottom: 1px solid var(--antique-border);
}

.heritageCardMedia img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.heritageProductCard:hover .heritageCardMedia img {
  transform: scale(1.06);
}

.heritageCardBody {
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  gap: 8px;
}

.heritageCardMeta {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: var(--antique-gold);
  font-weight: 600;
}

.heritageCardTitle {
  font-family: Georgia, serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--antique-ink);
  margin: 0;
  line-height: 1.35;
  transition: color 0.2s;
}

.heritageProductCard:hover .heritageCardTitle {
  color: var(--antique-gold);
}

.heritageCardUsage {
  font-size: 12.5px;
  color: var(--antique-ink-muted);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 38px;
}

.heritageCardPriceRow {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  margin: 4px 0 8px;
}

.heritageCardPrice {
  font-size: 16px;
  font-weight: 800;
  color: var(--antique-ink);
  font-family: Georgia, serif;
}

.heritageAddToCartBtn {
  margin-top: auto;
  background: var(--antique-btn-bg);
  border: 1px solid var(--antique-btn-border);
  color: var(--antique-btn-text);
  font-size: 12.5px;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s ease;
  width: 100%;
}

.heritageAddToCartBtn:hover {
  background: var(--gold);
  color: #17110c;
  border-color: var(--gold);
}`;

  css = css.slice(0, idxStart) + newHeritageCss + css.slice(afterHover);
  console.log('Successfully updated heritage cards CSS');
}

// 2. Append Antique Footer styles
const footerStyles = `
/* ==========================================================================
   ANTIQUE FOOTER & PILLARS REFINEMENT
   ========================================================================== */
.antiqueFooter {
  background: var(--antique-surface);
  border-top: 1px solid var(--antique-border);
  color: var(--antique-ink);
  transition: background-color 0.3s ease, border-color 0.3s ease;
  margin-top: 40px;
}

.antiquePillarsStrip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1480px;
  margin: 0 auto;
  padding: 30px clamp(16px, 3vw, 48px);
  border-bottom: 1px solid var(--antique-divider);
}

.pillarItem {
  display: flex;
  align-items: center;
  gap: 14px;
}

.pillarIcon {
  color: var(--antique-gold);
  flex-shrink: 0;
}

.pillarItem strong {
  display: block;
  font-size: 14px;
  color: var(--antique-ink);
  margin-bottom: 2px;
}

.pillarItem p {
  margin: 0;
  font-size: 12px;
  color: var(--antique-ink-muted);
}

.antiqueNewsletterSection {
  background: var(--antique-bg-subtle);
  border-bottom: 1px solid var(--antique-divider);
  padding: 26px clamp(16px, 3vw, 48px);
}

.newsletterInner {
  max-width: 1480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.newsletterEyebrow {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--antique-gold);
  font-weight: 700;
  margin-bottom: 4px;
}

.newsletterText h3 {
  font-family: Georgia, serif;
  font-size: clamp(16px, 1.8vw, 22px);
  color: var(--antique-ink);
  margin: 0;
}

.newsletterForm {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 320px;
  max-width: 480px;
  flex: 1;
}

.newsletterInput {
  flex: 1;
  height: 42px;
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 8px;
  padding: 0 14px;
  font-size: 13px;
  color: var(--antique-ink);
  outline: none;
  transition: border-color 0.2s;
}

.newsletterInput:focus {
  border-color: var(--antique-gold);
}

.newsletterSubmitBtn {
  height: 42px;
  padding: 0 22px;
  background: var(--antique-gold);
  color: #120e0a;
  border: 0;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13.5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
}

.newsletterSubmitBtn:hover {
  background: var(--antique-gold-hover);
  transform: translateY(-1px);
}

.antiqueFooterGrid {
  max-width: 1480px;
  margin: 0 auto;
  padding: 48px clamp(16px, 3vw, 48px) 36px;
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
  gap: 36px;
}

.footerBrandHeader {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.footerBrandAr {
  display: block;
  font-family: Georgia, serif;
  font-size: 20px;
  font-weight: 700;
  color: var(--antique-gold);
  line-height: 1.2;
}

.footerBrandEn {
  display: block;
  font-size: 12px;
  color: var(--antique-ink-muted);
  letter-spacing: 0.05em;
}

.footerTagline {
  font-size: 12.5px;
  color: var(--antique-gold);
  font-weight: 600;
  margin: 0 0 10px;
}

.footerBrandDesc {
  font-size: 13px;
  color: var(--antique-ink-muted);
  line-height: 1.6;
  margin: 0;
  max-width: 380px;
}

.footerNavCol h4 {
  font-family: Georgia, serif;
  font-size: 15px;
  color: var(--antique-ink);
  margin: 0 0 16px;
}

.footerNavCol a {
  display: block;
  font-size: 13px;
  color: var(--antique-ink-muted);
  margin-bottom: 10px;
  text-decoration: none;
  transition: color 0.2s;
}

.footerNavCol a:hover {
  color: var(--antique-gold);
}

.footerSupportNote {
  display: block;
  font-size: 12px;
  color: var(--antique-ink-subtle);
  margin-top: 10px;
  line-height: 1.5;
}

.antiqueFooterBottom {
  max-width: 1480px;
  margin: 0 auto;
  padding: 20px clamp(16px, 3vw, 48px) 32px;
  border-top: 1px solid var(--antique-divider);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 12px;
  color: var(--antique-ink-muted);
}

.bottomPayments {
  display: flex;
  align-items: center;
  gap: 8px;
}

.paymentPill {
  background: var(--antique-bg-subtle);
  border: 1px solid var(--antique-border);
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--antique-ink);
}

.bottomMotto {
  font-weight: 700;
  color: var(--antique-gold);
  letter-spacing: 0.04em;
}

@media (max-width: 992px) {
  .antiquePillarsStrip {
    grid-template-columns: 1fr;
  }
  .antiqueFooterGrid {
    grid-template-columns: 1fr 1fr;
  }
  .heritageProductsGridUnified {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 600px) {
  .antiqueFooterGrid {
    grid-template-columns: 1fr;
  }
  .antiqueFooterBottom {
    flex-direction: column;
    text-align: center;
  }
  .heritageProductsGridUnified {
    grid-template-columns: 1fr;
  }
}
`;

css += footerStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully written all styles to globals.css!');
