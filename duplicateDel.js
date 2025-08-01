let arr=[1,2,3,1,4,2,6]
let arr2=[9,6,4,3,8,2,1,5]

//merging
for(let i=0 ; i<arr2.length ; i++){
    arr[arr.length]=arr2[i]
}

//duplicates
for(let i=0 ; i<arr.length ; i++){
    for(let j=i+1 ; j<arr.length ; j++){
        if(arr[i]==arr[j]){
            for(let k=i ; k<arr.length-1 ; k++){     //deleting
                arr[k]=arr[k+1]
            }
            arr.length--
            i--
        }
    }
}
console.log(arr)