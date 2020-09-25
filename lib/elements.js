
const sl = require('simplelists');

function Elements() {
    const elements = [];
    let elemid = 0;

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
        
		let fns;
		
		if (filter.fns) {
			fns = filter.fns;
			delete filter.fns;
		}
        
        let list = elements;
		
		if (fns)
			fns.forEach(function (fn) {
				list = sl.where(list, fn);
			});

        if (list)
            list = sl.where(list, filter);

        return list;    
    }
    
    this.select = function (filter, count) {
        const list = this.list(filter);
        return sl.take(sl.shuffle(list), count);
    }
}

module.exports = {
    elements: function () { return new Elements(); }
};

