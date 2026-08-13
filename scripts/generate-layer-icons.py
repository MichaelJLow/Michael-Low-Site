"""Rasterise the Layer L. mark and refresh default Open Graph images."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
ICONS = PUBLIC / "icons"
PAPER = (244, 240, 232, 255)
NAVY = (29, 53, 87, 255)
COPPER = (224, 160, 122, 255)
OG_TOP = (16, 35, 62)
OG_BOTTOM = (29, 53, 87)


def paint_mark(size: int) -> Image.Image:
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)
    scale = size / 32
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=7 * scale, fill=PAPER)
    draw.rectangle((8 * scale, 6.8 * scale, 11.55 * scale, 24.4 * scale), fill=NAVY)
    draw.rectangle((8 * scale, 20.85 * scale, 21.4 * scale, 24.4 * scale), fill=NAVY)
    cx, cy, radius = 24.15 * scale, 22.55 * scale, 1.95 * scale
    draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=COPPER)
    return image


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    candidates = [
        Path(r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf"),
        Path(r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf"),
    ]
    for path in candidates:
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def paint_og() -> Image.Image:
    width, height = 1200, 630
    image = Image.new("RGB", (width, height), OG_BOTTOM)
    draw = ImageDraw.Draw(image)
    for y in range(height):
        mix = y / (height - 1)
        color = tuple(int(OG_TOP[i] * (1 - mix) + OG_BOTTOM[i] * mix) for i in range(3))
        draw.line((0, y, width, y), fill=color)

    wordmark = load_font(96)
    subtitle = load_font(28)
    draw.text((80, 214), "layer.", font=wordmark, fill=(246, 244, 239))
    draw.text((80, 338), "AI & Automation Systems for Growing Businesses", font=subtitle, fill=(197, 204, 214))
    return image


def main() -> None:
    ICONS.mkdir(parents=True, exist_ok=True)
    sizes = (32, 48, 180, 192, 512)
    rasters = {size: paint_mark(size) for size in sizes}

    for size, image in rasters.items():
        image.save(ICONS / f"layer-icon-{size}.png")

    rasters[180].save(PUBLIC / "apple-touch-icon.png")
    rasters[48].save(
        PUBLIC / "favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )

    og = paint_og()
    og.save(PUBLIC / "images" / "og-default.jpg", quality=92)
    og.save(PUBLIC / "images" / "og-default.png")
    print("Wrote Layer icons, favicon.ico, apple-touch-icon.png and OG images.")


if __name__ == "__main__":
    main()
