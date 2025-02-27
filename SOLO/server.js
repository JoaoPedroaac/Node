require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let produtos = [];

app.post("/produtos", (req, res) => {
    const { nome, senha } = req.body;

    if (!nome || !senha) {
        return res.status(400).json({ erro: "Nome e senha" });
    }

    const novoProduto = { id: produtos.length + 1, nome, senha };
    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
