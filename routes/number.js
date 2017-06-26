var express = require('express');
var router = express.Router();
var chinese = require('../lib/chinese');

chinese.load('../data/elements.json');

/* GET home page. */
router.get('/number', function(req, res, next) {
	var items = chinese.select({ category: 'number' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Numbers', items: items, selected: selected });
});

module.exports = router;
