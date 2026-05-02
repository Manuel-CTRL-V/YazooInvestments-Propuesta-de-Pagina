const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';
const stitchDir = path.join(baseDir, 'stitch_yazoo_investment_srl_design_system');
const imgDir = path.join(baseDir, 'img');
const cssDir = path.join(baseDir, 'css');
const jsDir = path.join(baseDir, 'js');

if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });
if (!fs.existsSync(cssDir)) fs.mkdirSync(cssDir, { recursive: true });
if (!fs.existsSync(jsDir)) fs.mkdirSync(jsDir, { recursive: true });

const mappings = {
    "yazoo_investment_srl_homepage": "index.html",
    "who_we_are_yazoo_investment_srl": "who-we-are.html",
    "services_yazoo_investment_srl": "services.html",
    "production_yazoo_investment_srl": "production.html",
    "social_impact_yazoo_investment_srl": "social-impact.html",
    "contact_us_yazoo_investment_srl": "contact.html"
};

async function downloadImage(url) {
    const hash = crypto.createHash('md5').update(url).digest('hex').substring(0, 8);
    const filename = `img_${hash}.jpg`;
    const filepath = path.join(imgDir, filename);
    
    if (!fs.existsSync(filepath)) {
        return new Promise((resolve) => {
            https.get(url, (res) => {
                const stream = fs.createWriteStream(filepath);
                res.pipe(stream);
                stream.on('finish', () => {
                    stream.close();
                    resolve(`img/${filename}`);
                });
            }).on('error', (e) => {
                console.error(`Error downloading ${url}:`, e.message);
                resolve(url);
            });
        });
    }
    return `img/${filename}`;
}

async function run() {
    // Read footer from homepage
    const homeCode = path.join(stitchDir, "yazoo_investment_srl_homepage", "code.html");
    const homeHtml = fs.readFileSync(homeCode, 'utf8');
    
    const footerMatch = homeHtml.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
    const footerHtml = footerMatch ? footerMatch[0] : "<footer></footer>";
    
    const footerSafe = footerHtml.replace(/`/g, '\\`');
    const footerJs = `
class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = \`${footerSafe}\`;
  }
}
customElements.define('site-footer', SiteFooter);
`;
    fs.writeFileSync(path.join(jsDir, 'footer.js'), footerJs);
    
    // Write tokens.css
    fs.writeFileSync(path.join(cssDir, 'tokens.css'), '/* Tokens extracted */\n:root { --primary: #825500; }\n');
    
    for (const [folder, outFile] of Object.entries(mappings)) {
        const inPath = path.join(stitchDir, folder, "code.html");
        if (!fs.existsSync(inPath)) continue;
        
        let html = fs.readFileSync(inPath, 'utf8');
        
        // Find and replace images (only google user content)
        const imgUrls = Array.from(html.matchAll(/src="(https?:\/\/lh3\.googleusercontent\.com[^"]+)"/g)).map(m => m[1]);
        const uniqueUrls = [...new Set(imgUrls)];
        
        for (const url of uniqueUrls) {
            const newSrc = await downloadImage(url);
            html = html.split(`src="${url}"`).join(`src="${newSrc}"`);
        }
        
        // Replace header and footer
        html = html.replace(/<header[^>]*>[\s\S]*?<\/header>/i, '<site-navigation></site-navigation>');
        html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, '<site-footer></site-footer>');
        
        // Inject scripts
        const scripts = `
    <script src="js/age-gate.js"></script>
    <script src="js/navigation.js"></script>
    <script src="js/footer.js"></script>
    </head>`;
        html = html.replace(/<\/head>/i, scripts);
        
        // Smooth scroll
        html = html.replace(/<html/i, '<html style="scroll-behavior: smooth;"');
        
        // Overwrite file
        const outPath = path.join(baseDir, outFile);
        fs.writeFileSync(outPath, html);
        console.log(`Processed ${outFile}`);
    }
}

run().then(() => console.log('Done.')).catch(e => console.error(e));
