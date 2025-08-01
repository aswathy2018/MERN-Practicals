// function vall(callback){
//     let a=2
//     let b = 3
//     let c =1
//     console.log("Largest: ",callback(a,b,c))
// }

// function lar(a,b,c){
//     if(a>=b && a>=c){
//         return a
//     }
//     else if(b>=a && b>=c){
//         return b
//     }
//     else{
//         return c
//     }
// }

// vall(lar)

function lar(a,b,c){
    if(a>=b && a>=c){
        return a
    }
    else if(b>=a && b>=c){
        return b
    }
    else{
        return c
    }
}

console.log(lar(2,6,3))