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


var yes =true;

dotButton.addEventListener('click', function(e){
    var size = 1;
    yes = true;
    while (yes) {
	window.requestAnimationFrame(go());
	
    }
	
})

stopButton.addEventListener('click', function(e) {
    window.cancelAnimationFrame("playground");
    yes= false;
})

function go(size){
    console.log("yes");
    ctx.beginPath();
    ctx.ellipse(c.clientWidth/2,c.clientHeight/2,10,10, Math.PI / 4, 0, 2 * Math.PI);
    ctx.stroke(); //draws ellipse
    ctx.fillStyle = "black";
    ctx.fill(); //fills it

}
