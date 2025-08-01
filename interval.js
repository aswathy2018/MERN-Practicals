let count = 20

let inter = setInterval(()=>{
    console.log(count)
    count--
    
    if(count===0){
        clearInterval(inter)
    }
})