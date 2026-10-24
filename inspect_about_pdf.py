import pymupdf
import json

doc = pymupdf.open(r"c:\Users\mahi2\OneDrive\Desktop\AboutLiora.pdf")
page = doc[0]

# Extract all text spans with font, size, color, bbox
text_data = []
for block in page.get_text("dict")["blocks"]:
    if "lines" in block:
        for line in block["lines"]:
            for span in line["spans"]:
                # color is an integer in pymupdf (sRGB), let's convert to hex
                c = span["color"]
                hex_color = f"#{c:06x}" if isinstance(c, int) else str(c)
                text_data.append({
                    "text": span["text"],
                    "font": span["font"],
                    "size": round(span["size"], 1),
                    "color": hex_color,
                    "bbox": [round(x, 1) for x in span["bbox"]],
                    "flags": span["flags"]
                })

with open("about_text_spans.json", "w", encoding="utf-8") as f:
    json.dump(text_data, f, indent=2, ensure_ascii=False)

# Extract drawings (rectangles, curves, fills, strokes)
drawings = page.get_drawings()
drawings_summary = []
for d in drawings:
    rect = [round(x, 1) for x in d["rect"]]
    fill = d.get("fill")
    stroke = d.get("color")
    drawings_summary.append({
        "rect": rect,
        "fill": fill,
        "stroke": stroke,
        "type": d.get("type"),
        "items": len(d.get("items", []))
    })

with open("about_drawings.json", "w", encoding="utf-8") as f:
    json.dump(drawings_summary, f, indent=2)

print("Saved about_text_spans.json and about_drawings.json")
