const fs = require('fs');
const files = ['index.html', 'who-we-are.html', 'services.html', 'production.html', 'social-impact.html', 'contact.html'];
files.forEach(f => {
  let html = fs.readFileSync(f, 'utf8');
  if (!html.includes('tokens.css')) {
    html = html.replace('</head>', '<link rel="stylesheet" href="css/tokens.css">\n</head>');
    fs.writeFileSync(f, html);
    console.log('Fixed ' + f);
  }
});
