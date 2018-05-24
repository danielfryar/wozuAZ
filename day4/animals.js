let dessert = [
    "cookies",
    "cake",
    "ice cream"
];

// let i = 0;
// while (i < dessert.length) {
//     console.log(dessert[i]);
//     i++;
// }
let output = "";
for (let i = 0; 
    i < dessert.length; 
    i++) {
        output = "dessert at place " + i + " = " + dessert[i];
        console.log(output);
}

// dessert.length = 3
// i = 0
// "cookies"
// i = 1
// "cake"
// i = 2
// "ice cream"
// i = 3
// done
