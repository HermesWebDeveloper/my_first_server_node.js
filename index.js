const usersRoute = require('./routes/users');
const app = require('./server');

app.use('/users', usersRoute);