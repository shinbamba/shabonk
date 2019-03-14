var pic = document.getElementById("vimage");
var clear = document.getElementById("clear");
var move = document.getElementById("move");
// var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
// var l = document.createElementNS("http://www.w3.org/2000/svg", "line");







pic.addEventListener('click', function(e){
	e.preventDefault();
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	
	var x = e.offsetX;
	var y = e.offsetY;
   
	console.log("starting");
	c.setAttribute( "cx", x);
	c.setAttribute( "cy", y);
	c.setAttribute( "r", 10);	
	c.setAttribute( "stroke", "black");
	c.setAttribute( "fill", "blue");
	
	// console.log(c.getAttribute('fill'));
	pic.appendChild(c)

   
});
var cir = function(c){
	c.addEventListener('click', function(e){
		console.log(c);
		
		if(c.getAttribute('fill') == 'blue'){
			c.setAttribute('fill', 'green');
		}
	});
}





clear.addEventListener('click', function(e){
    e.preventDefault();
    // console.log(e);
	
    while (pic.lastChild) {// loop through svg deleting all children
	pic.removeChild(pic.lastChild);
    }
 });
