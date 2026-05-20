<?php
/**
 * N-Genius Payment Gateway Proxy
 *
 * Proxies requests from frontend /api/ngenius/* to N-Genius API
 */

// Error handling
error_reporting(1);
ini_set('display_errors', 1);

// Log for debugging
$logFile = __DIR__ . '/proxy_debug.log';
$debug = false;

if ($debug) {
    file_put_contents($logFile, "==========\n" . date('Y-m-d H:i:s') . "\n", FILE_APPEND);
    file_put_contents($logFile, "URI: " . $_SERVER['REQUEST_URI'] . "\n", FILE_APPEND);
    file_put_contents($logFile, "Method: " . $_SERVER['REQUEST_METHOD'] . "\n", FILE_APPEND);
}

// CORS headers
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, Accept');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit(0);
}

// API Key - Replace with your actual key
$apiKey = 'ZGFjOGUxMjUtNjIxYi00MGE0LTkzZGMtNjQxODY0ZWVjZmU1OjI0YTg5Njk3LTJjNzEtNGNmMi1iMTY5LTYyY2YzZjcwYzUzMw==';

// Get the request path from REQUEST_URI
$requestUri = $_SERVER['REQUEST_URI'];
$path = parse_url($requestUri, PHP_URL_PATH);

// Remove /api/ngenius prefix
$path = str_replace('/api/ngenius', '', $path);
if (empty($path)) {
    $path = '/';
}

// Build the N-Genius API URL
$targetUrl = 'https://api-gateway.ngenius-payments.com' . $path;

// Add query string
$queryString = $_SERVER['QUERY_STRING'] ?? '';
if (!empty($queryString)) {
    $targetUrl .= '?' . $queryString;
}

if ($debug) {
    file_put_contents($logFile, "Target: " . $targetUrl . "\n", FILE_APPEND);
}

// Prepare headers
$headers = [
    'Authorization: Basic ' . $apiKey,
    'Accept: application/vnd.ni-payment.v2+json',
];

// Get content type - check both ways
$contentType = $_SERVER['CONTENT_TYPE'] ?? 'application/json';
// Handle FormData content type
if (strpos($contentType, 'application/json') === false && strpos($contentType, 'application/x-www-form-urlencoded') === false) {
    $contentType = 'application/json';
}
$headers[] = 'Content-Type: ' . $contentType;

// Handle POST/PUT/PATCH body
$body = null;
if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
    $body = file_get_contents('php://input');
    if ($debug) {
        file_put_contents($logFile, "Body: " . $body . "\n", FILE_APPEND);
    }
}

if ($debug) {
    file_put_contents($logFile, "Headers: " . implode(", ", $headers) . "\n", FILE_APPEND);
}

// Make the request to N-Genius
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $targetUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt($ch, CURLOPT_TIMEOUT, 60);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_MAXREDIRS, 5);

if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');
}

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
$curlInfo = curl_getinfo($ch);

curl_close($ch);

if ($debug) {
    file_put_contents($logFile, "HTTP Code: " . $httpCode . "\n", FILE_APPEND);
    file_put_contents($logFile, "Response: " . substr($response, 0, 500) . "\n", FILE_APPEND);
    if ($error) {
        file_put_contents($logFile, "Error: " . $error . "\n", FILE_APPEND);
    }
}

// Return the response
http_response_code($httpCode);

if ($error) {
    echo json_encode([
        'success' => false,
        'error' => $error,
        'httpCode' => $httpCode
    ]);
} else {
    echo $response;
}