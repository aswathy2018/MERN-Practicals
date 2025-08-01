function ref(callback){
    let a = 2
    let b = 3
    console.log(callback(a,b))
}

function val (a,b){
    let sum = a+b
    let avg = sum/2
    return avg
}

ref(val)


