const fs = require('fs');
const path = require('path');

const folders = [
  'lgservice',
  'godrejservice',
  'samsungservice',
  'boschservice',
  'ifbservice',
  'hitachiservice',
  'panasonicservice',
  'haierservice',
  'siemensservice',
  'simensservice'
];

let issues = 0;

for (const folder of folders) {
  const filePath = path.join(folder, 'index.html');
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: ${filePath}`);
    issues++;
    continue;
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Check for any leftover old phone
  if (content.includes('011-69290873')) {
    console.error(`Old phone found in ${filePath}!`);
    issues++;
  }
  
  // Count 18002700275 occurrences
  const count = (content.match(/18002700275/g) || []).length;
  
  // Check floating button
  const hasFloating = content.includes('btn-whatsapp-pulse') && content.includes('tel:18002700275');
  
  // Check footer bar
  const hasFooterBar = content.includes('footer-oll-now') && content.includes('Call Now : 18002700275');
  
  console.log(`${folder}/index.html: phoneCount=${count}, floatingBtn=${hasFloating}, footerBar=${hasFooterBar}`);
}

if (issues === 0) {
  console.log('\nAll checks passed! Zero issues found.');
} else {
  console.error(`\nFound ${issues} issues!`);
}
