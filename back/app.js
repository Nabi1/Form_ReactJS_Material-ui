// Modules
const express = require('express');
const logger  = require('morgan');
const bodyParser = require('body-parser');
const app = express();

// Define routes
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth/auth');

// Path processing
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use routes
app.use('/', indexRouter);
app.use('/auth', authRouter);

//
//

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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

//
//

// Local port 
app.listen(5000, function () {
  console.log('Your name is Maurice Moss, is it not ?')
})

module.exports = app;
