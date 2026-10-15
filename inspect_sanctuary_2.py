import pymupdf

doc = pymupdf.open(r"C:\Users\91764\Downloads\Home page.pdf")
page = doc[0]
rect = pymupdf.Rect(0, 4050, 1280, 4650)
drawings = [d for d in page.get_drawings() if rect.intersects(d["rect"])]

for i in range(20, len(drawings)):
    d = drawings[i]
    print(f"Drawing {i}: rect={d['rect']}, fill={d.get('fill')}, stroke={d.get('color')}, width={d.get('width')}")

# Also render just the background pattern layer of this section (without text/card) OR render the exact crop of the pattern!
# Notice: Can we extract the exact background image or render the background cleanly?
# Let's see: Drawing 2 is the background rectangle: fill=(0.9725, 0.9647, 0.9333) -> #F8F6EE
# The pattern curves have fill=(0.6392, 0.5176, 0.4549) with opacity!
