const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';
const stitchDir = path.join(baseDir, 'stitch_yazoo_investment_srl_design_system');
const homeCode = path.join(stitchDir, "yazoo_investment_srl_homepage", "code.html");

const html = fs.readFileSync(homeCode, 'utf8');

// Extract the header from the original Stitch design
const headerMatch = html.match(/<header[^>]*>[\s\S]*?<\/header>/i);
const headerHtml = headerMatch ? headerMatch[0] : "";

// Fix hrefs in the header to be actual links
let fixedHeader = headerHtml
  .replace(/>Home<\/a>/g, ' href="index.html" data-path="index.html">Home</a>')
  .replace(/>Who We Are<\/a>/g, ' href="who-we-are.html" data-path="who-we-are.html">Who We Are</a>')
  .replace(/>Services<\/a>/g, ' href="services.html" data-path="services.html">Services</a>')
  .replace(/>Production<\/a>/g, ' href="production.html" data-path="production.html">Production</a>')
  .replace(/>Social Impact<\/a>/g, ' href="social-impact.html" data-path="social-impact.html">Social Impact</a>')
  .replace(/>Contact Us<\/a>/g, ' href="contact.html" data-path="contact.html">Contact Us</a>');

const headerSafe = fixedHeader.replace(/`/g, '\\`');

const navJs = `
class SiteNavigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = \`${headerSafe}\`;

    // Active link logic
    const currentPath = window.location.pathname;
    const links = this.querySelectorAll('nav a');
    
    // Reset all to inactive style
    links.forEach(link => {
        link.className = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors";
    });

    // Set active style
    links.forEach(link => {
      const path = link.getAttribute('data-path');
      if (path && (currentPath.endsWith(path) || (path === 'index.html' && currentPath.endsWith('/')))) {
        link.className = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-amber-700 dark:text-amber-400 border-b-2 border-amber-600 pb-1";
      }
    });
  }
}
customElements.define('site-navigation', SiteNavigation);
`;

fs.writeFileSync(path.join(baseDir, 'js', 'navigation.js'), navJs);
console.log('Fixed navigation.js to use Stitch header.');
