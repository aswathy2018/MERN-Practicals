// const pr1 = new Promise(resolve => setTimeout(resolve, 500, "Baabaa"))
// const pr2 = new Promise(reject => setTimeout(reject, 10, "Booboo"))
// const pr3 = new Promise(reject => setTimeout(reject, 100, "Weeeee"))

// Promise.race([pr1, pr2, pr3])

// .then((result) => console.log(result))



const pr1= new Promise(resolve=> setTimeout(resolve,500,'Haaaaaaaaaaaaaa'))
const pr2= new  Promise(resolve=> setTimeout(resolve, 470, 'Heeeeeeeeeeeee'))
const pr3= new Promise(reject=> setTimeout(reject,460,'Doooooooooooooo'))

Promise.any([pr1,pr2,pr3])

.then(resolve=>console.log(resolve))
.catch(rej=>console.log(rej))