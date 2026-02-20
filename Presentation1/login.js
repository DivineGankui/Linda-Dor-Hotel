function rotateForm() {
    document.getElementById('container').classList.toggle('rotated');
}

function registerUser() {
    let username = document.getElementById('signup-username').value;
    let email = document.getElementById('signup-email').value;
    let password = document.getElementById('signup-password').value;

    if (username && email && password) {
        let formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);

        fetch('register.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.trim() === "success") {
                alert("Account created successfully! You can now log in.");
                rotateForm();
            } else {
                alert("Registration failed. Try again.");
            }
        });
    } else {
        alert("Please fill all fields!");
    }
}



function loginUser() {
    let username = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;

    if (username && password) {
        let formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);

        fetch('login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data.trim() === "success") {
                alert("Logged in successfully!");
                window.location.href = "dashboard.php"; // Redirect to a dashboard page
            } else if (data.trim() === "invalid") {
                alert("Incorrect password.");
            } else {
                alert("User not found.");
            }
        });
    } else {
        alert("Please enter your credentials!");
    }
}
