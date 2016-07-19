
var elements = require('../lib/elements');

exports['get empty list'] = function(test) {
    var list = elements.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['add element'] = function(test) {
    var element = {
        translation: "I'm fine"
    };
    
    elements.add(element);
    
    var list = elements.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
    test.equal(list[0].translation, "I'm fine");
}

