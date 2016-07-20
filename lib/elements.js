
var sl = require('simplelists');

var elements = [];

module.exports = {
    add: function (element) { elements.push(element); },
    list: function (filter) { 
        if (!filter) 
            return elements; 
        
        return sl.where(elements, filter);
    }
};

