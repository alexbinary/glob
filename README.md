# glob
Promisified version of glob 🙀

## Install

Install with npm/yarn :

```
$ npm install https://github.com/alexbinary/glob.git

$ yarn add https://github.com/alexbinary/glob.git
```

## Usage

```javascript
let glob = require('alexbinary.glob')

glob('/foo/**').then((filepaths) => {
  console.log('found files: ' + filepaths)
})
```

## Licence

MIT
