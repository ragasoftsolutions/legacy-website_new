<?php
/**
* N-Genius Payment Gateway Proxy
* File: ngenius.php
*/
 
error_reporting(E_ALL);
ini_set('display_errors', 1);
 
/*
|--------------------------------------------------------------------------
| DEBUG MODE
|--------------------------------------------------------------------------
*/
$debug = true;
$logFile = __DIR__ . '/proxy_debug.log';
 
function writeLog($message)
{
    global $debug, $logFile;
 
    if ($debug) {
        file_put_contents(
            $logFile,
            "[" . date('Y-m-d H:i:s') . "] " . $message . PHP_EOL,
            FILE_APPEND
        );
    }
}
 
writeLog("====================================");
writeLog("REQUEST STARTED");
 
/*
|--------------------------------------------------------------------------
| CORS HEADERS
|--------------------------------------------------------------------------
*/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, Accept");
header("Content-Type: application/json; charset=utf-8");
 
/*
|--------------------------------------------------------------------------
| HANDLE OPTIONS REQUEST
|--------------------------------------------------------------------------
*/
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}
 
/*
|--------------------------------------------------------------------------
| API KEY
|--------------------------------------------------------------------------
| ONLY BASE64 ENCODED VALUE
|--------------------------------------------------------------------------
*/
$apiKey = 'ZGFjOGUxMjUtNjIxYi00MGE0LTkzZGMtNjQxODY0ZWVjZmU1OjI0YTg5Njk3LTJjNzEtNGNmMi1iMTY5LTYyY2YzZjcwYzUzMw==';
 
/*
|--------------------------------------------------------------------------
| REQUEST URI
|--------------------------------------------------------------------------
*/
$requestUri = $_SERVER['REQUEST_URI'];
 
writeLog("REQUEST URI:");
writeLog($requestUri);
 
$path = parse_url($requestUri, PHP_URL_PATH);
 
/*
|--------------------------------------------------------------------------
| REMOVE LOCAL PREFIX
|--------------------------------------------------------------------------
*/
$path = str_replace('/api/ngenius', '', $path);
 
if (empty($path)) {
    $path = '/';
}
 
/*
|--------------------------------------------------------------------------
| SANDBOX / LIVE
|--------------------------------------------------------------------------
*/
 
// SANDBOX
// $baseUrl = 'https://api-gateway.sandbox.ngenius-payments.com';
 
// LIVE
$baseUrl = 'https://api-gateway.ngenius-payments.com';
 
$targetUrl = $baseUrl . $path;
 
/*
|--------------------------------------------------------------------------
| QUERY STRING
|--------------------------------------------------------------------------
*/
if (!empty($_SERVER['QUERY_STRING'])) {
    $targetUrl .= '?' . $_SERVER['QUERY_STRING'];
}
 
writeLog("TARGET URL:");
writeLog($targetUrl);
 
/*
|--------------------------------------------------------------------------
| BUILD HEADERS
|--------------------------------------------------------------------------
*/
$headers = [];
 
/*
|--------------------------------------------------------------------------
| ACCESS TOKEN API
|--------------------------------------------------------------------------
*/
if (strpos($path, '/identity/auth/access-token') !== false) {
 
    writeLog("TOKEN API DETECTED");
 
    $headers[] = 'Authorization: Basic ' . $apiKey;
 
    $headers[] = 'Content-Type: application/vnd.ni-identity.v1+json';
 
    $headers[] = 'Accept: application/vnd.ni-identity.v1+json';
 
} else {
 
    writeLog("PAYMENT API DETECTED");
 
    /*
    |--------------------------------------------------------------------------
    | GET AUTHORIZATION HEADER
    |--------------------------------------------------------------------------
    */
 
    $incomingAuth = '';
 
    if (isset($_SERVER['HTTP_AUTHORIZATION'])) {
 
        $incomingAuth = $_SERVER['HTTP_AUTHORIZATION'];
 
    } elseif (isset($_SERVER['REDIRECT_HTTP_AUTHORIZATION'])) {
 
        $incomingAuth = $_SERVER['REDIRECT_HTTP_AUTHORIZATION'];
 
    } elseif (function_exists('getallheaders')) {
 
        $allHeaders = getallheaders();
 
        if (isset($allHeaders['Authorization'])) {
            $incomingAuth = $allHeaders['Authorization'];
        } elseif (isset($allHeaders['authorization'])) {
            $incomingAuth = $allHeaders['authorization'];
        }
    }
 
    /*
    |--------------------------------------------------------------------------
    | FORWARD AUTH HEADER
    |--------------------------------------------------------------------------
    */
 
    if (!empty($incomingAuth)) {
 
        $headers[] = 'Authorization: ' . $incomingAuth;
 
        writeLog("AUTH HEADER FOUND:");
        writeLog($incomingAuth);
 
    } else {
 
        writeLog("NO AUTH HEADER RECEIVED");
    }
 
    $headers[] = 'Content-Type: application/vnd.ni-payment.v2+json';
 
    $headers[] = 'Accept: application/vnd.ni-payment.v2+json';
}
 
writeLog("HEADERS:");
writeLog(print_r($headers, true));
 
/*
|--------------------------------------------------------------------------
| REQUEST BODY
|--------------------------------------------------------------------------
*/
$body = null;
 
if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
 
    $body = file_get_contents('php://input');
 
    writeLog("REQUEST BODY:");
    writeLog($body);
 
    /*
    |--------------------------------------------------------------------------
    | TOKEN API NEEDS EMPTY JSON
    |--------------------------------------------------------------------------
    */
    if (
        strpos($path, '/identity/auth/access-token') !== false
&& empty($body)
    ) {
        $body = '{}';
    }
}
 
/*
|--------------------------------------------------------------------------
| CURL REQUEST
|--------------------------------------------------------------------------
*/
$ch = curl_init();
 
curl_setopt_array($ch, [
 
    CURLOPT_URL => $targetUrl,
 
    CURLOPT_RETURNTRANSFER => true,
 
    CURLOPT_HTTPHEADER => $headers,
 
    CURLOPT_SSL_VERIFYPEER => true,
 
    CURLOPT_SSL_VERIFYHOST => 2,
 
    CURLOPT_TIMEOUT => 60,
 
    CURLOPT_FOLLOWLOCATION => true,
 
    CURLOPT_MAXREDIRS => 5,
 
    CURLOPT_CUSTOMREQUEST => $_SERVER['REQUEST_METHOD'],
]);
 
/*
|--------------------------------------------------------------------------
| SEND BODY
|--------------------------------------------------------------------------
*/
if (in_array($_SERVER['REQUEST_METHOD'], ['POST', 'PUT', 'PATCH'])) {
 
    curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
}
 
/*
|--------------------------------------------------------------------------
| EXECUTE REQUEST
|--------------------------------------------------------------------------
*/
$response = curl_exec($ch);
 
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
 
$curlError = curl_error($ch);
 
$curlInfo = curl_getinfo($ch);
 
/*
|--------------------------------------------------------------------------
| DEBUG LOGS
|--------------------------------------------------------------------------
*/
writeLog("HTTP CODE:");
writeLog($httpCode);
 
if ($curlError) {
 
    writeLog("CURL ERROR:");
    writeLog($curlError);
}
 
writeLog("RESPONSE:");
writeLog($response);
 
/*
|--------------------------------------------------------------------------
| RETURN RESPONSE
|--------------------------------------------------------------------------
*/
http_response_code($httpCode);
 
if ($curlError) {
 
    echo json_encode([
        'success' => false,
        'error' => $curlError,
        'httpCode' => $httpCode
    ]);
 
} else {
 
    echo $response;
}