import path from 'path';
import sharp from 'sharp';

async function buildHero() {
  const brandDir = 'public/media/brand';
  const outDir = 'public/media/extracted';

  // 1. Diana Market hero without mockup header (top: 48, height: 243)
  const dianaHero = await sharp(path.join(brandDir, 'design_diana_market.jpg'))
    .extract({ left: 0, top: 48, width: 1024, height: 243 })
    .resize(2048, 540, { fit: 'cover' })
    .toBuffer();

  // 2. Museum world table from Image 1 without mockup header (top: 48, height: 226)
  const museumLeft = await sharp(path.join(brandDir, 'design_world_antiques.jpg'))
    .extract({ left: 0, top: 48, width: 500, height: 226 })
    .resize(1000, 540, { fit: 'cover' })
    .png()
    .toBuffer();

  // Create smooth linear gradient alpha mask in raw grayscale
  const maskWidth = 1000;
  const maskHeight = 540;
  const maskRaw = Buffer.alloc(maskWidth * maskHeight);

  for (let y = 0; y < maskHeight; y++) {
    for (let x = 0; x < maskWidth; x++) {
      let val = 255;
      if (x > 500) {
        // smooth ease-out fade from 500 to 1000
        const progress = (x - 500) / 500;
        val = Math.round(255 * Math.cos(progress * Math.PI * 0.5));
      }
      maskRaw[y * maskWidth + x] = Math.max(0, Math.min(255, val));
    }
  }

  const maskPng = await sharp(maskRaw, {
    raw: { width: maskWidth, height: maskHeight, channels: 1 }
  })
    .png()
    .toBuffer();

  // Join mask channel to museumLeft
  const museumMasked = await sharp(museumLeft)
    .ensureAlpha()
    .joinChannel(maskPng)
    .png()
    .toBuffer();

  // Final composite
  await sharp(dianaHero)
    .composite([
      { input: museumMasked, left: 0, top: 0, blend: 'over' }
    ])
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'hero_diana_hd.webp'));

  console.log('Successfully generated pure hero_diana_hd.webp (2048x540)!');
}

buildHero().catch(console.error);
