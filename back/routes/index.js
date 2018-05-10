// Modules
const express = require('express');
const router = express.Router();

// Send something to the route '/'
router.get('/', function (req, res) {
  res.send('Youhou')
})

module.exports = router;
