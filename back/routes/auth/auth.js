const express = require('express');
const router = express.Router();
var mysql = require('mysql');
const connection = require('../../helpers/db.js')


router.post('/signup', (req, res, next) => {

    let select = `INSERT INTO users (email, password, name, lastname) VALUES 
    ('${req.body.email}','${req.body.password}','${req.body.name}','${req.body.lastname}')`;
    connection.query(select, (err, res) => {
        if (err) {
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    })
});

// Si ce n'est pas ce qui est demandé merci de me donner des pistes

module.exports = router;