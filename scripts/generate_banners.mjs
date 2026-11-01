import path from 'path';
import sharp from 'sharp';

async function createBanners() {
  const brandDir = 'public/media/brand';
  const outDir = 'public/media/extracted';

  // 1. SHOP BANNER: Panoramic Antique Marketplace with Velvet & Candleglow
  const shopBg = await sharp(path.join(brandDir, 'design_world_antiques.jpg'))
    .extract({ left: 0, top: 48, width: 1024, height: 230 })
    .resize(1920, 420, { fit: 'cover' })
    .toBuffer();
  
  const shopOverlaySvg = Buffer.from(`
    <svg width="1920" height="420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="shopRad" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stop-color="#18120c" stop-opacity="0.35"/>
          <stop offset="70%" stop-color="#100b07" stop-opacity="0.82"/>
          <stop offset="100%" stop-color="#0a0704" stop-opacity="0.96"/>
        </radialGradient>
        <linearGradient id="shopLinear" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0c0805" stop-opacity="0.92"/>
          <stop offset="35%" stop-color="transparent" stop-opacity="0"/>
          <stop offset="85%" stop-color="#120c08" stop-opacity="0.82"/>
          <stop offset="100%" stop-color="#120c08" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shopRad)"/>
      <rect width="100%" height="100%" fill="url(#shopLinear)"/>
    </svg>
  `);

  await sharp(shopBg)
    .composite([{ input: shopOverlaySvg, top: 0, left: 0 }])
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'banner_shop_marketplace.webp'));
  console.log('Created banner_shop_marketplace.webp');

  // 2. HERITAGE BANNER: Nostalgic Cairo Historic Tram & Golden Hour
  const heritageBg = await sharp(path.join(brandDir, 'design_diana_market.jpg'))
    .extract({ left: 450, top: 48, width: 574, height: 243 })
    .resize(1920, 420, { fit: 'cover' })
    .toBuffer();

  const tramOverlay = await sharp(path.join(brandDir, 'design_diana_market.jpg'))
    .extract({ left: 680, top: 460, width: 320, height: 130 })
    .resize(750, 300, { fit: 'cover' })
    .png()
    .toBuffer();

  const heritageSvg = Buffer.from(`
    <svg width="1920" height="420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="herGrad" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#0e0906" stop-opacity="0.25"/>
          <stop offset="55%" stop-color="#140d08" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#0a0604" stop-opacity="0.95"/>
        </linearGradient>
        <linearGradient id="herTopBot" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a0705" stop-opacity="0.92"/>
          <stop offset="30%" stop-color="transparent"/>
          <stop offset="85%" stop-color="#120c08" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#120c08" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#herGrad)"/>
      <rect width="100%" height="100%" fill="url(#herTopBot)"/>
    </svg>
  `);

  await sharp(heritageBg)
    .composite([
      { input: tramOverlay, left: 1100, top: 60, blend: 'screen' },
      { input: heritageSvg, left: 0, top: 0, blend: 'over' }
    ])
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'banner_heritage_cairo.webp'));
  console.log('Created banner_heritage_cairo.webp');

  // 3. ENCYCLOPEDIA BANNER: Classical Antiquarian Library & Astrolabe
  const encCrop = await sharp(path.join(brandDir, 'design_diana_screens.jpg'))
    .extract({ left: 512, top: 435, width: 512, height: 247 })
    .resize(1920, 420, { fit: 'cover' })
    .toBuffer();

  const encSvg = Buffer.from(`
    <svg width="1920" height="420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="encRad" cx="65%" cy="50%" r="65%">
          <stop offset="0%" stop-color="transparent" stop-opacity="0"/>
          <stop offset="55%" stop-color="#100c08" stop-opacity="0.7"/>
          <stop offset="100%" stop-color="#080604" stop-opacity="0.95"/>
        </radialGradient>
        <linearGradient id="encTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a0705" stop-opacity="0.92"/>
          <stop offset="30%" stop-color="transparent"/>
          <stop offset="85%" stop-color="#120c08" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#120c08" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#encRad)"/>
      <rect width="100%" height="100%" fill="url(#encTop)"/>
    </svg>
  `);

  await sharp(encCrop)
    .composite([{ input: encSvg, left: 0, top: 0 }])
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'banner_encyclopedia_library.webp'));
  console.log('Created banner_encyclopedia_library.webp');

  // 4. TIMELINE BANNER: Epic Chronological Journey (Astrolabe & Horology & Golden Light)
  const astrolabe = await sharp(path.join(brandDir, 'design_world_antiques.jpg'))
    .extract({ left: 670, top: 760, width: 340, height: 160 })
    .resize(700, 340, { fit: 'contain', background: { r: 18, g: 13, b: 9, alpha: 1 } })
    .png()
    .toBuffer();

  const timelineBase = await sharp({
    create: {
      width: 1920,
      height: 420,
      channels: 4,
      background: { r: 18, g: 13, b: 9, alpha: 1 }
    }
  }).png().toBuffer();

  const timeSvg = Buffer.from(`
    <svg width="1920" height="420" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tRad" cx="70%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#4a321d" stop-opacity="0.5"/>
          <stop offset="60%" stop-color="#1a120b" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#0e0906" stop-opacity="1"/>
        </radialGradient>
        <linearGradient id="tLin" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#0a0705" stop-opacity="0.92"/>
          <stop offset="30%" stop-color="transparent"/>
          <stop offset="85%" stop-color="#120c08" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#120c08" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#tRad)"/>
      <rect width="100%" height="100%" fill="url(#tLin)"/>
    </svg>
  `);

  await sharp(timelineBase)
    .composite([
      { input: astrolabe, left: 1150, top: 40, blend: 'screen' },
      { input: timeSvg, left: 0, top: 0, blend: 'over' }
    ])
    .webp({ quality: 94 })
    .toFile(path.join(outDir, 'banner_timeline_eras.webp'));
  console.log('Created REAL epic banner_timeline_eras.webp');
}

createBanners().catch(console.error);
