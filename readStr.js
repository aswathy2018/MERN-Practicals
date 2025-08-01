const fs = require('fs')

const read = fs.createReadStream('Date.txt', {encoding: 'utf8'})

read.on('data', (chunk)=>{
    console.log("Raded: ",chunk)
})