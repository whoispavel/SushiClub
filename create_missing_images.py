#!/usr/bin/env python3
import os
import shutil



def main():
    missing_images = [
        "menu-17.jpg",
        "menu-18.jpg", 
        "Lancz1.jpg",
        "Lancz2.jpg",
        "Lancz3.jpg"
    ]
    
    images_dir = "images"
    
    # Використовуємо існуюче зображення як placeholder
    placeholder_source = "images/Przystawki.jpg"
    
    if not os.path.exists(placeholder_source):
        print(f"❌ Помилка: {placeholder_source} не існує")
        return
    
    # Створюємо відсутні зображення
    for img_name in missing_images:
        img_path = os.path.join(images_dir, img_name)
        
        if not os.path.exists(img_path):
            print(f"Створюю {img_name}...")
            
            try:
                shutil.copy2(placeholder_source, img_path)
                print(f"✓ Створено {img_name}")
            except Exception as e:
                print(f"❌ Помилка при створенні {img_name}: {e}")
        else:
            print(f"✓ {img_name} вже існує")

if __name__ == "__main__":
    main() 