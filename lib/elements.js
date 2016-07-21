
var sl = require('simplelists');

var elements = [];

module.exports = {
    clear: function () { elements = []; },
    add: function (element) { elements.push(element); },
    list: function (filter) { 
        if (!filter) 
            return elements; 
        
        return sl.where(elements, filter);
    }
};

