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
rawIndex = rawIndex.replace(/<p> India<\/p\s*\n/g, '<p> India</p>\n');
rawIndex = rawIndex.replace(/<\/script><script src=/g, '<script src=');

// Update services in Nav and Footer
rawIndex = rawIndex.replace(/<li><a href="[^"]*">\s*Split AC Repair\s*<\/a><\/li>/gi, '<li><a href="#services">Refrigerator Repair</a></li>');
rawIndex = rawIndex.replace(/<li><a href="[^"]*">\s*Window AC Repair\s*<\/a><\/li>/gi, '<li><a href="#services">Microwave Repair</a></li>');
rawIndex = rawIndex.replace(/<li><a href="[^"]*">\s*Ductless AC Repair\s*<\/a><\/li>/gi, '<li><a href="#services">Washing Machine Repair</a></li>');

// Update Service Cards on Homepage
rawIndex = rawIndex.replace(
  /<h4 class="awork__text--title mb-15"><a href="">Split AC Repair<\/a><\/h4>\s*<p class="mb-15">Is your split AC not cooling[^<]*<\/p>/gi,
  '<h4 class="awork__text--title mb-15"><a href="#contact">Refrigerator Repair</a></h4><p class="mb-15">Is your refrigerator not cooling, leaking water, or making unusual noises? Our certified technicians provide fast doorstep diagnostic and genuine repair services for all single and double door refrigerators.</p>'
);
rawIndex = rawIndex.replace(
  /<h4 class="awork__text--title mb-15"><a href="">Window AC Repair<\/a><\/h4>\s*<p class="mb-15">Is your window AC not cooling properly[^<]*<\/p>/gi,
  '<h4 class="awork__text--title mb-15"><a href="#contact">Microwave Repair</a></h4><p class="mb-15">Microwave oven sparking, not heating, or touchpad unresponsive? Don\'t worry — our certified technicians deliver quick, safe, and professional microwave repair at your home or office.</p>'
);
rawIndex = rawIndex.replace(
  /<h4 class="awork__text--title mb-15"><a href="">Ductless AC Repair<\/a><\/h4>\s*<p class="mb-15">Is your ductless AC not cooling properly[^<]*<\/p>/gi,
  '<h4 class="awork__text--title mb-15"><a href="#contact">Washing Machine Repair</a></h4><p class="mb-15">Is your washing machine not spinning, leaking, or showing error codes? Our expert technicians specialize in front load, top load, and semi-automatic washing machine repairs right at your doorstep.</p>'
);

// General occurrences of service titles
rawIndex = rawIndex.replace(/Split AC Repair/g, 'Refrigerator Repair');
rawIndex = rawIndex.replace(/Window AC Repair/g, 'Microwave Repair');
rawIndex = rawIndex.replace(/Ductless AC Repair/g, 'Washing Machine Repair');

// Update About Us text
rawIndex = rawIndex.replace(
  /We provide professional air conditioner repair, installation, and maintenance services for all leading brands\.\s*Our goal is to deliver efficient cooling, energy savings, and peace of mind through expert care and top-quality service\./gi,
  'We provide professional refrigerator, microwave, washing machine, and air conditioner repair, installation, and maintenance services for all leading brands. Our goal is to deliver reliable performance, energy savings, and peace of mind through expert care and top-quality service.'
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

// Brand Grid Showcase Section right before the footer
const brandGridSection = `
<!-- Brand Service Centers Showcase Section -->
<section class="brand-centers-section pt-60 pb-60" style="background:#f8f9fa;">
    <div class="container">
        <div class="row text-center mb-40">
            <div class="col-12">
                <span style="color:#e63839;font-weight:700;text-transform:uppercase;letter-spacing:1px;font-size:14px;">Authorized Multi-Brand Support</span>
                <h2 style="font-weight:800;color:#1e293b;margin-top:5px;">Select Your Appliance Brand Service Center</h2>
                <p style="color:#64748b;max-width:650px;margin:10px auto 0;">Instant doorstep repair & service across India. Dial Toll-Free: <a href="${PHONE_TEL}" style="color:#e63839;font-weight:700;">${PHONE_RAW}</a></p>
            </div>
        </div>
        <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/lg-banner.jpg" alt="LG Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">LG Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">AC, Refrigerator, Washing Machine, Microwave Repair</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="lgservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/godrej-banner.jpg" alt="Godrej Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Godrej Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Refrigerator, AC, Washing Machine Doorstep Care</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="godrejservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/samsung-banner.jpg" alt="Samsung Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Samsung Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Fast Samsung Home Appliances Servicing & Genuine Parts</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="samsungservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/bosch-banner.jpg" alt="Bosch Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Bosch Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Washing Machine, Dryer, Dishwasher & Fridge</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="boschservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/ifb-banner.jpg" alt="IFB Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">IFB Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Front Load, Top Load, Microwave & AC Repair</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="ifbservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/hitachi-banner.jpg" alt="Hitachi Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Hitachi Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Hitachi Inverter AC, Split & Window AC Specialist</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="hitachiservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/panasonic-banner.jpg" alt="Panasonic Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Panasonic Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Smart AC, Refrigerators, Washing Machines & Ovens</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="panasonicservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/haier-banner.jpg" alt="Haier Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Haier Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Haier Triple Inverter AC & French Door Refrigerator</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="haierservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/siemens-banner.jpg" alt="Siemens Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Siemens Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Siemens Premium Washing Machine, Dryer & Kitchen Care</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="siemensservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-30">
                <div class="brand-card p-3 text-center" style="background:#fff;border-radius:14px;box-shadow:0 8px 24px rgba(0,0,0,0.06);transition:all 0.3s ease;height:100%;border:1px solid #e2e8f0;overflow:hidden;">
                    <img src="assets/img/banners/whirlpool-banner.jpg" alt="Whirlpool Service Center" style="width:100%;height:160px;object-fit:cover;border-radius:10px;margin-bottom:15px;">
                    <h4 style="font-weight:700;color:#0f172a;margin-bottom:6px;">Whirlpool Service Center</h4>
                    <p style="color:#64748b;font-size:14px;margin-bottom:15px;">Whirlpool 6th Sense Washing Machine & Refrigerator</p>
                    <div class="d-flex justify-content-center gap-2">
                        <a href="whirlpoolservice/" class="btn btn-sm btn-outline-danger" style="border-radius:20px;padding:6px 16px;font-weight:600;">Visit Page</a>
                        <a href="${PHONE_TEL}" class="btn btn-sm btn-danger" style="border-radius:20px;padding:6px 16px;background:#e63839;border-color:#e63839;font-weight:600;">Call Center</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

rawIndex = rawIndex.replace('</main>', brandGridSection + '\n</main>');

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
.brand-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
}
</style>
`;
if (!rawIndex.includes('agyPulse')) {
  rawIndex = rawIndex.replace('</head>', customPulseStyle + '\n</head>');
}

fs.writeFileSync('./index.html', rawIndex, 'utf-8');
fs.writeFileSync('./index.php', rawIndex, 'utf-8');
console.log('Created updated root index.html and index.php successfully!');
