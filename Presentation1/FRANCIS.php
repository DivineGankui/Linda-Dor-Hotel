/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

// Security: Prevent session fixation
session_regenerate_id(true);

// Check if user is an admin
if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin') {

    // Validate CSRF token
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        header("Location: inc/nav.php?error=Invalid CSRF token.");
        exit();
    }

    include "DB_connection.php";

    // Validate and sanitize input
    if (isset($_POST['status'], $_POST['leave_id'])) {
        // Sanitize input to prevent SQL injection
        $status = filter_var(trim($_POST['status']), FILTER_SANITIZE_STRING);
        $leave_id = filter_var(trim($_POST['leave_id']), FILTER_SANITIZE_NUMBER_INT);

        if (!empty($status) && filter_var($leave_id, FILTER_VALIDATE_INT)) {
            // Update leave status (ensure the function is defined)
            try {
                update_leave_status($conn, [$status, $leave_id]);
                header("Location: inc/nav.php?success=Leave status updated.");
                exit();
            } catch (Exception $e) {
                // Log the error for security (ensure sensitive details are not displayed to users)
                error_log("Error updating leave status: " . $e->getMessage());
                header("Location: inc/nav.php?error=Failed to update leave status.");
                exit();
            }
        } else {
            header("Location: inc/nav.php?error=Invalid input.");
            exit();
        }
    } else {
        header("Location: inc/nav.php?error=Missing required fields.");
        exit();
    }
} else {
    header("Location: login.php");
    exit();
}

 







/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();

// Security: Prevent session fixation
session_regenerate_id(true);

// Ensure the user is an admin
if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin') {

    // Validate CSRF token
    if (!isset($_POST['csrf_token']) || $_POST['csrf_token'] !== $_SESSION['csrf_token']) {
        header("Location: inc/nav.php?error=Invalid CSRF token.");
        exit();
    }

    include "DB_connection.php";

    // Validate and sanitize input
    if (isset($_POST['status'], $_POST['leave_id'])) {
        // Sanitize input to prevent SQL injection
        $status = filter_var(trim($_POST['status']), FILTER_SANITIZE_STRING);
        $leave_id = filter_var(trim($_POST['leave_id']), FILTER_SANITIZE_NUMBER_INT);

        if (!empty($status) && filter_var($leave_id, FILTER_VALIDATE_INT)) {
            // Update leave status (assuming update_leave_status uses prepared statements)
            try {
                update_leave_status($conn, [$status, $leave_id]);
                header("Location: inc/nav.php?success=Leave status updated.");
            } catch (Exception $e) {
                // Log the error for security (ensure sensitive details are not displayed to users)
                error_log("Error updating leave status: " . $e->getMessage());
                header("Location: inc/nav.php?error=Failed to update leave status.");
            }
        } else {
            header("Location: inc/nav.php?error=Invalid input.");
        }
    } else {
        header("Location: inc/nav.php?error=Missing required fields.");
    }
} else {
    header("Location: ../login.php");



}
function update_leave_status($conn, $data) {
    $sql = "UPDATE leaves SET status = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    if ($stmt) {
        $stmt->execute($data);
    } else {
        throw new Exception("Failed to prepare statement.");
    }
}