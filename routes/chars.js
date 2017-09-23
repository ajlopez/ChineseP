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

router.get('/chars1', function(req, res, next) {
	var items = chinese.select({ character: true, level: 1 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Characters (Level 1)', items: items, selected: selected });
});

module.exports = router;
