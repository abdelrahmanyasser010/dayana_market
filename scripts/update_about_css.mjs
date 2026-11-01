import fs from 'fs';
import path from 'path';

const cssPath = path.resolve('src/app/globals.css');
let css = fs.readFileSync(cssPath, 'utf8');

const aboutStyles = `
/* ==========================================================================
   ANTIQUE ABOUT PAGE STYLING («قصة ديانا أنتيك»)
   ========================================================================== */
.antiqueAboutPage {
  background: var(--antique-bg);
  min-height: 100vh;
  color: var(--antique-ink);
  transition: background-color 0.3s ease;
}

.aboutHeroSection {
  position: relative;
  min-height: 380px;
  padding: calc(68px + 40px) clamp(16px, 3.5vw, 64px) 50px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #24160c;
}

.aboutHeroBackdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.aboutHeroImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  filter: brightness(0.4) contrast(1.1);
}

.aboutHeroOverlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(20, 13, 8, 0.75) 0%, rgba(20, 13, 8, 0.92) 100%);
}

.aboutHeroContent {
  position: relative;
  z-index: 2;
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.aboutHeroEyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(223, 190, 118, 0.12);
  border: 1px solid rgba(223, 190, 118, 0.3);
  padding: 5px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 700;
  color: var(--antique-gold);
  margin-bottom: 16px;
}

.aboutHeroTitle {
  font-family: Georgia, serif;
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 800;
  color: #fffdf9;
  margin: 0 0 16px;
  line-height: 1.3;
}

.aboutHeroSubtitle {
  font-size: clamp(14px, 1.6vw, 17px);
  color: var(--antique-ink-muted);
  line-height: 1.7;
  max-width: 780px;
  margin: 0 auto;
}

.aboutMainContainer {
  max-width: 1360px;
  margin: 0 auto;
  padding: 50px clamp(16px, 3.5vw, 64px) 80px;
}

.aboutChapter {
  margin-bottom: 70px;
}

.chapterGrid {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 40px;
  align-items: center;
}

.chapterTag {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  color: var(--antique-gold);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 8px;
}

.chapterText h2 {
  font-family: Georgia, serif;
  font-size: clamp(22px, 2.8vw, 32px);
  color: var(--antique-ink);
  margin: 0 0 20px;
  line-height: 1.35;
}

.chapterText p {
  font-size: 15px;
  color: var(--antique-ink-muted);
  line-height: 1.8;
  margin: 0 0 16px;
}

.chapterMediaCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: var(--antique-card-shadow);
}

.chapterImg {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
}

.chapterMediaCaption {
  display: block;
  padding: 12px 16px;
  font-size: 12.5px;
  color: var(--antique-gold);
  text-align: center;
  font-weight: 600;
  border-top: 1px solid var(--antique-divider);
}

.aboutPillarsSection {
  margin-bottom: 60px;
}

.aboutPillarsGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.aboutPillarCard {
  background: var(--antique-surface);
  border: 1px solid var(--antique-border);
  border-radius: 16px;
  padding: 30px 24px;
  text-align: center;
  box-shadow: var(--antique-card-shadow);
  transition: transform 0.22s, border-color 0.22s;
}

.aboutPillarCard:hover {
  transform: translateY(-4px);
  border-color: var(--antique-gold);
}

.pillarIconWrap {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(223, 190, 118, 0.1);
  border: 1px solid rgba(223, 190, 118, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
}

.aboutPillarCard h3 {
  font-family: Georgia, serif;
  font-size: 18px;
  color: var(--antique-ink);
  margin: 0 0 12px;
}

.aboutPillarCard p {
  font-size: 13.5px;
  color: var(--antique-ink-muted);
  line-height: 1.65;
  margin: 0;
}

.aboutCtaStrip {
  background: linear-gradient(135deg, rgba(223, 190, 118, 0.15) 0%, rgba(184, 134, 11, 0.05) 100%);
  border: 1px solid var(--antique-border-strong);
  border-radius: 20px;
  padding: 40px clamp(20px, 4vw, 60px);
}

.aboutCtaInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.aboutCtaInner h2 {
  font-family: Georgia, serif;
  font-size: 24px;
  color: var(--antique-ink);
  margin: 0 0 8px;
}

.aboutCtaInner p {
  font-size: 14px;
  color: var(--antique-ink-muted);
  margin: 0;
}

.aboutPrimaryBtn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--antique-gold);
  color: #120e0a !important;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 28px;
  border-radius: 30px;
  text-decoration: none !important;
  box-shadow: 0 6px 20px rgba(184, 134, 11, 0.35);
  transition: all 0.22s;
}

.aboutPrimaryBtn:hover {
  background: var(--antique-gold-hover);
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .chapterGrid {
    grid-template-columns: 1fr;
  }
  .aboutPillarsGrid {
    grid-template-columns: 1fr;
  }
}
`;

css += aboutStyles;
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Successfully added aboutStyles to globals.css!');
