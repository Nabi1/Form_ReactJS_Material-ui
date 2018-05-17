const express = require('express');
const router = express.Router()
const connection = require('../../helpers/db.js');


router.get('/', (req, res, next) => {
  res.send("route AUTH")
 });

router.post('/signup', function(req, res, next) {
    let post = {email:req.body.email, password:req.body.password, name:req.body.name, lastname:req.body.lastname}
    console.log(req.body)
    connection.query('INSERT INTO users SET ?', post, function(err,results){
    if (err){
      res.status(500).json({ flash:  error.message });
    }else{
      res.status(200).json({ flash:  "User has been signed up !" });
    }
  });
});
module.exports = router;
