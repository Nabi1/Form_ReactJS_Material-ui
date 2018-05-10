const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth/auth');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/", (req,res)=>{
//     res.send("youhou");
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.use('/auth', authRouter);

module.exports = app;
