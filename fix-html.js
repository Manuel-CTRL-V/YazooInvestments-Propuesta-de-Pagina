const fs = require('fs');
const path = require('path');

const baseDir = 'c:\\Users\\User\\Desktop\\Pagina Prueba Yazoo';

const mappings = {
    "index.html": "Home",
    "who-we-are.html": "Who We Are",
    "services.html": "Services",
    "production.html": "Production",
    "social-impact.html": "Social Impact",
    "contact.html": "Contact Us"
};

const activeClass = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-amber-700 dark:text-amber-400 border-b-2 border-amber-600 pb-1";
const inactiveClass = "font-['Epilogue'] tracking-tight text-sm font-medium uppercase text-stone-600 dark:text-stone-400 hover:text-amber-600 transition-colors";

Object.keys(mappings).forEach(file => {
    const filePath = path.join(baseDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Generate clean nav for this specific file
    let newNav = '<nav class="hidden md:flex items-center gap-8">\n';
    Object.entries(mappings).forEach(([targetFile, label]) => {
        const className = (targetFile === file) ? activeClass : inactiveClass;
        newNav += `<a class="${className}" href="${targetFile}">${label}</a>\n`;
    });
    newNav += '</nav>';
    
    // Replace the existing nav section in the HTML
    html = html.replace(/<nav class="hidden md:flex items-center gap-8">[\s\S]*?<\/nav>/i, newNav);
    
    fs.writeFileSync(filePath, html);
    console.log(`Fixed nav in ${file}`);
});
