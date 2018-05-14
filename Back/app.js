const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser'); 
const  http  =  require('http');
const  path  =  require('path');
const  morgan  =  require('morgan');

const index = require('./routes/index');
const authRouter = require('./routes/auth/auth');

const connection = require('./helpers/db.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname  +  '/public'));

app.use('/auth', authRouter);
app.use('/', index);

//app.listen(5000, () => console.log('Port 5000 is waiting for you!'))	

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function(req, res, next) {
  var  err  =  new  Error('Not Found');
  err.status  =  404;
  next(err);
});

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  5000, function(){
  console.log('Listening on port '  +  server.address().port);
});

module.exports = app;
