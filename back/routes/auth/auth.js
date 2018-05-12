const express = require('express');
const router = express.Router();
const connection = require('../../helpers/db.js')


router.get('/', (req, res, next) => {
 res.send("I'm Postman")
});

router.post('/signup', (req, res, next) => {
   let select = `INSERT INTO users (email, password, name, lastname) VALUES 
   ('${req.body.email}', '${req.body.password}', '${req.body.name}', '${req.body.lastname}');`
    connection.query(select, function(err, rows, fields) {
        if (err) {
            res.status(500).json({
                flash: err.message
            });

        } else {
            res.status(200).json({
                flash: "User has been signed up !"
            });
        }
    });
});


module.exports = router;