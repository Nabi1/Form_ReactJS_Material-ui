const express = require('express');
const router = express.Router();
const db = require('../../helpers/db.js');

router.post('/signup', function(req, res, next) {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password = req.body.password;
  const passwordcheck = req.body.passwordcheck;

  const insertUser = `INSERT INTO users (email, password, name, lastname, passwordcheck) VALUES ('${email}','${password}','${name}','${lastname}','${passwordcheck}')`;
  //res.send('I am in POST signup');
  db.query(insertUser, function (error, row) {
      // if(error) {
      //   res.status(500).end();
      // }
      // res.end();

      if (error)
          res.status(500).json({ flash:  error.message });
      else
          res.status(200).json({ flash:  "User has been signed up !" });

	});
});

module.exports = router;
