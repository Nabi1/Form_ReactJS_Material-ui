// Modules
const express = require('express');
const router = express.Router();

// Retrieve/send something from the route '/signup'
router.post('/signup', function(req, res, next) {
  res.send('I am in POST signup');
});

module.exports = router;
