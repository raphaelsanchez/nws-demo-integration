/**
 * Menu Toggle
 * On crée une fonction pour afficher ou masquer le menu mobile
 */

// On crée une fonction pour afficher ou masquer le menu
function menuToggle(toggleButton, navContainer) {
    // On récupère le bouton de menu et le menu
    const menu = document.querySelector(toggleButton)
    const nav = document.querySelector(navContainer)

    // On ajoute un écouteur d'événement sur le bouton de menu
    menu.addEventListener('click', () => {
        // On ajoute ou on supprime la classe open sur le menu
        nav.classList.toggle('open')
        // On récupère la valeur de l'attribut aria-expanded
        const isExpanded = menu.getAttribute('aria-expanded') === 'true'
        // On change la valeur de l'attribut aria-expanded
        menu.setAttribute('aria-expanded', !isExpanded)
    })
}

// On attend le chargement complet du DOM
window.addEventListener('DOMContentLoaded', () => {
    // On vérifie si le bouton de menu existe pour exécuter la fonction
    const menu = document.querySelector('.menu-toggler')
    if (menu) {
        // On exécute la fonction pour le bouton de menu et le menu de navigation
        // en passant en paramètre le bouton de menu et le menu de navigation
        menuToggle('.menu-toggler', '.header-nav')
    }
})
