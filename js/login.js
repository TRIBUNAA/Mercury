document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir o reload da página

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        // Simulação de login bem-sucedido
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});
