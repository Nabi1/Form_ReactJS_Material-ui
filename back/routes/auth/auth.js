const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../../helpers/db.js');

router.post('/signup', function (req,res,next) {
  connection.connect((err) => {
    connection.query(
    'INSERT INTO users(email, password,name,lastname) VALUES (?,?,?,?)',
    [req.body.email,req.body.password,req.body.name,req.body.lastname], (err, rows) => {
      if(err) {
        res.status(500).json({ flash:  err.message});
      } else {
        res.status(200).json({ flash:  `${req.body.name} has been signed up !` });
      }
    })
  });
});


module.exports = router;