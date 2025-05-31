// script.js

document.addEventListener('DOMContentLoaded', () => {
    const discoverMoreBtn = document.getElementById('discoverMoreBtn');

    if (discoverMoreBtn) {
        discoverMoreBtn.addEventListener('click', () => {
            // Fait défiler la page jusqu'à la section "À Propos"
            document.getElementById('about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Gestion de l'active state pour la navigation (facultatif)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) { // Ajuste la sensibilité
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    });
});