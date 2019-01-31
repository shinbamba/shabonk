var can = document.getElementById("slate");
var ctx = can.getContext("2d");
var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");

can.addEventListener("click", function(e){
    var xcor = e.clientX;
    var ycor = e.clientY;
	if (tog == false)
		ctx.fillRect(xcor,ycor,100,100);
	else
		ctx.fillRect(xcor,ycor,2,2);
});

clear.addEventListener("click", () => {
	ctx.clearRect(0,0,600,600);
	ctx.beginPath()
});

var tog = false;

toggle.addEventListener("click", () => {
	if (tog == false)
		tog = true;
	else
		tog = false;
	console.log(tog);
})