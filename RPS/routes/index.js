var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/rps',function(req, res, next) {
  console.log("Playing RPS");
  res.render('index', { title: 'RPS' });
});

module.exports = router;
