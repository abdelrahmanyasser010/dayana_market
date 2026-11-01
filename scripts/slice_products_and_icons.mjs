import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function run() {
  const brandDir = 'public/media/brand';
  const outDir = 'public/media/extracted';

  const im1 = sharp(path.join(brandDir, 'design_world_antiques.jpg'));
  const im2 = sharp(path.join(brandDir, 'design_diana_screens.jpg'));
  const im3 = sharp(path.join(brandDir, 'design_diana_market.jpg'));

  // Featured products from Image 1 (height is 1024)
  // Product 1: Camera (leftmost in Image 1)
  await im1.clone()
    .extract({ left: 22, top: 600, width: 135, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_camera_german.webp'));

  // Product 2: Chinese Vase
  await im1.clone()
    .extract({ left: 172, top: 600, width: 135, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_chinese_vase.webp'));

  // Product 3: Rotary Phone
  await im1.clone()
    .extract({ left: 320, top: 600, width: 135, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_english_phone.webp'));

  // Product 4: French Table Clock
  await im1.clone()
    .extract({ left: 470, top: 600, width: 135, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_french_clock.webp'));

  // Product 5: Classic Gramophone
  await im1.clone()
    .extract({ left: 618, top: 600, width: 135, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_classic_gramophone.webp'));

  // From Image 2 (width 1024, height 682):
  // Wooden Radio (top right grid)
  await im2.clone()
    .extract({ left: 900, top: 160, width: 95, height: 145 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_wooden_radio.webp'));

  // Carved brass plate / tray (bottom right quadrant)
  await im2.clone()
    .extract({ left: 618, top: 435, width: 95, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_brass_plate.webp'));

  // Bronze figurine statue
  await im2.clone()
    .extract({ left: 712, top: 435, width: 95, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_bronze_statue.webp'));

  // Antique wall clock
  await im2.clone()
    .extract({ left: 905, top: 435, width: 95, height: 160 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'prod_wall_clock.webp'));

  // Rotary Phone large detail (bottom left quadrant of Image 2, top ~ 440)
  await im2.clone()
    .extract({ left: 60, top: 440, width: 220, height: 210 })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'detail_phone_large.webp'));

  // Slicing Category Items from Image 1:
  await im1.clone().extract({ left: 24, top: 300, width: 104, height: 110 }).webp().toFile(path.join(outDir, 'cat_toys.webp'));
  await im1.clone().extract({ left: 137, top: 300, width: 98, height: 110 }).webp().toFile(path.join(outDir, 'cat_books.webp'));
  await im1.clone().extract({ left: 242, top: 300, width: 98, height: 110 }).webp().toFile(path.join(outDir, 'cat_decor.webp'));
  await im1.clone().extract({ left: 345, top: 300, width: 98, height: 110 }).webp().toFile(path.join(outDir, 'cat_cameras.webp'));
  await im1.clone().extract({ left: 450, top: 300, width: 98, height: 110 }).webp().toFile(path.join(outDir, 'cat_radios.webp'));
  await im1.clone().extract({ left: 550, top: 300, width: 98, height: 110 }).webp().toFile(path.join(outDir, 'cat_clocks.webp'));
  await im1.clone().extract({ left: 650, top: 300, width: 98, height: 110 }).webp().toFile(path.join(outDir, 'cat_phones.webp'));
  await im1.clone().extract({ left: 750, top: 300, width: 98, height: 110 }).webp().toFile(path.join(outDir, 'cat_furniture.webp'));

  // Slicing Timeline epoch icons from Image 1:
  await im1.clone().extract({ left: 30, top: 450, width: 125, height: 85 }).webp().toFile(path.join(outDir, 'epoch_car.webp'));
  await im1.clone().extract({ left: 180, top: 450, width: 120, height: 85 }).webp().toFile(path.join(outDir, 'epoch_biplane.webp'));
  await im1.clone().extract({ left: 330, top: 450, width: 115, height: 85 }).webp().toFile(path.join(outDir, 'epoch_train.webp'));
  await im1.clone().extract({ left: 475, top: 450, width: 75, height: 85 }).webp().toFile(path.join(outDir, 'epoch_renaissance.webp'));
  await im1.clone().extract({ left: 605, top: 450, width: 75, height: 85 }).webp().toFile(path.join(outDir, 'epoch_medieval.webp'));

  console.log('SUCCESS: All product slices and category icons created!');
}

run().catch(console.error);
