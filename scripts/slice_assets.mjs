import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function run() {
  const brandDir = 'public/media/brand';
  const outDir = 'public/media/extracted';
  fs.mkdirSync(outDir, { recursive: true });

  const im1 = sharp(path.join(brandDir, 'design_world_antiques.jpg'));
  const im2 = sharp(path.join(brandDir, 'design_diana_screens.jpg'));
  const im3 = sharp(path.join(brandDir, 'design_diana_market.jpg'));

  const meta1 = await im1.metadata();
  const meta2 = await im2.metadata();
  const meta3 = await im3.metadata();

  console.log('im1 size:', meta1.width, 'x', meta1.height);
  console.log('im2 size:', meta2.width, 'x', meta2.height);
  console.log('im3 size:', meta3.width, 'x', meta3.height);

  // 1. Hero from Image 3 (Diana Market + Museum fusion)
  // In Image 3 (1024x682 approx): The hero is from top to about y = 300
  // Let's extract the full hero banner cleanly
  const heroH = Math.round(meta3.height * 0.44);
  await im3
    .clone()
    .extract({ left: 0, top: 0, width: meta3.width, height: heroH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'hero_diana_market_banner.webp'));
  console.log('Saved hero_diana_market_banner.webp');

  // 2. Hero from Image 1 (World of Antiques museum hall)
  const hero1H = Math.round(meta1.height * 0.27);
  await im1
    .clone()
    .extract({ left: 0, top: 0, width: meta1.width, height: hero1H })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'hero_museum_world.webp'));
  console.log('Saved hero_museum_world.webp');

  // 3. Featured pieces from Image 1 (row of 5 products around y = 0.59 to 0.76)
  // Let's extract the product grid section and individual items
  // In meta1:
  // Featured section: top ~ 600, height ~ 160
  // Let's extract:
  // cairo_tram from Image 3 (bottom right card)
  // In meta3: bottom right is x: 690 to 990, y: 470 to 590
  const tramX = Math.round(meta3.width * 0.68);
  const tramY = Math.round(meta3.height * 0.69);
  const tramW = Math.round(meta3.width * 0.29);
  const tramH = Math.round(meta3.height * 0.17);
  await im3
    .clone()
    .extract({ left: tramX, top: tramY, width: tramW, height: tramH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'cairo_tram_heritage.webp'));
  console.log('Saved cairo_tram_heritage.webp');

  // 4. Phone of the week from Image 3 (center bottom)
  const phoneX = Math.round(meta3.width * 0.35);
  const phoneY = Math.round(meta3.height * 0.69);
  const phoneW = Math.round(meta3.width * 0.30);
  const phoneH = Math.round(meta3.height * 0.17);
  await im3
    .clone()
    .extract({ left: phoneX, top: phoneY, width: phoneW, height: phoneH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'piece_of_week_phone.webp'));
  console.log('Saved piece_of_week_phone.webp');

  // 5. Encyclopedia card from Image 3 (bottom left with gold pocket watch & books)
  const encX = Math.round(meta3.width * 0.02);
  const encY = Math.round(meta3.height * 0.69);
  const encW = Math.round(meta3.width * 0.30);
  const encH = Math.round(meta3.height * 0.17);
  await im3
    .clone()
    .extract({ left: encX, top: encY, width: encW, height: encH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'encyclopedia_banner.webp'));
  console.log('Saved encyclopedia_banner.webp');

  // 6. Timeline cards row from Image 3 (y ~ 0.49 to 0.64)
  const timeY = Math.round(meta3.height * 0.46);
  const timeH = Math.round(meta3.height * 0.20);
  // Side card with Cairo minaret
  const minaretX = Math.round(meta3.width * 0.74);
  const minaretW = Math.round(meta3.width * 0.24);
  await im3
    .clone()
    .extract({ left: minaretX, top: timeY, width: minaretW, height: timeH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'timeline_side_cairo.webp'));
  console.log('Saved timeline_side_cairo.webp');

  // 7. Classical Sculpture card from Image 1 ("كل قطعة .. قصة")
  const sculptX = Math.round(meta1.width * 0.73);
  const sculptY = Math.round(meta1.height * 0.42);
  const sculptW = Math.round(meta1.width * 0.25);
  const sculptH = Math.round(meta1.height * 0.135);
  await im1
    .clone()
    .extract({ left: sculptX, top: sculptY, width: sculptW, height: sculptH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'story_sculpture_card.webp'));
  console.log('Saved story_sculpture_card.webp');

  // 8. Globe Encyclopedia card from Image 1
  const globeX = Math.round(meta1.width * 0.02);
  const globeY = Math.round(meta1.height * 0.77);
  const globeW = Math.round(meta1.width * 0.33);
  const globeH = Math.round(meta1.height * 0.12);
  await im1
    .clone()
    .extract({ left: globeX, top: globeY, width: globeW, height: globeH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'encyclopedia_globe.webp'));
  console.log('Saved encyclopedia_globe.webp');

  // 9. Vintage photos card from Image 1 ("حكايات القطع")
  const photoX = Math.round(meta1.width * 0.36);
  const photoY = Math.round(meta1.height * 0.77);
  const photoW = Math.round(meta1.width * 0.29);
  const photoH = Math.round(meta1.height * 0.12);
  await im1
    .clone()
    .extract({ left: photoX, top: photoY, width: photoW, height: photoH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'stories_vintage_photos.webp'));
  console.log('Saved stories_vintage_photos.webp');

  // 10. Armillary sphere "لماذا تختارنا" from Image 1
  const armX = Math.round(meta1.width * 0.67);
  const armY = Math.round(meta1.height * 0.77);
  const armW = Math.round(meta1.width * 0.31);
  const armH = Math.round(meta1.height * 0.12);
  await im1
    .clone()
    .extract({ left: armX, top: armY, width: armW, height: armH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'why_choose_us_armillary.webp'));
  console.log('Saved why_choose_us_armillary.webp');

  // 11. Piece of the week train from Image 1
  const trainX = Math.round(meta1.width * 0.76);
  const trainY = Math.round(meta1.height * 0.59);
  const trainW = Math.round(meta1.width * 0.22);
  const trainH = Math.round(meta1.height * 0.16);
  await im1
    .clone()
    .extract({ left: trainX, top: trainY, width: trainW, height: trainH })
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'piece_of_week_train.webp'));
  console.log('Saved piece_of_week_train.webp');

  console.log('All core visual assets sliced and saved successfully!');
}

run().catch(console.error);
