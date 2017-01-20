var express = require('express');
var router = express.Router();

/* GET playground page. */
router.get('/', function(req, res, next) {
  res.render('playground', { title: 'Playground' });
});

module.exports = router;
