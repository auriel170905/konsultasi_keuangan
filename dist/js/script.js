// JavaScript for toggle menu and scroll effect
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector('.menu');
    const menuBar = document.querySelector('.menu-bar');

    // Menu toggle
    menuBar.addEventListener('click', function () {
        menu.classList.toggle('active');
    });

    // Scroll effect
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolling-active');
        } else {
            navbar.classList.remove('scrolling-active');
        }
    });
});
