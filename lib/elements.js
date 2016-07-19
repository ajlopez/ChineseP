
var elements = [];

module.exports = {
    add: function (element) { elements.push(element); },
    list: function () { return elements; }
};

