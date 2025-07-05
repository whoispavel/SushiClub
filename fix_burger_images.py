#!/usr/bin/env python3
import os
import shutil
import glob

# Change to current directory
source_dir = "attached_assets"
target_dir = "images"

# File mappings for burger images - exact filenames found
file_mappings = [
    ("Sushi burger łosoś_1751729582539.jpg", "sushi-burger-losos.jpg"),
    ("Sushi burger wegetariański_1751729567960.jpg", "sushi-burger-wegetarianski.jpg"), 
    ("Wegetariański set_1751729190676.jpg", "wegetarianski-set.jpg")
]

print("Searching for burger image files...")

for source_name, target_name in file_mappings:
    source_path = os.path.join(source_dir, source_name)
    target_path = os.path.join(target_dir, target_name)
    
    if os.path.exists(source_path):
        try:
            shutil.copy2(source_path, target_path)
            print(f"✓ Copied {source_name} → {target_name}")
        except Exception as e:
            print(f"✗ Error copying {source_name}: {e}")
    else:
        print(f"✗ Source file not found: {source_name}")

print("\nListing all available burger/wegetarianski files in attached_assets:")
for file in glob.glob(os.path.join(source_dir, "*")):
    filename = os.path.basename(file)
    if any(word in filename.lower() for word in ['burger', 'wegetaria']):
        print(f"  {filename}")