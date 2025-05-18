document.addEventListener("DOMContentLoaded", () => {
    // Elementos da UI
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    
    // Alternar sidebar
    menuToggle.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        mainContent.classList.toggle("open");
    });
    
    // Fechar sidebar ao clicar fora (para mobile)
    document.addEventListener("click", (event) => {
        if (window.innerWidth <= 768) {
            const isClickInsideSidebar = sidebar.contains(event.target);
            const isClickOnMenuToggle = menuToggle.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains("open")) {
                sidebar.classList.remove("open");
                mainContent.classList.remove("open");
            }
        }
    });
    
    // Adicionar efeito de loading (opcional)
    const loadContent = () => {
        document.body.classList.add("loading");
        
        // Simular carregamento de conteúdo
        setTimeout(() => {
            document.body.classList.remove("loading");
        }, 500);
    };
    
    // Carregar conteúdo inicial
    loadContent();
});

// Função para lidar com o login
function handleLogin(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;

    if (password) {
        // Mostrar feedback visual
        const loginButton = document.getElementById('login-button');
        loginButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Entrando...';
        loginButton.disabled = true;
        
        // Simular requisição de login
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        alert('Por favor, insira a senha.');
    }
}

// Inicializar event listeners quando disponíveis
function initializeEventListeners() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

document.addEventListener('DOMContentLoaded', initializeEventListeners);