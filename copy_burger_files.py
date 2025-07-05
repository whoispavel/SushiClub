#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import os
import shutil
import sys

# Set the working directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Define source and target directories
source_dir = "attached_assets"
target_dir = "images"

# File mappings - using exact filenames from directory listing
file_mappings = [
    ("Sushi burger łosoś_1751729582539.jpg", "sushi-burger-losos.jpg"),
    ("Sushi burger wegetariański_1751729567960.jpg", "sushi-burger-wegetarianski.jpg"),
    ("Wegetariański set_1751729190676.jpg", "wegetarianski-set.jpg")
]

print("Starting file copy process...")

for source_filename, target_filename in file_mappings:
    source_path = os.path.join(source_dir, source_filename)
    target_path = os.path.join(target_dir, target_filename)
    
    print(f"Looking for: {source_path}")
    
    if os.path.exists(source_path):
        try:
            shutil.copy2(source_path, target_path)
            print(f"✓ SUCCESS: Copied {source_filename} → {target_filename}")
            
            # Verify the copy was successful
            if os.path.exists(target_path):
                size = os.path.getsize(target_path)
                print(f"  File size: {size} bytes")
            else:
                print(f"  WARNING: Target file not found after copy")
                
        except Exception as e:
            print(f"✗ ERROR copying {source_filename}: {e}")
    else:
        print(f"✗ SOURCE NOT FOUND: {source_path}")

# List all files in source directory for debugging
print(f"\nAll files in {source_dir}:")
try:
    for filename in sorted(os.listdir(source_dir)):
        if 'burger' in filename.lower() or 'wegetaria' in filename.lower():
            print(f"  {filename}")
except Exception as e:
    print(f"Error listing files: {e}")

# Check target directory results
print(f"\nTarget files in {target_dir}:")
try:
    for filename in os.listdir(target_dir):
        if 'sushi-burger' in filename or 'wegetarianski-set' in filename:
            size = os.path.getsize(os.path.join(target_dir, filename))
            print(f"  {filename} ({size} bytes)")
except Exception as e:
    print(f"Error checking target files: {e}")