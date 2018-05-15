const express = require ('express');
const router = express.Router();
const mysql  = require('mysql');
const plop = require('../../helpers/db')


router.post('/signup', (req, res, next) => {
    let sql = `INSERT INTO users (email, password, name, lastname) 
    VALUES ('${req.body.email}','${req.body.password}','${req.body.name}','${req.body.lastname}');`
    plop.query(sql, function (err, rows, fields) {
      if (err)
      res.status(500).json({ flash:  err.message });
  else
      res.status(200).json({ flash:  "Utilisateur enregistré" });
    });
  })


module.exports = router;

  //co.query("INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)",
    // [
    //     req.body.email,
    //     req.body.password,
    //     req.body.name,
    //     req.body.lastname
    // ], function (error) {
    //     if (error)
    //     res.status(500).json({flash : error.message});
    // }

    