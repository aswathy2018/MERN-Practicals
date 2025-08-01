let pr1 = new Promise((resolve,reject)=>setTimeout(resolve,10,"Hloiii"))

let pr2 = new Promise((resolve,reject)=>setTimeout(resolve,100,"Broiiiii"))

let pr3 = new Promise((resolve,reject)=>setTimeout(reject,500,"Koii"))

Promise.allSettled([pr1,pr2,pr3])

.then((resolve)=>console.log(resolve))
.catch((reject)=>console.log(reject))