const fs = require('fs');
const path = require('path');

const brands = ['lg', 'godrej', 'samsung', 'bosch', 'ifb', 'hitachi', 'panasonic', 'haier', 'siemens', 'whirlpool'];
const diskFiles = fs.readdirSync('assets/img');

console.log('--- ALL LOGO CHECK ---');
brands.forEach(b => {
  const p = path.join(b + 'service', 'index.html');
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const m = html.match(/<p class=["']responsive["']>\s*<img[^>]+src=["']([^"']+)["']/i);
    const logoSrc = m ? m[1] : 'NOT FOUND';
    const cleanName = path.basename(logoSrc);
    const exactMatch = diskFiles.find(f => f === cleanName);
    const ciMatch = diskFiles.find(f => f.toLowerCase() === cleanName.toLowerCase());
    
    let status = 'OK';
    if (!exactMatch && ciMatch) status = 'CASE MISMATCH (Breaks on Linux/Web!)';
    else if (!exactMatch && !ciMatch) status = 'MISSING (404)';

    console.log(`${b.toUpperCase().padEnd(12)} HTML: ${logoSrc}`);
    console.log(`             Status: ${status} | On disk: ${exactMatch || ciMatch || 'NONE'}`);
  }
});
