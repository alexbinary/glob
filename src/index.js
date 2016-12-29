
let glob = require('glob')
let promisify = require('@alexbinary/promisify')

let myglob = promisify(glob)
myglob.sync = glob.sync

module.exports = myglob
