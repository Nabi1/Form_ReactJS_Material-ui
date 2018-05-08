const express = require('express');
const router = express.Router();

router.get('/auth', (req, res) => res.send('I am in GET auth'))

module.exports = router;