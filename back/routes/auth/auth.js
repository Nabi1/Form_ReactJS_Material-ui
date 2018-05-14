const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = require('../../helpers/db.js');


router.post('/signup', function (req, res, next) {
    // res.send('I am in POST signup');
    let insert = `INSERT INTO users (email, password, name, lastname) VALUES ('${req.body.email}', '${req.body.password}', '${req.body.name}', '${req.body.lastname}');`

    connection.query(insert, function (error, rows) {
        if (error) 
            res.status(500).end;
        else
            console.log('Ouuuh Yeah !! You passed the query baby !');
            res.end();
    });
});

module.exports = router;