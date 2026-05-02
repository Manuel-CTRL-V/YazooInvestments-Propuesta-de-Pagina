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

// 1. Get the standard header from index.html
let indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf8');
const headerMatch = indexHtml.match(/<header class="bg-white\/95[^>]*>[\s\S]*?<\/header>/i);

if (!headerMatch) {
    console.error("Could not find standard header in index.html");
    process.exit(1);
}

const standardHeader = headerMatch[0];

Object.keys(mappings).forEach(file => {
    const filePath = path.join(baseDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let html = fs.readFileSync(filePath, 'utf8');
    
    // First, remove the standard header if it exists
    html = html.replace(/<header class="bg-white\/95[^>]*>[\s\S]*?<\/header>/i, '');
    
    // Also remove the <nav class="fixed top-0..."> or similar in other files
    html = html.replace(/<nav class="fixed top-0[^>]*>[\s\S]*?<\/nav>/i, '');
    html = html.replace(/<nav class="absolute top-0[^>]*>[\s\S]*?<\/nav>/i, '');
    html = html.replace(/<header class="absolute top-0[^>]*>[\s\S]*?<\/header>/i, '');
    
    // Remove old comments
    html = html.replace(/<!-- Top Navigation Shell -->/ig, '');
    html = html.replace(/<!-- TopAppBar -->/ig, '');

    // Now, generate the page-specific header
    let pageHeader = standardHeader;
    
    // Reset all nav links in the standard header to inactive
    pageHeader = pageHeader.replace(new RegExp(activeClass.replace(/\[/g, '\\[').replace(/\]/g, '\\]'), 'g'), inactiveClass);
    
    // Find the link for this page and set it to active
    const fileTarget = file;
    const linkRegex = new RegExp(`<a class="${inactiveClass.replace(/\[/g, '\\[').replace(/\]/g, '\\]')}" href="${fileTarget}">([^<]+)<\/a>`);
    pageHeader = pageHeader.replace(linkRegex, `<a class="${activeClass}" href="${fileTarget}">$1</a>`);
    
    // Insert the pageHeader right after <body ...>
    html = html.replace(/(<body[^>]*>)/i, `$1\n<!-- TopAppBar -->\n${pageHeader}`);
    
    // Fix any stray duplicates
    html = html.replace(/href="#" href="/g, 'href="');
    
    fs.writeFileSync(filePath, html);
    console.log(`Standardized nav in ${file}`);
});
