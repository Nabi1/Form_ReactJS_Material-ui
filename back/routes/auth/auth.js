const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');

router.post('/signup', function(req, res, next) {
  let user = {email: req.body.email, password: req.body.password, name: req.body.name, lastname: req.body.lastname};
  connection.query('INSERT INTO users SET ?', user, function(error, results, fields) {
    if(error){
      res.status(500).end();
    }
    res.send('Ok done !');
  });
});

module.exports = router;
