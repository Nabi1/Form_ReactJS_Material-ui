const http  =  require('http');
const path  =  require('path');
const express = require('express');
const app = express();
const index = require('./routes/index');
const authRouter = require('./routes/auth/auth');
const mysql = require('mysql');
const connection = require('./helpers/db');
const bodyParser  =  require('body-parser');
const morgan  =  require('morgan');


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

app.use('/auth', authRouter);
app.use('/', index);

app.use(function(req, res, next) {
    var  err  =  new  Error('Not Found');
    err.status  =  404;
    next(err);
});

let  server  =  app.listen( process.env.PORT  ||  3000, function(){
    console.log('Listening on port '  +  server.address().port);
});

module.exports = app;