
var chinese = require('../lib/chinese');

exports['get empty list'] = function(test) {
    var list = chinese.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}
