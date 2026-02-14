<?php
// index.php - admin login
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/functions.php';

if (is_admin_logged_in()) {
    header('Location: dashboard.php');
    exit;
}

$err = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = trim($_POST['username'] ?? '');
    $password = $_POST['password'] ?? '';
    if ($username === '' || $password === '') {
        $err = 'Provide username and password.';
    } else {
        $pdo = getPDO();
        $stmt = $pdo->prepare("SELECT id, password FROM admins WHERE username = ?");
        $stmt->execute([$username]);
        $admin = $stmt->fetch();
        if ($admin && password_verify($password, $admin['password'])) {
            $_SESSION['admin_id'] = $admin['id'];
            header('Location: dashboard.php');
            exit;
        } else {
            $err = 'Invalid credentials.';
        }
    }
}
?>
<!doctype html>
<html>
<head><meta charset="utf-8"><title>Admin Login</title></head>
<body>
<h2>Admin Login</h2>
<?php if ($err): ?><p style="color:red;"><?php echo htmlspecialchars($err); ?></p><?php endif; ?>
<form method="post">
    <label>Username<br><input name="username" required></label><br><br>
    <label>Password<br><input type="password" name="password" required></label><br><br>
    <button type="submit">Login</button>
</form>

<?php include __DIR__ . '/footer.php'; ?>

</body>
</html>