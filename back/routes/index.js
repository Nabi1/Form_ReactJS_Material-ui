var express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('youhou')
})
module.exports = router;