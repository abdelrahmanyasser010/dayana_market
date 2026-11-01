import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

// 1. Update antiqueHeroClean
const heroTarget = '.antiqueHeroClean {';
const nextSection = '/* 3. Global Section Header with Ornamental Dividers */';

const heroStart = css.indexOf(heroTarget);
const heroEnd = css.indexOf(nextSection);

if (heroStart !== -1 && heroEnd !== -1) {
  const replacement = `.antiqueHeroClean {
  padding-top: 68px;
  padding-bottom: 0;
  background: #2e1d13;
  background: radial-gradient(ellipse at 50% 40%, #3e2618 0%, #2e1d13 55%, #22140c 100%);
  width: 100%;
  position: relative;
  overflow: hidden;
  line-height: 0;
  transition: background-color 0.3s ease;
}

.heroBannerFullLink {
  display: block;
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
}

.heroBannerImage {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  box-shadow: 0 8px 32px rgba(22, 12, 6, 0.5);
}

@media (max-width: 768px) {
  .antiqueHeroClean {
    padding-top: 64px;
  }
}

`;

  css = css.slice(0, heroStart) + replacement + css.slice(heroEnd);
  console.log('Successfully updated antiqueHeroClean CSS with warm matching mahogany!');
}

// 2. Add luxurious styling for product cards, trust notes, and CTA buttons
const cardImprovements = `
/* ==========================================================================
   LUXURY COLLECTIBLE CARD & REFINED CTA BUTTON
   ========================================================================== */
.cardTrustNote {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  color: var(--antique-gold);
  background: rgba(223, 190, 118, 0.08);
  border: 1px solid rgba(223, 190, 118, 0.2);
  padding: 4px 8px;
  border-radius: 6px;
  margin: 6px 0 10px;
}

.antiqueCtaBtn {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #dfbe76 0%, #c49a45 100%);
  color: #140e09 !important;
  border: 1px solid rgba(255, 255, 255, 0.25);
  font-size: 13.5px;
  font-weight: 700;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
  transition: all 0.22s ease;
  width: 100%;
  text-decoration: none !important;
}

.antiqueCtaBtn:hover {
  background: linear-gradient(135deg, #ecd18e 0%, #d6aa4d 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(223, 190, 118, 0.4);
}

.antiqueCtaBtn.btnAddedSuccess {
  background: #15803d !important;
  color: #ffffff !important;
  border-color: #16a34a !important;
  box-shadow: 0 4px 16px rgba(22, 163, 74, 0.35);
}
`;

css += cardImprovements;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully written card improvements to globals.css!');
