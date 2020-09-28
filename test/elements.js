
const elements = require('../lib/elements');
const sl = require('simplelists');

exports['get empty list'] = function(test) {
    const elems = elements.elements();
    const list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['add element'] = function(test) {
    const elems = elements.elements();

    const element = {
        translation: "I'm fine"
    };
    
    elems.add(element);
    
    const list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
    test.equal(list[0].translation, "I'm fine");
}

exports['add and retrieve element'] = function(test) {
    const elems = elements.elements();
    
    const element1 = {
        translation: "I'm fine"
    };
    const element2 = {
        translation: "wo",
        type: "pronoun"
    };
    
    elems.add(element1);
    elems.add(element2);
    
    const list = elems.list({ type: "pronoun" });
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 1);
    test.equal(list[0].translation, "wo");
    test.ok(list[0].id);
}

exports['clear and get empty list'] = function(test) {
    const elems = elements.elements();
    
    const list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 0);
}

exports['add elements'] = function(test) {
    const elems = elements.elements();
    
    const elemlist = [
        {
            translation: "I'm fine"
        },
        {
            translation: "You are fine"
        }
    ];
    
    elems.add(elemlist);
    
    const list = elems.list();
    
    test.ok(list);
    test.ok(Array.isArray(list));
    test.equal(list.length, 2);
    test.equal(list[0].translation, "I'm fine");
    test.equal(list[1].translation, "You are fine");
}

exports['select elements'] = function(test) {
    const elems = elements.elements();
    
    for (let k = 1; k < 20; k++)
        elems.add({ title: 'Element ' + k, value: k });
    
    const result = elems.select(function (el) { return el.value % 2 == 0 }, 4);
    
    test.ok(result);
    test.ok(Array.isArray(result));
    test.equal(result.length, 4);
    
    test.ok(sl.all(result, function (el) { return el.value % 2 == 0 }));
}

