///////////////////////////////variables
var i = 0;
var j = 0;
var r = 0;
var b = 0;
var g = 0;
var m = 0;
var v = 0;
var w = 0;

var son1;
var son2;
var son3;
var son4;
var son5;
var son6;
var son7;
var son8;
var son9;
var son10;
var son11;
var son12;

var rect1;
var rectX;
var rectY;
var rectXX = 660;
var rectYY = 800;


var mouseX;
var mouseY;

var drops = [];
var drops2 = [];



//////////////////////////////fonction preload

function preload(){
son1 = loadSound("SON01.wav");
son2 = loadSound("SON02.wav");
son3 = loadSound("SON03.wav");
son4 = loadSound("SON04.wav");
son5 = loadSound("SON05.wav");
son6 = loadSound("SON06.wav");
son7 = loadSound("SON07.wav");
son8 = loadSound("SON08.wav");
son9 = loadSound("SON09.wav");
son10 = loadSound("SON10.wav");
son11 = loadSound("SON11.wav");
son12 = loadSound("SON12.wav");
}

////////////////////////////////////////////////////////////fonction setup

function setup(){
createCanvas(windowWidth, 9860);

	
rectX = windowWidth/2 -330;
	


 for (var i = 0; i < 6000; i++) {    //light rain
   	drops[i] = new Drop();
  	}
	
for (var j = 0; j < 1000; j++) {    // moderate rain
    	drops2[j] = new Drop2();
  	}


} // end setup
	



///////////////////////////////////////////////////////// fonction draw

function draw() {
background(mouseY/54,15,mouseX/9);
frameRate(60);

r = random(0,255);
b = random(0,255);
g = random(0,255);
	
	
///////////////////////////////////////////////////// definition de la fonction rect1	
function rect1(rectX, rectY){
  rect(rectX, rectY, rectXX, rectYY, 20);
	}
	

	
  
  stroke(125,55,125);
  strokeWeight(5);
  fill(221,212,232);
  rect1(rectX,20);

  stroke(25,111,159);
  fill(145,210,144);
  rect1(rectX,840);
  
  stroke(125,35,200);
  fill(111,183,214);
  rect1(rectX,1660);

  stroke(25,126,200);
  fill(1,57,170);
  rect1(rectX,2480);
	
  stroke(225,10,156);
  fill(179,226,221);
  rect1(rectX,3300);
  
  stroke(160,20,25);
  fill(253,222,238);
  rect1(rectX, 4120);
   
  stroke(100,200,55);
  fill(117,137,191);
  rect1(rectX, 4940);
   
  stroke(100,200,55);
  fill(72,181,163);
  rect1(rectX, 5760);
   
  stroke(222,22,22);
  fill(193,179,214);
  rect1(rectX, 6580);
   
  stroke(22,22,220);
  fill(253,202,163);
  rect1(rectX, 7400);
   
  stroke(221,25,5);
  fill(35,95,174);
  rect1(rectX, 8220);
	
  stroke(150,120,150);
  fill(154,206,223);
  rect1(rectX, 9040);
   
  ///////////////////////////////////////////////////////////////if mouse hover

if(mouseX > rectX && mouseX < rectX+660 && mouseY > 20 && mouseY < 820){
noFill();
stroke(200,200,200,100);
strokeWeight(5);
rect1(rectX,20);
frameRate(1)
noStroke();
fill(r,b,g,100);
rect(rectX+5,25,650,790,20);
fill(r,b,g,150);
rect(rectX+80,100,500,640,20);
fill(r,b,g,240);
rect(rectX+180,220,300,400,20);
}	

	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 840 && mouseY < 1640){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,840);
frameRate(1);
fill(r,b,g,100);
rect(rectX+5,845,650,190,20);
frameRate(2);
fill(r,b,g,200);
rect(rectX+5,1040,650,190,20);
frameRate(1);
fill(r,b,g,80);
rect(rectX+5,1235,650,195,20);
frameRate(2);
fill(r,b,g,150);
rect(rectX+5,1440,650,190,20);
}

