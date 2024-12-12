function toggleMenu() {
    const menu = document.querySelector('.contact-menu');
    const hamburger = document.querySelector('.hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
}


document.addEventListener('click', (e) => {
    const menu = document.querySelector('.contact-menu');
    const hamburger = document.querySelector('.hamburger');
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
