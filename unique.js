let arr = [45,23,86,43,45,79,11,23,11]
let uni = []
let index = 0
for(i = 0 ; i < arr.length ; i++){
    let unique = true
    for (j=0 ; j<uni.length ; j++){
        if(arr[i]==uni[j]){
            unique=false
            break;
        }
    }
    if(unique){
        // uni.push(arr[i])
        uni[index] = arr[i]
        index++
    }
}
console.log(uni);