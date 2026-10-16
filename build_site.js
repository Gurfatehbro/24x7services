const fs = require('fs');
const path = require('path');

const PHONE_RAW = '18002700275';
const PHONE_TEL = 'tel:18002700275';

const brands = [
  {
    id: 'lg',
    folder: 'lgservice',
    rawFile: 'lg-service-center.php',
    name: 'LG',
    bannerImg: 'assets/img/LG-service-center.jpg'
  },
  {
    id: 'godrej',
    folder: 'godrejservice',
    rawFile: 'godrej-service-center.php',
    name: 'Godrej',
    bannerImg: 'assets/img/Godrej-service-center.jpg'
  },
  {
    id: 'samsung',
    folder: 'samsungservice',
    rawFile: 'samsung-service-center.php',
    name: 'Samsung',
    bannerImg: 'assets/img/samsung-service-center.jpg'
  },
  {
    id: 'bosch',
    folder: 'boschservice',
    rawFile: 'bosch-service-center.php',
    name: 'Bosch',
    bannerImg: 'assets/img/Bosch-service-center.jpg'
  },
  {
    id: 'ifb',
    folder: 'ifbservice',
    rawFile: 'ifb-service-center.php',
    name: 'IFB',
    bannerImg: 'assets/img/IFB-service-center.jpg'
  },
  {
    id: 'hitachi',
    folder: 'hitachiservice',
    rawFile: 'hitachi-service-center.php',
    name: 'Hitachi',
    bannerImg: 'assets/img/hitachi-service-center.jpg'
  },
  {
    id: 'panasonic',
    folder: 'panasonicservice',
    rawFile: 'panasonic-service-center.php',
    name: 'Panasonic',
    bannerImg: 'assets/img/Panasonic-service-center.jpg'
  },
  {
    id: 'haier',
    folder: 'haierservice',
    rawFile: 'haier-service-center.php',
    name: 'Haier',
    bannerImg: 'assets/img/Haier-service-center.jpg'
  },
  {
    id: 'siemens',
    folder: 'siemensservice',
    aliasFolder: 'simensservice',
    rawFile: 'siemens-service-center.php',
    name: 'Siemens',
    bannerImg: 'assets/img/Siemens.webp'
  }
];

