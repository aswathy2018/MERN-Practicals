// const express = require('express')

// const app = express()

// app.get('/', (req, res) => {
//     throw new Error("Caught an error")
// })

// app.use((err, req, res, next) => {
//     console.log(err.stack)
//     res.status(404).send("We found an error")
// })

// app.listen(3001, () => {
//     console.log("Server running..")
// })




const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    throw new Error("Error occures")
})

app.use((error, req, res, next)=>{
    console.log(error.stack)
    res.status(404).send("Page not found")
})

app.listen(3008, ()=>{
    console.log("Server conncted..")
})