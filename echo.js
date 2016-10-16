#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise


async function echo() {
    // Use 'await' in here
    // Your implementation here
    console.log(process.argv[2]);
}

echo()