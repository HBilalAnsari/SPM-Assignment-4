<?php
/**
 * QuickPOS — Contact Form Handler
 *
 * Validates incoming POST data (name, email, message).
 * On success, simulates saving / emailing and redirects to thank-you.html.
 * On failure, redirects back to the form with an error flag.
 */

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

// Collect & sanitise inputs
$name    = isset($_POST['name'])    ? trim($_POST['name'])    : '';
$email   = isset($_POST['email'])   ? trim($_POST['email'])   : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

$errors = [];

// ---------- Validation ----------
if (empty($name)) {
    $errors[] = 'name';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email';
}

if (empty($message)) {
    $errors[] = 'message';
}

// ---------- Handle result ----------
if (!empty($errors)) {
    // Redirect back with error flag (basic approach — no sessions needed)
    header('Location: index.html?error=1');
    exit;
}

// --- Simulate success (e.g., save to database, send email, etc.) ---
// In a production app you would handle the data here.

// Redirect to thank-you page
header('Location: thank-you.html');
exit;
