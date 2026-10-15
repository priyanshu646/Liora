import pymupdf

doc = pymupdf.open(r"C:\Users\91764\Downloads\Home page.pdf")
page = doc[0]

# Render the exact sanctuary section as high-res PNG
# y from 4000 to 4700, full width 0 to 1280
rect = pymupdf.Rect(0, 4050, 1280, 4650)
pix = page.get_pixmap(clip=rect, dpi=200)
pix.save(r"c:\Users\91764\OneDrive\Desktop\Loira\Liora\public\assets\sanctuary_exact_crop.png")
print("Saved sanctuary_exact_crop.png")

# Also render the background without text or extract the background SVG pattern!
# Let's inspect the drawings in this rect
drawings = [d for d in page.get_drawings() if rect.intersects(d["rect"])]
print(f"Total drawings in sanctuary: {len(drawings)}")
for i, d in enumerate(drawings[:20]):
    print(f"Drawing {i}: rect={d['rect']}, fill={d.get('fill')}, stroke={d.get('color')}, stroke_width={d.get('width')}")
    # print items
    for item in d["items"]:
        print(f"   item: {item[0]}")

# Also render SVG of this section!
svg_text = page.get_svg_image()
with open(r"c:\Users\91764\OneDrive\Desktop\Loira\Liora\public\assets\page_full.svg", "w", encoding="utf-8") as f:
    f.write(svg_text)
print("Saved page_full.svg")
