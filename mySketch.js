///////////////////////////////variables
var i = 0;
var son1;
var rect1;
var rectX;
var rectY;
var rectXX = 660;
var rectYY = 800;
var bouton = false;

var drops = [];




////////////////////////////////////////////fonction setup

function setup(){
createCanvas(windowWidth, 9040);
	
	
rectX = windowWidth/2 -330;
	
son1 = loadSound("SON01.wav");



for (var i = 0; i < 7000; i++) {    //light rain
   	drops[i] = new Drop();
  	}


	

}

/////////////////////////////// fonction draw

function draw() {
background(33,33,33);
	
	
///////////////////////////////////////////////////// definition des fonctions rect	
function rect1(rectX, rectY){
  rect(rectX, rectY, rectXX, rectYY, 20);
	}

   
for (var i = 0; i < drops.length; i++) {
         drops[i].fall();
         drops[i].show();
	}
	
  
  stroke(125,55,125);
  strokeWeight(5);
  fill(125,55,125);
  rect1(rectX,20);

  stroke(25,111,159);
  fill(25,111,159);
  rect1(rectX,840);
	
  
  stroke(125,35,200);
  fill(125,35,200);
  rect1(rectX,1660);

  stroke(25,126,200);
  fill(25,126,200);
  rect1(rectX,2480);
	
  stroke(225,10,156);
  fill(225,10,156);
  rect1(rectX,3300);
  
  stroke(160,20,25);
  fill(160,20,25);
  rect1(rectX, 4120);
   
  stroke(100,200,55);
  fill(100,200,55);
  rect1(rectX, 4940);
   
  stroke(100,200,55);
  fill(100,200,55);
  rect1(rectX, 5760);
   
  stroke(222,22,22);
  fill(222,22,22);
  rect1(rectX, 6580);
   
  stroke(22,22,220);
  fill(22,22,220);
  rect1(rectX, 7400);
   
  stroke(221,22,220);
  fill(221,22,220);
  rect1(rectX, 8220);
   
  ///////////////////////////////////////////////////////////////if mouse hover

if(mouseX > rectX && mouseX < rectX+660 && mouseY > 20 && mouseY < 820){
noFill();
stroke(200,200,200,100);
strokeWeight(5);
rect1(rectX,20);
}	

	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 840 && mouseY < 1640){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,840);
}

if(mouseX > rectX && mouseX < rectX+660 && mouseY > 1660 && mouseY < 2460){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,1660);
}	
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 2480 && mouseY < 3280){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,2480);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 3300 && mouseY < 4100){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,3300);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 4120 && mouseY < 4920){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,4120);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 4940 && mouseY < 5740){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,4940);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 5760 && mouseY < 6560){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,5760);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 6580 && mouseY < 7380){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,6580);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 7400 && mouseY < 8200){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,7400);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 8220 && mouseY < 9020){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,8220);
}


if(mouseX > rectX && mouseX < rectX+660 && mouseY > 20 && mouseY < 820){
	if(mousePressed){
	son1.play();
	}
}
	
	

}




//////////////////////////////////////fonction touchstarted

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
