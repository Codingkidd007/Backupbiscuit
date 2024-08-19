document.addEventListener('DOMContentLoaded', function() {
    // Display the currently assigned admin word
    const adminWord = localStorage.getItem('adminWord') || 'Not Set';
    document.getElementById('admin-word-display').textContent = adminWord;

    // Function to handle Admin voice login
    document.getElementById('start-recognition').addEventListener('click', function() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';

        recognition.onstart = function() {
            document.getElementById('status').textContent = 'Listening...';
        };

        recognition.onresult = function(event) {
            const spokenWord = event.results[0][0].transcript.trim();
            const correctWord = localStorage.getItem('adminWord');

            if (spokenWord === correctWord) {
                alert('Admin logged in successfully');
                localStorage.setItem('adminLoggedIn', 'true'); // Set admin login status
                window.location.href = 'admin-dashboard.html'; // Redirect to admin dashboard or admin control page
            } else {
                alert('Invalid admin word');
            }
            document.getElementById('status').textContent = '';
        };

        recognition.onerror = function() {
            document.getElementById('status').textContent = 'Error occurred. Please try again.';
        };

        recognition.start();
    });

    // Function to set the admin word
    document.getElementById('set-admin-word').addEventListener('click', function() {
        const newWord = document.getElementById('admin-word-input').value.trim();
        if (newWord) {
            localStorage.setItem('adminWord', newWord);
            document.getElementById('admin-word-display').textContent = newWord;
            alert('Admin word set successfully');
        } else {
            alert('Please enter a valid word');
        }
    });
});
