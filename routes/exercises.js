var express = require('express');
var router = express.Router();
var chinese = require('../lib/chinese');

chinese.load('../data/elements.json');

/* Characters */
router.get('/char', function(req, res, next) {
	var items = chinese.select({ character: true }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Characters', items: items, selected: selected });
});

/* Numbers */
router.get('/number', function(req, res, next) {
	var items = chinese.select({ category: 'number' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Numbers', items: items, selected: selected });
});

/* Numbers */
router.get('/food', function(req, res, next) {
	var items = chinese.select({ category: 'food' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Food', items: items, selected: selected });
});

/* Verbs */
router.get('/verb', function(req, res, next) {
	var items = chinese.select({ type: 'verb' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Verbs', items: items, selected: selected });
});

module.exports = router;