if(mouseX > rectX && mouseX < rectX+660 && mouseY > 1660 && mouseY < 2460){
noFill();
frameRate(5);
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,1660);
noStroke();
m = random(50,150);
v = random(40,170);
w = random(60,175);
fill(m,v,w,190);
rect(rectX+5,1665,650,790,20);
fill(141,5,125,125);
rect(rectX+20,1675,620,760,20);
fill(185,5,100,175);
rect(rectX+50,1700,560,300,20);
fill(15,155,120,175);
rect(rectX+50,2100,560,320,20);
}	
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 2480 && mouseY < 3280){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,2480);
frameRate(60);
noStroke();
fill(25,25,35);
rect(rectX+5,2485,650,790,20);
	
	for (var i = 0; i < drops.length; i++) {
         drops[i].fall();
          drops[i].show();
 	}
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 3300 && mouseY < 4100){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,3300);
frameRate(2);
noStroke();
w = random(0,105);
fill(mouseX/5,25,180,150);
rect(rectX+5,3305,650,790,20);
fill(15,15,w,120);
rect(rectX+255,3325,150,750, 20);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 4120 && mouseY < 4920){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
frameRate(3);
rect1(rectX,4120);
fill(r,g-100,b-100,100);
rect(rectX+20, 4150, 620, 238, 20);
rect(rectX+20, 4400, 620, 238, 20);
rect(rectX+20, 4658, 620, 238, 20);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 4940 && mouseY < 5740){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
frameRate(1);
rect1(rectX,4940);
fill(225,225,225,205);
ellipse(rectX +135, 5100, 115);
ellipse(rectX +135, 5100, 85);
noStroke();
v = random(150,205);
fill(50,40,v,150);
rect(rectX+5, 5300, 650 , 435, 20)
fill(30,20,v,170);
rect(rectX+5, 5500, 650 , 235, 20)
rect(rectX+5, 5600, 650 , 135, 20)
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 5760 && mouseY < 6560){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
frameRate(1);
rect1(rectX,5760);
fill(r, 140,200,200);
ellipse(rectX+325, 5915, 200);
ellipse(rectX+325, 5915, 100);
fill(170, g,200,200);
ellipse(rectX+325, 6165, 200);
ellipse(rectX+325, 6165, 100);
fill(170, 89,b,200);
ellipse(rectX+325, 6415, 200);
ellipse(rectX+325, 6415, 100);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 6580 && mouseY < 7380){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,6580);
frameRate(0.5);
fill(r+100,g+100,b+100, 150);
rect(rectX-150, 6600, 300, 300, 20);
rect(rectX-150, 6900, 300, 300, 20);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 7400 && mouseY < 8200){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,7400);
fill(15,15,15);
ellipse(rectX-100, 7650, 200);
fill(200,190, 229);
ellipse(rectX-50, 7600,30);
ellipse(rectX+50, 7600,30);
}
	
if(mouseX > rectX && mouseX < rectX+660 && mouseY > 8220 && mouseY < 9020){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,8220);
frameRate(40);
noStroke();
fill(35,35,45);
rect(rectX+5,8225,650,790,20);
	
	for (var j = 0; j < drops2.length; j++) {
    	drops2[j].fall();
   	drops2[j].show();
  	}
}

if(mouseX > rectX && mouseX < rectX+660 && mouseY > 9040 && mouseY < 9840){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,9040);
frameRate(60);
noStroke();
fill(25,mouseX/3,200,150);
rect(rectX+5,9045,650,790,20);
fill(55,75,b+25, 100);
rect(rectX+5, 9060, 640, 55, 20);
rect(rectX+5, 9760, 640, 55, 20); 

}


	
} //end of draw

/////////////////////////////////////////////////////////////////////////////definition de mousepressed




function mousePressed(){
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 20 && mouseY < 820){
	if(son1.isPlaying()){
	son1.pause();
	}else{
	TurnOff();
	son1.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 840 && mouseY < 1640){
	if(son2.isPlaying()){
	son2.pause();
	}else{
	TurnOff();
	son2.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 1660 && mouseY < 2460){
	if(son3.isPlaying()){
	son3.pause();
	}else{
	TurnOff();
	son3.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 2480 && mouseY < 3280){
	if(son4.isPlaying()){
	son4.pause();
	}else{
	TurnOff();
	son4.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 3300 && mouseY < 4100){
	if(son5.isPlaying()){
	son5.pause();
	}else{
	TurnOff();
	son5.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 4120 && mouseY < 4920){
	if(son6.isPlaying()){
	son6.pause();
	}else{
	TurnOff();
	son6.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 4940 && mouseY < 5740){
	if(son7.isPlaying()){
	son7.pause();
	}else{
	TurnOff();
	son7.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 5760 && mouseY < 6560){
	if(son8.isPlaying()){
	son8.pause();
	}else{
	TurnOff();
	son8.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 6580 && mouseY < 7380){
	if(son9.isPlaying()){
	son9.pause();
	}else{
	TurnOff();
	son9.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 7400 && mouseY < 8200){
	if(son10.isPlaying()){
	son10.pause();
	}else{
	TurnOff();
	son10.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 8220 && mouseY < 9020){
	if(son11.isPlaying()){
	son11.pause();
	}else{
	TurnOff();
	son11.loop();
	}
	}
	if(mouseX > rectX && mouseX < rectX+660 && mouseY > 9040 && mouseY < 9840){
	if(son12.isPlaying()){
	son12.pause();
	}else{
	TurnOff();
	son12.loop();
	}
	}
	}  //end function mousepressed

function TurnOff(){
	son1.pause();
	son2.pause();
	son3.pause();
	son4.pause();
	son5.pause();
	son6.pause();
	son7.pause();
	son8.pause();
	son9.pause();
	son10.pause();
	son11.pause();
	son12.pause();
}

	






//////////////////////////////////////fonction touchstarted

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
