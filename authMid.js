const express = require ('express')
const app = express()

const authMid = (req,res,next)=>{
    const isAuth = true
    if(isAuth){
        console.log("User logged in");
        next()
    }
    else{
        res.status(404).send("Unauthorized logged in")
    }
}

app.use(authMid)

app.get('/',(req,res)=>{
    res.send("Hii guyss..")
})

app.listen(3002, ()=>console.log("Loading.."))