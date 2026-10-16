<?php
// Customer Care Support - Enquiry Handler
$phone = '18002700275';
$name = isset($_POST['fname']) ? htmlspecialchars(trim($_POST['fname'])) : '';
$contact = isset($_POST['contact']) ? htmlspecialchars(trim($_POST['contact'])) : '';
$service = isset($_POST['services']) ? htmlspecialchars(trim($_POST['services'])) : '';
$age = isset($_POST['productold']) ? htmlspecialchars(trim($_POST['productold'])) : '';
$address = isset($_POST['address']) ? htmlspecialchars(trim($_POST['address'])) : '';
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'direct';

// Save lead to enquiries.csv
if (!empty($contact)) {
    $file = __DIR__ . '/enquiries.csv';
    $isNew = !file_exists($file);
    $fp = fopen($file, 'a');
    if ($isNew) {
        fputcsv($fp, ['Date/Time', 'Name', 'Phone', 'Service', 'Product Age', 'Address', 'Referer Page']);
    }
    fputcsv($fp, [date('Y-m-d H:i:s'), $name, $contact, $service, $age, $address, $referer]);
    fclose($fp);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Enquiry Received - 24X7 Customer Care Support</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/css/fontawesome.min.css">
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
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            max-width: 550px;
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
        .call-banner {
            background: #fff3f3;
            border: 2px dashed #e63839;
            border-radius: 8px;
            padding: 18px;
            margin: 25px 0;
        }
        .call-banner h4 {
            color: #e63839;
            font-size: 18px;
            margin-bottom: 8px;
            font-weight: 600;
        }
        .call-btn {
            background: #e63839;
            color: #ffffff !important;
            font-size: 20px;
            font-weight: 700;
            padding: 12px 28px;
            border-radius: 30px;
            display: inline-block;
            text-decoration: none;
            box-shadow: 0 4px 15px rgba(230, 56, 57, 0.4);
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
            color: #666;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="success-card">
        <div class="icon-circle">✓</div>
        <h2>Thank You<?php echo !empty($name) ? ', ' . $name : ''; ?>!</h2>
        <p>Your service request has been received successfully. Our verified technician will call you back within 15 minutes.</p>
        
        <div class="call-banner">
            <h4>Need Immediate Assistance?</h4>
            <p style="margin-bottom: 15px; font-size: 14px;">Speak directly with our 24X7 Customer Support Team</p>
            <a href="tel:<?php echo $phone; ?>" class="call-btn">
                📞 Call <?php echo $phone; ?>
            </a>
        </div>

        <a href="<?php echo htmlspecialchars($referer); ?>" class="back-link">← Return to Service Page</a>
    </div>
</body>
</html>
