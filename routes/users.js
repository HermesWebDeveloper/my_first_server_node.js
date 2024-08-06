const express = require('express');
const User = require('../models/users');

const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const users = await User.findAll();
        res.json("Usuários:" + users);
    }catch {
        res.render("Falha na busca por todos os usuários")
    }
});

module.exports = router;