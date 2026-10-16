const fs = require('fs');

console.log('--- RAW SOURCE LOGOS ---');
fs.readdirSync('raw_source').forEach(f => {
  if (f.endsWith('.php')) {
    const txt = fs.readFileSync('raw_source/' + f, 'utf8');
    const m = txt.match(/<p class=["']responsive["']>\s*<img[^>]+src=["']([^"']+)["']/i);
    console.log(f.padEnd(32), m ? m[1] : 'NONE');
  }
});

console.log('\n--- BRAND FOLDERS LOGOS ---');
const folders = ['lgservice', 'godrejservice', 'samsungservice', 'boschservice', 'ifbservice', 'hitachiservice', 'panasonicservice', 'haierservice', 'siemensservice', 'simensservice', 'whirlpoolservice'];

folders.forEach(dir => {
  const p = dir + '/index.html';
  if (fs.existsSync(p)) {
    const txt = fs.readFileSync(p, 'utf8');
    const m = txt.match(/<p class=["']responsive["']>\s*<img[^>]+src=["']([^"']+)["']/i);
    console.log(dir.padEnd(32), m ? m[1] : 'NONE');
  }
});
