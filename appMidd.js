const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log("Hiii")
    next();
})

app.get('/', (req,res)=>{
    res.send("loading..")
})

app.get('/home', (req,res)=>{
    res.send('Blaaahhhhh..')
    console.log('Connected..');
})

app.listen(3005, ()=>console.log("Server connected.."))