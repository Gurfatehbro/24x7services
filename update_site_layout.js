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
    bannerImg: 'assets/img/banners/lg-banner.jpg',
    logoImg: 'assets/img/LG-service-center.jpg'
  },
  {
    id: 'godrej',
    folder: 'godrejservice',
    rawFile: 'godrej-service-center.php',
    name: 'Godrej',
    bannerImg: 'assets/img/banners/godrej-banner.jpg',
    storefrontImg: 'assets/img/banners/godrej-storefront.jpg',
    logoImg: 'assets/img/Godrej-service-center.jpg'
  },
  {
    id: 'samsung',
    folder: 'samsungservice',
    rawFile: 'samsung-service-center.php',
    name: 'Samsung',
    bannerImg: 'assets/img/banners/samsung-banner.jpg',
    storefrontImg: 'assets/img/banners/samsung-storefront.jpg',
    logoImg: 'assets/img/samsung-service-center.jpg'
  },
  {
    id: 'bosch',
    folder: 'boschservice',
    rawFile: 'bosch-service-center.php',
    name: 'Bosch',
    bannerImg: 'assets/img/banners/bosch-banner.jpg',
    logoImg: 'assets/img/Bosch-service-center.jpg'
  },
  {
    id: 'ifb',
    folder: 'ifbservice',
    rawFile: 'ifb-service-center.php',
    name: 'IFB',
    bannerImg: 'assets/img/banners/ifb-banner.jpg',
    logoImg: 'assets/img/IFB-service-center.jpg'
  },
  {
    id: 'hitachi',
    folder: 'hitachiservice',
    rawFile: 'hitachi-service-center.php',
    name: 'Hitachi',
    bannerImg: 'assets/img/banners/hitachi-banner.jpg',
    logoImg: 'assets/img/hitachi-service-center.jpg'
  },
  {
    id: 'panasonic',
    folder: 'panasonicservice',
    rawFile: 'panasonic-service-center.php',
    name: 'Panasonic',
    bannerImg: 'assets/img/banners/panasonic-banner.jpg',
    logoImg: 'assets/img/Panasonic-service-center.jpg'
  },
  {
    id: 'haier',
    folder: 'haierservice',
    rawFile: 'haier-service-center.php',
    name: 'Haier',
    bannerImg: 'assets/img/banners/haier-banner.jpg',
    logoImg: 'assets/img/Haier-service-center.jpg'
  },
  {
    id: 'siemens',
    folder: 'siemensservice',
    aliasFolder: 'simensservice',
    rawFile: 'siemens-service-center.php',
    name: 'Siemens',
    bannerImg: 'assets/img/banners/siemens-banner.jpg',
    logoImg: 'assets/img/Siemens.webp'
  },
  {
    id: 'whirlpool',
    folder: 'whirlpoolservice',
    rawFile: 'lg-service-center.php',
    name: 'Whirlpool',
    bannerImg: 'assets/img/banners/whirlpool-banner.jpg',
    storefrontImg: 'assets/img/banners/whirlpool-storefront.jpg',
    logoImg: 'assets/img/banners/whirlpool-banner.jpg'
  }
];

