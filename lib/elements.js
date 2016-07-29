
var sl = require('simplelists');

function Elements() {
    var elements = [];
    var elemid = 0;

    this.clear = function () {
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

    this.add = function (data) {
        if (Array.isArray(data))
            return addElements(data);
        
        return addElement(data);
    }    
    
    this.list = function (filter) {
        if (!filter) 
            return elements; 
        
        return sl.where(elements, filter);    
    }
}

var elements = new Elements();

module.exports = {
    clear: function () { elements.clear(); },
    add: function (data) { elements.add(data); },
    list: function (filter) { return elements.list(filter); },
    select: function (filter, count) {
        return sl.take(sl.shuffle(elements.list(filter)), count);
    }
};

