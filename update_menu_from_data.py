import json
import sys

def update_index_html_with_real_photos():
    """Update index.html with real photo paths"""
    
    # Load menu data
    with open('menu-data.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    menu_items = data['menuItems']
    
    # Read current index.html
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Update each menu item image
    for i, item in enumerate(menu_items, 1):
        old_image = f"images/menu-{i}.jpg"
        new_image = f"images/{item['image']}"
        
        # Replace image path in HTML
        content = content.replace(
            f"style=\"background-image: url('{old_image}')",
            f"style=\"background-image: url('{new_image}')"
        )
        
        print(f"✓ Updated {item['title']}: {old_image} → {new_image}")
    
    # Write updated content
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"\n✅ Successfully updated {len(menu_items)} menu items with real photos!")

if __name__ == "__main__":
    update_index_html_with_real_photos()