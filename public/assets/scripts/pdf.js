// Script para controlar os botões do accordion
document.querySelectorAll(".accordion-btn").forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

// Script para deletar arquivos (simulação)
document.querySelectorAll(".delete-button").forEach(button => {
    button.addEventListener("click", function () {
        this.parentElement.remove();
    });
});
