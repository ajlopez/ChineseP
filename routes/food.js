var express = require('express');
var router = express.Router();
var chinese = require('../lib/chinese');

chinese.load('../data/elements.json');

/* GET home page. */
router.get('/food', function(req, res, next) {
	var items = chinese.select({ category: 'food' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Food', items: items, selected: selected });
});

module.exports = router;
