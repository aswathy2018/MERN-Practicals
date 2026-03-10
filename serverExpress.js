// const express = require('express')
// const app = express()

// app.get('/', (req, res) => {
//     res.send("Welcome")
// })

// app.listen(3009, () => console.log("Server running"))


const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.send("Welcome")
})

app.get('/demo', (req, res)=>{
    res.send(`My name is: ${req.query.data}`)
})

app.listen(3002, ()=>console.log("Server running.."))
