///////////////////////////////variables
var i = 0;
var son1;
var rect1;
var rect2;
var rect3;
var rect4;
var rect5;
var rect6;
var rect7;
var rect8;
var rect9;
var rect10;
var rect11;
var rectX = 0;
var rect1Y = 0;
var rect2Y = 0;
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

	
function rect1(rectX, rect1Y){
  noStroke();
  fill(100,50,145);
  rect(rectX, rect1Y, rectXX, rectYY, 20);
	}

function rect2(rectX, rect2Y){
  noStroke();
  fill(120,50,15);
  rect(rectX, rect2Y, rectXX, rectYY, 20);
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


  rect1(rectX,20);
  rect2(windowWidth/2 -330,840);
	
  noStroke();
  
  
  fill(200,50,85,145);
  rect(windowWidth/2 -330 , 1660, 660, 800, 20);
   
  fill(200,20,155,102);
  rect(windowWidth/2 -330 , 2480, 660, 800, 20);
   
  fill(155,35,160);
  rect(windowWidth/2 -330 , 3300, 660, 800, 20);
   
  fill(160,20,25,120);
  rect(windowWidth/2 -330 , 4120, 660, 800, 20);
   
  fill(100,200,55,125);
  rect(windowWidth/2 -330 , 4940, 660, 800, 20);
   
  fill(100,200,55,125);
  rect(windowWidth/2 -330 , 5760, 660, 800, 20);
   
  fill(222,22,22,122);
  rect(windowWidth/2 -330 , 6580, 660, 800, 20);
   
  fill(22,22,220,220);
  rect(windowWidth/2 -330 , 7400, 660, 800, 20);
   
  fill(221,22,220,22);
  rect(windowWidth/2 -330 , 8220, 660, 800, 20);
   
  ///////////////////////////////////////////////////////////////if mouse hover

//if(mouseX) {
//noStroke();
//fill(35,35,35,255);
// rect(windowWidth/2 -330 , 20, 660, 800, 20);	
//}

}




//////////////////////////////////////fonction touchstarted

function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
