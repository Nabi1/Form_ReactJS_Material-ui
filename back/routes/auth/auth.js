const  express  =  require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');
const mysql = require('mysql');

// router.post('/signup', function(req, res, next) {
//   res.send('I am in POST signup');
// });

router.post('/signup',(req,res,next) => {
  connection.query("INSERT into users (email,password,name,lastname) Values (?,?,?,?)",
[
  req.body.email,
  req.body.password,
  req.body.name,
  req.body.lastname
]
  ,function(err){
    if(err)
        res.status(500).end();

    res.end();
})
});
module.exports = router;
