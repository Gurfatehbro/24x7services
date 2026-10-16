const fs = require('fs');
const path = require('path');

const brands = [
  { id: 'lg', name: 'LG-service-center.jpg' },
  { id: 'godrej', name: 'Godrej-service-center.jpg' },
  { id: 'samsung', name: 'Samsung-service-center.jpg' },
  { id: 'bosch', name: 'Bosch-service-center.jpg' },
  { id: 'ifb', name: 'IFB-service-center.jpg' },
  { id: 'hitachi', name: 'Hitachi-service-center.jpg' },
  { id: 'panasonic', name: 'Panasonic-service-center.jpg' },
  { id: 'haier', name: 'Haier-service-center.jpg' },
  { id: 'siemens', name: 'Siemens-service-center.jpg' },
  { id: 'whirlpool', name: 'Whirlpool-service-center.jpg' }
];

console.log('Ensuring all lowercase & uppercase copies exist on disk...');
brands.forEach(b => {
  const standardName = b.name;
  const lowerName = b.name.toLowerCase();
  const standardPath = path.join('assets/img', standardName);
  const lowerPath = path.join('assets/img', lowerName);

  if (fs.existsSync(standardPath)) {
    if (!fs.existsSync(lowerPath)) {
      fs.copyFileSync(standardPath, lowerPath);
      console.log('Created lowercase alias:', lowerName);
    }
  } else if (fs.existsSync(lowerPath)) {
    fs.copyFileSync(lowerPath, standardPath);
    console.log('Created standard alias:', standardName);
  } else {
    console.log('MISSING COMPLETELY:', standardName);
  }
});

console.log('\nAudit complete.');
