var express = require('express');
const router = express.Router();

router.get('/auth', (req, res) => res.send('ok get'))

router.post('/signup', (req, res, next) => res.send('ok post'))


module.exports = router;