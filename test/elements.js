
var elements = require('../lib/elements');
var sl = require('simplelists');

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

exports['add and retrieve element'] = function(test) {
    var element = {
        translation: "wo",
        type: "pronoun"
    };
    
    elements.add(element);
    
    var list = elements.list({ type: "pronoun" });
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
    test.equal(list[0].translation, "wo");
}

exports['clear and get empty list'] = function(test) {
    elements.clear();
    
    var list = elements.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['add elements'] = function(test) {
    var elems = [
        {
            translation: "I'm fine"
        },
        {
            translation: "You are fine"
        }
    ];
    
    elements.add(elems);
    
    var list = elements.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 2);
    test.equal(list[0].translation, "I'm fine");
    test.equal(list[1].translation, "You are fine");
}

exports['select elements'] = function(test) {
    elements.clear();
    
    for (var k = 1; k < 20; k++)
        elements.add({ title: 'Element ' + k, value: k });
    
    var result = elements.select(function (el) { return el.value % 2 == 0 }, 4);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 4);
    
    test.ok(sl.all(result, function (el) { return el.value % 2 == 0 }));
}
