// Menu mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Ajouter des animations CSS
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 1s, transform 1s';
    });
});
// Récupérer les éléments
const arrowUp = document.getElementById('arrowUp');
const arrowDown = document.getElementById('arrowDown');

// Fonction pour faire défiler vers le haut
arrowUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement fluide
    });
});

// Fonction pour faire défiler vers le bas
arrowDown.addEventListener('click', () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Défilement fluide
    });
});

// Afficher ou masquer la flèche vers le haut en fonction du défilement
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        arrowUp.style.display = 'flex'; // Afficher la flèche vers le haut
    } else {
        arrowUp.style.display = 'none'; // Masquer la flèche vers le haut
    }
});