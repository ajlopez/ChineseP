
var elems = require('./elements');

var elements = elems.elements();

module.exports = {
    list: function () { return elements.list(); },
	load: function (filename) { elements.add(require(filename)); }
}

