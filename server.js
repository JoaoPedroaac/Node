require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let produtos = [];

app.post("/produtos", (req, res) => {
    const { nome, preco } = req.body;

    if (!nome || !preco) {
        return res.status(400).json({ erro: "Nome e preço são obrigatórios" });
    }

    const novoProduto = { id: produtos.length + 1, nome, preco };
    produtos.push(novoProduto);

    res.status(201).json(novoProduto);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
