
// This file is currently empty but ready for future interactive features
// Potential future additions:
// - Project filtering
// - Smooth scrolling
// - Dynamic content loading
// - Interactive animations

// Get the navigation element
const nav = document.getElementById('topNav');

// Show/hide navigation based on scroll position
window.addEventListener('scroll', () => {
    // Show nav after scrolling down 300px
    if (window.scrollY > 300) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
