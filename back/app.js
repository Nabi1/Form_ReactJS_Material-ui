const express = require('express');
const path = require('path');
const app = express();
const server = app.listen(3000);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth/auth');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// router setup
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// Returning 404
app.use(function(req, res, next){
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page introuvable, désolé !');
});

module.exports = app;
console.log('Server is listening on port 3000');