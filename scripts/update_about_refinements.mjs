import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const additionalStyles = `
/* ==========================================================================
   ABOUT PAGE REFINEMENTS (ZIGZAG CHAPTERS & SECTION HEADERS)
   ========================================================================== */
.chapterGridReverse {
  grid-template-columns: 1fr 1.3fr !important;
}

.aboutEyebrowTag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(223, 190, 118, 0.12);
  border: 1px solid rgba(223, 190, 118, 0.3);
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: var(--antique-gold);
  margin-bottom: 12px;
}

.aboutSectionHeader {
  text-align: center;
  margin-bottom: 40px;
}

.aboutSectionHeader h2 {
  font-family: Georgia, serif;
  font-size: clamp(22px, 2.8vw, 32px);
  color: var(--antique-ink);
  margin: 0 0 10px;
}

.aboutSectionHeader p {
  font-size: 14.5px;
  color: var(--antique-ink-muted);
  max-width: 600px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .chapterGridReverse {
    grid-template-columns: 1fr !important;
  }
}
`;

css += additionalStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully appended additionalStyles to globals.css!');
