from io import BytesIO
from pathlib import Path

from PIL import Image

root = Path(r'C:\Users\44758\Projects\workwithlayer-site\public\images')
assets = Path(r'C:\Users\44758\.cursor\projects\c-Users-44758-Projects-workwithlayer-site\assets')

# OG card: 1200x630, under ~300KB
src_og = assets / 'og-default-source.png'
og = Image.open(src_og).convert('RGB').resize((1200, 630), Image.Resampling.LANCZOS)

best = None
for q in range(85, 54, -5):
    buf = BytesIO()
    og.save(buf, format='JPEG', quality=q, optimize=True, progressive=True)
    size = buf.tell()
    if size < 300_000:
        best = (q, size, buf.getvalue())
        break
if best is None:
    buf = BytesIO()
    og.save(buf, format='JPEG', quality=55, optimize=True, progressive=True)
    best = (55, buf.tell(), buf.getvalue())

jpg_path = root / 'og-default.jpg'
jpg_path.write_bytes(best[2])
print('og-default.jpg', best[0], best[1])

# Keep PNG for older references; JPEG is the Layout default.
Image.open(BytesIO(best[2])).convert('RGB').save(root / 'og-default.png', format='PNG', optimize=True)
print('og-default.png', (root / 'og-default.png').stat().st_size)

# Hero responsive WebP + JPEG fallback
hero_src = root / 'layer-hero-floating-network-cleaned.png'
hero = Image.open(hero_src).convert('RGB')
print('hero original', hero.size, hero_src.stat().st_size)


def save_webp(img: Image.Image, path: Path, max_w: int, quality: int = 76) -> None:
    w, h = img.size
    out = img
    if w > max_w:
        out = img.resize((max_w, int(h * max_w / w)), Image.Resampling.LANCZOS)
    out.save(path, format='WEBP', quality=quality, method=6)
    print(path.name, out.size, path.stat().st_size)


save_webp(hero, root / 'layer-hero-floating-network-1280.webp', 1280, 76)
save_webp(hero, root / 'layer-hero-floating-network-800.webp', 800, 74)

w, h = hero.size
hero_sm = hero.resize((1280, int(h * 1280 / w)), Image.Resampling.LANCZOS)
fallback = root / 'layer-hero-floating-network-1280.jpg'
hero_sm.save(fallback, format='JPEG', quality=78, optimize=True, progressive=True)
print(fallback.name, fallback.stat().st_size)

(root / 'og-default.svg').write_text(
    '''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#10233e"/>
      <stop offset="100%" stop-color="#1d3557"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="80" y="300" fill="#f6f4ef" font-family="IBM Plex Sans, system-ui, sans-serif" font-size="96" font-weight="450" letter-spacing="-4">layer.</text>
  <text x="80" y="370" fill="#c5ccd6" font-family="IBM Plex Sans, system-ui, sans-serif" font-size="28">Applied AI Systems Consultancy</text>
</svg>
''',
    encoding='utf-8',
)
print('done')
