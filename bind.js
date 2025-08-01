let obj = {
    name: "Aswathy"
}

let obj2 = {
    name: "Anoop"
}

let fn = function(a){
    console.log(a+this.name)
}

let vari = fn.bind(obj2,"My name is ")

vari()