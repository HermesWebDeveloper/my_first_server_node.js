const usersRoute = require('./routes/users');
const User = require('./models/users');
const app = require('./server');

//Síncronizando todos os modelos criados com o banco de dados real
(async () => {
    try {
        await User.sync({ force: true });
        console.log('Modelos síncronizados com o banco de dados!');

        // Criando usuários
        User.create({
            firstname: 'Hermes',
            surname: 'Barbosa Pereira',
            email: 'hermesbarbosa9@gmail.com',
            password: '1234'
        })

        console.log('Usuários adicionados ao banco de dados com sucesso!')
    } catch(error) {
        console.log('ERRO: ', error)
    }
    
})();

app.use('/users', usersRoute);