
//////////////variables

var i = 0;
var r = 0;
var g = 0;
var b = 0;
var a = 0;

var drops = [];
//var drops2 = [];

////////////////////////////


function setup() {
createCanvas(windowWidth, 9040);
   
  
   

for (var i = 0; i < 10000; i++) {    //light rain
    	drops[i] = new Drop();
  	}


   
}

function draw() {
   background(33,33,33);
   
   for (var i = 0; i < drops.length; i++) {
         drops[i].fall();
         drops[i].show();
  	}
   
   
   
  noStroke();
  fill(100,50,145,200);
  rect(windowWidth/2 -330 , 20, 660, 800, 20);
   
  fill(120,50,15,155);
  rect(windowWidth/2 -330 , 840, 660, 800, 20);
  
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
   
  }
