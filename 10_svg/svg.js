var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");
// var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// var l = document.createElementNS("http://www.w3.org/2000/svg", "line");


var first = true; // checks if dot exists




// var p = function(x,y) {
	// p.addEventListener('click', function(e){
   
	// console.log("starting");
	// c.setAttribute( "cx", x);
	// c.setAttribute( "cy", y);
	// c.setAttribute( "r", 10);	
	// c.setAttribute( "stroke", "black");
	// c.setAttribute( "fill", "blue");
	
	// console.log(c.getAttribute('fill'));
	// p.appendChild(c)
   
	// });
// }

var circle = function(x,y){
	console.log("drawing cirlce");
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","10");
    c.setAttribute("fill","blue");
    c.addEventListener('click',change(c))
    pic.appendChild(e,c);
};

var change = function(c){
	console.log("change");
	e.preventDefault();
	e.stopPropagation();
	if(c.getAtrribute("fill") = "blue"){
		c.setAttribute('fill','green')
		console.log("changinng to green");
	}
	else if(this.getAttribute('fill')='green'){
		xcor= Math.floor( Math.random() * pic.getAttribute("width"));
        ycor= Math.floor( Math.random() * pic.getAttribute("height"));
        pic.removeChild(this);
        circle( xcor, ycor );
		console.log("disappear");
	};
}

pic.addEventListener('click', function(e){
	var x = e.offsetX;
	var y = e.offsetY;
	circle(x,y);
});
clear.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(e);
	pic.innerHTML = "";
    // while (pic.lastChild) {// loop through svg deleting all children
	// pic.removeChild(pic.lastChild);
    // }
 });
