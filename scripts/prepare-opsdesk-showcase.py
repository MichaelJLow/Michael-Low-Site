from PIL import Image
from pathlib import Path
import shutil

assets = Path(r"C:\Users\44758\.cursor\projects\c-Users-44758-Desktop-Libertrade-Code-Michael-Low-Site\assets")
root = Path(r"C:\Users\44758\Desktop\Libertrade Code\Michael Low Site")
opsdesk = root / "public/images/projects/opsdesk"
integrations = root / "public/images/integrations"
integrations.mkdir(parents=True, exist_ok=True)

dashboard_src = assets / "c__Users_44758_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-c9f5089a-997e-41ab-b114-a6a8fa46665f.png"
dashboard_dst = opsdesk / "opsdesk-dashboard-homepage.png"
shutil.copyfile(dashboard_src, dashboard_dst)
print("dashboard", Image.open(dashboard_dst).size)

logo_map = {
    "gmail": assets / "c__Users_44758_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-792890cd-4b15-48dc-8e92-a3492465003b.png",
    "slack": assets / "c__Users_44758_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-0688b2ec-1a4b-4348-bf0a-e13c5354bd18.png",
    "hubspot": assets / "c__Users_44758_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_image-0c094120-8efa-4c4c-99be-7dd3f5755f70.png",
}


def is_checker_or_white(r, g, b):
    if r > 245 and g > 245 and b > 245:
        return True
    if abs(r - g) < 8 and abs(g - b) < 8:
        if 170 <= r <= 220:
            return True
        if r > 235:
            return True
    return False


def clean_logo(src: Path, dst: Path, pad=8):
    im = Image.open(src).convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if is_checker_or_white(r, g, b):
                px[x, y] = (0, 0, 0, 0)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    out = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    out.paste(im, (pad, pad), im)
    side = max(out.width, out.height)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(out, ((side - out.width) // 2, (side - out.height) // 2), out)
    square.save(dst)
    print(dst.name, square.size)


for name, src in logo_map.items():
    clean_logo(src, integrations / f"{name}.png")
print("done")
