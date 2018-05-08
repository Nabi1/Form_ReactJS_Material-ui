const express = require('express');
const router = express.Router();

router.get('/auth', (req, res) => res.send('I am in GET auth'))

router.post('/signup', (req, res, next) => res.send('I am in POST signup'));

module.exports = router;