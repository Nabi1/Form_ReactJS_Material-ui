var express = require('express');
const router = express.Router();
const  mysql = require('mysql');
const connection = require('../../helpers/db');
  

router.get('/auth', (req, res) => res.send('ok get'))

router.post('/signup', (req, res, next) => {
    console.log('je suis avant la requete');
    connection.query ("INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)",
    [
        req.body.email,
        req.body.password,
        req.body.name,
        req.body.lastname
    ], function (error) {
        if (error)
        res.status(500).json({ flash: error.message });
        else
        res.status(200).json({ flash: "User has been signed up !" });
    });
})

module.exports = router;