function processHtml(rawContent, isSubfolder = true) {
  let content = rawContent;

  // 1. Replace all old phone numbers
  // tel:011-69290873 / Tel:011-69290873
  content = content.replace(/tel:\s*011-69290873\s*/gi, PHONE_TEL);
  content = content.replace(/Tel:\s*011-69290873\s*/gi, PHONE_TEL);
  
  // Replace plain text phone occurrences
  content = content.replace(/011-69290873/g, PHONE_RAW);

  // 2. Make the "Need More Help?" call-now box fully clickable
  content = content.replace(
    /<div class="call-now">\s*<i class="far fa-phone"><\/i>\s*Call Now\s*18002700275\s*<\/div>/gi,
    `<div class="call-now"><a href="${PHONE_TEL}" style="color:#ffffff;text-decoration:none;display:block;"><i class="far fa-phone"></i> Call Now ${PHONE_RAW}</a></div>`
  );

  // 3. Ensure the floating button is clean and accessible
  content = content.replace(
    /<a href="tel:18002700275\s*" class="btn-whatsapp-pulse">[\s\S]*?<i class="fa fa-phone"><\/i>[\s\S]*?<\/a>/gi,
    `<a href="${PHONE_TEL}" class="btn-whatsapp-pulse" title="Call ${PHONE_RAW}" aria-label="Call Customer Care ${PHONE_RAW}"><i class="fa fa-phone" aria-hidden="true"></i></a>`
  );

  // 4. Ensure footer-oll-now is clean
  content = content.replace(
    /<a href="tel:18002700275\s*" class="col-now-footer">Call Now : 18002700275\s*<\/a>/gi,
    `<a href="${PHONE_TEL}" class="col-now-footer"><i class="fa fa-phone" style="margin-right:6px;"></i>Call Now : ${PHONE_RAW}</a>`
  );

  // 5. Update year if 2025
  content = content.replace(/Copyright © 2025/g, 'Copyright © 2026');

  // Fix original template HTML syntax glitches
  content = content.replace(/<div class="col-lg-3 col-sm-6">-->/g, '<div class="col-lg-3 col-sm-6">');
  content = content.replace(/<p> India<\/p\s*\n/g, '<p> India</p>\n');
  content = content.replace(/<\/script><script src=/g, '<script src=');

  // 6. Fix asset paths if in subfolder
  if (isSubfolder) {
    // Replace assets/ with ../assets/
    content = content.replace(/(href|src|data-background)=["']assets\//gi, '$1="../assets/');
    // Replace action="msg.php" with action="../msg.php"
    content = content.replace(/action="msg\.php"/gi, 'action="../msg.php"');
    // Replace links to index.php with ../index.php
    content = content.replace(/href="index\.php"/gi, 'href="../index.php"');
  }

  // 7. Add floating button pulsing enhancement style if needed to guarantee visibility
  const customPulseStyle = `
<!-- Antigravity Floating Call Button & Pulse Enhancement -->
<style>
.btn-whatsapp-pulse {
  background: #e63839 !important;
  color: #ffffff !important;
  position: fixed !important;
  bottom: 60px !important;
  right: 20px !important;
  font-size: 26px !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: 56px !important;
  height: 56px !important;
  padding: 0 !important;
  text-decoration: none !important;
  border-radius: 50% !important;
  box-shadow: 0 4px 15px rgba(230, 56, 57, 0.5) !important;
  z-index: 99999 !important;
  cursor: pointer !important;
  animation: agyPulse 1.8s infinite !important;
  transition: transform 0.3s ease !important;
}
.btn-whatsapp-pulse:hover {
  transform: scale(1.1) !important;
  color: #ffffff !important;
}
.btn-whatsapp-pulse i {
  color: #ffffff !important;
  font-size: 24px !important;
}
@keyframes agyPulse {
  0% { box-shadow: 0 0 0 0 rgba(230, 56, 57, 0.7); }
  70% { box-shadow: 0 0 0 20px rgba(230, 56, 57, 0); }
  100% { box-shadow: 0 0 0 0 rgba(230, 56, 57, 0); }
}
.footer-oll-now {
  position: fixed !important;
  bottom: 0 !important;
  left: 0 !important;
  width: 100% !important;
  z-index: 9999 !important;
  background-color: #dc3545 !important;
  text-align: center !important;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.15) !important;
}
.footer-oll-now a.col-now-footer {
  color: #ffffff !important;
  display: block !important;
  font-weight: 700 !important;
  font-size: 20px !important;
  line-height: 48px !important;
  text-decoration: none !important;
}
</style>
`;
  if (!content.includes('agyPulse')) {
    content = content.replace('</head>', customPulseStyle + '\n</head>');
  }

  return content;
}

// Generate pages
for (const brand of brands) {
  const rawPath = path.join('./raw_source', brand.rawFile);
  if (!fs.existsSync(rawPath)) {
    console.error(`Missing raw file: ${rawPath}`);
    continue;
  }
  const rawContent = fs.readFileSync(rawPath, 'utf-8');

  // Folders to populate (e.g. lgservice, and simensservice alias)
  const targetFolders = [brand.folder];
  if (brand.aliasFolder) targetFolders.push(brand.aliasFolder);

  for (const folder of targetFolders) {
    const dir = path.join('.', folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // 1. Subfolder index.html and index.php
    const subfolderHtml = processHtml(rawContent, true);
    fs.writeFileSync(path.join(dir, 'index.html'), subfolderHtml, 'utf-8');
    fs.writeFileSync(path.join(dir, 'index.php'), subfolderHtml, 'utf-8');
    console.log(`Created: ${folder}/index.html and ${folder}/index.php`);
  }

  // 2. Root files: [folder].php and [folder].html
  const rootHtml = processHtml(rawContent, false);
  fs.writeFileSync(path.join('.', `${brand.folder}.php`), rootHtml, 'utf-8');
  fs.writeFileSync(path.join('.', `${brand.folder}.html`), rootHtml, 'utf-8');
  if (brand.aliasFolder) {
    fs.writeFileSync(path.join('.', `${brand.aliasFolder}.php`), rootHtml, 'utf-8');
    fs.writeFileSync(path.join('.', `${brand.aliasFolder}.html`), rootHtml, 'utf-8');
  }

  // 3. Original filename at root (e.g. lg-service-center.php)
  fs.writeFileSync(path.join('.', brand.rawFile), rootHtml, 'utf-8');
  console.log(`Created root files for ${brand.name}: ${brand.folder}.php, ${brand.rawFile}`);
}

console.log('All brand service pages successfully generated!');
