// Mes modules
const express = require('express');
const app = express();
const logger = require('morgan');
let mysql = require('mysql');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// Init mes Routes
const auth = require('./routes/auth/auth');

// Path
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/auth', auth);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// My port 
app.listen(3000, () =>{
  console.log('Listening on port 3000')
})

// Export
module.exports = app;
