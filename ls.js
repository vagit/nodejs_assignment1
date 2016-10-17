#!/usr/bin/env babel-node

require('./helper')
let fs = require('fs').promise
let path = require('path')
let argv = require('yargs').argv
let prom = require('songbird')

async function ls(dirPath) {
    let stat = await fs.stat(dirPath)
    if (!stat.isDirectory()) return [dirPath]

    let promises = []
    let merged = []
    let listItem = await fs.readdir(dirPath)
    for (let item of listItem ) {
        if (argv.R) {
            let promise = ls(path.join(dirPath, item))
            promises.push(promise)
        } else {
            merged.push(path.join(dirPath, item))
        }
    }

    if (argv.R) {
        let files = await prom.all(promises)
        merged = [].concat.apply([], files)
    }
    return merged

}

async  function main() {
    let input = process.argv[2] || __dirname
    console.log(await ls(input))
}

main()





/*async function ls(dirName) {
    // console.log('1' + dirName);
    let fileStat = await fs.stat(dirName)
    if (!fileStat.isDirectory()) {
        console.log('2' + dirName)
    }
    
    let promise = fs.readdir(dirName)
    let fileNames = await fs.readdir(dir)
    // Your implementation here
    let lsPromises = []

    console.log('4' + fileNames)

    for (let fileName in fileNames) {
        let filePath = path.join(dir, fileNames[fileName])
        // TODO: Obtain the stat promise from fs.stat(filePath)
        console.log('3' + filePath)
        // TODO: Use stat.isDirectory to exclude subdirectories
        // ...
        let fileStat = await fs.stat(filePath)
        if (fileStat.isDirectory()) {
            const promise = ls(filePath)
            lsPromises.push(promise)
        }
        process.stdout.write(filePath, '\n')
    }

}

async function main() {
    await ls(dir)
}


main()*/