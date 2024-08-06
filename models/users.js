const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

// >>>> CRIANDO TABELA DOS USUÁRIOS <<<<
const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: { type: DataTypes.STRING },
        surname: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING}
    }
)

module.exports = User;