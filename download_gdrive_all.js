const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const files = [
  { id: "128WyCdKRliTBB-fZXNJ7svPbr3ILtYm9", name: "IMG-20261016-WA0047.jpg" },
  { id: "1eTqmF_X-iaLlT6L2VY8LgcI8CKq2BaQp", name: "IMG-20261016-WA0048.jpg" },
  { id: "11sL7pwcWV6KxjzxeEx-DYbhWuBLlxcHr", name: "IMG-20261016-WA0049.jpg" },
  { id: "1rhJXGd2_XFdtV4s15TTtxr67I4x6upPo", name: "IMG-20261016-WA0050.jpg" },
  { id: "1DS662JyxPFyQglGKd2ZPUzuwhwivhXjx", name: "IMG-20261016-WA0051.jpg" },
  { id: "1-nXTaDkiAH1GKUjgNYfaNagkH8kK_bjK", name: "IMG-20261016-WA0052.jpg" },
  { id: "1kxO-_YA8H_ko19m2-xnKwLX7etHB1wmG", name: "IMG-20261016-WA0053.jpg" },
  { id: "1cWiyqag83KxowFxVGWSG6_Cs9f1Ub31W", name: "IMG-20261016-WA0054.jpg" },
  { id: "1KUNC3bOCHP9qEXHeefJvoMhZWcMoqIqL", name: "IMG-20261016-WA0055.jpg" },
  { id: "1aBMT-jMfvMwpJzG4MKfSiE3KAhiEIXQD", name: "IMG-20261016-WA0056.jpg" },
  { id: "1EvVe0CrScP8xj4cEet0ysyXviF4-cBmq", name: "IMG-20261016-WA0057.jpg" },
  { id: "1anSyzo1LIQQ8ZDfZU2l_szikDGbGtfYf", name: "IMG-20261016-WA0058.jpg" }
];

const outDir = path.join(__dirname, 'assets', 'img', 'storefronts');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

for (const file of files) {
  const dest = path.join(outDir, file.name);
  console.log(`Downloading ${file.name}...`);
  const url = `https://drive.google.com/uc?id=${file.id}&export=download`;
  try {
    execSync(`curl.exe -sL "${url}" -o "${dest}"`);
    const size = fs.statSync(dest).size;
    console.log(`Saved ${file.name} (${size} bytes)`);
  } catch (err) {
    console.error(`Failed ${file.name}:`, err.message);
  }
}

console.log('All storefront images downloaded successfully.');
