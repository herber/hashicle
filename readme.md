# hashicle [![Build Status](https://travis-ci.org/tobihrbr/hashicle.svg?branch=master)](https://travis-ci.org/tobihrbr/hashicle)

> Generate hashes

## Install

```
$ npm install --save hashicle
```

## Usage

```js
const hashicle = require('hashicle');

hashicle('unicorns');
//=> '02d8c4ac323c5df679077f020f170453'
```

## API

### hashicle(data, [algorithm, out])

#### data

Type: `string`

The data you want to be hashed.

#### algorithm

Type: `string`<br>
Default: `md5`

Hashing algorithm

#### out

Type: `string`<br>
Default: `hex`

Output format

## License

MIT © [Tobias Herber](https://tobihrbr.com)
