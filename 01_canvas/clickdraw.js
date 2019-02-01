// getting variables in order
var can = document.getElementById("slate");
var ctx = can.getContext("2d");
var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

// toggle the mode
var tog = false;

toggle.addEventListener("click", () => {
	if (tog == false)
		tog = true;
	else
		tog = false;
	console.log(tog);
}
)

// clear the canvas
clear.addEventListener('click', function(e){
    e.preventDefault()
    ctx.clearRect(0, 0, 600, 600)
}
)

// draw the box or dot
can.addEventListener('click', function(e){

    //getting coordinates of mouse click
    var xcor = e.offsetX;
    var ycor = e.offsetY;

    // draw box
    if (tog == false) {
      ctx.fillRect(xcor, ycor, 50, 50);
    }

    //draw dot
    else {
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.ellipse(xcor, ycor, 5, 5, Math.PI / 4, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fill();
    }

  }
)