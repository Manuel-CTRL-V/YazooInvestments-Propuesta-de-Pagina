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

const injectBlock = `    <link rel="stylesheet" href="css/tokens.css">
    <link rel="stylesheet" href="css/age-gate.css">
    <script src="js/age-gate.js" defer></script>
</head>`;

files.forEach(file => {
    const filePath = path.join(baseDir, file);
    if (!fs.existsSync(filePath)) return;

    let html = fs.readFileSync(filePath, 'utf8');

    // 1. Remove all previously injected age-gate.css / tokens.css / age-gate.js links
    html = html.replace(/\s*<link rel="stylesheet" href="css\/age-gate\.css">/g, '');
    html = html.replace(/\s*<link rel="stylesheet" href="css\/tokens\.css">/g, '');
    html = html.replace(/\s*<script src="js\/age-gate\.js"[^>]*><\/script>/g, '');

    // 2. Inject the clean block right before </head>
    html = html.replace(/<\/head>/i, injectBlock);

    fs.writeFileSync(filePath, html);
    console.log(`Cleaned & re-injected deps in ${file}`);
});
