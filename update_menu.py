#!/usr/bin/env python3
"""
Script to update menu files based on JSON data from the admin panel
"""

import json
import re
import sys
import os

def update_index_html(menu_data):
    """Update the menu section in index.html"""
    try:
        with open('index.html', 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Generate new HTML
        html_content = '            <div class="menu-grid">\n'
        
        for i, item in enumerate(menu_data, 1):
            if not item.get('title', '').strip():
                continue
                
            html_content += f'                <div class="menu-item">\n'
            html_content += f'                    <div class="menu-item-content">\n'
            html_content += f'                        <h3 class="menu-item-title" data-key="menu-item-{i}-title">{item["title"]}</h3>\n'
            html_content += f'                        <div class="menu-item-details">\n'
            
            if item.get('subtitle', '').strip():
                html_content += f'                            <p class="menu-item-subtitle" data-key="menu-item-{i}-subtitle">{item["subtitle"]}</p>\n'
            
            html_content += f'                            <p class="menu-item-description" data-key="menu-item-{i}-desc">{item["description"].replace(chr(10), "<br>")}</p>\n'
            
            if item.get('price', '').strip():
                html_content += f'                            <p class="menu-item-price" data-key="menu-item-{i}-price">Cena: {item["price"]} zł</p>\n'
            
            html_content += f'                        </div>\n'
            html_content += f'                    </div>\n'
            html_content += f'                </div>\n'
            html_content += f'                \n'
        
        html_content += '            </div>'
        
        # Replace the menu-grid section
        pattern = r'<div class="menu-grid">.*?</div>\s*</div>\s*</section>'
        replacement = f'<div class="menu-grid">\n{html_content}\n        </div>\n    </section>'
        
        updated_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        with open('index.html', 'w', encoding='utf-8') as file:
            file.write(updated_content)
            
        print("✓ index.html updated successfully")
        return True
        
    except Exception as e:
        print(f"✗ Error updating index.html: {e}")
        return False

def update_script_js(menu_data):
    """Update the language translations in script.js"""
    try:
        with open('script.js', 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Generate Polish translations
        polish_menu_items = []
        english_menu_items = []
        
        for i, item in enumerate(menu_data, 1):
            if not item.get('title', '').strip():
                continue
                
            # Polish translations
            polish_menu_items.append(f"        'menu-item-{i}-title': '{item['title']}'")
            polish_menu_items.append(f"        'menu-item-{i}-desc': '{item['description'].replace(chr(10), '<br>')}'")
            
            if item.get('subtitle', '').strip():
                polish_menu_items.append(f"        'menu-item-{i}-subtitle': '{item['subtitle']}'")
            
            if item.get('price', '').strip():
                polish_menu_items.append(f"        'menu-item-{i}-price': 'Cena: {item['price']} zł'")
            
            # English translations
            english_menu_items.append(f"        'menu-item-{i}-title': 'Set {i}'")
            eng_desc = translate_to_english(item['description'])
            english_menu_items.append(f"        'menu-item-{i}-desc': '{eng_desc}'")
            
            if item.get('subtitle', '').strip():
                english_menu_items.append(f"        'menu-item-{i}-subtitle': '1 free roll with every set.'")
            
            if item.get('price', '').strip():
                english_menu_items.append(f"        'menu-item-{i}-price': 'Price: {item['price']} zł'")
        
        # Update Polish section
        content = update_language_section(content, 'pl', polish_menu_items)
        
        # Update English section  
        content = update_language_section(content, 'en', english_menu_items)
        
        with open('script.js', 'w', encoding='utf-8') as file:
            file.write(content)
            
        print("✓ script.js updated successfully")
        return True
        
    except Exception as e:
        print(f"✗ Error updating script.js: {e}")
        return False

def update_language_section(content, lang_code, menu_items):
    """Update a specific language section"""
    try:
        # Find the start and end of the language section
        start_pattern = f'{lang_code}:\\s*{{'
        start_match = re.search(start_pattern, content)
        
        if not start_match:
            return content
            
        start_pos = start_match.start()
        
        # Find the matching closing brace
        brace_count = 0
        pos = start_match.end() - 1
        end_pos = -1
        
        while pos < len(content):
            if content[pos] == '{':
                brace_count += 1
            elif content[pos] == '}':
                brace_count -= 1
                if brace_count == 0:
                    end_pos = pos + 1
                    break
            pos += 1
        
        if end_pos == -1:
            return content
        
        # Extract non-menu items from the existing section
        existing_section = content[start_match.end()-1:end_pos]
        non_menu_items = []
        
        for line in existing_section.split('\n'):
            line = line.strip()
            if line and not 'menu-item-' in line and line not in ['{', '}', '},']:
                if not line.endswith(',') and line != '}':
                    line += ','
                non_menu_items.append(f"        {line}")
        
        # Build new section
        new_items = non_menu_items + menu_items
        new_section = f"{lang_code}: {{\n" + ",\n".join(new_items) + "\n    }"
        
        # Replace the section
        new_content = content[:start_pos] + new_section + content[end_pos:]
        
        return new_content
        
    except Exception as e:
        print(f"Error updating {lang_code} section: {e}")
        return content

def translate_to_english(polish_text):
    """Basic translation of Polish menu items to English"""
    translations = {
        'Futomaki pieczony łosoś': 'Futomaki grilled salmon',
        'Hosomaki pieczony łosoś': 'Hosomaki grilled salmon', 
        'Futomaki łosoś surowy': 'Futomaki raw salmon',
        'Hosomaki łosoś surowy': 'Hosomaki raw salmon',
        'California tuńczyk surowy okładany w mango': 'California raw tuna wrapped in mango',
        'Futomaki łosoś pieczony': 'Futomaki grilled salmon',
        'Hosomaki ogórek': 'Hosomaki cucumber',
        'Philadelphia mango z łososiem opalany z sosem unagi': 'Philadelphia mango with salmon flambéed with unagi sauce',
        'California krewetka okładana tatakiem': 'California shrimp wrapped with tataki',
        'Futomaki tilapia tempura': 'Futomaki tilapia tempura',
        'Hosomaki batat': 'Hosomaki sweet potato',
        'California węgorz w zielone masago': 'California eel in green masago',
        'Futomaki sałatka surimi w tempurze': 'Futomaki surimi salad in tempura',
        'Futomaki krewetka gotowana': 'Futomaki cooked shrimp',
        'Hosomaki mango': 'Hosomaki mango',
        'Hosomaki awokado': 'Hosomaki avocado',
        'Hosomaki łosoś': 'Hosomaki salmon',
        'rolka gratis': 'free roll',
        '(6 sztuk)': '(6 pieces)',
        '(8 sztuk)': '(8 pieces)',
        '(10 sztuk)': '(10 pieces)'
    }
    
    english_text = polish_text
    for polish, english in translations.items():
        english_text = english_text.replace(polish, english)
    
    return english_text.replace('\n', '<br>')

def main():
    """Main function to update menu from JSON data"""
    if len(sys.argv) != 2:
        print("Usage: python update_menu.py <menu_data.json>")
        sys.exit(1)
    
    json_file = sys.argv[1]
    
    try:
        with open(json_file, 'r', encoding='utf-8') as file:
            menu_data = json.load(file)
        
        print(f"Updating menu with {len(menu_data)} items...")
        
        # Update both files
        html_success = update_index_html(menu_data)
        js_success = update_script_js(menu_data)
        
        if html_success and js_success:
            print("\n✅ Menu updated successfully!")
            # Clean up the JSON file
            os.remove(json_file)
        else:
            print("\n❌ Some updates failed")
            sys.exit(1)
            
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == '__main__':
    main()