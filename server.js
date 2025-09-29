const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname)); // Sirve archivos desde la raíz

let comentarios = [];

app.post("/comentarios", (req, res) => {
    const { nombre, mensaje } = req.body;
    comentarios.push({ nombre, mensaje });
    res.json(comentarios);
});

app.get("/comentarios", (req, res) => {
    res.json(comentarios);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});