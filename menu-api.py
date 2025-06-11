#!/usr/bin/env python3
"""
Simple API server to handle menu updates for the Sushi Club website
"""

import json
import os
import re
from http.server import HTTPServer, BaseHTTPRequestHandler
import socket

class MenuUpdateHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/update-menu':
            try:
                # Get the content length
                content_length = int(self.headers['Content-Length'])
                
                # Read the JSON data
                post_data = self.rfile.read(content_length)
                menu_data = json.loads(post_data.decode('utf-8'))
                
                # Update the website files
                success = self.update_website_files(menu_data)
                
                if success:
                    # Send success response
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    
                    response = json.dumps({'success': True, 'message': 'Menu updated successfully'})
                    self.wfile.write(response.encode('utf-8'))
                else:
                    self.send_error(500, 'Failed to update menu files')
                    
            except Exception as e:
                print(f"Error processing menu update: {e}")
                self.send_error(500, f'Error: {str(e)}')
        else:
            self.send_error(404, 'Not Found')
    
    def do_OPTIONS(self):
        # Handle CORS preflight requests
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def update_website_files(self, menu_data):
        """Update the actual website files with new menu data"""
        try:
            html_content = menu_data.get('html', '')
            translations = menu_data.get('translations', {})
            
            # Update index.html
            self.update_index_html(html_content)
            
            # Update script.js with new translations
            self.update_script_js(translations)
            
            print("Menu files updated successfully")
            return True
            
        except Exception as e:
            print(f"Error updating files: {e}")
            return False
    
    def update_index_html(self, new_html):
        """Update the menu section in index.html"""
        try:
            with open('index.html', 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Find and replace the menu-grid section
            pattern = r'<div class="menu-grid">.*?</div>\s*</div>\s*</section>'
            replacement = f'<div class="menu-grid">\n{new_html}\n            </div>\n        </div>\n    </section>'
            
            updated_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
            
            with open('index.html', 'w', encoding='utf-8') as file:
                file.write(updated_content)
                
            print("index.html updated successfully")
            
        except Exception as e:
            print(f"Error updating index.html: {e}")
            raise
    
    def update_script_js(self, translations):
        """Update the language translations in script.js"""
        try:
            with open('script.js', 'r', encoding='utf-8') as file:
                content = file.read()
            
            # Update Polish translations
            polish_data = translations.get('polish', {})
            content = self.update_language_section(content, 'pl', polish_data)
            
            # Update English translations
            english_data = translations.get('english', {})
            content = self.update_language_section(content, 'en', english_data)
            
            with open('script.js', 'w', encoding='utf-8') as file:
                file.write(content)
                
            print("script.js updated successfully")
            
        except Exception as e:
            print(f"Error updating script.js: {e}")
            raise
    
    def update_language_section(self, content, lang_code, translations):
        """Update a specific language section in the JavaScript"""
        try:
            # Find the language section
            pattern = f'({lang_code}:\\s*{{[^}}]*?)(\'menu-item-[^}}]*?)(}},?)'
            
            # Generate new menu translations
            menu_translations = []
            for key, value in translations.items():
                if key.startswith('menu-item-'):
                    # Escape single quotes in the value
                    escaped_value = value.replace("'", "\\'")
                    menu_translations.append(f"        '{key}': '{escaped_value}'")
            
            # Keep non-menu translations
            non_menu_pattern = f'{lang_code}:\\s*{{([^}}]*?)\'menu-item-'
            match = re.search(non_menu_pattern, content, re.DOTALL)
            
            if match:
                existing_translations = match.group(1).strip()
                if existing_translations and not existing_translations.endswith(','):
                    existing_translations += ','
                
                new_section = f"""{lang_code}: {{
        {existing_translations}
{chr(10).join(menu_translations)}
    }}"""
            else:
                new_section = f"""{lang_code}: {{
{chr(10).join(menu_translations)}
    }}"""
            
            # Replace the entire language section
            lang_pattern = f'{lang_code}:\\s*{{[^{{}}]*?(?:{{[^{{}}]*?}}[^{{}}]*?)*?}}'
            updated_content = re.sub(lang_pattern, new_section, content, flags=re.DOTALL)
            
            return updated_content
            
        except Exception as e:
            print(f"Error updating {lang_code} section: {e}")
            return content

def run_menu_api_server():
    """Run the menu API server in a separate thread"""
    server_address = ('', 8001)
    httpd = HTTPServer(server_address, MenuUpdateHandler)
    print("Menu API Server running on port 8001...")
    httpd.serve_forever()

if __name__ == '__main__':
    # Start the API server
    api_thread = threading.Thread(target=run_menu_api_server)
    api_thread.daemon = True
    api_thread.start()
    
    print("Menu Update API is running on http://localhost:8001")
    print("Use /api/update-menu endpoint to update the website")
    
    try:
        # Keep the main thread alive
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\nShutting down...")