const crypto = require('crypto');

module.exports = (str, algorithm, out) => {
	algorithm = algorithm || 'md5';
	out = out || 'hex';

	const hash = crypto.createHash(algorithm);
	hash.update(str);

	return hash.digest(out);
};
