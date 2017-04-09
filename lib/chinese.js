
var elems = require('./elements');

var elements = elems.elements();

module.exports = {
    list: function (filter) { return elements.list(filter); },
	load: function (filename) { elements.add(require(filename)); },
	select: function (filter, count) { 
        var fns = [];
        
		if (filter.character) {
			var character = filter.character;
			fns.push(function (item) {
				return item.chinese && item.chinese.indexOf(character) >= 0;
			});
			delete filter.character;
		}
        
		if (filter.text) {
			var text = filter.text;
			fns.push(function (item) {
				return item.translation && item.translation.indexOf(text) >= 0;
			});
			delete filter.text;
		}
        
        if (fns.length)
            filter.fns = fns;
		
		return elements.select(filter, count); 
	},
    clear: function () { elements = elems.elements(); }
}

