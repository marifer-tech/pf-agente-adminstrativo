document.getElementById("login-form").addEventListener("submit", async function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (result.success) {
        window.location.href = "dashboard.html"; // Redireciona após login bem-sucedido
    } else {
        errorMessage.textContent = "Senha incorreta!";
        errorMessage.style.display = "block";
    }
});
