# hashicle [![Build Status](https://travis-ci.org/herber/hashicle.svg?branch=master)](https://travis-ci.org/herber/hashicle) [![Build status](https://ci.appveyor.com/api/projects/status/ii9qvh69xajoccpp?svg=true)](https://ci.appveyor.com/project/tobihrbr/hashicle) [![Coverage Status](https://coveralls.io/repos/github/tobihrbr/hashicle/badge.svg?branch=master)](https://coveralls.io/github/tobihrbr/hashicle?branch=master)

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
