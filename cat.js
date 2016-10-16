#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise


async function cat() {
    // Use 'await' in here
    // Your implementation here
    if (process.argv.length < 3) {
    	console.log('Miss arguments')
    	process.exit(1)
    }
    let filename = process.argv[2]
    let text = await fs.readFile(filename, 'utf8')
    process.stdout.write(text+ '\n')
}

cat()