var express = require('express');
const app = express();
const index = require('./routes/index');
const authRouter = require('./routes/auth/auth');

app.use('/auth', authRouter);
app.use('/', index);

app.listen(3000, function () {
    console.log('Exemple app listening on port 3000')
})

module.exports = app;