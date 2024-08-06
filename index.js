const express = require('express');
const mysql = require('mysql2')
const PORT = 10000;

var app = express();

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'dc'
});

con.connect( (err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

app.get('/', (req, res) => {
    res.send("Bem vindo a nossa Homepage!");
});

app.listen(PORT, () => {
    console.log("Conectado na porta: " + PORT);
});