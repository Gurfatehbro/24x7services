const http = require('http');
const fs = require('fs');
const path = require('path');

const brands = ['lg', 'godrej', 'samsung', 'bosch', 'ifb', 'hitachi', 'panasonic', 'haier', 'siemens', 'simens', 'whirlpool'];

async function testUrl(url) {
  return new Promise(resolve => {
    http.get(url, res => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          contentType: res.headers['content-type'],
          size: Buffer.concat(data).length
        });
      });
    }).on('error', err => resolve({ status: 500, error: err.message }));
  });
}

async function run() {
  console.log('--- TESTING ALL IMAGES VIA HTTP LOCALHOST:3000 ---');
  let failures = [];

  for (const b of brands) {
    const pageUrl = `http://localhost:3000/${b}service/`;
    const res = await testUrl(pageUrl);
    if (res.status !== 200) {
      console.log(`Page failed: ${pageUrl} Status: ${res.status}`);
      continue;
    }

    const htmlPath = path.join(`${b}service`, 'index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');
    const imgMatches = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];

    for (const m of imgMatches) {
      let src = m[1];
      if (src.startsWith('http')) continue;
      // In subfolder, src is like ../assets/img/...
      let cleanPath = src.replace(/^\.\.\//, '/');
      if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
      let imgUrl = `http://localhost:3000${cleanPath}`;

      const imgRes = await testUrl(imgUrl);
      if (imgRes.status !== 200 || imgRes.size < 500) {
        failures.push({ brand: b, src, imgUrl, status: imgRes.status, size: imgRes.size });
        console.log(`[FAILED] Brand: ${b} -> ${src} (Status: ${imgRes.status}, Size: ${imgRes.size})`);
      } else {
        console.log(`[OK] Brand: ${b} -> ${src} (${imgRes.size} bytes)`);
      }
    }
  }

  console.log('\nTotal failures:', failures.length);
}

run();
