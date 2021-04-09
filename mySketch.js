
//////////////variables

//var TikY = 0;
var i = 0;
var r = 0;
var g = 0;
var b = 0;
var a = 0;


r = random(0,255);
g = random(0,255);
b = random(0,255);
a = ramdom(0,255)

////////////////////////////


function setup() {
createCanvas(windowWidth, 8000);
   background(121,205,191,100);
   //frameRate(6);
  }






function draw() {
  noStroke();
  fill(r-g,g-b,b-r,a);
  rect(windowWidth/2 -400 , 30, 800, 1300, 20);
   
  fill(r,g,b);
  rect(windowWidth/2 -400 , 830, 800, 1300, 20);
  
  fill(r,g,b);
  rect(windowWidth/2 -400 , 1630, 800, 1300, 20);
   
  //fill(r,g,b);
 // rect(windowWidth/2 -200 , 1810, 400, 550, 20);
   
  //fill(r,g,b);
 // rect(windowWidth/2 -200 , 2410, 400, 550, 20);
   
//  fill(r,g,b);
//  rect(windowWidth/2 -200 , 3010, 400, 550, 20);
   
//  fill(r,g,b);
//  rect(windowWidth/2 -200 , 3610, 400, 550, 20);
  }
