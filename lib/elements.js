
var sl = require('simplelists');

var elements = [];

module.exports = {
    clear: function () { elements = []; },
    add: function (element) { 
        if (!Array.isArray(element)) {
            elements.push(element); 
            return;
        }
        
        element.forEach(function (el) {
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

