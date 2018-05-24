let changeColor = function(area) {
    let color = document.getElementById("color"+area).value;
    console.log("inside function", area, color);
    document.getElementById("area"+area)
        .style.backgroundColor = color;
}


document.getElementById("button1").addEventListener("click", 
    function() {
        changeColor(1);
    }
);
document.getElementById("button2").addEventListener("click",
    function() {
        changeColor(2);
    }
);