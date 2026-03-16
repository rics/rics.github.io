// theme-toggle.js

// Function to toggle between light and dark modes
function toggleTheme() {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// Set the theme based on the saved preference
function setTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Call setTheme on page load
window.onload = setTheme;

// Example usage for a button
// document.getElementById('theme-toggle-button').addEventListener('click', toggleTheme);