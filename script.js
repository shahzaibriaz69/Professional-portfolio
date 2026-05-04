window.addEventListener('scroll', function() {
    const header = document.querySelector('.main-header');
    
    if (window.scrollY > 80) {
        header.style.padding = '15px 10%';
        header.style.background = '#0b111e'; // Solid dark on scroll
        header.style.borderBottom = '1px solid rgba(0, 242, 254, 0.2)';
    } else {
        header.style.padding = '25px 10%';
        header.style.background = 'rgba(11, 15, 26, 0.7)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
    }
});

// Mobile Menu Selection
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // Menu links ko screen par laane ke liye
    navLinks.classList.toggle('active');
    
    // Hamburger icon ko 'X' banane ke liye
    menuToggle.classList.toggle('is-active');
});

// Jab kisi link par click ho to menu khud band ho jaye
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('is-active');
    });
});