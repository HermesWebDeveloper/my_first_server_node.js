const usersRoute = require('./routes/users');
const app = require('server.js');

app.use('/users', usersRoute);