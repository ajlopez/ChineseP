
var fs = require('fs');

var text = fs.readFileSync('../../data/elements.json').toString('utf8');

process.stdout.write(text);