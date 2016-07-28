
var sl = require('simplelists');

var elements = [];
var elemid = 0;

function clear() {
    elements = [];
    elemid = 0;
}

function addElement(element) {
    element.id = ++elemid;
    elements.push(element);     
}

function addElements(elements) {
    elements.forEach(function (el) {
        addElement(el);
    });
}

function add(data) {
    if (Array.isArray(data))
        return addElements(data);
    
    return addElement(data);
}

function list(filter) {
    if (!filter) 
        return elements; 
    
    return sl.where(elements, filter);    
}

module.exports = {
    clear: clear,
    add: add,
    list: list,
    select: function (filter, count) {
        return sl.take(sl.shuffle(this.list(filter)), count);
    }
};

