const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3091;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // Servindo arquivos estáticos

// Usuário fixo para testes
const users = [{ username: "marifer", password: "4425102001" }];

// Rota de login
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (user && user.password === password) {
        return res.json({ success: true });
    } else {
        return res.json({ success: false, message: "Senha incorreta!" });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
