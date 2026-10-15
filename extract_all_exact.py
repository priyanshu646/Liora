import pymupdf
import os

doc = pymupdf.open(r"C:\Users\91764\Downloads\Home page.pdf")
page = doc[0]
out_dir = r"c:\Users\91764\OneDrive\Desktop\Loira\Liora\public\assets"

# 1. Hero image crop
hero_rect = pymupdf.Rect(0, 0, 1280, 850)
pix_hero = page.get_pixmap(clip=hero_rect, dpi=150)
pix_hero.save(os.path.join(out_dir, "hero_banner.png"))
print("Saved hero_banner.png")

# 2. Who We Are arched image crop
who_rect = pymupdf.Rect(115, 945, 565, 1505)
pix_who = page.get_pixmap(clip=who_rect, dpi=180)
pix_who.save(os.path.join(out_dir, "who_we_are_exact.png"))
print("Saved who_we_are_exact.png")

# 3. Four circular images for What We Do
# Let's see the 4 circles in the PDF:
# rects were around y=2540, x centers at ~219, ~499, ~779, ~1059
# Each circle has width ~80 and height ~120 in rect, let's crop each one cleanly:
c1 = pymupdf.Rect(170, 2530, 270, 2670)
c2 = pymupdf.Rect(450, 2530, 550, 2670)
c3 = pymupdf.Rect(730, 2530, 830, 2670)
c4 = pymupdf.Rect(1010, 2530, 1110, 2670)

page.get_pixmap(clip=c1, dpi=200).save(os.path.join(out_dir, "treatment_1.png"))
page.get_pixmap(clip=c2, dpi=200).save(os.path.join(out_dir, "treatment_2.png"))
page.get_pixmap(clip=c3, dpi=200).save(os.path.join(out_dir, "treatment_3.png"))
page.get_pixmap(clip=c4, dpi=200).save(os.path.join(out_dir, "treatment_4.png"))
print("Saved 4 treatment images")

# 4. Six gallery images:
# Let's crop each gallery card directly from the PDF so the rounded corners, lighting, and "LIORA" text are 100% exact!
g1 = pymupdf.Rect(115, 2935, 425, 3320)
g2 = pymupdf.Rect(370, 2995, 915, 3310)
g3 = pymupdf.Rect(855, 2935, 1165, 3320)
g4 = pymupdf.Rect(115, 3165, 425, 3595)
g5 = pymupdf.Rect(420, 3310, 860, 3565)
g6 = pymupdf.Rect(780, 3270, 1240, 3565)

page.get_pixmap(clip=g1, dpi=180).save(os.path.join(out_dir, "gallery_exact_1.png"))
page.get_pixmap(clip=g2, dpi=180).save(os.path.join(out_dir, "gallery_exact_2.png"))
page.get_pixmap(clip=g3, dpi=180).save(os.path.join(out_dir, "gallery_exact_3.png"))
page.get_pixmap(clip=g4, dpi=180).save(os.path.join(out_dir, "gallery_exact_4.png"))
page.get_pixmap(clip=g5, dpi=180).save(os.path.join(out_dir, "gallery_exact_5.png"))
page.get_pixmap(clip=g6, dpi=180).save(os.path.join(out_dir, "gallery_exact_6.png"))
print("Saved 6 gallery exact images")

# 5. Footer watermark / full footer crop
footer_rect = pymupdf.Rect(0, 4800, 1280, 5654)
page.get_pixmap(clip=footer_rect, dpi=150).save(os.path.join(out_dir, "footer_exact.png"))
print("Saved footer_exact.png")