function generateEnquiryForm(brandName, msgAction) {
  return `
<!-- Enquiry Form Section (Relocated After Page Content) -->
<section class="enquiry-section-bottom pt-50 pb-50" id="contact" style="background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%); border-top: 1px solid #e2e8f0;">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
                <div style="background:#ffffff; border-radius:16px; padding:40px 35px; box-shadow:0 12px 35px rgba(0,0,0,0.08); border-top:5px solid #e63839;">
                    <div class="text-center mb-30">
                        <span style="color:#e63839; font-weight:700; text-transform:uppercase; font-size:13px; letter-spacing:1px; display:inline-block; margin-bottom:5px;">24X7 Doorstep Service Support</span>
                        <h2 style="color:#0f172a; font-weight:800; font-size:28px; margin-bottom:10px;">${brandName} Service Booking & Enquiry</h2>						
                        <p style="color:#64748b; font-size:15px; margin-bottom:0;">Fill the form below and our verified technician will call you back within 15 minutes.</p>
                        <p style="color:#0f172a; font-weight:600; font-size:15px; margin-top:8px;">Or Call Us Directly: <a href="${PHONE_TEL}" style="color:#e63839; font-weight:800; text-decoration:none;">📞 ${PHONE_RAW}</a></p>
                    </div>		
                    <form action="${msgAction}" method="post">		
                        <div class="row g-3">
                            <div class="col-md-6 mb-3">
                                <label for="fname" style="font-weight:600; color:#334155; margin-bottom:6px; display:block;">Your Name*</label>	
                                <input type="text" id="fname" name="fname" placeholder="Enter your full name" required style="width:100%; padding:12px 16px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px; outline:none; transition:border-color 0.2s;">	
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="contact" style="font-weight:600; color:#334155; margin-bottom:6px; display:block;">Contact Number*</label>	
                                <input type="tel" id="contact" name="contact" placeholder="10-digit mobile number" required pattern="[0-9]{10}" title="Please enter a valid 10-digit phone number" style="width:100%; padding:12px 16px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px; outline:none; transition:border-color 0.2s;">	
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="services" style="font-weight:600; color:#334155; margin-bottom:6px; display:block;">Appliance Service*</label>	
                                <select id="services" name="services" required style="width:100%; padding:12px 16px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px; outline:none; background:#fff; color:#334155;">	
                                    <option value="">Select Appliance</option>
                                    <option value="Air-Conditioner">Air Conditioner</option>
                                    <option value="Refrigerator">Refrigerator</option>	
                                    <option value="Washing-Machine">Washing Machine</option>	
                                    <option value="Microwave">Microwave Oven</option>	
                                    <option value="Dishwasher">Dishwasher</option>
                                    <option value="Water-Purifier">Water Purifier</option>
                                    <option value="Other">Other Home Appliance</option>
                                </select>
                            </div>
                            <div class="col-md-6 mb-3">
                                <label for="productold" style="font-weight:600; color:#334155; margin-bottom:6px; display:block;">Product Age*</label> 
                                <select id="productold" name="productold" required style="width:100%; padding:12px 16px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px; outline:none; background:#fff; color:#334155;"> 
                                    <option value="">Select Product Age*</option>
                                    <option value="1 Month to 18 Month">1 Month to 18 Month</option> 
                                    <option value="2 Years to 4 Years">2 Years to 4 Years</option> 
                                    <option value="4 Years to 7 Years">4 Years to 7 Years</option> 
                                    <option value="7 Years to 10 Years">7 Years to 10 Years</option> 
                                    <option value="10++ Years">10++ Years</option> 
                                </select> 
                            </div>
                            <div class="col-12 mb-3">
                                <label for="address" style="font-weight:600; color:#334155; margin-bottom:6px; display:block;">Your Address / City*</label>	
                                <input type="text" id="address" name="address" placeholder="Enter complete doorstep service address" required style="width:100%; padding:12px 16px; border:1px solid #cbd5e1; border-radius:8px; font-size:15px; outline:none; transition:border-color 0.2s;">	
                            </div>
                            <div class="col-12 text-center mt-3">
                                <button type="submit" name="Send" style="background:#e63839; color:#ffffff; border:none; padding:15px 45px; font-size:17px; font-weight:700; border-radius:30px; cursor:pointer; width:100%; max-width:340px; box-shadow:0 6px 20px rgba(230,56,57,0.35); transition:all 0.3s ease;">Submit Service Request</button>
                            </div>
                        </div>
                    </form>		
                </div>
            </div>
        </div>
    </div>
</section>
`;
}

