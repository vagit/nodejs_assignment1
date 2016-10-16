#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise


async function mkdir() {
    
    if (process.argv.length < 3) {
      console.log('Miss arguments')
      process.exit(1)
    }
    let filename = process.argv[2]

    let file = fs.openSync(filename, 'r')
}

mkdir()