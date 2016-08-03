
var chinese = require('../lib/chinese');

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
