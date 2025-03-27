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