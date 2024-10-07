const messagesDiv = document.getElementById('messages');
const input = document.getElementById('input');
const sendButton = document.getElementById('sendButton');
const responseButtonsDiv = document.getElementById('responseButtons');

const questions = [
    "O seu tênis está limpo?",
    "Os cadarços estão intactos?",
    "A sola do tênis está em bom estado?",
    "O tênis tem algum rasgo visível?",
    "O interior do tênis está em boas condições?"
];

let userName = '';
let currentQuestionIndex = 0;
let userResponses = [];

sendButton.addEventListener('click', () => {
    handleUserInput();
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});

function handleUserInput() {
    const userInput = input.value.trim();

    if (userName === '') {
        userName = userInput;
        addMessage(`🎉 Olá, ${userName}! Sou a Mavi, sua assistente virtual. Estou aqui para ajudar você a avaliar o estado dos seus artigos esportivos. Vamos começar?`, 'mavi');
        hideInput();
        askQuestion();
    } else {
        if (currentQuestionIndex < questions.length) {
            addMessage(userInput, 'user');
            userResponses.push(userInput.toLowerCase()); // Armazena a resposta do usuário
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                askQuestion();
            } else {
                evaluateProduct();
            }
        }
    }
    input.value = '';
}

function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type === 'mavi' ? 'mavi-message' : 'user-message');
    
    const label = document.createElement('strong');
    label.textContent = type === 'mavi' ? 'Mavi: ' : 'Você: ';
    messageDiv.appendChild(label);
    
    const messageText = document.createElement('span');
    messageText.textContent = text;
    messageDiv.appendChild(messageText);
    
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Rolagem para a última mensagem
}

function askQuestion() {
    if (currentQuestionIndex < questions.length) {
        addMessage(questions[currentQuestionIndex], 'mavi');
        createResponseButtons();
    }
}

function createResponseButtons() {
    responseButtonsDiv.innerHTML = ''; // Limpa botões anteriores

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Sim';
    yesButton.className = 'button';
    yesButton.onclick = () => handleResponse('Sim');

    const noButton = document.createElement('button');
    noButton.textContent = 'Não';
    noButton.className = 'button';
    noButton.onclick = () => handleResponse('Não');

    responseButtonsDiv.appendChild(yesButton);
    responseButtonsDiv.appendChild(noButton);
}

function handleResponse(response) {
    addMessage(response, 'user');
    userResponses.push(response.toLowerCase()); // Armazena a resposta do usuário
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        askQuestion();
    } else {
        evaluateProduct();
    }
}

function evaluateProduct() {
    const positiveResponses = userResponses.filter(resp => resp === 'sim').length;
    const negativeResponses = userResponses.filter(resp => resp === 'não').length;

    let productCondition = '';

    // Verificação para definir o estado do produto
    if (positiveResponses === 4 && negativeResponses === 1) {
        productCondition = 'Excelente';
    } else if (negativeResponses === 4 && positiveResponses === 1) {
        productCondition = 'Regular';
    } else {
        productCondition = 'Bom';
    }

    addMessage(`🌟 Com base nas suas respostas, o estado do seu produto é: ${productCondition}. Estou aqui para ajudar se precisar!`, 'mavi');
    createBackToHomeButton(); // Chama a função para criar o botão de voltar
}

// Função para esconder a barra de entrada
function hideInput() {
    input.style.display = 'none';
    sendButton.style.display = 'none';
}

// Função para criar botão de voltar à tela inicial
function createBackToHomeButton() {
    responseButtonsDiv.innerHTML = ''; // Limpa os botões

    const backButton = document.createElement('button');
    backButton.textContent = 'Voltar';
    backButton.className = 'button';
    backButton.onclick = () => {
        window.location.href = 'index.html'; // Altere 'index.html' para o nome da sua página principal
    };

    responseButtonsDiv.appendChild(backButton);
}
