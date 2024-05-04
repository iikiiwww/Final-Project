// Toggle class active
const navbarNav = document.querySelector
    ('.navbar-nav');
document.querySelector('#iqoo-menu').onclick = () => {
    navbarNav.classList.toggle('active')
};
// Click on outside sidebar for hide the menu
const iqoo = document.querySelector
    ('#iqoo-menu');

document.addEventListener('click', function (e) {
    if (!iqoo.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active')
    }
})
