
function sort(arr){
    let temp = 0
for(i=0 ; i<arr.length ; i++){
    for(j=i ; j<arr.length ; j++){
        if(arr[i]>arr[j]){
        temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        }
    }
}
return arr
}

console.log(sort([3,6,5,8,4,1,23]))