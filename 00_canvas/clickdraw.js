var can = document.getElementById("slate");
var ctx = can.getContext("2d");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

can.addEventListener("click", function(e) => {
    var xcor = e.clientX;
    var ycor = e.clientY;

    ctx.fillRect(xcor,ycor,100,100);
})
