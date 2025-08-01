// function* data(){
//   for(let i=1; i<=100; i++){
//     if(i%5==0){
//       yield i
//     }
//   }
// }

// const val = data()
// for(let num of val){
//   console.log(num);
// }


// function* val(){
//     for(let i=1 ; i<=10 ; i++){
//         yield i
//     }
// }

// let num = val()
// for( let i=1 ; i<=10 ; i++ ){
//     console.log(num.next().value);
    
// }




// let obj = {
//   a: 1,
//   b: 23,
//   c: 3
// }

// let arr = Object.keys(obj).reduce((acc,val)=>obj[acc]>obj[val]?acc:val)
// console.log(arr);


// let arr = [11,2,3,4,5,6,7]

// let value = arr.reduce((acc,val)=>{
//   if(val%2!=0){
//     if(acc>val){
//     return val
//   }
// }
//   return acc
// })

// console.log(value);




// largest
// let arr = [4,6,2,9,85,4,2,75,3,8]

// // let largest = Infinity
// let largest = 0
// for(let i=0; i<arr.length; i++){
//   if(arr[i]<largest){
//     largest=arr[i]
//   } 
// }
// console.log(largest);


// let arr = [12,34,12,34,56,78,67,56,78,]

// let count = []
// for(let i=0 ; i<arr.length ; i++){
//   for(let j=i+1 ; j<arr.length ; j++){
//     if(arr[i]==arr[j]){
//         count.push(arr[i])
      
//     }
//   }
// }
// console.log(count);



// let arr = [12, 34, 12, 34, 56, 78, 56, 78];

