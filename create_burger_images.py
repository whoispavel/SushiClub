#!/usr/bin/env python3
from PIL import Image
import os

def create_burger_images():
    """Create the three burger images using the provided PNG"""
    
    # Source image
    source_png = "attached_assets/image_1751730582599.png"
    
    if not os.path.exists(source_png):
        print(f"Source PNG not found: {source_png}")
        return
    
    # Load the image
    img = Image.open(source_png)
    
    # Crop to just the burger photo (top part of the image)
    # Based on the image, the burger photo appears to be in the top portion
    width, height = img.size
    burger_height = int(height * 0.6)  # Take top 60% of image
    burger_img = img.crop((0, 0, width, burger_height))
    
    # Resize to square format as required
    size = 400
    burger_img = burger_img.resize((size, size), Image.Resampling.LANCZOS)
    
    # Create the three burger images
    target_images = [
        "images/sushi-burger-losos.jpg",
        "images/sushi-burger-wegetarianski.jpg", 
        "images/wegetarianski-set.jpg"
    ]
    
    for target_path in target_images:
        try:
            # Convert to RGB if necessary (PNG might have alpha channel)
            if burger_img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                rgb_img = Image.new('RGB', burger_img.size, (255, 255, 255))
                if burger_img.mode == 'P':
                    burger_img = burger_img.convert('RGBA')
                rgb_img.paste(burger_img, mask=burger_img.split()[-1] if burger_img.mode == 'RGBA' else None)
                burger_img = rgb_img
            
            # Save as JPEG
            burger_img.save(target_path, 'JPEG', quality=90)
            file_size = os.path.getsize(target_path)
            print(f"✓ Created {target_path} ({file_size} bytes)")
            
        except Exception as e:
            print(f"✗ Error creating {target_path}: {e}")

if __name__ == "__main__":
    create_burger_images()