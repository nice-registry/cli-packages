# cli-packages

Names of all npm packages that have a command-line interface. Sorted by download count, descending.

## Installation

```sh
yarn add cli-packages
```

## Usage

```js
const names = require('cli-packages')

names.length
// 47663

names.slice(0, 10)
// [
//   'mkdirp',
//   'semver',
//   'rimraf',
//   'esprima',
//   'mime',
//   'window-size',
//   'acorn',
//   'uglify-js',
//   'nopt',
//   'js-yaml'
// ]
```

## Tests

```sh
yarn && yarn test
```

## See also

- [all-the-clis](https://github.com/nice-registry/all-the-clis): A list of all command line executables in npm, mapping to the packages which supply them.

## License

MIT
