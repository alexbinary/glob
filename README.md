# glob

Simple glob with promise support 🎉

[![npm](https://img.shields.io/npm/v/@alexbinary/glob.svg)](https://www.npmjs.com/package/@alexbinary/glob)
[![GitHub release](https://img.shields.io/github/release/alexbinary/glob.svg?label="github")](https://github.com/alexbinary/glob/releases/latest)
[![Build Status](https://travis-ci.org/alexbinary/glob.svg)](https://travis-ci.org/alexbinary/glob)
[![dependencies Status](https://david-dm.org/alexbinary/glob/status.svg)](https://david-dm.org/alexbinary/glob)
[![devDependencies Status](https://david-dm.org/alexbinary/glob/dev-status.svg)](https://david-dm.org/alexbinary/glob?type=dev)

Based on [glob](https://www.npmjs.com/package/glob) by [isaacs](https://www.npmjs.com/~isaacs)

Uses [@alexbinary/promisify](https://www.npmjs.com/package/@alexbinary/promisify) by [alexbinary](https://www.npmjs.com/~alexbinary)

## Install

Install with [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com) :

```bash
$ npm install @alexbinary/glob
# or
$ yarn add @alexbinary/glob
```

## Usage

```javascript
let glob = require('@alexbinary/glob')

glob('/foo/**').then((filepaths) => {
  console.log('found files: ' + filepaths)
})
```

## Documentation

```javascript
let glob = require('@alexbinary/glob')
```

### glob(pattern)

Returns files that match `pattern`.

This method supports both Promise and node callback style, and resolves with an `array` of `string` containing the absoute file paths to all matched files.

### glob.sync(pattern)

Synchronous version.

## Licence

MIT
