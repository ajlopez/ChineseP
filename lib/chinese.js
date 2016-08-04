
var elems = require('./elements');

var elements = elems.elements();

module.exports = {
    list: function (filter) { return elements.list(filter); },
	load: function (filename) { elements.add(require(filename)); },
	select: function (filter, count) { return elements.select(filter, count); }
}

