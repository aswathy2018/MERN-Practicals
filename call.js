let obj = {
    name: 'Philip'
}

let obj1 = {
    name: 'John'
}

let fn = function (a){
    console.log(a+this.name);
    
}

fn.call(obj1,"Hloo ")