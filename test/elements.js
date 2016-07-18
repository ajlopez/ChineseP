
var elements = require('../lib/elements');

exports['get empty list'] = function(test) {
    var list = elements.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

