// Modules
const express = require('express');
let mysql = require('mysql');
const router = express.Router();
/*const connection = require('./helpers/db.js');*/

// mysql connection
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "doyouknowthebendo",
  database: "form"
});

// Retrieve/send data 
router.post('/signup', (req, res, next) => {
  
  let addData = `INSERT INTO users (email, password, name, lastname) 
  VALUES ('${req.body.email}', '${req.body.password}', '${req.body.name}', '${req.body.lastname}');`
  
  connection.query(addData, function(err, rows, fields) {
    if (err) {
      res.status(500).end();
    } else {
      res.send('Your database has been uploaded ! Well done Neo');
    }
  });
});

module.exports = router;