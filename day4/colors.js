let changeColor = function(color) {
    console.log("inside function", color)
    document.getElementById("main")
        .style.backgroundColor = color;
}

let colors = ["magenta","orange","green","cyan","yellow"];

for (let i = 0; i< 500000000; i++) {
    if (i%100000000 == 0) {
        colorIndex = i/100000000;
        changeColor(colors[colorIndex]);
        console.log(i, colorIndex,colors[colorIndex]);
    }
}

changeColor(colors[2]);
