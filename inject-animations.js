const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';
const files = ['index.html','who-we-are.html','services.html','production.html','social-impact.html','contact.html'];

const inject = `    <link rel="stylesheet" href="css/animations.css">
    <script src="js/animations.js" defer></script>
</head>`;

files.forEach(file => {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');

  // Remove any previous injection first
  html = html.replace(/\s*<link rel="stylesheet" href="css\/animations\.css">/g, '');
  html = html.replace(/\s*<script src="js\/animations\.js"[^>]*><\/script>/g, '');

  // Inject before </head>
  html = html.replace(/<\/head>/i, inject);
  fs.writeFileSync(filePath, html);
  console.log(`Injected animations into ${file}`);
});
