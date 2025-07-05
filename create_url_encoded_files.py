#!/usr/bin/env python3
import os
import shutil
import urllib.parse

# Change to images directory
os.chdir('images')

# Define the files that need URL-encoded versions
files_to_encode = [
    "Wegetariański set_1751729190676.jpg",
    "Sushi burger łosoś_1751729582539.jpg", 
    "Sushi burger wegetariański_1751729567960.jpg"
]

for filename in files_to_encode:
    if os.path.exists(filename):
        # Create URL-encoded version
        encoded_name = urllib.parse.quote(filename)
        shutil.copy2(filename, encoded_name)
        print(f"Created: {encoded_name}")
    else:
        print(f"File not found: {filename}")

print("Done creating URL-encoded files!")