
var elements = require('../lib/elements');
var sl = require('simplelists');

exports['get empty list'] = function(test) {
    var elems = elements.elements();
    var list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['add element'] = function(test) {
    var elems = elements.elements();

    var element = {
        translation: "I'm fine"
    };
    
    elems.add(element);
    
    var list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
    test.equal(list[0].translation, "I'm fine");
}

exports['add and retrieve element'] = function(test) {
    var elems = elements.elements();
    
    var element1 = {
        translation: "I'm fine"
    };
    var element2 = {
        translation: "wo",
        type: "pronoun"
    };
    
    elems.add(element1);
    elems.add(element2);
    
    var list = elems.list({ type: "pronoun" });
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
    test.equal(list[0].translation, "wo");
    test.ok(list[0].id);
}

exports['clear and get empty list'] = function(test) {
    var elems = elements.elements();
    
    var list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['add elements'] = function(test) {
    var elems = elements.elements();
    
    var elemlist = [
        {
            translation: "I'm fine"
        },
        {
            translation: "You are fine"
        }
    ];
    
    elems.add(elemlist);
    
    var list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 2);
    test.equal(list[0].translation, "I'm fine");
    test.equal(list[1].translation, "You are fine");
}

exports['select elements'] = function(test) {
    var elems = elements.elements();
    
    for (var k = 1; k < 20; k++)
        elems.add({ title: 'Element ' + k, value: k });
    
    var result = elems.select(function (el) { return el.value % 2 == 0 }, 4);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 4);
    
    test.ok(sl.all(result, function (el) { return el.value % 2 == 0 }));
}

