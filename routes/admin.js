var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/posts', { title: 'Express', layout: 'layouts/admin'});
});

module.exports = router;
