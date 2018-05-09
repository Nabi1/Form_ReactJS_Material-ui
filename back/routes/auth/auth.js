const express = require('express');
const router = express.Router();

router.post('/signup', function(req, res, next) {
    res.send('I am in POST signuuuup');
    console.log("auth")
});

module.exports = router;
