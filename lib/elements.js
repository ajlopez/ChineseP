
var sl = require('simplelists');

function Elements() {
    var elements = [];
    var elemid = 0;

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
		var fns;
		
		if (filter.fns) {
			fns = filter.fns;
			delete filter.fns;
		}
		
		var list = this.list(filter);
		
		if (fns)
			fns.forEach(function (fn) {
				list = sl.where(list, fn);
			});
			
        return sl.take(sl.shuffle(list), count);
    }
}

module.exports = {
    elements: function () { return new Elements(); }
};

