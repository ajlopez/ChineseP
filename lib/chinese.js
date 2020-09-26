
const elems = require('./elements');

let elements = elems.elements();

function reviewFilter(filter) {
	if (!filter)
		return;

	const fns = [];
	
	if (filter.character === true) {
		fns.push(function (item) {
			return item.chinese && item.chinese.length === 1;
		});
        
		delete filter.character;
	}
	else if (filter.character) {
		const character = filter.character;
        
		fns.push(function (item) {
			return item.chinese && item.chinese.indexOf(character) >= 0;
		});
        
		delete filter.character;
	}
	
	if (filter.text) {
		const text = filter.text;
        
		fns.push(function (item) {
			return item.translation && item.translation.indexOf(text) >= 0;
		});
        
		delete filter.text;
	}
	
	if (fns.length)
		filter.fns = fns;
}

module.exports = {
    list: function (filter) { 
		reviewFilter(filter);

		return elements.list(filter); 
	},
	load: function (filename) { elements.add(require(filename)); },
	select: function (filter, count) { 
		reviewFilter(filter);
		
		return elements.select(filter, count); 
	},
    clear: function () { elements = elems.elements(); }
}

