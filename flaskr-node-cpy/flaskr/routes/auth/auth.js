var express = require('express');
var router = express.Router();

/* Landing Page, should have Registration and Login */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
