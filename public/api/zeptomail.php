<?php
/**
 * Zeptomail Email API Proxy
 *
 * Proxies requests from frontend /api/zeptomail/* to Zeptomail API
 */

// Error handling
error_reporting(0);
ini_set('display_errors', 0);

// CORS headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Accept');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// Get API key from environment variable
$mailToken = getenv('ZEPTOMAIL_TOKEN') ?: (isset($_ENV['ZEPTOMAIL_TOKEN']) ? $_ENV['ZEPTOMAIL_TOKEN'] : '');

// Get the request path
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);

// Remove /api/zeptomail prefix
$path = preg_replace('/^\/api\/zeptomail/', '', $path);

// Build the Zeptomail API URL
$baseUrl = 'https://api.zeptomail.in';
$targetUrl = $baseUrl . $path;

// Add query string if present
$queryString = $_SERVER['QUERY_STRING'];
if (!empty($queryString)) {
    $targetUrl .= '?' . $queryString;
}

// Prepare headers for Zeptomail
$headers = [
    'Accept: application/json',
    'Content-Type: application/json',
];

// Add authorization header
if (!empty($mailToken)) {
    $headers[] = 'Authorization: Bearer ' . $mailToken;
}

// Get request body
$body = null;
if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
    $body = file_get_contents('php://input');
    if (empty($body)) {
        $body = json_encode($_POST);
    }
}

// Make the request to Zeptomail
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_MAXREDIRS, 3);

if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

// Log errors for debugging
if ($error) {
    error_log("Zeptomail Proxy Error: " . $error);
}

// Return the response
http_response_code($httpCode);

if (empty($response)) {
    echo json_encode([
        'success' => false,
        'error' => $error ?: 'No response from Zeptomail API',
        'httpCode' => $httpCode
    ]);
} else {
    echo $response;
}
