const app = require("fs");
// app.appendFile("Demo.txt"," How is going on?",function(error){
//     if(error){
//         console.log("Unable to load..");
//     }
// })

app.appendFile("Chat.txt", " I'm a good girl..",function(error){
    if(error){
        console.log("Error..")
    }
})