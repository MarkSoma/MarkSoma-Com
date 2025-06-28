// Theme toggling
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
let isDarkMode = localStorage.getItem('darkMode') === 'true';

function updateTheme() {
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    themeToggle.innerHTML = '<i class="fas fa-' + (isDarkMode ? 'sun' : 'moon') + '"></i>';
}

themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    updateTheme();
});

// Initialize theme
updateTheme();
