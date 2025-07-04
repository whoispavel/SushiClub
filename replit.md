# Sushi Club Website - Project Documentation

## Overview
Multilingual, interactive sushi restaurant website for SUSHI CLUB in Wrocław, Poland. Features a comprehensive digital menu with real photos, bilingual support (Polish/English), and responsive design.

## Recent Changes (2025-01-12)
- ✓ Restructured website to Ninja Sushi-style architecture
- ✓ Created new header with sticky navigation and category filters
- ✓ Added modern product grid layout with card design
- ✓ Implemented category-based menu filtering (Zestawy, Rolki, Burgery, etc.)
- ✓ Maintained all existing features: CallbackHunter, social media, photos
- ✓ Enhanced mobile responsiveness with improved navigation
- ✓ Added hero section with call-to-action buttons
- ✓ Preserved all 18 menu items with real photos

## Project Architecture

### Core Files
- `index.html` - Main website page with menu display
- `styles.css` - Complete styling with custom CSS variables
- `script.js` - Language switching, form handling, animations
- `menu-data.json` - **NEW** Centralized menu structure for easy editing

### Menu Management System
- `menu-data.json` - Primary menu data source (user can edit directly)
- `update_menu_from_data.py` - Updates website from menu-data.json
- `update_menu.py` - Legacy script for JSON imports
- `menu-api.py` - API server for dynamic updates

### Photo System
- `images/` folder contains all menu photos
- Real photos: Zestaw 1-2, Futo set, California set, Philadelphia, etc.
- Placeholder images for items without photos
- `create_placeholders.py` - Generates fallback images

### Admin Interface
- `admin.html` - Administrative panel
- `menu-form.html` - Menu creation form
- `photo-upload.html` - Photo management interface

## User Preferences
- Communication language: Ukrainian/Polish mix
- Technical approach: Practical, working solutions
- Design: Minimalist white background, dark green (#264832) text
- Photo style: Square format (200px height) above menu items

## Social Media Links
- Instagram: https://www.instagram.com/sushiclub.wro
- TikTok: https://www.tiktok.com/@sushiclub.wro
- Telegram: https://t.me/sushiclubwro

## Key Features
- Responsive design for all devices
- Bilingual content (Polish primary, English secondary)
- Real menu photos with fallback placeholders
- Direct phone contact: +48 501 496 055
- Instagram integration in hero section
- Smooth animations and transitions

## Business Information
- Restaurant: SUSHI CLUB
- Location: Szczytnicka 54/1D, 50-382 Wrocław, Poland
- Currency: Polish Złoty (zł)
- Menu: 18 consolidated items covering sets, single rolls, burgers, appetizers

## Technical Notes
- No external dependencies except Font Awesome icons
- Pure CSS Grid for responsive layout
- JavaScript handles language switching and animations
- Menu structure easily editable via menu-data.json
- All photos optimized for web display