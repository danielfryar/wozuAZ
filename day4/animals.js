let names = ['Larry', 'Moe', 'Curly', 'Tracy'];

let sayHello = function (param) {
    console.log("Hello "+param);
    console.log("Hola");
}

for (let i=0;i<names.length;i++) {
    sayHello(names[i]);
}

if (names[0] == 'Larry' && names[1] == 'Larry')
 console.log('Larry is both of the first two')
