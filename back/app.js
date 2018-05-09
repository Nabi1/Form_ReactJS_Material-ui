const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

let auth = require('./routes/auth/auth');
app.get('/', (req, res) => {
  res.send('Get sur / ook');
});

app.use('/auth', auth);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
