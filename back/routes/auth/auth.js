const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../../helpers/db.js');


router.post('/signup', function (req, res, next) {
  // res.send('I am in POST signup');
  let insert = `INSERT INTO users (email, password, name, lastname) VALUES ('${req.body.email}', '${req.body.password}', '${req.body.name}', '${req.body.lastname}');`

  connection.query(insert, function (error, rows) {
    if (error) {
      res.status(500).json({
        flash: error.message
      });
    } else {
      res.status(200).json({
        flash: "Hey yaw ! Ya in da place, yaw !"
      });
    }
  });
});

module.exports = router;