const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';

const files = [
    "index.html",
    "who-we-are.html",
    "services.html",
    "production.html",
    "social-impact.html",
    "contact.html"
];

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Check if it already has age-gate.css
    if (!html.includes('age-gate.css')) {
        // Inject before </head>
        html = html.replace(/<\/head>/i, '    <link rel="stylesheet" href="css/age-gate.css">\n    </head>');
        
        fs.writeFileSync(filePath, html);
        console.log(`Injected age-gate.css into ${file}`);
    }
});
