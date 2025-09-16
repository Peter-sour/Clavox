import os
from PIL import Image

# Path icon asli (harus 1024x1024)
ICON_PATH = "resources/android/icon/foreground.png"

# Folder res Android
RES_PATH = "android/app/src/main/res"

# Target ukuran untuk tiap density
sizes = {
    "mipmap-mdpi": 48,
    "mipmap-hdpi": 72,
    "mipmap-xhdpi": 96,
    "mipmap-xxhdpi": 144,
    "mipmap-xxxhdpi": 192,
}

# Buka gambar asli
img = Image.open(ICON_PATH).convert("RGBA")

# Loop setiap density, resize, lalu simpan hanya foreground
for folder, size in sizes.items():
    target_dir = os.path.join(RES_PATH, folder)
    os.makedirs(target_dir, exist_ok=True)

    resized = img.resize((size, size), Image.LANCZOS)

    save_path = os.path.join(target_dir, "ic_launcher_foreground.png")
    resized.save(save_path, format="PNG")
    print(f"✔ Saved {save_path}")

print("✅ Semua foreground icon berhasil digenerate ke folder res/")
