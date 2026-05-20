<?php
/**
 * Simple test endpoint
 */
error_reporting(1);
ini_set('display_errors', 1);

header('Content-Type: application/json');

echo json_encode([
    'status' => 'ok',
    'message' => 'PHP proxy is working',
    'timestamp' => date('Y-m-d H:i:s'),
    'server' => $_SERVER['SERVER_SOFTWARE'] ?? 'unknown',
    'php_version' => PHP_VERSION,
    'request_uri' => $_SERVER['REQUEST_URI'] ?? '',
]);