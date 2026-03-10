// let arr = [1,9,0,0,2,7,0,6,0,9,8]

//moving the zeros into end of the array
let index = 0
for(let i=0 ; i<arr.length ; i++){
    if(arr[i]!==0){
        arr[index]=arr[i]
        index++
    }
}
while(index<arr.length){
    arr[index++]=0
}
console.log(arr)


//moving the zeros into beginning of the array
// let index = arr.length-1

// for(let i=arr.length-1 ; i>=0 ; i--){
//     if(arr[i]!==0){
//         arr[index--]=arr[i]
//     }
// }

// for(let i=index ; i>=0 ; i--){
//     arr[i]=0
// }
// console.log(arr);