
var elems = require('./elements');

var elements = elems.elements();

module.exports = {
    list: function (filter) { return elements.list(filter); },
	load: function (filename) { elements.add(require(filename)); },
	select: function (filter, count) { 
		if (filter.character) {
			var character = filter.character;
			filter.fns = [];
			filter.fns.push(function (item) {
				return item.chinese && item.chinese.indexOf(character) >= 0;
			});
			delete filter.character;
		}
		
		return elements.select(filter, count); 
	},
    clear: function () { elements = elems.elements(); }
}

