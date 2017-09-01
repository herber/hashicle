const ava = require('ava');
const fs = require('fs');
const path = require('path');
const hashicle = require('./');

let data = fs.readFileSync(path.join(__dirname, 'algs.txt'));
data = data.toString();
data = data.split('\n');

for (const d in data) {
	ava('creates ' + data[d] + 'hash', (t) => {
		const hash = hashicle('test');

		t.true(typeof hash === 'string');
	});
}

ava('creates hash', t => {
	const hash = hashicle('test');

	t.is(hash, '098f6bcd4621d373cade4e832627b4f6');
});
