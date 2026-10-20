<?php
// Customer Care Support - Enquiry & WhatsApp Dispatch Handler
$phone = '18002700275';
$targetWhatsApp = '918586935159'; // Target Number: 8586935159

$name = isset($_POST['fname']) ? htmlspecialchars(trim($_POST['fname'])) : '';
$contact = isset($_POST['contact']) ? htmlspecialchars(trim($_POST['contact'])) : '';
$service = isset($_POST['services']) ? htmlspecialchars(trim($_POST['services'])) : '';
$age = isset($_POST['productold']) ? htmlspecialchars(trim($_POST['productold'])) : '';
$address = isset($_POST['address']) ? htmlspecialchars(trim($_POST['address'])) : '';
$brand = isset($_POST['brand']) && !empty($_POST['brand']) 
    ? htmlspecialchars(trim($_POST['brand'])) 
    : (isset($_POST['company']) ? htmlspecialchars(trim($_POST['company'])) : '');

$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'direct';

// Auto-detect brand from referer if not provided
if (empty($brand) || $brand === 'Select Brand / Company*' || $brand === 'Select Brand') {
    $refLower = strtolower($referer);
    if (strpos($refLower, 'whirlpool') !== false) {
        $brand = 'Whirlpool';
    } elseif (strpos($refLower, 'samsung') !== false) {
        $brand = 'Samsung';
    } elseif (strpos($refLower, 'lg') !== false) {
        $brand = 'LG';
    } elseif (strpos($refLower, 'godrej') !== false) {
        $brand = 'Godrej';
    } elseif (strpos($refLower, 'bosch') !== false) {
        $brand = 'Bosch';
    } elseif (strpos($refLower, 'ifb') !== false) {
        $brand = 'IFB';
    } elseif (strpos($refLower, 'hitachi') !== false) {
        $brand = 'Hitachi';
    } elseif (strpos($refLower, 'panasonic') !== false) {
        $brand = 'Panasonic';
    } elseif (strpos($refLower, 'haier') !== false) {
        $brand = 'Haier';
    } elseif (strpos($refLower, 'siemens') !== false || strpos($refLower, 'simens') !== false) {
        $brand = 'Siemens';
    } else {
        $brand = 'Customer Care Support';
    }
}

// Build WhatsApp notification message
$waText = "⚡ *NEW SERVICE BOOKING ENQUIRY* ⚡\n";
$waText .= "━━━━━━━━━━━━━━━━━━━━\n";
$waText .= "🏢 *Company / Brand:* " . ($brand ?: 'Customer Care Support') . "\n";
$waText .= "👤 *Customer Name:* " . ($name ?: 'Not Provided') . "\n";
$waText .= "📱 *Contact Number:* " . ($contact ?: 'Not Provided') . "\n";
$waText .= "🛠️ *Service Required:* " . ($service ?: 'General Appliance Service') . "\n";
$waText .= "⏳ *Product Age:* " . ($age ?: 'Not Specified') . "\n";
$waText .= "📍 *Address (Delhi NCR):* " . ($address ?: 'Delhi NCR') . "\n";
$waText .= "📅 *Date & Time:* " . date('d-m-Y h:i A') . "\n";
$waText .= "━━━━━━━━━━━━━━━━━━━━\n";
$waText .= "🌐 *Source Page:* " . $referer;

$whatsappUrl = 'https://api.whatsapp.com/send?phone=' . $targetWhatsApp . '&text=' . rawurlencode($waText);

// Save lead to enquiries.csv
if (!empty($contact)) {
    // Current folder enquiries.csv
    $file = __DIR__ . '/enquiries.csv';
    $isNew = !file_exists($file);
    $fp = fopen($file, 'a');
    if ($fp) {
        if ($isNew) {
            fputcsv($fp, ['Date/Time', 'Company/Brand', 'Name', 'Phone', 'Service', 'Product Age', 'Address', 'Referer Page']);
        }
        fputcsv($fp, [date('Y-m-d H:i:s'), $brand, $name, $contact, $service, $age, $address, $referer]);
        fclose($fp);
    }

    // If inside a subfolder, also append to root enquiries.csv
    if (file_exists(__DIR__ . '/../msg.php')) {
        $rootFile = dirname(__DIR__) . '/enquiries.csv';
        $rootIsNew = !file_exists($rootFile);
        $rfp = fopen($rootFile, 'a');
        if ($rfp) {
            if ($rootIsNew) {
                fputcsv($rfp, ['Date/Time', 'Company/Brand', 'Name', 'Phone', 'Service', 'Product Age', 'Address', 'Referer Page']);
            }
            fputcsv($rfp, [date('Y-m-d H:i:s'), $brand, $name, $contact, $service, $age, $address, $referer]);
            fclose($rfp);
        }
    }

    // Redirect directly to WhatsApp
    header("Location: " . $whatsappUrl);
}

