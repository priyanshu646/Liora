import fitz
import os

pdf_path = r'C:\Users\91764\Downloads\Home page.pdf'
out_dir = r'c:\Users\91764\OneDrive\Desktop\Loira\Liora\public\assets'
os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Loaded {pdf_path}, pages: {len(doc)}")
page = doc[0]
print(f"Page width: {page.rect.width}, height: {page.rect.height}")

images = page.get_images(full=True)
print(f"Found {len(images)} images")

for i, img in enumerate(images):
    xref = img[0]
    base_img = doc.extract_image(xref)
    image_bytes = base_img["image"]
    image_ext = base_img["ext"]
    w = base_img["width"]
    h = base_img["height"]
    filename = f"pdf_img_{i}_{w}x{h}.{image_ext}"
    filepath = os.path.join(out_dir, filename)
    with open(filepath, "wb") as f:
        f.write(image_bytes)
    print(f"Saved image {i}: {filename}")

# Also render high-res sections of the page so we can see exact design and use vector rendering if needed!
pix = page.get_pixmap(dpi=150)
pix.save(os.path.join(out_dir, "full_page_rendered.png"))
print("Saved full page rendered high-res")
