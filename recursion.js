function nNumbers(n,number=0){
    if(number===n)return
    console.log(number+1)
    nNumbers(n,number+1)
}

nNumbers(10)