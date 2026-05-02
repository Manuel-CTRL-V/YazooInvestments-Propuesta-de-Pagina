const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const https = require('https');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';
const stitchDir = path.join(baseDir, 'stitch_yazoo_investment_srl_design_system');
const imgDir = path.join(baseDir, 'img');

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
                stream.on('finish', () => { stream.close(); resolve(`img/${filename}`); });
            }).on('error', () => resolve(url));
        });
    }
    return `img/${filename}`;
}

async function run() {
    // Read header and footer from homepage
    const homeCode = path.join(stitchDir, "yazoo_investment_srl_homepage", "code.html");
    const homeHtml = fs.readFileSync(homeCode, 'utf8');
    
    const headerMatch = homeHtml.match(/<header[^>]*>[\s\S]*?<\/header>/i);
    const rawHeader = headerMatch ? headerMatch[0] : "";
    
    const footerMatch = homeHtml.match(/<footer[^>]*>[\s\S]*?<\/footer>/i);
    const rawFooter = footerMatch ? footerMatch[0] : "";
    
    const activeClass = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-amber-700 dark:text-amber-400 border-b-2 border-amber-600 pb-1";
    const inactiveClass = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors";

    for (const [folder, outFile] of Object.entries(mappings)) {
        const inPath = path.join(stitchDir, folder, "code.html");
        if (!fs.existsSync(inPath)) continue;
        
        let html = fs.readFileSync(inPath, 'utf8');
        
        // 1. Process Images
        const imgUrls = Array.from(html.matchAll(/src="(https?:\/\/lh3\.googleusercontent\.com[^"]+)"/g)).map(m => m[1]);
        const uniqueUrls = [...new Set(imgUrls)];
        for (const url of uniqueUrls) {
            const newSrc = await downloadImage(url);
            html = html.split(`src="${url}"`).join(`src="${newSrc}"`);
        }
        
        // 2. Customize Header for this page (set Active link)
        let pageHeader = rawHeader;
        // Fix hrefs
        pageHeader = pageHeader
            .replace(/>Home<\/a>/g, ' href="index.html">Home</a>')
            .replace(/>Who We Are<\/a>/g, ' href="who-we-are.html">Who We Are</a>')
            .replace(/>Services<\/a>/g, ' href="services.html">Services</a>')
            .replace(/>Production<\/a>/g, ' href="production.html">Production</a>')
            .replace(/>Social Impact<\/a>/g, ' href="social-impact.html">Social Impact</a>')
            .replace(/>Contact Us<\/a>/g, ' href="contact.html">Contact Us</a>');
            
        // Reset all classes to inactive first
        pageHeader = pageHeader.replace(/class="font-\['Epilogue'\] tracking-tight text-sm font-medium uppercase text-amber-700 dark:text-amber-400 border-b-2 border-amber-600 pb-1"/g, `class="${inactiveClass}"`);
        
        // Now set the active one
        const linkRegex = new RegExp(`<a class="${inactiveClass.replace(/\[/g, '\\[').replace(/\]/g, '\\]')}" href="${outFile}">([^<]+)<\/a>`);
        pageHeader = pageHeader.replace(linkRegex, `<a class="${activeClass}" href="${outFile}">$1</a>`);
        
        // 3. Inject Header and Footer (replace existing ones)
        html = html.replace(/<header[^>]*>[\s\S]*?<\/header>/i, pageHeader);
        html = html.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, rawFooter);
        
        // 4. Clean up any bad state from previous attempts
        html = html.replace(/<site-navigation>.*?<\/site-navigation>/ig, pageHeader);
        html = html.replace(/<site-footer>.*?<\/site-footer>/ig, rawFooter);
        
        // 5. Inject scripts
        // Only age-gate.js
        const scripts = `
    <script src="js/age-gate.js"></script>
    </head>`;
        html = html.replace(/<\/head>/i, scripts);
        
        // 6. Smooth scroll
        html = html.replace(/<html/i, '<html style="scroll-behavior: smooth;"');
        
        // Overwrite file
        fs.writeFileSync(path.join(baseDir, outFile), html);
        console.log(`Processed ${outFile}`);
    }
}

run().then(() => console.log('Done.')).catch(e => console.error(e));
