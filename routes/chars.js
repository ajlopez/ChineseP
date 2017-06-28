var express = require('express');
var router = express.Router();
var chinese = require('../lib/chinese');

chinese.load('../data/elements.json');

/* GET home page. */
router.get('/chars', function(req, res, next) {
	var items = chinese.select({ character: true }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Characters', items: items, selected: selected });
});

module.exports = router;