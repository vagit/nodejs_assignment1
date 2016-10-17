#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')
let argv = require('yargs').argv
let arrDir = [];


async function rmFiles(dirPath) {
    let stat = await fs.stat(dirPath)
    if (!stat.isDirectory()) {
        await  fs.unlink(dirPath)
        return
    }

    arrDir.push(dirPath);

    let listItem = await fs.readdir(dirPath)
    for (let item of listItem ) {
        console.log('t'+ item)
        try {
            let currentStat = await fs.stat(dirPath + '/' + item)
            if (await currentStat.isDirectory()) {
                // arrDir.push(dirPath + '/' + item);
                await rmFiles(dirPath + '/' + item)
            } else {
                await  fs.unlink(dirPath + '/' + item)
            }
        } catch(err) {
            
        }
    }

}

async function rmDir(arrDir) {
    arrDir.reverse()
    // console.log(arrDir)
    for (let dir of arrDir) {
        await fs.rmdir(dir)
    }
}

async  function main() {
    let input = process.argv[2]
    await rmFiles(input)
    await rmDir(arrDir)
}

main()