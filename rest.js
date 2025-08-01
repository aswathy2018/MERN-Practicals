function fun(...number){
    let val = number.reduce((num,valu)=>num+valu,0)
    console.log(val)
}
fun(1,2,3,4,5)