const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js')


router.post('/signup', (req, res, next) => {
   let select = `INSERT INTO users (email, password, name, lastname) VALUES 
   ('${req.body.email}', '${req.body.password}', '${req.body.name}', '${req.body.lastname}');`
    connection.query(select, function(err, rows, fields) {
        if (err) {
            res.status(500).end();
        } else {
            res.send('Bien envoyé en base');
        }
    });
});

module.exports = router;