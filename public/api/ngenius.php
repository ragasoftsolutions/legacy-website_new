<?php
/**
 * N-Genius Payment Gateway Proxy
 *
 * Proxies requests from frontend /api/ngenius/* to N-Genius API
 * Keeps API key secure on server side
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

// Get API key from environment variable (set this in your server config or .htaccess)
$apiKey = getenv('NGENIUS_API_KEY') ?: (isset($_ENV['NGENIUS_API_KEY']) ? $_ENV['NGENIUS_API_KEY'] : '');

// Get outlet ref from environment
$outletRef = getenv('NGENIUS_OUTLET_REF') ?: (isset($_ENV['VITE_NGENIUS_OUTLET_REF']) ? $_ENV['VITE_NGENIUS_OUTLET_REF'] : '');

// Get the request path
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);

// Remove /api/ngenius prefix
$path = preg_replace('/^\/api\/ngenius/', '', $path);

// Build the N-Genius API URL
$baseUrl = 'https://api-gateway.ngenius-payments.com';
$targetUrl = $baseUrl . $path;

// Add query string if present
$queryString = $_SERVER['QUERY_STRING'];
if (!empty($queryString)) {
    $targetUrl .= '?' . $queryString;
}

// Prepare headers for N-Genius
$headers = [
    'Accept: application/vnd.ni-payment.v2+json',
];

// Add authorization header
if (!empty($apiKey)) {
    $headers[] = 'Authorization: Basic ' . $apiKey;
}

// Determine content type based on request
$contentType = $_SERVER['CONTENT_TYPE'] ?? 'application/json';
$headers[] = 'Content-Type: ' . $contentType;

// Get request body for POST/PUT requests
$body = null;
if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
    $body = file_get_contents('php://input');
    if (empty($body)) {
        $body = json_encode($_POST);
    }
}

// Make the request to N-Genius
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

// Log errors for debugging (disable in production)
if ($error) {
    error_log("N-Genius Proxy Error: " . $error);
}

// Return the response
http_response_code($httpCode);

if (empty($response)) {
    echo json_encode([
        'success' => false,
        'error' => $error ?: 'No response from N-Genius API',
        'httpCode' => $httpCode
    ]);
} else {
    echo $response;
}
