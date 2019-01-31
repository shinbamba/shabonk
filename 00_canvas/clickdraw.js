var can = document.getElementById("slate");
var ctx = can.getContext("2d");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

can.addEventListener("click", function(e){
    var xcor = e.offsetX;
    var ycor = e.offsetY;
    if (tog == false)
	ctx.fillRect(xcor,ycor,100,100);
    else{
	ctx.beginPath();
        ctx.ellipse(xcor, ycor, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
    }
});

clear.addEventListener("click", function(e) {
    e.preventDefault();
    ctx.clearRect(0,0,600,600);
}, false);

var tog = false;

toggle.addEventListener("click", () => {
	if (tog == false)
		tog = true;
	else
		tog = false;
	console.log(tog);
})