function processPage(brand, isSubfolder = true) {
  const rawPath = path.join('./raw_source', brand.rawFile);
  let content = fs.readFileSync(rawPath, 'utf-8');

  // If brand is Whirlpool, adapt text from LG template
  if (brand.id === 'whirlpool') {
    content = content.replace(/LG/g, 'Whirlpool');
  }

  // 1. Phone number replacement
  content = content.replace(/tel:\s*011-69290873\s*/gi, PHONE_TEL);
  content = content.replace(/Tel:\s*011-69290873\s*/gi, PHONE_TEL);
  content = content.replace(/011-69290873/g, PHONE_RAW);

  // 2. Make the "Need More Help?" call-now box fully clickable
  content = content.replace(
    /<div class="call-now">\s*<i class="far fa-phone"><\/i>\s*Call Now\s*18002700275\s*<\/div>/gi,
    `<div class="call-now"><a href="${PHONE_TEL}" style="color:#ffffff;text-decoration:none;display:block;"><i class="far fa-phone"></i> Call Now ${PHONE_RAW}</a></div>`
  );

  // 3. Floating pulse button
  content = content.replace(
    /<a href="tel:18002700275\s*" class="btn-whatsapp-pulse">[\s\S]*?<i class="fa fa-phone"><\/i>[\s\S]*?<\/a>/gi,
    `<a href="${PHONE_TEL}" class="btn-whatsapp-pulse" title="Call ${PHONE_RAW}" aria-label="Call Customer Care ${PHONE_RAW}"><i class="fa fa-phone" aria-hidden="true"></i></a>`
  );

  // 4. Footer bottom call bar
  content = content.replace(
    /<a href="tel:18002700275\s*" class="col-now-footer">Call Now : 18002700275\s*<\/a>/gi,
    `<a href="${PHONE_TEL}" class="col-now-footer"><i class="fa fa-phone" style="margin-right:6px;"></i>Call Now : ${PHONE_RAW}</a>`
  );

  // 5. Clean template HTML syntax glitches
  content = content.replace(/Copyright © 2025/g, 'Copyright © 2026');
  content = content.replace(/<div class="col-lg-3 col-sm-6">-->/g, '<div class="col-lg-3 col-sm-6">');
  content = content.replace(/<p> India<\/p\s*\n/g, '<p> India</p>\n');
  content = content.replace(/<\/script><script src=/g, '<script src=');

  // 6. REMOVE THE TOP ENQUIRY FORM BLOCK (between </header> and <main>)
  const topFormRegex = /<div class="container-fluid" style="background-color:#f0f2f5; margin:10px 0;">[\s\S]*?<\/form>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/i;
  
  // Banner path depending on subfolder
  const bannerPrefix = isSubfolder ? '../' : '';
  const bannerPath = bannerPrefix + brand.bannerImg;
  const storefrontPath = brand.storefrontImg ? (bannerPrefix + brand.storefrontImg) : null;

  // New Top Banner Block to place in place of the top form
  const topBannerHtml = `
<!-- Top Brand Studio / Showroom Showcase Banner -->
<div class="brand-hero-showcase" style="background:#0b1120; width:100%; text-align:center; box-shadow:0 6px 25px rgba(0,0,0,0.12);">
    <div class="container-fluid p-0">
        <img src="${bannerPath}" alt="${brand.name} Service Center Showroom" class="img-fluid" style="width:100%; max-height:560px; object-fit:cover; display:block; margin:0 auto;">
    </div>
</div>
`;

  if (topFormRegex.test(content)) {
    content = content.replace(topFormRegex, topBannerHtml);
  } else {
    // If not matched, place right before <main>
    content = content.replace('<main>', topBannerHtml + '\n<main>');
  }

  // Also replace the generic ac.jpg if present with the storefront or sleek divider
  if (storefrontPath) {
    content = content.replace(
      /<p class="responsive1">\s*<img src="assets\/img\/ac\.jpg"[^>]*><\/p>/gi,
      `<div class="text-center my-4"><img src="${storefrontPath}" class="img-fluid" alt="${brand.name} Storefront" style="border-radius:12px; box-shadow:0 8px 30px rgba(0,0,0,0.12); max-height:480px; width:100%; object-fit:cover;"></div>`
    );
  }

  // 7. INSERT ENQUIRY FORM AT THE BOTTOM OF THE PAGE (Right before </main>)
  const msgAction = isSubfolder ? '../msg.php' : 'msg.php';
  const bottomFormHtml = generateEnquiryForm(brand.name, msgAction);
  content = content.replace('</main>', bottomFormHtml + '\n</main>');

  // 8. Fix asset paths if subfolder
  if (isSubfolder) {
    content = content.replace(/(href|src|data-background)=["']assets\//gi, '$1="../assets/');
    content = content.replace(/action="msg\.php"/gi, 'action="../msg.php"');
    content = content.replace(/href="index\.php"/gi, 'href="../index.php"');
  }

  // 9. Floating button pulse CSS
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
.brand-hero-showcase img {
  border-bottom: 3px solid #e63839;
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
    const subfolderHtml = processPage(brand, true);
    fs.writeFileSync(path.join(dir, 'index.html'), subfolderHtml, 'utf-8');
    fs.writeFileSync(path.join(dir, 'index.php'), subfolderHtml, 'utf-8');
    console.log(`Generated: ${folder}/index.html and ${folder}/index.php`);
  }

  // Root files: [folder].php and [folder].html
  const rootHtml = processPage(brand, false);
  fs.writeFileSync(path.join('.', `${brand.folder}.php`), rootHtml, 'utf-8');
  fs.writeFileSync(path.join('.', `${brand.folder}.html`), rootHtml, 'utf-8');
  if (brand.aliasFolder) {
    fs.writeFileSync(path.join('.', `${brand.aliasFolder}.php`), rootHtml, 'utf-8');
    fs.writeFileSync(path.join('.', `${brand.aliasFolder}.html`), rootHtml, 'utf-8');
  }

  // Original root PHP name (e.g. lg-service-center.php)
  if (brand.rawFile) {
    fs.writeFileSync(path.join('.', brand.rawFile), rootHtml, 'utf-8');
  }
}

console.log('All brand pages updated with top banner & bottom enquiry form!');
