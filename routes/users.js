const express = require('express');
const User = require('../models/users');

const router = express.Router();

router.get('/', function(req, res) {
    try {
        const users = User.findAll();
        res.send(users);
    }catch {
        res.render("Falha")
    }
});

module.exports = router;