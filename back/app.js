const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();;
const connection = require('./helpers/db.js');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth/auth');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
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