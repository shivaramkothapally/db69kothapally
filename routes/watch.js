var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('watch', { title: 'Search Results for watch' });
});

module.exports = router;