let num1 = [1,2,3,4]
let num2 = [9,3,2,8,2,4]
let num3 = num1.concat(num2)
console.log(num3)

let val = [...new Set(num3)]

let sum = val.reduce((acc,val)=>acc+val,0)
console.log(sum);
