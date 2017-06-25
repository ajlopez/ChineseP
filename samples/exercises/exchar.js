
var chinese = require('../../lib/chinese');

chinese.load('../data/elements.json');

var items = chinese.select({ character: true }, 5);

var n = Math.floor(Math.random() * items.length);

process.stdout.setEncoding('utf8');

console.dir(items);

process.stdout.write('Character ');
process.stdout.write(items[n].chinese);
process.stdout.write('\n');

for (var k = 0; k < items.length; k++) {
	console.log((k + 1).toString(), items[k].translation);
	console.log((k + 1).toString(), items[k].pinyin);
}

// https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input/

/*
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (text) {
    console.log('received data:', util.inspect(text));
    if (text === 'quit\n') {
      done();
    }
});
*/