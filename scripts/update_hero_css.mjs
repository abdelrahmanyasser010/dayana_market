import fs from 'fs';

let content = fs.readFileSync('src/app/globals.css', 'utf8');

const startMarker = '/* 2. Hero Section - PURE ELEGANCE WITH LUXURY SAFE AREA & NO CLIPPING */';
const endMarker = '/* 3. Global Section Header with Ornamental Dividers */';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
  const newSection = `/* 2. Hero Section - PURE ELEGANCE WITH LUXURY SAFE AREA & NO CLIPPING */
.antiqueHeroClean {
  padding-top: calc(72px + 16px);
  padding-bottom: 24px;
  padding-left: 20px;
  padding-right: 20px;
  background: #25160e;
  background: radial-gradient(ellipse at 50% 30%, #3a2215 0%, #25160e 65%, #1c100a 100%);
  width: 100%;
  position: relative;
  overflow: hidden;
  line-height: 0;
  transition: background-color 0.3s ease;
}

.heroBannerFullLink {
  display: block;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  text-decoration: none;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 38px rgba(15, 8, 4, 0.65), 0 0 0 1px rgba(212, 163, 75, 0.2);
}

.heroBannerImage {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 18px;
}

@media (max-width: 768px) {
  .antiqueHeroClean {
    padding-top: calc(64px + 10px);
    padding-left: 12px;
    padding-right: 12px;
    padding-bottom: 14px;
  }
  .heroBannerFullLink,
  .heroBannerImage {
    border-radius: 12px;
  }
}

`;

  content = content.slice(0, startIdx) + newSection + content.slice(endIdx);
  fs.writeFileSync('src/app/globals.css', content, 'utf8');
  console.log('Successfully updated globals.css Hero Section!');
} else {
  console.error('Markers not found!', { startIdx, endIdx });
}
