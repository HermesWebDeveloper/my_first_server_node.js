const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('banco_chuchuzinho_hermes', 'banco_chuchuzinho_hermes_user', 'jabwi67t0tG1fdkIuRCtehVwktF6knOy', {
    host: 'dpg-cqp1g1ggph6c73ff32g0-a',
    dialect: 'postgres'
});

// Testando a conexão com o banco de dados
// async function testConnection () {
//     try {
//         await sequelize.authenticate();
//         console.log('Conexão estabelecida com sucesso!');
//     } catch (error) {
//         console.error('Conexão com ERROR: ', error);
//     };
// };

// testConnection();

module.exports = sequelize;