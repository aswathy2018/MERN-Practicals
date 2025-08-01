const fs = require('fs');

const writableStream = fs.createWriteStream('demo.txt')

writableStream.write("Hellooooo")

writableStream.end()

writableStream.on('finish',()=>{
    console.log('writted');
})