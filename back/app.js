const express = require('express');
const app = express();
var mysql = require('mysql');
const port = process.env.PORT || 3000;

// Routes
let auth = require('./routes/auth/auth');

app.get('/', (req, res) => {
  res.send('Get sur / ook');
});

app.use('/auth', auth);


app.listen(port, () => console.log(`Listening on port ${port}`));
// Export
module.exports = app;
