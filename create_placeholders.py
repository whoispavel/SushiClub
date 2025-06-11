#!/usr/bin/env python3
"""
Create placeholder images for menu items
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_placeholder_image(text, filename, size=(400, 400)):
    """Create a placeholder image with text"""
    # Create image with light gray background
    img = Image.new('RGB', size, color='#f8f9fa')
    draw = ImageDraw.Draw(img)
    
    # Try to use a decent font, fallback to default
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
    except:
        try:
            font = ImageFont.truetype("arial.ttf", 24)
        except:
            font = ImageFont.load_default()
    
    # Calculate text position for centering
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    x = (size[0] - text_width) // 2
    y = (size[1] - text_height) // 2
    
    # Draw text
    draw.text((x, y), text, fill='#264832', font=font)
    
    # Save image
    img.save(f'images/{filename}')
    print(f"Created: images/{filename}")

def main():
    """Create placeholder images for all menu items"""
    menu_items = [
        "Zestaw 1",
        "Zestaw 2", 
        "Zestaw 3",
        "Zestaw 4",
        "Zestaw 5",
        "Zestaw 6",
        "Futo set",
        "California set",
        "Philadelphia\ntuńczyk",
        "Philadelphia\nkrewetka",
        "Philadelphia\nwęgorz",
        "Philadelphia\nłosoś",
        "Wegetariański\nset",
        "Hosomaki\nset",
        "Rolki\nRainbow",
        "Rolki\nkurczak",
        "Rolki\nPhiladelphia",
        "Rolki\nCalifornia",
        "Rolki\nkrewetka",
        "Rolki\nłosoś",
        "Sushi burger\nłosoś",
        "Sushi burger\nkrewetka",
        "Sushi burger\nwegetariański",
        "Przystawki\ntatar & goma",
        "Przystawki\nkimchi",
        "Napoje",
        "Dodatki"
    ]
    
    # Create images directory if it doesn't exist
    os.makedirs('images', exist_ok=True)
    
    # Create placeholder images
    for i, item in enumerate(menu_items, 1):
        filename = f"menu-{i}.jpg"
        create_placeholder_image(item, filename)
    
    print(f"\nCreated {len(menu_items)} placeholder images")
    print("You can now replace these with actual photos of your menu items")

if __name__ == '__main__':
    main()