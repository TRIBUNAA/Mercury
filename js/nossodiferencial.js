// js/nosso-diferencial.js

// Função para mostrar uma mensagem de boas-vindas ao usuário
function showWelcomeMessage() {
    alert("Bem-vindo à Mercury! Estamos aqui para ajudar com suas trocas de equipamentos.");
}

// Função para abrir um chat online
function openChat() {
    // Você pode personalizar essa função para abrir um serviço de chat real
    alert("Abrindo o chat... Por favor, aguarde.");
}

// Evento que será chamado ao carregar a página
window.onload = function() {
    showWelcomeMessage();
};

// Exemplo de uso para abrir o chat
const chatButton = document.createElement('button');
chatButton.textContent = "Iniciar Chat";
chatButton.style.position = "fixed";
chatButton.style.bottom = "20px";
chatButton.style.right = "20px";
chatButton.style.padding = "10px";
chatButton.style.backgroundColor = "#007BFF";
chatButton.style.color = "#ffffff";
chatButton.style.border = "none";
chatButton.style.borderRadius = "5px";
chatButton.style.cursor = "pointer";

chatButton.onclick = openChat;

document.body.appendChild(chatButton);

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
    });
});

