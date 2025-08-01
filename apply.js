let obj={
    name: "Philip",
    age: 29
}

let obj2={
    name: "James",
    age: 22
}

let real=function(n){
    console.log(n+this.name)
}

real.apply(obj,["My name is "])