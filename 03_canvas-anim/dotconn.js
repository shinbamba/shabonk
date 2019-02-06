// Cockadoodle
// Sarar Aseer and Shin Bamba
// SoftDev2 pd6
// K#02: Connecting the Dots
// 2019-02-03

// getting variables in order
var c = document.getElementById("playground");
var ctx = c.getContext("2d");
var stopButton  = document.getElementById("stop");
var dotButton = document.getElementById("circle");


var id = 0;
var radius = 2; // radius of circle
var big = true; // circle grow/shrink
var work = false; // animation is currenly ongoing


dotButton.addEventListener('click', function(e){
	if (!work){
		work = true;
		go();
	}
	else
		 e.preventDefault(); // does not allow user to click the button while animation is active
	
})

stopButton.addEventListener('click', function(e) {
	console.log("STOPPING");
    window.cancelAnimationFrame(id); // stops animation
    work = false;
	// ctx.clearRect(0,0,c.width,c.height);
})

var go = function(e) {
	id =window.requestAnimationFrame(go);
	ctx.clearRect(0,0,c.width,c.height);
    console.log(radius);
    ctx.beginPath();
    ctx.ellipse(c.width/2,c.height/2,radius,radius, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke(); // draws ellipse
    ctx.fillStyle = "blue";
    ctx.fill(); // fills it
	if (radius == c.height/2) // Check for max size
		big = false;
	else if (radius == 0) // Check for min size
		big = true;
	
	if (big == true)
		radius +=1;
	else
		radius -=1;
	
};
