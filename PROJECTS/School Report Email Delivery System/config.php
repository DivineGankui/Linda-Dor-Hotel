<?php
// config.php - update settings before use

// Base URL (no trailing slash), e.g. http://localhost/student-report
define('BASE_URL', 'http://localhost'); // <- update

// Database
define('DB_HOST', '127.0.0.1');
define('DB_NAME', 'student_report_system');
define('DB_USER', 'root');
define('DB_PASS', 'root'); // update

// Uploads
define('UPLOAD_DIR', __DIR__ . '/uploads/'); // ensure writable
define('ALLOWED_EXT', ['pdf','doc','docx']);

// Email (PHPMailer / SMTP)
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 587);
define('SMTP_USER', 'your-email@gmail.com');      // SMTP username
define('SMTP_PASS', 'your-app-password');         // SMTP app password or API key
define('SMTP_FROM', 'your-email@gmail.com');
define('SMTP_FROM_NAME', 'School Reports');

// Security settings
// Length and charset for generated PIN (6 alphanumeric)
define('PIN_LENGTH', 6);

// Error display (disable in production)
ini_set('display_errors', 1);
error_reporting(E_ALL);