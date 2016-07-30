
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
    
    this.select = function (filter, count) {
        return sl.take(sl.shuffle(this.list(filter)), count);
    }
}

module.exports = {
    elements: function () { return new Elements(); }
};

