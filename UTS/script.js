// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#iqoo-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};
// Click on outside sidebar for hide the menu
const iqoo = document.querySelector('#iqoo-menu');

document.addEventListener('click', function(e) {
    if (!iqoo.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Click outside navbar to close menu
document.addEventListener('click', function(e) {
    const iqooMenu = document.querySelector('#iqoo-menu');
    if (!iqooMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Scroll to top button
const scrollToTopBtn = document.querySelector('.scrollToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  
    });
});