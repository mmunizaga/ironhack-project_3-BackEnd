var express = require('express');
var router = new express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<img src="https://media.giphy.com/media/d2Z8Ob1chcNW5S1i/giphy.gif" alt="gif"><h1>You are connected baby !</h1>');
});

module.exports = router;
