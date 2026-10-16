const fs = require('fs');
const path = require('path');

function checkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      checkDir(full);
    } else if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
      const buf = fs.readFileSync(full);
      const str = buf.slice(0, 100).toString();
      if (str.includes('<!DOCTYPE') || str.includes('<html') || str.includes('404') || buf.length < 500) {
        console.log('CORRUPT/404 IMAGE FOUND:', full, 'Size:', buf.length);
      }
    }
  });
}

checkDir('assets/img');
console.log('Check finished.');
