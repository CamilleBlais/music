///////////////////////////////variables
var i = 0;
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
frameRate(5);
	
rectX = windowWidth/2 -330;
	


for (var i = 0; i < 7000; i++) {    //light rain
  	drops[i] = new Drop();
 	}


} // end setup
	



///////////////////////////////////////////////////////// fonction draw

function draw() {
background(33,33,33);
	
	
///////////////////////////////////////////////////// definition de la fonction rect1	
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
	
  stroke(150,120,150);
  fill(150,120,150);
  rect1(rectX, 9040);
   
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

if(mouseX > rectX && mouseX < rectX+660 && mouseY > 9040 && mouseY < 9840){
noFill();
stroke(200,200,200,125);
strokeWeight(5);
rect1(rectX,9040);
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
