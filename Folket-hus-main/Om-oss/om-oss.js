const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links-container');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});