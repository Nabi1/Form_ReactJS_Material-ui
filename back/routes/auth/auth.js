const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js');


router.post('/signup', (req, res, next) => {
    let post = {
        name:req.body.name,
        lastname: req.body.lastname,
        email:req.body.email,
        password: req.body.password
    };
    let sql = 'INSERT INTO users SET ?';
    let query = connection.query(sql, post, (err, result) => {
        if(err)
        res.status(500).end();

        res.end(); 
    });
});


module.exports = router;