from PIL import Image, ImageEnhance
import os

brain_dir = r"C:\Users\ONLine\.gemini\antigravity\brain\d19e28b9-c4a1-4e1a-be9c-8aa8b80fd3b8"
out_dir = r"D:\android tog\dyana_market\public\media\extracted"

tasks = [
    {
        "src": os.path.join(brain_dir, "antique_collector_curio_desk_1793496681722.jpg"),
        "dest": os.path.join(out_dir, "hero_diana_hd.webp"),
        "size": (2048, 620),
        "top_vignette": 90,
        "bottom_vignette": 80,
    },
    {
        "src": os.path.join(brain_dir, "antique_curio_salon_gallery_1793496647268.jpg"),
        "dest": os.path.join(out_dir, "banner_shop_marketplace.webp"),
        "size": (1920, 500),
        "top_vignette": 90,
        "bottom_vignette": 90,
    },
    {
        "src": os.path.join(brain_dir, "cairo_1930s_golden_era_1793496636786.jpg"),
        "dest": os.path.join(out_dir, "banner_heritage_cairo.webp"),
        "size": (1920, 500),
        "top_vignette": 90,
        "bottom_vignette": 90,
    },
    {
        "src": os.path.join(brain_dir, "banner_encyclopedia_ai_1793496590834.jpg"),
        "dest": os.path.join(out_dir, "banner_encyclopedia_library.webp"),
        "size": (1920, 500),
        "top_vignette": 90,
        "bottom_vignette": 90,
    },
    {
        "src": os.path.join(brain_dir, "journey_through_time_artifacts_1793496639455.jpg"),
        "dest": os.path.join(out_dir, "banner_timeline_eras.webp"),
        "size": (1920, 500),
        "top_vignette": 90,
        "bottom_vignette": 90,
    },
]

def add_vignettes(im, top_h, bottom_h):
    w, h = im.size
    im = im.convert("RGBA")
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    pixels = overlay.load()
    
    bg_color = (17, 12, 8) # #110c08 rich antique dark
    
    for y in range(h):
        alpha = 0
        if y < top_h:
            # Top vignette fading down
            progress = (top_h - y) / top_h
            alpha = int(220 * (progress ** 1.3))
        elif y > (h - bottom_h):
            # Bottom vignette fading up
            progress = (y - (h - bottom_h)) / bottom_h
            alpha = int(240 * (progress ** 1.3))
            
        if alpha > 0:
            for x in range(w):
                pixels[x, y] = (bg_color[0], bg_color[1], bg_color[2], min(255, alpha))
                
    return Image.alpha_composite(im, overlay).convert("RGB")

for t in tasks:
    if not os.path.exists(t["src"]):
        print(f"Error: {t['src']} does not exist!")
        continue
    
    img = Image.open(t["src"])
    # Crop to match target aspect ratio
    target_w, target_h = t["size"]
    target_ratio = target_w / target_h
    src_ratio = img.width / img.height
    
    if src_ratio > target_ratio:
        # Source is wider than target: crop width
        new_w = int(img.height * target_ratio)
        offset = (img.width - new_w) // 2
        img = img.crop((offset, 0, offset + new_w, img.height))
    else:
        # Source is taller: crop height centered slightly towards top (golden ratio)
        new_h = int(img.width / target_ratio)
        offset = max(0, int((img.height - new_h) * 0.4))
        img = img.crop((0, offset, img.width, offset + new_h))
        
    img = img.resize(t["size"], Image.Resampling.LANCZOS)
    
    # Slight contrast & richness enhancement
    enhancer = ImageEnhance.Color(img)
    img = enhancer.enhance(1.08)
    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(1.04)
    
    # Apply soft museum vignettes
    final_img = add_vignettes(img, t["top_vignette"], t["bottom_vignette"])
    
    # Save as WebP
    final_img.save(t["dest"], "WEBP", quality=92)
    print(f"Successfully processed and saved: {t['dest']} ({final_img.size})")

print("All banners generated successfully!")
