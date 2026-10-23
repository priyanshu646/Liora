import pymupdf
import os

doc = pymupdf.open(r"c:\Users\mahi2\OneDrive\Desktop\AboutLiora.pdf")
page = doc[0]
out_dir = r"c:\Users\mahi2\OneDrive\Desktop\LIORA\Liora\public\assets\about"
os.makedirs(out_dir, exist_ok=True)

# 1. Hero banner area:
hero_rect = pymupdf.Rect(0, 0, 1280, 850)
pix = page.get_pixmap(clip=hero_rect, dpi=180)
pix.save(os.path.join(out_dir, "about_hero_banner_exact.png"))
print("Saved about_hero_banner_exact.png")

# 2. Hero model arch:
# In scratch_info: xref 762 bbox=[-176.0, -25.0, 1307.9, 1227.0]
# On page, the right arch is located around x=480 to 1240, y=140 to 820
hero_arch_rect = pymupdf.Rect(450, 150, 1240, 820)
page.get_pixmap(clip=hero_arch_rect, dpi=200).save(os.path.join(out_dir, "hero_arch_exact.png"))

# 3. Our Story reception arch:
# bbox=[488.8, 1240.0, 1487.2, 1801.7]
story_rect = pymupdf.Rect(650, 1230, 1200, 1820)
page.get_pixmap(clip=story_rect, dpi=200).save(os.path.join(out_dir, "our_story_arch_exact.png"))

# 4. Why Liora oval face:
# bbox=[70.4, 1919.7, 778.3, 2486.0]
why_rect = pymupdf.Rect(90, 1910, 520, 2490)
page.get_pixmap(clip=why_rect, dpi=200).save(os.path.join(out_dir, "why_liora_arch_exact.png"))

# 5. Mission & Vision oval face:
# bbox=[738.9, 3310.5, 1160.1, 4152.9]
vision_rect = pymupdf.Rect(730, 3320, 1170, 4160)
page.get_pixmap(clip=vision_rect, dpi=200).save(os.path.join(out_dir, "mission_vision_arch_exact.png"))

# 6. Clinic Interior Slider photo:
# bbox=[142.4, 4080.0, 1137.6, 4640.0]
slider_rect = pymupdf.Rect(140, 4070, 1140, 4650)
page.get_pixmap(clip=slider_rect, dpi=180).save(os.path.join(out_dir, "interior_slider_exact.png"))

# 7. Four Experts:
# expert 1: x 119 to 359, y 4863 to 5177
e1_rect = pymupdf.Rect(115, 4850, 365, 5185)
page.get_pixmap(clip=e1_rect, dpi=220).save(os.path.join(out_dir, "expert_1_exact.png"))

# expert 2: x 386 to 626, y 4863 to 5177
e2_rect = pymupdf.Rect(380, 4850, 630, 5185)
page.get_pixmap(clip=e2_rect, dpi=220).save(os.path.join(out_dir, "expert_2_exact.png"))

# expert 3: x 653 to 893, y 4864 to 5176
e3_rect = pymupdf.Rect(648, 4850, 898, 5185)
page.get_pixmap(clip=e3_rect, dpi=220).save(os.path.join(out_dir, "expert_3_exact.png"))

# expert 4: x 920 to 1160, y 4863 to 5177
e4_rect = pymupdf.Rect(915, 4850, 1165, 5185)
page.get_pixmap(clip=e4_rect, dpi=220).save(os.path.join(out_dir, "expert_4_exact.png"))

print("All exact high-res assets extracted successfully!")
