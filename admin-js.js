// Function to handle admin login
function submitAdminLoginForm() {
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;

    // Validate admin login credentials
    if (email.endsWith('@rlsbca.edu.in') && password === 'rlsbca123') {
        localStorage.setItem('adminLoggedIn', 'true'); // Set admin login status in localStorage
        window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard
    } else {
        alert('Invalid admin email or password');
        document.getElementById('admin-password').value = ''; // Clear the password field
        document.getElementById('admin-email').focus(); // Focus back to the email input
    }
}

// Function to handle admin logout (if needed)
function adminLogout() {
    localStorage.removeItem('adminLoggedIn'); // Remove admin login status from localStorage
    window.location.href = 'admin-login.html'; // Redirect to admin login page
}
