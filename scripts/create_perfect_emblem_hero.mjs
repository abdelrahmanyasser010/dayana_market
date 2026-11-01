import sharp from 'sharp';
import path from 'path';

async function generateMasterpieceHero() {
  const brandDir = 'public/media/brand';
  const outDir = 'public/media/extracted';

  // 1. Extract the FULL banner from design_diana_market.jpg from top: 0 to height: 295 (No top clipping!)
  const rawBanner = await sharp(path.join(brandDir, 'design_diana_market.jpg'))
    .extract({ left: 0, top: 0, width: 1024, height: 295 })
    .resize(2048, 590, { kernel: sharp.kernel.lanczos3 })
    .toBuffer();

  // 2. Build the Classical Temple Emblem Plaque as explicitly requested:
  // "الاسم ديانا أنتيك وفوقيه الأيقونة" -> Classical Temple Icon at the top, centered, and below it: ديانا أنتيك, Diana Antique, and the slogan!
  const emblemWidth = 460;
  const emblemHeight = 185;

  const emblemSvg = `
<svg width="${emblemWidth}" height="${emblemHeight}" viewBox="0 0 ${emblemWidth} ${emblemHeight}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff5db" />
      <stop offset="30%" stop-color="#f0cb7d" />
      <stop offset="65%" stop-color="#c99538" />
      <stop offset="100%" stop-color="#8a5f18" />
    </linearGradient>
    <linearGradient id="softPlinth" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="rgba(34, 20, 13, 0.92)" />
      <stop offset="100%" stop-color="rgba(20, 11, 7, 0.96)" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.85" />
    </filter>
  </defs>

  <!-- Luxurious Plaque with subtle double antique gold border -->
  <rect x="2" y="2" width="${emblemWidth - 4}" height="${emblemHeight - 4}" rx="16" fill="url(#softPlinth)" stroke="url(#gold)" stroke-width="1.4" filter="url(#shadow)" />
  <rect x="7" y="7" width="${emblemWidth - 14}" height="${emblemHeight - 14}" rx="12" fill="none" stroke="rgba(240, 203, 125, 0.25)" stroke-width="0.8" />

  <!-- 1. The Classical Roman Temple Icon (Centered at top) -->
  <g transform="translate(${emblemWidth / 2 - 25}, 16) scale(0.68)" filter="url(#shadow)">
    <!-- Triangular Pediment -->
    <path d="M 6 30 L 37 8 L 68 30 Z" stroke="url(#gold)" stroke-width="2.5" fill="rgba(240, 203, 125, 0.2)" />
    <circle cx="37" cy="21" r="3.2" fill="url(#gold)" />
    <!-- Entablature Beam -->
    <rect x="4" y="30" width="66" height="5.5" rx="1" fill="url(#gold)" />
    <!-- 4 Classical Fluted Columns -->
    <rect x="8" y="37" width="6.5" height="28" rx="1" fill="url(#gold)" />
    <rect x="25" y="37" width="6.5" height="28" rx="1" fill="url(#gold)" />
    <rect x="42" y="37" width="6.5" height="28" rx="1" fill="url(#gold)" />
    <rect x="59" y="37" width="6.5" height="28" rx="1" fill="url(#gold)" />
    <!-- Stepped Plinth Base -->
    <rect x="6" y="66" width="62" height="4.5" rx="1" fill="url(#gold)" />
    <rect x="2" y="71" width="70" height="5" rx="1" fill="url(#gold)" />
  </g>

  <!-- 2. Arabic Name: ديانا أنتيك (Centered directly beneath the icon) -->
  <text x="${emblemWidth / 2}" y="105" text-anchor="middle" font-family="'Segoe UI', 'Noto Sans Arabic', Tahoma, sans-serif" font-size="29" font-weight="900" fill="url(#gold)" filter="url(#shadow)" letter-spacing="0.5">
    ديانا أنتيك
  </text>

  <!-- 3. English Name: DIANA ANTIQUE (Classical Serif beneath Arabic) -->
  <text x="${emblemWidth / 2}" y="131" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="15.5" font-weight="700" letter-spacing="2.2" fill="#f8eed9" filter="url(#shadow)">
    DIANA ANTIQUE
  </text>

  <!-- 4. Classical Ornamental Divider -->
  <line x1="${emblemWidth / 2 - 110}" y1="143" x2="${emblemWidth / 2 - 16}" y2="143" stroke="url(#gold)" stroke-width="0.8" opacity="0.6" />
  <circle cx="${emblemWidth / 2}" cy="143" r="2.5" fill="url(#gold)" />
  <line x1="${emblemWidth / 2 + 16}" y1="143" x2="${emblemWidth / 2 + 110}" y2="143" stroke="url(#gold)" stroke-width="0.8" opacity="0.6" />

  <!-- 5. Tagline: أكثر من مجرد سوق .. رحلة عبر الزمن -->
  <text x="${emblemWidth / 2}" y="163" text-anchor="middle" font-family="'Segoe UI', Tahoma, sans-serif" font-size="12.5" font-weight="600" fill="#e6c482" opacity="0.95">
    أكثر من مجرد سوق .. رحلة عبر الزمن
  </text>
</svg>
`;

  const emblemPng = await sharp(Buffer.from(emblemSvg)).png().toBuffer();

  // 3. Composite the emblem cleanly at top-right with comfortable padding (left: 2048 - 460 - 50 = 1538, top: 32)
  const finalBanner = await sharp(rawBanner)
    .composite([
      {
        input: emblemPng,
        top: 32,
        left: 2048 - emblemWidth - 48
      }
    ])
    .webp({ quality: 96, effort: 6 })
    .toBuffer();

  await sharp(finalBanner).toFile(path.join(outDir, 'hero_diana_hd.webp'));
  console.log('Successfully generated master hero_diana_hd.webp (2048x590) with centered Temple Emblem!');
}

generateMasterpieceHero().catch(console.error);
