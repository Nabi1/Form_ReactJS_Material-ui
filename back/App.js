const  http  =  require('http');
const  path  =  require('path');
const  express  =  require('express');
const  bodyParser  =  require('body-parser');
const  morgan  =  require('morgan');
const  app  =  express();

//je lance le serveur node
let  server  =  app.listen( process.env.PORT  ||  3000, function(){
    console.log('Listening on port '  +  server.address().port);
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:  false }));
app.use(bodyParser.json());
app.use(express.static(__dirname  +  '/public'));

const index = require('./routes/index');
const authRouter = require('./routes/auth/auth');
const connection = require('./helpers/db.js');

app.use('/', index);
app.use('/auth', authRouter);

module.exports = app;