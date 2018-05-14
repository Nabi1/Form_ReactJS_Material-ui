const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

app.listen(3000, () => console.log('Geronimo'))

const index = require('./routes/index');
const authRouter = require('./routes/auth/auth');

app.use('/', index);
app.use('/auth', authRouter);

module.exports = app;