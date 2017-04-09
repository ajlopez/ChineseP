
var chinese = require('../lib/chinese');
var sl = require('simplelists');

exports['get empty list'] = function(test) {
    var list = chinese.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['load elements and get non empty list'] = function(test) {
	chinese.load('../data/elements.json');
    var list = chinese.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.ok(list.length);
}

exports['get coffee element'] = function(test) {
    var list = chinese.list({ translation: 'coffee' });
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
}

exports['get elements by category'] = function(test) {
    var list = chinese.list({ category: 'beverage' });
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.ok(list.length > 0);
}

exports['select elements'] = function(test) {
    var list = chinese.select({ category: 'beverage' }, 3);
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 3);
	test.equal(list[0].category, 'beverage');
}

exports['select by character'] = function(test) {
    var list = chinese.select({ character: '水' }, 3);
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 3);
	test.ok(sl.all(list, function (item) {
		return item.chinese && item.chinese.indexOf('水') >= 0;
	}));
}

exports['select by text'] = function(test) {
    var list = chinese.select({ text: 'water' }, 3);
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 3);
	test.ok(sl.all(list, function (item) {
		return item.translation && item.translation.indexOf('water') >= 0;
	}));
}

exports['clear elements'] = function(test) {
    chinese.clear();
    var list = chinese.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

