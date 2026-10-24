import pymupdf
import os

pdf_path = r"c:\Users\mahi2\OneDrive\Desktop\AboutLiora.pdf"
doc = pymupdf.open(pdf_path)
page = doc[0]
out_dir = r"c:\Users\mahi2\OneDrive\Desktop\LIORA\Liora\public\assets\about"
os.makedirs(out_dir, exist_ok=True)

# Let's crop exact high-res visual assets:

# 1. Hero right arch model (x=450 to 1280, y=100 to 850)
hero_model_rect = pymupdf.Rect(440, 110, 1280, 850)
pix = page.get_pixmap(clip=hero_model_rect, dpi=200)
pix.save(os.path.join(out_dir, "exact_hero_model.png"))
print("Saved exact_hero_model.png")

# 2. Hero full banner exact (y=0 to 860)
hero_banner_rect = pymupdf.Rect(0, 0, 1280, 860)
pix = page.get_pixmap(clip=hero_banner_rect, dpi=180)
pix.save(os.path.join(out_dir, "exact_hero_banner.png"))
print("Saved exact_hero_banner.png")

# 3. Our Story reception image arch (x=680 to 1240, y=1230 to 1790)
story_rect = pymupdf.Rect(680, 1230, 1240, 1790)
pix = page.get_pixmap(clip=story_rect, dpi=200)
pix.save(os.path.join(out_dir, "exact_our_story_reception.png"))
print("Saved exact_our_story_reception.png")

# 4. Why Liora glowing face oval + peach circle (x=80 to 560, y=1870 to 2520)
why_rect = pymupdf.Rect(80, 1870, 560, 2520)
pix = page.get_pixmap(clip=why_rect, dpi=200)
pix.save(os.path.join(out_dir, "exact_why_liora_oval.png"))
print("Saved exact_why_liora_oval.png")

# 5. Mission & Vision oval face + peach circle (x=700 to 1200, y=3380 to 4010)
mv_rect = pymupdf.Rect(700, 3380, 1200, 4010)
pix = page.get_pixmap(clip=mv_rect, dpi=200)
pix.save(os.path.join(out_dir, "exact_mission_vision_oval.png"))
print("Saved exact_mission_vision_oval.png")

# 6. Clinic Interior Slider photo (x=140 to 1140, y=4070 to 4645)
gallery_rect = pymupdf.Rect(140, 4070, 1140, 4645)
pix = page.get_pixmap(clip=gallery_rect, dpi=200)
pix.save(os.path.join(out_dir, "exact_interior_slider.png"))
print("Saved exact_interior_slider.png")

# 7. Four skilled experts (exact arched crops from PDF)
# Expert 1: x=119, y=4863, w=240, h=314
exp1_rect = pymupdf.Rect(115, 4860, 363, 5180)
page.get_pixmap(clip=exp1_rect, dpi=220).save(os.path.join(out_dir, "exact_expert_1.png"))

# Expert 2: x=386, y=4863, w=240, h=314
exp2_rect = pymupdf.Rect(382, 4860, 630, 5180)
page.get_pixmap(clip=exp2_rect, dpi=220).save(os.path.join(out_dir, "exact_expert_2.png"))

# Expert 3: x=653, y=4864, w=240, h=314
exp3_rect = pymupdf.Rect(649, 4860, 897, 5180)
page.get_pixmap(clip=exp3_rect, dpi=220).save(os.path.join(out_dir, "exact_expert_3.png"))

# Expert 4: x=920, y=4863, w=240, h=314
exp4_rect = pymupdf.Rect(916, 4860, 1164, 5180)
page.get_pixmap(clip=exp4_rect, dpi=220).save(os.path.join(out_dir, "exact_expert_4.png"))
print("Saved 4 exact experts")

# 8. Sanctuary banner background pattern crop if needed
sanc_rect = pymupdf.Rect(0, 5400, 1280, 6080)
page.get_pixmap(clip=sanc_rect, dpi=180).save(os.path.join(out_dir, "exact_sanctuary_section.png"))
print("Saved exact_sanctuary_section.png")

print("All exact PDF assets exported successfully!")
