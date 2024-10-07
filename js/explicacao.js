// Você pode adicionar qualquer funcionalidade JavaScript específica que deseja para a página de explicação aqui
document.addEventListener("DOMContentLoaded", function() {
    // Código a ser executado quando a página for carregada
    console.log("Página de explicação carregada.");
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
});

