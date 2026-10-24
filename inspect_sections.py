import json

with open("about_text_spans.json", "r", encoding="utf-8") as f:
    spans = json.load(f)

sections = [
    ("Navbar & Hero", 0, 900),
    ("Intro Quote", 900, 1200),
    ("Our Story", 1200, 1850),
    ("Why Liora", 1850, 2600),
    ("Our Values", 2600, 3300),
    ("Mission & Vision", 3300, 4200),
    ("Interior Gallery", 4200, 4700),
    ("Skilled Experts", 4700, 5400),
    ("Sanctuary Banner", 5400, 6100),
    ("Experience Banner", 6100, 6400),
    ("Footer", 6400, 7000)
]

with open("about_analysis_utf8.txt", "w", encoding="utf-8") as out:
    for name, y0, y1 in sections:
        out.write("="*60 + "\n")
        out.write(f"SECTION: {name} (y={y0} to {y1})\n")
        sec_spans = [s for s in spans if y0 <= s["bbox"][1] < y1]
        for s in sec_spans:
            txt = s["text"].strip()
            if txt:
                out.write(f"  [{s['bbox'][1]:.1f}, x={s['bbox'][0]:.1f}-{s['bbox'][2]:.1f}] font={s['font']} sz={s['size']} col={s['color']}: {repr(txt)}\n")

    # Also inspect drawings
    with open("about_drawings.json", "r", encoding="utf-8") as f:
        drawings = json.load(f)

    out.write("="*60 + "\n")
    out.write("DRAWINGS / BACKGROUNDS:\n")
    for d in drawings:
        if d.get("fill"):
            out.write(f"  rect={d['rect']} fill={d['fill']}\n")

print("Wrote about_analysis_utf8.txt")
