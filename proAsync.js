const { log } = require('console');
const fs = require('fs')

let mango=true;

let arr= new Promise((resolve,reject)=>{
    if(mango){
        resolve("It's a mango..");
    }
    else{
        reject("Error..");
    }
})

async function data() {
    try{
        let datas = await arr;
        fs.readFile('demo.txt', 'utf-8', function(error,data){
            console.log(data);
        })
    }
    catch(error){
        console.log(error)
    }
}

data()