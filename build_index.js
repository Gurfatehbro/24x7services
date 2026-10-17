const fs = require('fs');
const path = require('path');

const PHONE_RAW = '18002700275';
const PHONE_TEL = 'tel:18002700275';

let rawIndex = fs.readFileSync('./raw_source/index.php', 'utf-8');

// Replace phones
rawIndex = rawIndex.replace(/tel:\s*011-69290873\s*/gi, PHONE_TEL);
rawIndex = rawIndex.replace(/Tel:\s*011-69290873\s*/gi, PHONE_TEL);
rawIndex = rawIndex.replace(/011-69290873/g, PHONE_RAW);

// Floating call button
rawIndex = rawIndex.replace(
  /<a href="tel:18002700275\s*" class="btn-whatsapp-pulse">[\s\S]*?<i class="fa fa-phone"><\/i>[\s\S]*?<\/a>/gi,
  `<a href="${PHONE_TEL}" class="btn-whatsapp-pulse" title="Call ${PHONE_RAW}" aria-label="Call Customer Care ${PHONE_RAW}"><i class="fa fa-phone" aria-hidden="true"></i></a>`
);

// Footer call bar
rawIndex = rawIndex.replace(
  /<a href="tel:18002700275\s*" class="col-now-footer">Call Now : 18002700275\s*<\/a>/gi,
  `<a href="${PHONE_TEL}" class="col-now-footer"><i class="fa fa-phone" style="margin-right:6px;"></i>Call Now : ${PHONE_RAW}</a>`
);

rawIndex = rawIndex.replace(/Copyright © 2025/g, 'Copyright © 2026');
rawIndex = rawIndex.replace(/<div class="col-lg-3 col-sm-6">-->/g, '<div class="col-lg-3 col-sm-6">');
rawIndex = rawIndex.replace(/<\/script><script src=/g, '<script src=');

// Location - Delhi in Header Widget
const locationHeaderWidget = `
                            <div class="header__widget text-start">
                                <div class="header__widget--icon header__widget--icon__phone">
                                    <i class="flaticon-pin"></i>
                                </div>
                                <div class="header__widget--text">
                                    <span>Service Location</span>
                                    <h4>Delhi, India</h4>
                                </div>
                            </div>`;
rawIndex = rawIndex.replace(/<div class="header__widget text-start">\s*<\/div>/g, locationHeaderWidget);

// Location - Delhi in Footer Address Widget
rawIndex = rawIndex.replace(/<h4 class="footer__widget--title">Address\s*:\s*<\/h4>\s*<p>\s*India<\/p>?/gi, '<h4 class="footer__widget--title">Address : </h4>\n                                <p>Delhi, India</p>');
rawIndex = rawIndex.replace(/<p>\s*India<\/p\s*[\n>]/gi, '<p>Delhi, India</p>\n');
rawIndex = rawIndex.replace(/<p>\s*India<\/p>/gi, '<p>Delhi, India</p>');

// Slider feature: Delhi, India
rawIndex = rawIndex.replace(/<li><i class="flaticon-pin"><\/i>Pan India<\/li>/gi, '<li><i class="flaticon-pin"></i>Delhi, India</li>');

// Update services in Nav and Footer
rawIndex = rawIndex.replace(/<li><a href="[^"]*">\s*Split AC Repair\s*<\/a><\/li>/gi, '<li><a href="#services">Refrigerator Repair</a></li>');
rawIndex = rawIndex.replace(/<li><a href="[^"]*">\s*Window AC Repair\s*<\/a><\/li>/gi, '<li><a href="#services">Microwave Repair</a></li>');
rawIndex = rawIndex.replace(/<li><a href="[^"]*">\s*Ductless AC Repair\s*<\/a><\/li>/gi, '<li><a href="#services">Washing Machine Repair</a></li>');

