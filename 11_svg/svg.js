var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");
// var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// var l = document.createElementNS("http://www.w3.org/2000/svg", "line");


// svar first = true; // checks if dot exists



var circle = function(x,y){
	console.log("drawing cirlce");
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx",x);
    c.setAttribute("cy",y);
    c.setAttribute("r","10");
    c.setAttribute("fill","blue");
    c.addEventListener('click',change)
    pic.appendChild(c);
};

var change = function(e){
    console.log("change");
    console.log(this); 
	e.preventDefault();
	e.stopPropagation();
	if(this.getAttribute("fill") == "blue"){
		this.setAttribute('fill','green')
		console.log("changinng to green");
	}
	else if(this.getAttribute('fill')=='green'){
		xcor= Math.floor( Math.random() * pic.getAttribute("width"));
        ycor= Math.floor( Math.random() * pic.getAttribute("height"));
        pic.removeChild(this);
        circle( xcor, ycor );
		console.log("disappear");
	};
}

move.addEventListener('click',function(e){
	console.log(pic);
	pic.select('circle').fill('red');
});

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
