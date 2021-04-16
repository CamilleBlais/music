///////////////////////////////variables
var i = 0;
var son1;
var rect1;
var rectX;
var rectY;
var rectXX = 660;
var rectYY = 800;

//var drops = [];




////////////////////////////////////////////fonction setup

function setup(){
createCanvas(windowWidth, 9040);
background(33,33,33);	
	
rectX = windowWidth/2 -330;
	
son1 = loadSound("SON01.wav", loaded);



//for (var i = 0; i < 7000; i++) {    //light rain
//    	drops[i] = new Drop();
   
  	}


///////////////////////////////////////////////////// definition des fonctions rect

	
function rect1(rectX, rectY){
  rect(rectX, rectY, rectXX, rectYY, 20);
	}



////////////////////////////fonction loaded"""""


function loaded() {
son1.play();
	}



/////////////////////////////// fonction draw

function draw() {
   

   
//   for (var i = 0; i < drops.length; i++) {
 //        drops[i].fall();
 //        drops[i].show();
	
	
  noStroke();
	
  fill(125,55,125);
  rect1(rectX,20);
	
  fill(25,111,159);
  rect1(rectX,840);
	
  fill(125,35,200);
  rect1(rectX,1660);
	
  fill(25,126,200);
  rect1(rectX,2480);
	
  fill(225,10,156);
  rect1(rectX,3300);
  
  fill(160,20,25);
  rect1(rectX, 4120);
   
  fill(100,200,55);
  rect1(rectX, 4940);
   
  fill(100,200,55);
  rect1(rectX, 5760);
   
  fill(222,22,22);
  rect1(rectX, 6580);
   
  fill(22,22,220);
  rect1(rectX, 7400);
   
  fill(221,22,220);
  rect1(rectX, 8220);
   
  ///////////////////////////////////////////////////////////////if mouse hover

if(mouseX > rectX && mouseX < rectX+660 && mouseY > 20 && mouseY < 820){
noFill();
stroke(200,200,200,140);
strokeWeight(20);
//stroke(200,200,200,100);
//strokeWeight(5);
rect1(rectX,20);
}else{
noStroke();
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 840 && mouseY < 1640){
noFill();
stroke(200,200,200,140);
strokeWeight(25);
stroke(200,200,200,100);
strokeWeight(5);
rect1(rectX,840);
}else{
noStroke(); 
}

	
}




//////////////////////////////////////fonction touchstarted

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
