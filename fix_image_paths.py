#!/usr/bin/env python3
import os
import shutil

# Change to images directory
os.chdir('images')

# The exact URL-encoded filenames the browser is requesting based on logs
browser_requests = [
    ("Wegetariański set_1751729190676.jpg", "Wegetaria%C5%84ski%20set_1751729190676.jpg"),
    ("Sushi burger łosoś_1751729582539.jpg", "Sushi%20burger%20%C5%82oso%C5%9B_1751729582539.jpg"),
    ("Sushi burger wegetariański_1751729567960.jpg", "Sushi%20burger%20wegetaria%C5%84ski_1751729567960.jpg")
]

for original, encoded in browser_requests:
    if os.path.exists(original):
        # Create the URL-encoded version
        try:
            shutil.copy2(original, encoded)
            print(f"✓ Created: {encoded}")
        except Exception as e:
            print(f"✗ Error creating {encoded}: {e}")
    else:
        print(f"✗ Source file not found: {original}")

print("Done!")