$isSub = file_exists(__DIR__ . '/../msg.php');
$assetPrefix = $isSub ? '../assets/' : 'assets/';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="2;url=<?php echo htmlspecialchars($whatsappUrl); ?>">
    <title>Enquiry Received - Forwarding to WhatsApp (8586935159)</title>
    <link rel="stylesheet" href="<?php echo $assetPrefix; ?>css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $assetPrefix; ?>css/fontawesome.min.css">
    <style>
        body {
            background-color: #f4f7f6;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .success-card {
            background: #ffffff;
            border-radius: 14px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            max-width: 560px;
            width: 100%;
            padding: 40px 30px;
            text-align: center;
        }
        .icon-circle {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: #e8f5e9;
            color: #2e7d32;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            margin: 0 auto 20px;
        }
        h2 {
            color: #1a1a1a;
            font-weight: 700;
            margin-bottom: 12px;
        }
        p {
            color: #555555;
            font-size: 16px;
            line-height: 1.6;
        }
        .brand-badge {
            display: inline-block;
            background: #eef2ff;
            color: #3730a3;
            font-weight: 700;
            font-size: 14px;
            padding: 4px 14px;
            border-radius: 20px;
            margin-bottom: 15px;
            border: 1px solid #c7d2fe;
        }
        .whatsapp-banner {
            background: #f0fdf4;
            border: 2px dashed #22c55e;
            border-radius: 12px;
            padding: 22px 18px;
            margin: 22px 0;
        }
        .whatsapp-banner h4 {
            color: #166534;
            font-size: 18px;
            margin-bottom: 6px;
            font-weight: 700;
        }
        .whatsapp-btn {
            background: #25D366;
            color: #ffffff !important;
            font-size: 18px;
            font-weight: 700;
            padding: 13px 30px;
            border-radius: 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
            transition: all 0.3s ease;
            margin-top: 10px;
        }
        .whatsapp-btn:hover {
            background: #1eb956;
            transform: translateY(-2px);
            color: #ffffff;
        }
        .call-banner {
            background: #fff3f3;
            border: 1px solid #fecaca;
            border-radius: 10px;
            padding: 16px;
            margin: 20px 0;
        }
        .call-banner h4 {
            color: #e63839;
            font-size: 16px;
            margin-bottom: 6px;
            font-weight: 600;
        }
        .call-btn {
            background: #e63839;
            color: #ffffff !important;
            font-size: 18px;
            font-weight: 700;
            padding: 10px 24px;
            border-radius: 25px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 0 4px 12px rgba(230, 56, 57, 0.3);
            transition: all 0.3s ease;
        }
        .call-btn:hover {
            background: #c52728;
            transform: translateY(-2px);
            color: #ffffff;
        }
        .back-link {
            display: inline-block;
            margin-top: 15px;
            color: #64748b;
            text-decoration: underline;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="success-card">
        <div class="icon-circle">✓</div>
        <?php if (!empty($brand)): ?>
            <div class="brand-badge">🏢 <?php echo htmlspecialchars($brand); ?> Service Center</div>
        <?php endif; ?>
        <h2>Thank You<?php echo !empty($name) ? ', ' . htmlspecialchars($name) : ''; ?>!</h2>
        <p>Your service request has been registered. Forwarding your full enquiry to our customer service desk at <strong>8586935159</strong>...</p>
        
        <div class="whatsapp-banner">
            <h4>📱 Sending Enquiry to WhatsApp</h4>
            <p style="margin-bottom: 12px; font-size: 14px; color:#15803d;">If WhatsApp does not open automatically in 2 seconds, tap the button below:</p>
            <a href="<?php echo htmlspecialchars($whatsappUrl); ?>" class="whatsapp-btn">
                💬 Open WhatsApp (8586935159)
            </a>
        </div>

        <div class="call-banner">
            <h4>Need Urgent Assistance?</h4>
            <p style="margin-bottom: 12px; font-size: 13px;">Call our 24X7 Helpline directly</p>
            <a href="tel:<?php echo $phone; ?>" class="call-btn">
                📞 Call <?php echo $phone; ?>
            </a>
        </div>

        <a href="<?php echo htmlspecialchars($referer); ?>" class="back-link">← Return to Previous Page</a>
    </div>

    <script>
        // Automatic redirection to WhatsApp
        setTimeout(function() {
            window.location.href = <?php echo json_encode($whatsappUrl); ?>;
        }, 300);
    </script>
</body>
</html>
