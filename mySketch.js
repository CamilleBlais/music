
//////////////variables

//var TikY = 0;
var i = 0;
var r = 0;
var g = 0;
var b = 0;


r = random(0,255);
g = random(0,255);
b = random(0,255);

////////////////////////////


function setup() {
createCanvas(windowWidth, 3700);
   background(121,205,191,100);
   //frameRate(6);
  }






function draw() {
  noStroke();
  fill(r,g,b);
  rect(windowWidth/2 -200 , 10, 400, 550, 20);
   
  fill(r,g,b);
  rect(windowWidth/2 -200 , 610, 400, 550, 20);
  
  fill(r,g,b);
  rect(windowWidth/2 -200 , 1210, 400, 550, 20);
   
  fill(r,g,b);
  rect(windowWidth/2 -200 , 1810, 400, 550, 20);
   
  fill(r,g,b);
  rect(windowWidth/2 -200 , 2410, 400, 550, 20);
   
  fill(r,g,b);
  rect(windowWidth/2 -200 , 3010, 400, 550, 20);
   
  fill(r,g,b);
  rect(windowWidth/2 -200 , 3610, 400, 550, 20);
  }
