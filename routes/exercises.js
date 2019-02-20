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

/* Characters level 1 */
router.get('/char1', function(req, res, next) {
	var items = chinese.select({ character: true, level: 1 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Characters (Level 1)', items: items, selected: selected });
});

/* Characters level 6 */
router.get('/char6', function(req, res, next) {
	var items = chinese.select({ character: true, level: 6 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Characters (Level 6)', items: items, selected: selected });
});

/* Numbers */
router.get('/number', function(req, res, next) {
	var items = chinese.select({ category: 'number' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Numbers', items: items, selected: selected });
});

/* Time */
router.get('/time', function(req, res, next) {
	var items = chinese.select({ category: 'time' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Time', items: items, selected: selected });
});

/* Family */
router.get('/family', function(req, res, next) {
	var items = chinese.select({ category: 'family' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Family', items: items, selected: selected });
});

/* Food */
router.get('/food', function(req, res, next) {
	var items = chinese.select({ category: 'food' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Food', items: items, selected: selected });
});

/* Place */
router.get('/place', function(req, res, next) {
	var items = chinese.select({ category: 'place' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Place', items: items, selected: selected });
});

/* Body */
router.get('/body', function(req, res, next) {
	var items = chinese.select({ category: 'body' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Body', items: items, selected: selected });
});

/* Connector */
router.get('/connector', function(req, res, next) {
	var items = chinese.select({ type: 'connector' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Connectors', items: items, selected: selected });
});

/* Adjetive */
router.get('/adjetive', function(req, res, next) {
	var items = chinese.select({ type: 'adjetive' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Adjetives', items: items, selected: selected });
});

/* Verbs */
router.get('/verb', function(req, res, next) {
	var items = chinese.select({ type: 'verb' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Verbs', items: items, selected: selected });
});

/* Adverbs */
router.get('/adverb', function(req, res, next) {
	var items = chinese.select({ type: 'adverb' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Adverbs', items: items, selected: selected });
});

/* Simple Verbs */
router.get('/sverb', function(req, res, next) {
	var items = chinese.select({ type: 'verb', character: true }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Simple Verbs', items: items, selected: selected });
});

/* Nouns */
router.get('/noun', function(req, res, next) {
	var items = chinese.select({ type: 'noun' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Nouns', items: items, selected: selected });
});

/* Pronouns */
router.get('/pronoun', function(req, res, next) {
	var items = chinese.select({ type: 'pronoun' }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Pronouns', items: items, selected: selected });
});

/* Simple Nouns */
router.get('/snoun', function(req, res, next) {
	var items = chinese.select({ type: 'noun', character: true }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Simple Nouns', items: items, selected: selected });
});

/* Words */
router.get('/word', function(req, res, next) {
	var items = chinese.select({ }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Words', items: items, selected: selected });
});

/* Words level 1 */
router.get('/word1', function(req, res, next) {
	var items = chinese.select({ level: 1 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Words (Level 1)', items: items, selected: selected });
});

/* Words level 2 */
router.get('/word2', function(req, res, next) {
	var items = chinese.select({ level: 2 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Words (Level 2)', items: items, selected: selected });
});

/* Words level 6 */
router.get('/word6', function(req, res, next) {
	var items = chinese.select({ level: 6 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercise', { title: 'Words (Level 6)', items: items, selected: selected });
});

/* Pinyin Words */
router.get('/pword', function(req, res, next) {
	var items = chinese.select({ }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercisep', { title: 'Words', items: items, selected: selected });
});

/* Pinyin Words level 1 */
router.get('/pword1', function(req, res, next) {
	var items = chinese.select({ level: 1 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercisep', { title: 'Words (Level 1)', items: items, selected: selected });
});

/* Pinyin Words level 2 */
router.get('/pword2', function(req, res, next) {
	var items = chinese.select({ level: 2 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercisep', { title: 'Words (Level 2)', items: items, selected: selected });
});

/* Pinyin Words level 6 */
router.get('/pword6', function(req, res, next) {
	var items = chinese.select({ level: 6 }, 5);
	var selected = Math.floor(Math.random() * items.length);
	res.render('exercisep', { title: 'Words (Level 6)', items: items, selected: selected });
});

module.exports = router;
