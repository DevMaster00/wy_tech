// Initialize AOS (Animate On Scroll)
AOS.init();

const menuToggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');

// Toggle the overlay menu when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    overlay.classList.toggle('active');
});

// Hide the overlay when clicked
overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});