// let frequency = [];

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   if (frequency[num]) {
//     frequency[num]++;
//   } else {
//     frequency[num] = 1;
//   }
// }

// for (let num in frequency) { 
//   if (frequency[num] > 1) {
//     console.log(`${num}: ${frequency[num]}`);
//   }
// }


// let arr = [23,1,47,5,-3,3,7]

// let newa = arr.reduce((acc,val)=>{
//   if(val%2!=0 && val<acc){
//     return val
//   }
//   return acc
// })

// console.log(newa);


// function* fun(){
//   for(let i=100 ; i>=1 ; i--){
//     if(i%7==0){
//       if(i%2==0){
//         yield i
//       }
//     }
//   }
// }

// let newf = fun()
// for(let val of newf){
//   console.log(val);
// }



// function * data(){
//   for(let i=1;i<=100;i++)
//     {
//       if(i%7==0){
//         yield i
//       }
//     }
    
// }
// let num=data()
// for(let i=1;i<=100;i++)
// {
//   if(i%7==0)
//   {
//     console.log(num.next().value)
//   }
  
// }



// function * data(){
//     for(let i=1;i<=100;i++)
//       {
//         if(i*7){
//           yield i*7
//         }
//       }
      
//   }
//   let num=data()
//   for(let i=1;i<=100;i++)
//   {
//     if(i*7>100)
//     {
//       break;
//     }
//     console.log(num.next().value)
//   }  



// let a=[1,-1,3,"string",true,false,1,-90]
// let b=a.reduce((acc,curr)=>{
//     if(typeof curr=="number"&&curr>0){
//          return curr+acc
//     }
//     return acc
// },0)
// console.log(b)




//sum using functions

// function calc(a,b){
//     return a+b
// }

// function sumOf(num1,num2){
//     return calc(num1,num2)
// }

// const num1 = 3
// const num2 = 2
// const sum = sumOf(num1,num2)
// console.log(sum);



// let arr = [2,64,-2,7,'sjbf',-12,4,'jashgf',-4,-1,'hasgdvsa',21,-76]

// let b = arr.reduce((acc,val)=>{
//     if(typeof val=='number' && val>0 ){
//         return acc+val
//     }
//     return acc
// },0)

// console.log(b);



// let arr = [67,8,3,9,5,23,75,34]



// let val = arr.reduce((acc,cur)=>{
//     if(cur%2!=0 && cur>acc){
//         return cur
//     }
//     return acc
// })
// console.log(val);

// let eve = arr.filter((num)=>num%2==0)
// let newar = eve.reduce((curr,val)=>curr+val)
// console.log(newar);


// let number = 12
// let pr = new Promise((resolve,reject)=>{
//         if(number%2==0){
//             resolve('Even')
//         }
//         else{
//             reject('odd')
//         }
//     })

// .then((res)=>console.log(res))
// .catch((rej)=>console.log(rej))



// let pr = new Promise((resolve,reject)=>{
//     let ev = []
//     let odd = []
//     for(i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         ev.push(arr[i])
//     }
//     else{
//         odd.push(arr[i])
//     }
// }
// resolve({even: ev, oddnum: odd})
// reject("Invalid number")
// })
// .then((res)=>{
//     console.log(res.even)
//     console.log(res.oddnum)
// })
    
// .catch((error)=>console.log(error))



// let obj1 = {
//     a: 67,
//     b: 54,
//     c: 4
// }

// let arr1 = Object.values(obj1).reduce((acc,cur)=>(acc>cur?acc:cur))

// let arr1 = Object.keys(obj1).reduce((acc,val)=>obj1[acc]>obj1[val]?acc:val)
// console.log(arr1);



//unique

// let arr = [45,23,86,43,45,79,11,23,11]
// let uni = []
// let index = 0
// for(i = 0 ; i < arr.length ; i++){
//     let unique = true
//     for (j=0 ; j<uni.length ; j++){
//         if(arr[i]==uni[j]){
//             unique=false
//             break;
//         }
//     }
//     if(unique){
//         uni[index] = arr[i]
//         index++
//     }
// }
// console.log(uni);




// let arr=[3,26,3,5,8,53,2,1,68,69,6]
// let lar = Infinity
// let sec = Infinity

// for(i=0;i<arr.length;i++){
//     if(arr[i]<lar){
//         lar=arr[i]
//     }
// }

// for(i=0;i<arr.length;i++){
//     if(arr[i]<sec && arr[i]>lar){
//         sec=arr[i]
//     }
// }
// console.log(sec);



// let obj = {
//     a: 75,
//     b: 34,
//     c: 27
// }
// let sum =0;
// for(let key in obj)
// {
//     sum = sum + obj[key]
// }
// console.log(sum)


// let str = "brototype";
// let New = "";
// for(let i=0;i<str.length;i++)
// {
//     New = New + str[str.length-i-1]
// }
// console.log(New)


// let spli=str.split('').reverse().join('')
// console.log(spli)




// let obj ={
//     a: 34,
//     b: 36,
//     c: 30
// }

// let lar = Infinity
// let larKey = null

// let sum = 0

// for(let num in obj){
    // if(obj[num]<lar){
    //     lar=obj[num]
    //     larKey = num
    // }
//     sum = sum+obj[num]
// }
// console.log(`${larKey} : ${lar}`)
// console.log(sum)



// let str = "aswathy";
// let vow = []

// for(i=0;i<str.length;i++){
//     if('aeiou'.includes(str[i])){
//         vow.push(str[i])
//     }
// }
// console.log(vow)



// let str = "brototype";
// let New = "";
// for(let i=0;i<str.length;i++)
// {
//     New = New + str[str.length-i-1]
// }
// console.log(New)

// let spli=str.split('').reverse().join('')
// console.log(spli)


// let mango = true

// let pro = new Promise((resolve,reject)=>{
//     if(mango){
//         setTimeout(()=>resolve("It's a mango"),2000)
//     }
//     else{
//         reject("Not a mango")
//     }
// })

// .then((res)=>console.log(res))
// .catch((error)=>console.log(error))


// let valu = true

// if(valu){
//     let vari = setInterval(()=>{
        
//         console.log("Hiii");
        
//     },1500)

//     setTimeout(()=>{
//         clearInterval(vari)
//         console.log("ended");
        
//     },3000)

// }else{
//     console.log("Stop");
// }


// const express = require('express')
// const app = express()
// const fs = require('fs')

// app.use((req,res,next)=>{
//     fs.readFile('date.txt','utf-8',function(error,data){
//         console.log(data);
//     })
//     next()
// })

// app.get('/',(req,res)=>{
//     res.send("Running..")
// })

// app.listen(3002, ()=>{
//     console.log("Server..");
// })

// let arr = [2,5,3,7,[7,4,8,2]]

// let val = {...arr}
// val [1] = 6
// val [4] [2] = 35

// console.log(arr);
// console.log(val);




// let obj = null
// console.log(obj?.name);



// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   // Create Source Object
//   const person2 = {firstName: "Anne",lastName: "Smith"};
  
//   // Assign Source to Target
//   let vari = Object.assign(person1, person2);
//   console.log(vari);
  
  
  

// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue"
//   };
  
//   let text = Object.entries(person);
//   console.log(text);



// let sum = (a,b)=>{
//     return a+b
// }

// console.log(sum(2,3));




// let arr=[1,2,3,4,5,6,7,8,9]

// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i]%2==0){
//    arr.splice(i,1,65)
    
//     }
    
// }
// console.log(arr)




// let arr = [2,4,6,4,7,45,3,25,875,345]

// let newA = arr.reduce((acc,val)=>{
//     if(val%2!==0){
//         if(val<acc){
//             val=acc
            
//         }
//         return val
        
//     }
//     return acc
// })

// console.log(newA);

// let lar = 0
// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i]%2!==0){
//         if(arr[i]>lar){
//             lar=arr[i]
//         }
//     }
// }
// console.log(lar);



// let obj = {
//     a: 54,
//     b: 32,
//     c: 57,
//     d: 86,
//     e: 21,
//     f: 11
// }

// let val1 = Object.values(obj).reduce((acc,val)=>{
//     if(val%2==0){
//         if(val<acc){
//             val=acc
//         }
//         return val
//     }
//     return acc
// })

// console.log(val1);

// let lar = ""
// let lar1 = 0
// for(let num in obj){
//     if(obj[num]%2!==0){
//         if(obj[num]>lar1){
//             lar1=obj[num]
//             lar = num
//         }
//     }
// }
// console.log(lar);


// let ob = {
//     name: "Aswathy",
//     greet: function(){
//         return console.log("Hellooo " +this.name);
        
//     }
// }
// ob.greet()


// function* val(){
//     for(let i=1 ; i<=100 ; i++){
//         if(i%2==0){
//             yield i
//         }
//     }
// }

// let arr = val()
// for(let i=1 ; i<=100 ; i++){
//     if(i%2==0){
//         console.log(arr.next().value);
        
//     }
// }



// let obj = {
//     name: 'Aswathy',
//     age: 21,
//     place: 'Thrissur',
//     salary: 80000
// }

// const {...rest} = obj

// console.log(rest);

//   function sum(...number){
//     return number.reduce((acc,val)=>acc+val)
//   }

//   console.log(sum(1,2,3,4,5));
//   console.log(sum(9,8,7,6,56,5));
  

// function sum(a,b){
//     return a+b
// }
// console.log(sum(3,2))


// function val(name){
//     this.name = name
// }

// let sum = new val('Aswathy')
// console.log(sum.name);


// let namee = "Aswathy"

// let rev = ""

// for(let i=namee.length-1 ; i>=0 ; i--){
//     rev = rev+namee[i]
// }
// console.log(rev);



// let arr = [23,45,11,25,67,89,54,24]

// for(let i=0 ; i<arr.length ; i++){
//     for(let j=i+1 ; j<arr.length ; j++){
//         if(arr[i]<arr[j]){
//             arr[j]=arr[i]
//         }
//     }
// }

// const fs = require('fs');

// // Create a readable stream for the file
// const readable = fs.createReadStream("Node.txt");

// // Listen for 'data' events to read chunks from the stream
// readable.on('data', (chunk) => {
//     console.log("Reading chunk:", chunk.toString());
// });

// // Handle the end of the stream
// readable.on('end', () => {
//     console.log("Stream reading finished.");
// });

// // Handle errors
// readable.on('error', (err) => {
//     console.error("An error occurred:", err.message);
// });


// const express = require('express')

// const app = express()

// app.get('/', ()=>{
//     throw new Error("Error found")   
// })

// app.use((err,req,res,next)=>{
//     console.log(err.stack)
//     res.status(404).send("Founded")
// })

// app.listen(3001, ()=>console.log("server..")
// )


// let a = 'aswathy'
// let arr = []

// for(let i=a.length-1 ; i>=0 ; i--){
//     arr+=a[i]
// }
// console.log(arr);

// let arr = [23,11,69,4,23,75,11]
// let sum = []

// for(let i=0 ; i<arr.length ; i++){
//     for(let j=i+1 ; j<arr.length ; j++){
//         if(arr[i]==arr[j]){
//             sum.push(arr[i])
//         }
//     }
// }
// console.log(sum)


// let mul = 3

// for(let i=1 ; i<=10 ; i++){
//     console.log(i+ "x" +mul+ "=" +i*mul)
// }


// let word = ["abc","car","ada","racecar","cool"]

// let val = word.map((str)=>str.split('').reverse().join(''))
// console.log(val);


// let arr=[1,2,3,0,0,0,1,2,3];
// let index = 0

// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i]!==0){
//         arr[index]=arr[i]
//         index++
//     }
// }
// arr.length=index
// console.log(arr)



// class B{
//     constructor(){
//         console.log("class b")
//     }
//     g(){
//         console.log("class b function")
//     }
// }


// class A extends B{
//     constructor(name,age){
//         super()
//         this.name = name
//         this.age = age
//         console.log(name)
//     }
//    hi(a){
//         console.log(a)
//     }
// }

// let val = new A("Fahad",22)
// val.hi("hi")                    
// val.g()                    
// class B{
//     constructor(){
//         console.log("class b")
//     }
//     g(){
//         console.log("class b function")
//     }
// }


// class A extends B{
//     constructor(name,age){
//         super()
//         this.name = name
//         this.age = age
//         console.log(name)
//     }
//    hi(a){
//         console.log(a)
//     }
// }

// let val = new A("Fahad",22)
// val.hi("hi")                    
// val.g()                    
