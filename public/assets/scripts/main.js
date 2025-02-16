// Função para lidar com o envio do formulário de login
function handleLogin(event) {
    event.preventDefault(); // Evita o recarregamento da página

    // Simula sucesso no login e redireciona para o dashboard
    const password = document.getElementById('password').value;

    if (password) { // Apenas verifica se a senha foi preenchida (simulação)
        alert('Login realizado com sucesso!');
        window.location.href = 'dashboard.html'; // Redireciona para o dashboard
    } else {
        alert('Por favor, insira a senha.');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open"); // Abre ou fecha a sidebar
    });
});


// Função para adicionar tarefas dinamicamente
function addTask() {
    const taskList = document.querySelector('.task-list');
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <input type="checkbox">
        <label>Nova Tarefa</label>
    `;
    taskList.appendChild(newTask);
}

// Função para gerar relatório (Placeholder)
function generateReport() {
    alert('Relatório gerado com sucesso!');
}

// Adiciona eventos aos elementos da página
function initializeEventListeners() {
    // Evento para o formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Evento para adicionar tarefas
    const addTaskButton = document.querySelector('.add-task-button');
    if (addTaskButton) {
        addTaskButton.addEventListener('click', addTask);
    }

    // Evento para gerar relatório
    const generateReportButton = document.querySelector('.generate-report-button');
    if (generateReportButton) {
        generateReportButton.addEventListener('click', generateReport);
    }
}

// Inicializa os eventos quando a página é carregada
document.addEventListener('DOMContentLoaded', initializeEventListeners);

// Captura o botão pelo ID
const loginButton = document.getElementById('login-button');

// Adiciona o evento de clique no botão
loginButton.addEventListener('click', function () {
    alert('Login realizado com sucesso!');
    window.location.href = 'dashboard.html'; // Redireciona para o dashboard
});

document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("task-list");

    // Função para excluir uma tarefa
    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete-task-button")) {
            const taskItem = event.target.parentElement; // Seleciona o item da tarefa
            taskList.removeChild(taskItem); // Remove a tarefa da lista
        }
    });

    // Exemplo: Adicionar funcionalidade ao botão "Adicionar Nova Tarefa" (opcional)
    const addTaskButton = document.querySelector(".add-task-button");
    addTaskButton.addEventListener("click", () => {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <input type="checkbox">
            <label>Nova Tarefa</label>
            <button class="delete-task-button">Excluir</button>
        `;
        taskList.appendChild(newTask);
    });
});

