const express = require('express');
const PORT = 10000;

var app = express();

app.get('/', (req, res) => {
    res.send("Bem vindo a nossa Homepage!");
});

app.listen(PORT, () => {
    console.log("Conectado na porta: " + PORT);
});

module.exports = app;