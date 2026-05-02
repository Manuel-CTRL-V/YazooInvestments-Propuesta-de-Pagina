import os
import re
import urllib.request
import hashlib

base_dir = r"c:\Users\User\Desktop\Pagina Prueba Yazoo"
stitch_dir = os.path.join(base_dir, "stitch_yazoo_investment_srl_design_system")
img_dir = os.path.join(base_dir, "img")

os.makedirs(img_dir, exist_ok=True)

mappings = {
    "yazoo_investment_srl_homepage": "index.html",
    "who_we_are_yazoo_investment_srl": "who-we-are.html",
    "services_yazoo_investment_srl": "services.html",
    "production_yazoo_investment_srl": "production.html",
    "social_impact_yazoo_investment_srl": "social-impact.html",
    "contact_us_yazoo_investment_srl": "contact.html"
}

def download_image(url):
    h = hashlib.md5(url.encode()).hexdigest()[:8]
    ext = ".jpg"
    filename = f"img_{h}{ext}"
    filepath = os.path.join(img_dir, filename)
    if not os.path.exists(filepath):
        try:
            print(f"Downloading {url} to {filename}")
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
                out_file.write(response.read())
        except Exception as e:
            print(f"Error downloading {url}: {e}")
            return url
    return f"img/{filename}"

# Extract footer from homepage
home_code = os.path.join(stitch_dir, "yazoo_investment_srl_homepage", "code.html")
with open(home_code, 'r', encoding='utf-8') as f:
    content = f.read()
    
# regex for footer
footer_match = re.search(r'(<footer.*?>.*?</footer>)', content, flags=re.DOTALL | re.IGNORECASE)
footer_html = footer_match.group(1) if footer_match else "<footer></footer>"

# Replace ` with \` to safely put in JS template literal
footer_html_safe = footer_html.replace('`', '\\`')

footer_js = f"""
class SiteFooter extends HTMLElement {{
  connectedCallback() {{
    this.innerHTML = `{footer_html_safe}`;
  }}
}}
customElements.define('site-footer', SiteFooter);
"""
os.makedirs(os.path.join(base_dir, 'js'), exist_ok=True)
with open(os.path.join(base_dir, 'js', 'footer.js'), 'w', encoding='utf-8') as f:
    f.write(footer_js)

# Dummy tokens.css as requested
css_dir = os.path.join(base_dir, "css")
os.makedirs(css_dir, exist_ok=True)
with open(os.path.join(css_dir, 'tokens.css'), 'w', encoding='utf-8') as f:
    f.write('/* Tokens extracted from Tailwind Config */\n:root { --primary: #825500; }\n')

for folder, out_file in mappings.items():
    in_path = os.path.join(stitch_dir, folder, "code.html")
    if not os.path.exists(in_path):
        continue
    
    with open(in_path, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Extract image URLs and replace
    img_urls = re.findall(r'src="(https?://[^"]+)"', html)
    for url in set(img_urls):
        new_src = download_image(url)
        html = html.replace(f'src="{url}"', f'src="{new_src}"')
        
    # Replace header with custom element
    html = re.sub(r'<header.*?>.*?</header>', '<site-navigation></site-navigation>', html, flags=re.DOTALL | re.IGNORECASE)
    
    # Replace footer with custom element
    html = re.sub(r'<footer.*?>.*?</footer>', '<site-footer></site-footer>', html, flags=re.DOTALL | re.IGNORECASE)
    
    # Inject scripts to head
    scripts_to_inject = '''
    <script src="js/age-gate.js"></script>
    <script src="js/navigation.js"></script>
    <script src="js/footer.js"></script>
    '''
    html = html.replace('</head>', f'{scripts_to_inject}</head>')
    
    # Add smooth scroll
    html = html.replace('<html', '<html style="scroll-behavior: smooth;"')
    
    # Write to root
    out_path = os.path.join(base_dir, out_file)
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(html)
        
print("Rework complete.")
