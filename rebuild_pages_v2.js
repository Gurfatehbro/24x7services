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
    bannerImg: 'assets/img/banners/lg-banner.jpg'
  },
  {
    id: 'godrej',
    folder: 'godrejservice',
    rawFile: 'godrej-service-center.php',
    name: 'Godrej',
    bannerImg: 'assets/img/banners/godrej-banner.jpg'
  },
  {
    id: 'samsung',
    folder: 'samsungservice',
    rawFile: 'samsung-service-center.php',
    name: 'Samsung',
    bannerImg: 'assets/img/banners/samsung-banner.jpg'
  },
  {
    id: 'bosch',
    folder: 'boschservice',
    rawFile: 'bosch-service-center.php',
    name: 'Bosch',
    bannerImg: 'assets/img/banners/bosch-banner.jpg'
  },
  {
    id: 'ifb',
    folder: 'ifbservice',
    rawFile: 'ifb-service-center.php',
    name: 'IFB',
    bannerImg: 'assets/img/banners/ifb-banner.jpg'
  },
  {
    id: 'hitachi',
    folder: 'hitachiservice',
    rawFile: 'hitachi-service-center.php',
    name: 'Hitachi',
    bannerImg: 'assets/img/banners/hitachi-banner.jpg'
  },
  {
    id: 'panasonic',
    folder: 'panasonicservice',
    rawFile: 'panasonic-service-center.php',
    name: 'Panasonic',
    bannerImg: 'assets/img/banners/panasonic-banner.jpg'
  },
  {
    id: 'haier',
    folder: 'haierservice',
    rawFile: 'haier-service-center.php',
    name: 'Haier',
    bannerImg: 'assets/img/banners/haier-banner.jpg'
  },
  {
    id: 'siemens',
    folder: 'siemensservice',
    aliasFolder: 'simensservice',
    rawFile: 'siemens-service-center.php',
    name: 'Siemens',
    bannerImg: 'assets/img/banners/siemens-banner.jpg'
  },
  {
    id: 'whirlpool',
    folder: 'whirlpoolservice',
    rawFile: 'lg-service-center.php',
    name: 'Whirlpool',
    bannerImg: 'assets/img/banners/whirlpool-banner.jpg'
  }
];

function generateEnquiryForm(brandName, msgAction) {
  return `
<!-- Enquiry Form Section (Positioned directly after Intro & Call Us Now) -->
<div class="container-fluid enquiry-section-container" id="contact" style="background:#f8fafc; margin:25px 0; padding:25px 0; border-top:1px solid #e2e8f0; border-bottom:1px solid #e2e8f0;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
                <div style="background:#ffffff; border-radius:14px; padding:32px 28px; box-shadow:0 8px 30px rgba(0,0,0,0.06); border-top:4px solid #e63839;">
                    <div class="text-center mb-25">
                        <h2 style="color:#e63839; font-weight:800; font-size:26px; margin-bottom:6px;">Enquiry & Doorstep Service Booking</h2>						
                        <p style="color:#64748b; font-size:15px; margin-bottom:0;">Doorstep Service in Delhi NCR. Fill the form below — we will get back to you within 15 minutes.</p>
                        <p style="color:#0f172a; font-weight:600; font-size:14px; margin-top:6px;">Or Call Now For Instant Assistance: <a href="${PHONE_TEL}" style="color:#e63839; font-weight:800;">📞 ${PHONE_RAW}</a></p>
                    </div>		
                    <form action="${msgAction}" method="post">		
                        <div class="row g-3">
                            <div class="col-md-6 col-12 mb-3">
                                <label for="fname" style="font-weight:600; color:#334155; margin-bottom:5px; display:block;">Your Name*</label>	
                                <input type="text" id="fname" name="fname" placeholder="Your name.." required style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px;">	
                            </div>
                            <div class="col-md-6 col-12 mb-3">
                                <label for="contact" style="font-weight:600; color:#334155; margin-bottom:5px; display:block;">Contact Number*</label>	
                                <input type="tel" id="contact" name="contact" placeholder="Contact Number" required style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px;">	
                            </div>
                            <div class="col-md-6 col-12 mb-3">
                                <label for="services" style="font-weight:600; color:#334155; margin-bottom:5px; display:block;">Services*</label>	
                                <select id="services" name="services" required style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px; background:#fff; color:#334155;">	
                                    <option value="">Select Appliances</option>
                                    <option value="Air-Conditioner">Air Conditioner</option>
                                    <option value="Refrigerator">Refrigerator</option>	
                                    <option value="Washing-Machine">Washing Machine</option>	
                                    <option value="Microwave">Microwave</option>	
                                    <option value="Dishwasher">Dishwasher</option>
                                    <option value="Other">Other Appliances</option>
                                </select>
                            </div>
                            <div class="col-md-6 col-12 mb-3">
                                <label for="productold" style="font-weight:600; color:#334155; margin-bottom:5px; display:block;">Select Product Old*</label> 
                                <select id="productold" name="productold" required style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px; background:#fff; color:#334155;"> 
                                    <option value="">Select Product Old*</option>
                                    <option value="1 Month to 18 Month">1 Month to 18 Month</option> 
                                    <option value="2 Years to 4 Years">2 Years to 4 Years</option> 
                                    <option value="4 Years to 7 Years">4 Years to 7 Years</option> 
                                    <option value="7 Years to 10 Years">7 Years to 10 Years</option> 
                                    <option value="10++ Years">10++ Years</option> 
                                </select> 
                            </div>
                            <div class="col-12 mb-3">
                                <label for="address" style="font-weight:600; color:#334155; margin-bottom:5px; display:block;">Your Address (Delhi NCR)*</label>	
                                <input type="text" id="address" name="address" placeholder="Your Address in Delhi NCR.." required style="width:100%; padding:11px 14px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px;">	
                            </div>
                            <div class="col-12 text-center mt-2">
                                <input type="submit" name="Send" value="Submit" style="background:#e63839; color:#fff; border:none; padding:13px 45px; font-size:17px; font-weight:700; border-radius:28px; cursor:pointer; width:100%; max-width:280px; box-shadow:0 4px 15px rgba(230,56,57,0.3); transition:all 0.3s ease;">	
                            </div>
                        </div>
                    </form>		
                </div>
            </div>
        </div>
    </div>
</div>
`;
}

