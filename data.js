const fs = require('fs')

//const data = Date()

fs.writeFile("Date.txt", Date(), function(error){
    if(error){
        console.log('Error..')
    }
})