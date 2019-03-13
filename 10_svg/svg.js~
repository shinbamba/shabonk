var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
// var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// var l = document.createElementNS("http://www.w3.org/2000/svg", "line");

var lastx = null;
var lasty = null;





pic.addEventListener('click', function(e){
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	
	var x = e.offsetX;
	var y = e.offsetY;
	
	if (lastx == null|| lasty == null){
		// draw dot
	console.log("starting");
	c.setAttribute( "cx", x);
	c.setAttribute( "cy", y);
	c.setAttribute( "r", 5);	
	c.setAttribute( "stroke", "black");
	c.setAttribute( "fill", "red");
	pic.appendChild(c)
	
	lastx = x;
	lasty = y;
	console.log(lastx);
	}
	else {
	// adding line
	l.setAttribute("x1", lastx);
	l.setAttribute("y1", lasty);
	l.setAttribute("x2", x);
	l.setAttribute("y2", y);
	l.setAttribute("stroke", "black");
	pic.appendChild(l);
	
	//adding dot
	// console.log("why doesnt it work")
	c.setAttribute( "cx", x);
	c.setAttribute( "cy", y);
	c.setAttribute( "r", 5);	
	c.setAttribute( "stroke", "black");
	c.setAttribute( "fill", "red");
	pic.appendChild(c)
	
	
	lastx = x;
	lasty = y;
	};
});

clear.addEventListener('click', function(e){
    e.preventDefault();
    lastx = null;
    lasty = null;
    // console.log(e);
	
	while (pic.lastChild) {// loop through svg deleting all children
		pic.removeChild(pic.lastChild);
	}
 });
