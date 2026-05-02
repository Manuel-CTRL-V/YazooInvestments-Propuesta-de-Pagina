const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';
const files = ['index.html','who-we-are.html','services.html','production.html','social-impact.html','contact.html'];

files.forEach(file => {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove previous injection
  html = html.replace(/\s*<script src="js\/i18n\.js"[^>]*><\/script>/g, '');

  // Inject AFTER animations.js (last script before </head>)
  html = html.replace(/<\/head>/i, '    <script src="js/i18n.js" defer></script>\n</head>');

  fs.writeFileSync(filePath, html);
  console.log(`Injected i18n into ${file}`);
});
