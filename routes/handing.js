var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('handing', { title: 'handing.me is mine' });
});

module.exports = router;
