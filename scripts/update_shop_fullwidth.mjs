import fs from 'fs';

let content = fs.readFileSync('src/app/globals.css', 'utf8');

// 1. Remove margin-top: 40px from .antiqueFooter
content = content.replace(
  /\.antiqueFooter\s*\{[\s\S]*?margin-top:\s*40px;[\s\S]*?\}/,
  (match) => {
    return match.replace('margin-top: 40px;', 'margin-top: 0;');
  }
);

// 2. Update .shopMainContainer to take full width and flush bottom
const oldShopMain = `.shopMainContainer {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 22px;
  max-width: 1480px;
  margin: 0 auto;
  padding: 30px clamp(14px, 2.5vw, 32px) 60px;
  align-items: start;
}`;

const newShopMain = `.shopMainContainer {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 24px clamp(16px, 2.5vw, 48px) 36px;
  align-items: start;
}`;

if (content.includes(oldShopMain)) {
  content = content.replace(oldShopMain, newShopMain);
} else {
  console.log('oldShopMain exact string not found, will replace via regex');
  content = content.replace(
    /\.shopMainContainer\s*\{[\s\S]*?align-items:\s*start;\s*\}/,
    newShopMain
  );
}

// 3. Update .shopExperienceBar to take full width
const oldExperienceBar = `.shopExperienceBar {
  max-width: 1480px;
  margin: 0 auto;
  padding: 16px clamp(14px, 2.5vw, 40px) 0;
}`;

const newExperienceBar = `.shopExperienceBar {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 16px clamp(16px, 2.5vw, 48px) 0;
}`;

if (content.includes(oldExperienceBar)) {
  content = content.replace(oldExperienceBar, newExperienceBar);
} else {
  content = content.replace(
    /\.shopExperienceBar\s*\{[\s\S]*?padding:\s*16px[^;]+;\s*\}/,
    newExperienceBar
  );
}

// 4. Update .shopBannerContent to take full width
content = content.replace(
  /\.shopBannerContent,\s*\.heritageBannerContent,\s*\.encyclopediaBannerContent,\s*\.timelineBannerContent\s*\{[\s\S]*?max-width:\s*1480px;[\s\S]*?\}/,
  (match) => {
    return match.replace('max-width: 1480px;', 'max-width: 100%; width: 100%; padding: 0 clamp(16px, 2.5vw, 48px);');
  }
);

// 5. Update .shopProductsGrid to fill full width beautifully with auto-fill or 4-5 cols
const oldProductsGrid = `.shopProductsGrid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}`;

const newProductsGrid = `.shopProductsGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  width: 100%;
}`;

if (content.includes(oldProductsGrid)) {
  content = content.replace(oldProductsGrid, newProductsGrid);
} else {
  content = content.replace(
    /\.shopProductsGrid\s*\{[\s\S]*?gap:\s*14px;\s*\}/,
    newProductsGrid
  );
}

// 6. Ensure Footer also takes full width to match flush
content = content.replace(
  /\.antiquePillarsStrip\s*\{[\s\S]*?max-width:\s*1480px;[\s\S]*?\}/,
  (m) => m.replace('max-width: 1480px;', 'max-width: 100%; width: 100%; padding: 24px clamp(16px, 2.5vw, 48px);')
);

content = content.replace(
  /\.antiqueFooterGrid\s*\{[\s\S]*?max-width:\s*1480px;[\s\S]*?\}/,
  (m) => m.replace('max-width: 1480px;', 'max-width: 100%; width: 100%; padding: 40px clamp(16px, 2.5vw, 48px) 30px;')
);

content = content.replace(
  /\.antiqueFooterBottom\s*\{[\s\S]*?max-width:\s*1480px;[\s\S]*?\}/,
  (m) => m.replace('max-width: 1480px;', 'max-width: 100%; width: 100%; padding: 18px clamp(16px, 2.5vw, 48px) 24px;')
);

fs.writeFileSync('src/app/globals.css', content, 'utf8');
console.log('Successfully updated globals.css for full-width flush shop page and footer!');
