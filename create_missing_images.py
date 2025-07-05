#!/usr/bin/env python3
import os
import shutil

# Change to images directory
os.chdir('images')

# Map original files to what browser expects (from 404 logs)
file_mappings = {
    'Sushi burger łosoś_1751729582539.jpg': 'Sushi%20burger%20%C5%82oso%C5%9B_1751729582539.jpg',
    'Sushi burger wegetariański_1751729567960.jpg': 'Sushi%20burger%20wegetaria%C5%84ski_1751729567960.jpg',
    'Wegetariański set_1751729190676.jpg': 'Wegetaria%C5%84ski%20set_1751729190676.jpg'
}

for original, encoded in file_mappings.items():
    if os.path.exists(original):
        try:
            shutil.copy2(original, encoded)
            print(f"✓ Created: {encoded}")
        except Exception as e:
            print(f"✗ Error creating {encoded}: {e}")
    else:
        print(f"✗ Original file not found: {original}")

print("File creation completed!")