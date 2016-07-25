
var sl = require('simplelists');

var elements = [];
var elemid = 0;

module.exports = {
    clear: function () { elements = []; elemid = 0; },
    add: function (element) { 
        if (!Array.isArray(element)) {
            element.id = ++elemid;
            elements.push(element); 
            return;
        }
        
        element.forEach(function (el) {
            el.id = ++elemid;
            elements.push(el);
        });
    },
    list: function (filter) { 
        if (!filter) 
            return elements; 
        
        return sl.where(elements, filter);
    },
    select: function (filter, count) {
        return sl.take(sl.shuffle(this.list(filter)), count);
    }
};