function processBrandPage(brand, isSubfolder = true) {
  const rawPath = path.join('./raw_source', brand.rawFile);
  let content = fs.readFileSync(rawPath, 'utf-8');

  // Whirlpool text adaptation if Whirlpool
  if (brand.id === 'whirlpool') {
    content = content.replace(/LG/g, 'Whirlpool');
  }

  // Exact canonical casing for all brand logo badges so they load on all web servers (Linux/cPanel/GitHub)
  content = content.replace(/assets\/img\/samsung-service-center\.jpg/gi, 'assets/img/Samsung-service-center.jpg');
  content = content.replace(/assets\/img\/hitachi-service-center\.jpg/gi, 'assets/img/Hitachi-service-center.jpg');
  content = content.replace(/assets\/img\/siemens\.webp/gi, 'assets/img/Siemens-service-center.jpg');
  content = content.replace(/assets\/img\/siemens-service-center\.jpg/gi, 'assets/img/Siemens-service-center.jpg');
  content = content.replace(/assets\/img\/whirlpool-service-center\.jpg/gi, 'assets/img/Whirlpool-service-center.jpg');
  content = content.replace(/assets\/img\/lg-service-center\.jpg/gi, 'assets/img/LG-service-center.jpg');
  content = content.replace(/assets\/img\/godrej-service-center\.jpg/gi, 'assets/img/Godrej-service-center.jpg');
  content = content.replace(/assets\/img\/bosch-service-center\.jpg/gi, 'assets/img/Bosch-service-center.jpg');
  content = content.replace(/assets\/img\/ifb-service-center\.jpg/gi, 'assets/img/IFB-service-center.jpg');
  content = content.replace(/assets\/img\/panasonic-service-center\.jpg/gi, 'assets/img/Panasonic-service-center.jpg');
  content = content.replace(/assets\/img\/haier-service-center\.jpg/gi, 'assets/img/Haier-service-center.jpg');

  // 1. Phone number replacements
  content = content.replace(/tel:\s*011-69290873\s*/gi, PHONE_TEL);
  content = content.replace(/Tel:\s*011-69290873\s*/gi, PHONE_TEL);
  content = content.replace(/011-69290873/g, PHONE_RAW);

  // 2. Clickable "Need More Help?"
  content = content.replace(
    /<div class="call-now">\s*<i class="far fa-phone"><\/i>\s*Call Now\s*18002700275\s*<\/div>/gi,
    `<div class="call-now"><a href="${PHONE_TEL}" style="color:#ffffff;text-decoration:none;display:block;"><i class="far fa-phone"></i> Call Now ${PHONE_RAW}</a></div>`
  );

  // 3. Floating pulse button
  content = content.replace(
    /<a href="tel:18002700275\s*" class="btn-whatsapp-pulse">[\s\S]*?<i class="fa fa-phone"><\/i>[\s\S]*?<\/a>/gi,
    `<a href="${PHONE_TEL}" class="btn-whatsapp-pulse" title="Call ${PHONE_RAW}" aria-label="Call Customer Care ${PHONE_RAW}"><i class="fa fa-phone" aria-hidden="true"></i></a>`
  );

  // 4. Footer call bar
  content = content.replace(
    /<a href="tel:18002700275\s*" class="col-now-footer">Call Now : 18002700275\s*<\/a>/gi,
    `<a href="${PHONE_TEL}" class="col-now-footer"><i class="fa fa-phone" style="margin-right:6px;"></i>Call Now : ${PHONE_RAW}</a>`
  );

  // 5. Clean syntax glitches from template
  content = content.replace(/Copyright © 2025/g, 'Copyright © 2026');
  content = content.replace(/<div class="col-lg-3 col-sm-6">-->/g, '<div class="col-lg-3 col-sm-6">');
  content = content.replace(/<\/script><script src=/g, '<script src=');

  // 5a. Location - Delhi in Header Widget
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
  content = content.replace(/<div class="header__widget text-start">\s*<\/div>/g, locationHeaderWidget);

  // 5b. Location - Delhi in Footer Address Widget
  content = content.replace(/<h4 class="footer__widget--title">Address\s*:\s*<\/h4>\s*<p>\s*India<\/p>?/gi, '<h4 class="footer__widget--title">Address : </h4>\n                                <p>Delhi, India</p>');
  content = content.replace(/<p>\s*India<\/p\s*[\n>]/gi, '<p>Delhi, India</p>\n');
  content = content.replace(/<p>\s*India<\/p>/gi, '<p>Delhi, India</p>');

  // 5c. Standardize Fast Reliable Home Appliances Repair Service Centre Delhi
  content = content.replace(/Fast Reliable Home Appliances Repair Service Centre(?:\s*Delhi)?/gi, 'Fast Reliable Home Appliances Repair Service Centre Delhi');

  // 5d. Doorstep service in Delhi in welcome text
  content = content.replace(/doorstep service — saving your valuable time/gi, 'doorstep service in Delhi — saving your valuable time');

  // 5e. Update Service names in Nav & Footer: Refrigerator, Microwave, Washing Machine
  content = content.replace(/<li><a href="[^"]*">\s*Split AC Repair\s*<\/a><\/li>/gi, '<li><a href="#contact">Refrigerator Repair</a></li>');
  content = content.replace(/<li><a href="[^"]*">\s*Window AC Repair\s*<\/a><\/li>/gi, '<li><a href="#contact">Microwave Repair</a></li>');
  content = content.replace(/<li><a href="[^"]*">\s*Ductless AC Repair\s*<\/a><\/li>/gi, '<li><a href="#contact">Washing Machine Repair</a></li>');

  // Also replace any general occurrences
  content = content.replace(/Split AC Repair/g, 'Refrigerator Repair');
  content = content.replace(/Window AC Repair/g, 'Microwave Repair');
  content = content.replace(/Ductless AC Repair/g, 'Washing Machine Repair');

  // 5f. Update About Us text to include Refrigerator, Microwave, Washing Machine
  content = content.replace(
    /We provide professional air conditioner repair, installation, and maintenance services for all leading brands\.\s*Our goal is to deliver efficient cooling, energy savings, and peace of mind through expert care and top-quality service\./gi,
    'We provide professional refrigerator, microwave, washing machine, and air conditioner repair, installation, and maintenance services across Delhi NCR for all leading brands. Our goal is to deliver reliable performance, energy savings, and peace of mind through expert care and top-quality service.'
  );

  // 6. REMOVE ANY TOP ENQUIRY FORM completely (between header and main)
  const topFormRegex = /<div class="container-fluid" style="background-color:#f0f2f5; margin:10px 0;">[\s\S]*?<\/form>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i;
  content = content.replace(topFormRegex, '');

  // 7. REMOVE the old generic top image container (<img src="assets/img/ac.jpg"> or banner.jpeg)
  // so the user screenshot is exact: header goes directly into the brand title!
  const oldTopImgBlockRegex = /<div class="container">\s*<div class="row contact-person">[\s\S]*?<\/div>\s*<\/div>\s*<!-- page title area end here -->/i;
  content = content.replace(oldTopImgBlockRegex, '<!-- page title area end here -->');

  // Also remove standalone <img src="assets/img/banner.jpeg" class="img-fluid" alt="img">
  content = content.replace(/<img src="assets\/img\/banner\.jpeg"[^>]*>/gi, '');

  // 8. Single image from Google Drive folder placed AT THE TOP
  const bannerPrefix = isSubfolder ? '../' : '';
  const singleImageSrc = bannerPrefix + brand.bannerImg;

  const topSingleImageBlock = `
<!-- Top Brand Showroom Showcase Banner from Google Drive -->
<div class="brand-top-banner-section" style="width:100%; margin:15px 0 20px 0;">
    <div class="container text-center p-0">
        <img src="${singleImageSrc}" class="img-fluid" alt="${brand.name} Service Center Showroom" style="border-radius:0px !important; box-shadow:0 6px 20px rgba(0,0,0,0.08); width:100%; max-height:550px; object-fit:cover; display:block; margin:0 auto;">
    </div>
</div>
`;

  // Insert the Single Image right at the top under </header>
  content = content.replace('</header>', '</header>\n' + topSingleImageBlock);

  // Remove excessive <br/> tags inside text-center that create huge gaps on mobile
  content = content.replace(/(<div class="text-center">[\s\S]*?<\/div>)/i, (match) => {
    return match.replace(/<br\s*\/?>/gi, '');
  });

  // 9. Position the ENQUIRY FORM "just after this" (right after the intro paragraph):
  // "Welcome to the [Brand] Customer Service Center, your trusted destination... ensures complete satisfaction."
  const msgAction = isSubfolder ? '../msg.php' : 'msg.php';
  const enquiryFormHtml = generateEnquiryForm(brand.name, msgAction);

  // Service Doorstep Repair Showcase Image placed immediately under the Enquiry Form
  const doorstepImgSrc = bannerPrefix + 'assets/img/service-doorstep-repair.jpg';
  const doorstepRepairImgBlock = `
<!-- Doorstep Service Repair Image (Generated) -->
<div class="text-center my-3 service-doorstep-image-wrap">
    <div class="container text-center p-0">
        <img src="${doorstepImgSrc}" class="img-fluid" alt="${brand.name} Doorstep Appliance Repair Service" style="border-radius:0px !important; box-shadow:0 6px 20px rgba(0,0,0,0.08); width:100%; max-height:520px; object-fit:cover; display:block; margin:0 auto;">
    </div>
</div>
`;

  // Match the welcome paragraph or center repair text:
  // e.g. <div class="center">\s*<p>Fast Reliable Home Appliances Repair Service Centre.*?<\/div>
  const introTargetRegex = /(<div class="center">\s*<p>Fast Reliable Home Appliances Repair Service Centre.*?<\/p>\s*<\/div>)/i;

  if (introTargetRegex.test(content)) {
    // Insert Enquiry Form + Generated Service Image right after intro!
    content = content.replace(
      introTargetRegex,
      `$1\n${enquiryFormHtml}\n${doorstepRepairImgBlock}`
    );
  } else {
    // Fallback: place right after Call Us Now
    const callNowFallbackRegex = /(<p><a href="">.*?Repair Service Centre.*?<\/a>, Customer Care, Helpline:.*?<\/p><br\/>\s*<\/div>)/i;
    if (callNowFallbackRegex.test(content)) {
      content = content.replace(
        callNowFallbackRegex,
        `$1\n${enquiryFormHtml}\n${doorstepRepairImgBlock}`
      );
    }
  }

  // 10. REMOVE the old second image 1.webp so there is strictly 1 Drive image on the page!
  content = content.replace(/<p class="responsive1">\s*<img src="assets\/img\/1\.webp"[^>]*><\/p>/gi, '');

  // 11. Fix asset paths if in subfolder
  if (isSubfolder) {
    content = content.replace(/(href|src|data-background)=["']assets\//gi, '$1="../assets/');
    content = content.replace(/action="msg\.php"/gi, 'action="../msg.php"');
    content = content.replace(/href="index\.php"/gi, 'href="../index.php"');
  }

  // 12. Floating call pulse button styles
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

/* Squared image edges for mobile and desktop */
img, .img-fluid, .brand-top-banner-section img, .service-doorstep-image-wrap img, .brand-card img, .responsive img, .responsive1 img, .awork__img img {
  border-radius: 0px !important;
  -webkit-border-radius: 0px !important;
  -moz-border-radius: 0px !important;
}

/* Tight cohesive spacing between logos, headlines, and content */
.blog-details-area {
  padding-top: 25px !important;
  padding-bottom: 40px !important;
}
.brand-top-banner-section {
  margin: 10px 0 15px 0 !important;
}
.responsive {
  margin-bottom: 8px !important;
}
.responsive img {
  border: 1px solid #e2e8f0 !important;
  max-height: 75px !important;
  width: auto !important;
  display: inline-block !important;
}
h1.brands {
  margin-top: 6px !important;
  margin-bottom: 4px !important;
  font-size: 26px !important;
  line-height: 1.25 !important;
}
.text-center p {
  margin-bottom: 4px !important;
  line-height: 1.35 !important;
}
.text-center h3.bold {
  margin-top: 8px !important;
  margin-bottom: 4px !important;
  font-size: 22px !important;
}
.p-left {
  margin-top: 10px !important;
  margin-bottom: 8px !important;
  line-height: 1.5 !important;
}
.center {
  margin: 6px 0 !important;
}

@media (max-width: 767px) {
  .blog-details-area {
    padding-top: 12px !important;
    padding-bottom: 25px !important;
  }
  .brand-top-banner-section {
    margin: 4px 0 10px 0 !important;
  }
  .brand-top-banner-section .container,
  .service-doorstep-image-wrap .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
    max-width: 100% !important;
  }
  .brand-top-banner-section img,
  .service-doorstep-image-wrap img {
    border-radius: 0px !important;
    width: 100% !important;
  }
  h1.brands {
    font-size: 19px !important;
    margin: 4px 0 3px 0 !important;
    line-height: 1.22 !important;
  }
  .text-center p[style*="font-size:20px"] {
    font-size: 15px !important;
    margin: 2px 0 !important;
  }
  .text-center h3.bold {
    font-size: 18px !important;
    margin: 4px 0 3px 0 !important;
  }
  .text-center p {
    font-size: 13.5px !important;
    margin-bottom: 3px !important;
  }
  .responsive {
    margin-bottom: 5px !important;
  }
  .responsive img {
    max-height: 55px !important;
  }
  .p-left {
    font-size: 13.5px !important;
    line-height: 1.45 !important;
    margin: 6px 0 !important;
  }
  .center p {
    font-size: 13px !important;
    margin: 4px 0 !important;
  }
  .enquiry-section-container {
    margin: 10px 0 !important;
    padding: 10px 0 !important;
  }
  .enquiry-section-container .row > div {
    padding-left: 8px !important;
    padding-right: 8px !important;
  }
  .enquiry-section-container div[style*="padding:32px"] {
    padding: 18px 14px !important;
  }
  img {
    border-radius: 0px !important;
  }
}
</style>
`;
  if (!content.includes('agyPulse')) {
    content = content.replace('</head>', customPulseStyle + '\n</head>');
  }

  return content;
}

// Generate all pages
for (const brand of brands) {
  const targetFolders = [brand.folder];
  if (brand.aliasFolder) targetFolders.push(brand.aliasFolder);

  for (const folder of targetFolders) {
    const dir = path.join('.', folder);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Subfolder index.html and index.php
    const subfolderHtml = processBrandPage(brand, true);
    fs.writeFileSync(path.join(dir, 'index.html'), subfolderHtml, 'utf-8');
    fs.writeFileSync(path.join(dir, 'index.php'), subfolderHtml, 'utf-8');
    console.log(`Updated: ${folder}/index.html and ${folder}/index.php`);
  }

  // Root files: [folder].php and [folder].html
  const rootHtml = processBrandPage(brand, false);
  fs.writeFileSync(path.join('.', `${brand.folder}.php`), rootHtml, 'utf-8');
  fs.writeFileSync(path.join('.', `${brand.folder}.html`), rootHtml, 'utf-8');
  if (brand.aliasFolder) {
    fs.writeFileSync(path.join('.', `${brand.aliasFolder}.php`), rootHtml, 'utf-8');
    fs.writeFileSync(path.join('.', `${brand.aliasFolder}.html`), rootHtml, 'utf-8');
  }

  // Root original name (e.g. lg-service-center.php)
  if (brand.rawFile) {
    fs.writeFileSync(path.join('.', brand.rawFile), rootHtml, 'utf-8');
  }
}

console.log('All brand pages updated: form placed just after intro + exactly 1 Drive image per page!');
