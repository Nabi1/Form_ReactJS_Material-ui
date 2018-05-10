const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth/auth');


// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (req,res)=>{
    res.send("youhou");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
