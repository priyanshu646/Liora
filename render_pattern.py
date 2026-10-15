import pymupdf

doc = pymupdf.open(r"C:\Users\91764\Downloads\Home page.pdf")
page = doc[0]

# Render the exact background pattern for the sanctuary section!
# Let's see: if we hide drawings 42 to 57 (which are the card, text, and button) or render a clean page with only the background:
# In PyMuPDF, we can create a new PDF page, replay drawings 2 to 41 onto it, and render at 2x DPI!
new_doc = pymupdf.open()
rect = pymupdf.Rect(0, 4040.54, 1280, 4720.54)
target_w = 1280
target_h = 4720.54 - 4040.54 # 680

new_page = new_doc.new_page(width=target_w, height=target_h)
shape = new_page.new_shape()

drawings = page.get_drawings()
sanctuary_pattern_drawings = [d for d in drawings if rect.intersects(d["rect"]) and d["rect"].y0 >= 3900 and d["rect"].y1 <= 4850]

print(f"Total pattern drawings to replay: {len(sanctuary_pattern_drawings)}")

# We only want drawings 2 to 41 (exclude 42-57 which are the white card, text, button)
# Let's inspect which ones are card/text/button:
# Drawing 42 is card outer, 43 is card inner, 44 is subtitle text, 45 is heading text, 46-57 is button and text
for d in sanctuary_pattern_drawings:
    # Skip the white card, text, and button
    if d["rect"].x0 >= 200 and d["rect"].x1 <= 1080 and d["rect"].y0 >= 4180 and d["rect"].y1 <= 4580:
        continue
    # Adjust y coordinate by subtracting 4040.54
    for item in d["items"]:
        cmd = item[0]
        if cmd == "l":
            p1 = pymupdf.Point(item[1].x, item[1].y - 4040.54)
            p2 = pymupdf.Point(item[2].x, item[2].y - 4040.54)
            shape.draw_line(p1, p2)
        elif cmd == "c":
            p1 = pymupdf.Point(item[1].x, item[1].y - 4040.54)
            p2 = pymupdf.Point(item[2].x, item[2].y - 4040.54)
            p3 = pymupdf.Point(item[3].x, item[3].y - 4040.54)
            p4 = pymupdf.Point(item[4].x, item[4].y - 4040.54)
            shape.draw_bezier(p1, p2, p3, p4)
    
    # Commit shape with fill
    fill = d.get("fill")
    color = d.get("color")
    width = d.get("width", 1)
    shape.finish(fill=fill, color=color, width=width, fill_opacity=d.get("fill_opacity", 1.0))

shape.commit()

# Render to 2x resolution PNG
pix = new_page.get_pixmap(dpi=144)
out_path = r"c:\Users\91764\OneDrive\Desktop\Loira\Liora\public\assets\sanctuary_pattern.png"
pix.save(out_path)
print(f"Saved exact sanctuary background pattern to {out_path} ({pix.width}x{pix.height})")
