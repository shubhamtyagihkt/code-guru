var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.render('admin/posts', { title: 'Posts | Admin Panel', layout: 'layouts/admin'});
});

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('admin/users', { title: 'Posts | Admin Panel', layout: 'layouts/admin'});
});

/* GET categories listing. */
router.get('/categories', function(req, res, next) {
  res.render('admin/categories', { title: 'Posts | Admin Panel', layout: 'layouts/admin'});
});


module.exports = router;
