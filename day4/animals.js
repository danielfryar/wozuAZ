let names = ['Larry', 'Moe', 'Curly', 'Tracy'];

let sayHello = function (param) {
    console.log("Hello "+param);
    console.log("Hola");
}

for (let i=0;i<names.length;i++) {
    sayHello(names[i]);
}
