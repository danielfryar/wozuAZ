let zoo = [
    "bear",
    "cardinal",
    "kitten",
    "elephant",
    "rabbit"
];
zoo.push("snake");
zoo.push("frog");
let temp = 0;
while (temp < zoo.length) {
    console.log("zoo["+temp+"]="+zoo[temp]);
    // console.log(zoo[temp]);
    temp++;
}
console.log("temp="+temp);

//zoo[]
//zoo.indexOf("animal")
//zoo.splice("target",1)
