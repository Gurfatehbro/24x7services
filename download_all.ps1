$baseUrl = "https://customer24x7services.com/"
$headers = @(
    "-H", "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "-H", "Referer: https://customer24x7services.com/lg-service-center.php",
    "-H", "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,font/woff2,*/*;q=0.8"
)

# 1. Download original brand pages
$brandPages = @(
    "lg-service-center.php",
    "godrej-service-center.php",
    "samsung-service-center.php",
    "bosch-service-center.php",
    "ifb-service-center.php",
    "hitachi-service-center.php",
    "panasonic-service-center.php",
    "haier-service-center.php",
    "siemens-service-center.php"
)

$rawDir = "d:\Coding projects\24x7ser\raw_source"
if (!(Test-Path $rawDir)) { New-Item -ItemType Directory -Path $rawDir -Force | Out-Null }

foreach ($p in $brandPages) {
    $dest = Join-Path $rawDir $p
    $url = $baseUrl + $p
    Write-Host "Fetching $url..."
    curl.exe -sL @headers $url -o $dest
}

# 2. Download assets
$assets = @(
    "assets/css/bootstrap.min.css",
    "assets/css/animate.min.css",
    "assets/css/custom-animation.css",
    "assets/css/fontawesome.min.css",
    "assets/css/meanmenu.css",
    "assets/css/flaticon.css",
    "assets/css/venobox.min.css",
    "assets/css/slick.css",
    "assets/css/swiper-bundle.css",
    "assets/css/backToTop.css",
    "assets/css/default.css",
    "assets/css/main.css",
    "assets/js/vendor/jquery.min.js",
    "assets/js/bootstrap.bundle.min.js",
    "assets/js/isotope.pkgd.min.js",
    "assets/js/slick.min.js",
    "assets/js/swiper-bundle.js",
    "assets/js/venobox.min.js",
    "assets/js/jquery.meanmenu.min.js",
    "assets/js/imagesloaded.pkgd.min.js",
    "assets/js/ajax-form.js",
    "assets/js/wow.min.js",
    "assets/js/backToTop.js",
    "assets/js/main.js",
    "assets/img/logo/logo.png",
    "assets/img/ac.jpg",
    "assets/img/1.webp",
    "assets/img/footer/footer-bg.jpg",
    "assets/img/LG-service-center.jpg",
    "assets/img/Godrej-service-center.jpg",
    "assets/img/Samsung-service-center.jpg",
    "assets/img/Bosch-service-center.jpg",
    "assets/img/IFB-service-center.jpg",
    "assets/img/Hitachi-service-center.jpg",
    "assets/img/Panasonic-service-center.jpg",
    "assets/img/Haier-service-center.jpg",
    "assets/img/Siemens-service-center.jpg",
    "assets/fonts/flaticon4ca8.woff2",
    "assets/fonts/flaticon4ca8.woff",
    "assets/fonts/flaticon4ca8.ttf",
    "assets/fonts/fa-solid-900.woff2",
    "assets/fonts/fa-solid-900.woff",
    "assets/fonts/fa-solid-900.ttf",
    "assets/fonts/fa-regular-400.woff2",
    "assets/fonts/fa-regular-400.woff",
    "assets/fonts/fa-regular-400.ttf",
    "assets/fonts/fa-brands-400.woff2",
    "assets/fonts/fa-brands-400.woff",
    "assets/fonts/fa-brands-400.ttf",
    "assets/fonts/fa-duotone-900.woff2",
    "assets/fonts/fa-duotone-900.woff",
    "assets/fonts/fa-duotone-900.ttf"
)

foreach ($item in $assets) {
    $dest = Join-Path "d:\Coding projects\24x7ser" $item
    $dir = Split-Path $dest
    if (!(Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
    $url = $baseUrl + $item
    Write-Host "Downloading $item..."
    curl.exe -sL @headers $url -o $dest
}

Write-Host "All downloads complete!"
