import fs from 'fs';

let content = fs.readFileSync('src/app/globals.css', 'utf8');

const marker = '/* ==========================================================================\n   10. SHOP PAGE STYLING (Rich Dark Museum Atmosphere & Parchment Light Mode)\n   ========================================================================== */';
const nextMarker = '.shopHistoricBanner,';

const idx1 = content.indexOf('10. SHOP PAGE STYLING');
const idx2 = content.indexOf('.shopHistoricBanner,', idx1);

if (idx1 !== -1 && idx2 !== -1) {
  const headerEnd = content.indexOf('*/', idx1) + 2;
  const fixedSection = `\n.antiqueShopPage {\n  background: var(--antique-bg);\n  min-height: 100vh;\n  padding-top: 68px;\n  padding-bottom: 0;\n  margin-bottom: 0;\n  color: var(--antique-ink);\n  transition: background-color 0.3s ease, color 0.3s ease;\n}\n\n`;
  content = content.slice(0, headerEnd) + fixedSection + content.slice(idx2);
  fs.writeFileSync('src/app/globals.css', content, 'utf8');
  console.log('Fixed antiqueShopPage successfully!');
} else {
  console.error('Markers not found!');
}
