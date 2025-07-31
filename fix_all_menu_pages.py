#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import re

def extract_content(file_path):
    """Виділяє унікальні дані зі сторінки меню"""
    with open(file_path, 'r', encoding='utf-8') as f:
        html = f.read()
    # Title
    title = re.search(r'<h1 class="menu-title">(.*?)</h1>', html)
    title = title.group(1).strip() if title else ''
    # Subtitle
    subtitle = re.search(r'<p class="menu-subtitle">(.*?)</p>', html)
    subtitle = subtitle.group(1).strip() if subtitle else ''
    # Description
    desc = re.search(r'<div class="menu-description">\s*<p>(.*?)</p>', html, re.DOTALL)
    desc = desc.group(1).strip() if desc else ''
    # Ingredients
    ingr = re.findall(r'<li><strong>(.*?)</strong></li>', html)
    # Ingredients title
    ingr_title = re.search(r'<h2 class="ingredients-title">(.*?)</h2>', html)
    ingr_title = ingr_title.group(1).strip() if ingr_title else ''
    # Price
    price = re.search(r'<div class="menu-price">(.*?)</div>', html)
    price = price.group(1).strip() if price else ''
    # Image
    img = re.search(r'<img [^>]*src="([^"]+)"[^>]*class="menu-image"', html)
    img = img.group(1).strip() if img else ''
    # Alt
    alt = re.search(r'<img [^>]*alt="([^"]+)"[^>]*class="menu-image"', html)
    alt = alt.group(1).strip() if alt else ''
    return dict(title=title, subtitle=subtitle, desc=desc, ingr=ingr, ingr_title=ingr_title, price=price, img=img, alt=alt)

def get_zestaw1_template(lang):
    path = f"menu/{lang}/zestaw-1.html"
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()

def fill_template(template, data):
    # Підставляємо дані у шаблон zestaw-1
    html = template
    html = re.sub(r'<h1 class="menu-title">.*?</h1>', f'<h1 class="menu-title">{data["title"]}</h1>', html)
    html = re.sub(r'<p class="menu-subtitle">.*?</p>', f'<p class="menu-subtitle">{data["subtitle"]}</p>', html)
    html = re.sub(r'<img [^>]*class="menu-image"[^>]*>', f'<img src="{data["img"]}" alt="{data["alt"]}" class="menu-image">', html)
    html = re.sub(r'<div class="menu-description">.*?<p>.*?</p>.*?</div>', f'<div class="menu-description">\n          <p>{data["desc"]}</p>\n        </div>', html, flags=re.DOTALL)
    ingr_html = '\n'.join([f'<li><strong>{i}</strong></li>' for i in data["ingr"]])
    html = re.sub(r'<h2 class="ingredients-title">.*?</h2>', f'<h2 class="ingredients-title">{data["ingr_title"]}</h2>', html)
    html = re.sub(r'<ul class="ingredients-list">.*?</ul>', f'<ul class="ingredients-list">\n            {ingr_html}\n          </ul>', html, flags=re.DOTALL)
    html = re.sub(r'<div class="menu-price">.*?</div>', f'<div class="menu-price">{data["price"]}</div>', html)
    return html

def main():
    languages = ['pl', 'en', 'ua', 'ru']
    for lang in languages:
        menu_dir = f"menu/{lang}"
        zestaw1_template = get_zestaw1_template(lang)
        files = [f for f in os.listdir(menu_dir) if f.endswith('.html')]
        for fname in files:
            fpath = os.path.join(menu_dir, fname)
            # Пропускаємо zestaw-1.html
            if fname == 'zestaw-1.html':
                continue
            try:
                data = extract_content(fpath)
                # Якщо дані відсутні — беремо з zestaw-1
                for k, v in extract_content(os.path.join(menu_dir, 'zestaw-1.html')).items():
                    if not data[k]:
                        data[k] = v
                html = fill_template(zestaw1_template, data)
                with open(fpath, 'w', encoding='utf-8') as f:
                    f.write(html)
                print(f"✅ Оновлено: {fpath}")
            except Exception as e:
                print(f"❌ Помилка {fpath}: {e}")
    print("✅ Всі сторінки оновлено!")

if __name__ == "__main__":
    main() 