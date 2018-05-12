var express = require('express');
var router = express.Router()
const connection = require('../../helpers/db.js');


router.post('/signup', function(req, res, next) {
    let post = {email:req.body.email, password:req.body.password, name:req.body.name, lastname:req.body.lastname}
    connection.query('INSERT INTO users SET ?', post, function(err,results){
      if (err) {
        res.status(500).json({ "status_code": 500, "status_message": "internal server error" });
      } else {
        res.send('POST done');
      }
  });
});

module.exports = router;