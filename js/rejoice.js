// Toggle language   / Toglle des boutons pour les iframes des dons et contactez-nous


// ---------------------- Toggle language
document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang === 'en') {
                window.location.href = 'rejoice_en.html';
            } else {
                window.location.href = 'index.html';
            }
        });
    });


// -------------------------------------  Toggle des boutons pour les iframes des dons et contactez-nous
// Récupérez tous les boutons et le texte supplémentaire
const toggleButtons = document.querySelectorAll('.toggle-button');
const additionalTexts = document.querySelectorAll('.additional-text');

// Ajoutez un gestionnaire d'événements de clic à chaque bouton
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Affichez ou masquez le texte supplémentaire en fonction de son état actuel
        if (additionalTexts[index].style.display === 'none' || additionalTexts[index].style.display === '') {
            additionalTexts[index].style.display = 'block';
            button.textContent = ' < ';
        } else {
            additionalTexts[index].style.display = 'none';
            button.textContent = ' > ';
        }
    });
});