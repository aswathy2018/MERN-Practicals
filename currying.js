function cur(a){
    return function (b){
        return function (c){
                   return a+b+c
        }
    }
}
console.log(cur(2)(3)(4));






// function cur(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return a+b+c+d
//             }
//         }
//     }
// }

// const val1 = cur(2)
// const val2 = val1(2)
// const val3 = val2(4)
// const val4 = val3(6)

// console.log(val4)