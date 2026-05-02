const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';
const files = ['index.html','who-we-are.html','services.html','production.html','social-impact.html','contact.html'];

const oldText = `<div class="text-xl font-bold tracking-widest text-amber-700 dark:text-amber-500 uppercase">
                Yazoo Investment
            </div>`;

const newLogo = `<a href="index.html">
  <img src="img/Logos_Yazoo_LogoPrincipal_Color.png" alt="Yazoo Investment" style="height:48px; width:auto; display:block;">
</a>`;

files.forEach(file => {
  const filePath = path.join(baseDir, file);
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('Yazoo Investment')) {
    html = html.replace(oldText, newLogo);
    fs.writeFileSync(filePath, html);
    console.log(`Updated logo in ${file}`);
  }
});
