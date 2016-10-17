#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')


async function mkdir(dirPath) {

	let stat = await fs.stat
    
    if (process.argv.length < 3) {
      console.log('Miss arguments')
      process.exit(1)
    }
    let dir = process.argv[2]

    fs.mkdir(dir);
}

mkdir()