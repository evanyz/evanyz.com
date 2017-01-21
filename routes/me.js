var express = require('express');
var router = express.Router();

/* GET about me page. */
router.get('/', function(req, res, next) {
  res.render('me', { title: 'About Me' });
});

module.exports = router;