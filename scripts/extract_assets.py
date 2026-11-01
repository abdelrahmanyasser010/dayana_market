import os
from PIL import Image

brand_dir = 'public/media/brand'
out_dir = 'public/media/extracted'
os.makedirs(out_dir, exist_ok=True)

im1_path = os.path.join(brand_dir, 'design_world_antiques.jpg')
im2_path = os.path.join(brand_dir, 'design_diana_screens.jpg')
im3_path = os.path.join(brand_dir, 'design_diana_market.jpg')

im1 = Image.open(im1_path)
im2 = Image.open(im2_path)
im3 = Image.open(im3_path)

print(f"im1 (World of Antiques): {im1.size}")
print(f"im2 (Diana Screens): {im2.size}")
print(f"im3 (Diana Market): {im3.size}")
