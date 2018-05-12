const express = require("express");
const router = express.Router();
const connection = require("../../helpers/db.js");

router.post("/signup", (req, res, next) => {
    let values = [
        req.body.email,
        req.body.password,
        req.body.name,
        req.body.lastname
    ];

    let user = `INSERT INTO users (email, password, name, lastname)
  VALUES (?,?,?,?);`;

    connection.query(user, values, function(err, rows, fields) {
        if (err) {
            res.status(500).end();
        } else {
            res.send("Database updated");
        }
    });
});

module.exports = router;
