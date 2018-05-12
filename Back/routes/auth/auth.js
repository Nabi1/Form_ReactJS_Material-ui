const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");

router.post("/signup", (req, res, next) => {
    let values = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname
    };
    let user = `INSERT INTO users (email, password, name, lastname)
  VALUES (${values});`;

    connection.query(user, function(err, rows, fields) {
        if (err) {
            res.status(500).end();
        } else {
            res.send("Database updated");
        }
    });
});

module.exports = router;
