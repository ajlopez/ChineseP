
var words = require('../lib/words');

exports['get empty list'] = function(test) {
    var list = words.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

