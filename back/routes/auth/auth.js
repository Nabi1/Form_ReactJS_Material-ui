// Modules
const express = require('express');
let mysql = require('mysql');
const router = express.Router();
const connection = require('../../helpers/db.js');

// Retrieve/send data 
router.post('/signup', (req, res, next) => {
  
  let addData = `INSERT INTO users (email, password, name, lastname) 
  VALUES ('${req.body.email}', '${req.body.password}', '${req.body.name}', '${req.body.lastname}');`
  
  connection.query(addData, function(err, rows, fields) {
    if (err) {
      res.status(500).json({
          flash: err.message
      });

  } else {
      res.status(200).json({
          flash: "You are a boss !"
      });
  }
});
});

module.exports = router;