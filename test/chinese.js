
const chinese = require('../lib/chinese');
const sl = require('simplelists');

exports['get empty list'] = function(test) {
    const list = chinese.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['load elements and get non empty list'] = function(test) {
	chinese.load('../data/elements.json');
    
    const list = chinese.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.ok(list.length);
}

exports['get coffee element'] = function(test) {
    const list = chinese.list({ translation: 'coffee' });
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
}

exports['get elements by category'] = function(test) {
    const list = chinese.list({ category: 'beverage' });
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.ok(list.length > 0);
}

exports['select elements'] = function(test) {
    const list = chinese.select({ category: 'beverage' }, 3);
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 3);
	test.equal(list[0].category, 'beverage');
}

exports['select by character'] = function(test) {
    const list = chinese.select({ character: '水' }, 3);
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 3);
    
	test.ok(sl.all(list, function (item) {
		return item.chinese && item.chinese.indexOf('水') >= 0;
	}));
}

exports['select characters'] = function(test) {
    const list = chinese.select({ character: true }, 3);
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 3);
    
	test.ok(sl.all(list, function (item) {
		return item.chinese && item.chinese.length === 1;
	}));
}

exports['select by text'] = function(test) {
    const list = chinese.select({ text: 'water' }, 3);
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 3);
    
	test.ok(sl.all(list, function (item) {
		return item.translation && item.translation.indexOf('water') >= 0;
	}));
}

exports['clear elements'] = function(test) {
    chinese.clear();
    
    const list = chinese.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

