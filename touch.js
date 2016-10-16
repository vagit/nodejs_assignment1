#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise


async function touch() {
    // Use 'await' in here
    // Your implementation here
    if (process.argv.length < 3) {
    	console.log('Miss arguments')
    	process.exit(1)
    }
    let filename = process.argv[2]

    var path = require('path')

	filename = path.join(__dirname, filename);

    let fd = await fs.open(filename,'r',(err,data)=>{});

    console.log(fd)

	var now = Date.now()
	fs.futimes(fd, new Date(), new Date(), function(err) {
	});
}

touch();