// Update Service Cards on Homepage
rawIndex = rawIndex.replace(
  /<h4 class="awork__text--title mb-15"><a href="">Split AC Repair<\/a><\/h4>\s*<p class="mb-15">Is your split AC not cooling[^<]*<\/p>/gi,
  '<h4 class="awork__text--title mb-15"><a href="#contact">Refrigerator Repair</a></h4><p class="mb-15">Is your refrigerator not cooling, leaking water, or making unusual noises? Our certified technicians provide fast doorstep diagnostic and genuine repair services for all single and double door refrigerators across Delhi NCR.</p>'
);
rawIndex = rawIndex.replace(
  /<h4 class="awork__text--title mb-15"><a href="">Window AC Repair<\/a><\/h4>\s*<p class="mb-15">Is your window AC not cooling properly[^<]*<\/p>/gi,
  '<h4 class="awork__text--title mb-15"><a href="#contact">Microwave Repair</a></h4><p class="mb-15">Microwave oven sparking, not heating, or touchpad unresponsive? Don\'t worry — our certified technicians deliver quick, safe, and professional microwave repair at your home or office across Delhi NCR.</p>'
);
rawIndex = rawIndex.replace(
  /<h4 class="awork__text--title mb-15"><a href="">Ductless AC Repair<\/a><\/h4>\s*<p class="mb-15">Is your ductless AC not cooling properly[^<]*<\/p>/gi,
  '<h4 class="awork__text--title mb-15"><a href="#contact">Washing Machine Repair</a></h4><p class="mb-15">Is your washing machine not spinning, leaking, or showing error codes? Our expert technicians specialize in front load, top load, and semi-automatic washing machine repairs right at your doorstep across Delhi NCR.</p>'
);

// General occurrences of service titles
rawIndex = rawIndex.replace(/Split AC Repair/g, 'Refrigerator Repair');
rawIndex = rawIndex.replace(/Window AC Repair/g, 'Microwave Repair');
rawIndex = rawIndex.replace(/Ductless AC Repair/g, 'Washing Machine Repair');

// Update About Us text
rawIndex = rawIndex.replace(
  /We provide professional air conditioner repair, installation, and maintenance services for all leading brands\.\s*Our goal is to deliver efficient cooling, energy savings, and peace of mind through expert care and top-quality service\./gi,
  'We provide professional refrigerator, microwave, washing machine, and air conditioner repair, installation, and maintenance services across Delhi NCR for all leading brands. Our goal is to deliver reliable performance, energy savings, and peace of mind through expert care and top-quality service.'
);

// Enhance navigation menu to include Brand Service Centers dropdown
const brandMenuHtml = `
<li class="menu-item-has-children"><a href="#">BRAND CENTERS</a>
    <ul class="sub-menu">
        <li><a href="lgservice/">LG Service Center</a></li>
        <li><a href="godrejservice/">Godrej Service Center</a></li>
        <li><a href="samsungservice/">Samsung Service Center</a></li>
        <li><a href="boschservice/">Bosch Service Center</a></li>
        <li><a href="ifbservice/">IFB Service Center</a></li>
        <li><a href="hitachiservice/">Hitachi Service Center</a></li>
        <li><a href="panasonicservice/">Panasonic Service Center</a></li>
        <li><a href="haierservice/">Haier Service Center</a></li>
        <li><a href="siemensservice/">Siemens Service Center</a></li>
        <li><a href="whirlpoolservice/">Whirlpool Service Center</a></li>
    </ul>
</li>
`;

rawIndex = rawIndex.replace('<li class="menu-item-has-children"><a href="">SERVICES</a>', brandMenuHtml + '\n<li class="menu-item-has-children"><a href="#">SERVICES</a>');

// Add pulse styling
const customPulseStyle = `
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

/* Squared image edges for mobile and desktop */
img, .img-fluid, .awork__img img, .responsive img, .responsive1 img {
  border-radius: 0px !important;
  -webkit-border-radius: 0px !important;
  -moz-border-radius: 0px !important;
}
</style>
`;
if (!rawIndex.includes('agyPulse')) {
  rawIndex = rawIndex.replace('</head>', customPulseStyle + '\n</head>');
}

fs.writeFileSync('./index.html', rawIndex, 'utf-8');
fs.writeFileSync('./index.php', rawIndex, 'utf-8');
console.log('Created updated root index.html and index.php successfully!');
