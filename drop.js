// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/KkyIDI6rQJI


function Drop() {
  this.x = random(windowWidth/2-325, windowWidth/2+325);
  this.y = random(2480, 9900);
  this.len = random(5, 20);
  this.yspeed = random(2,8);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + 0.04;

    if (this.y > height) {
      this.y = random(2480, 9900);
      this.yspeed = random(2,8);
    }
  }

  this.show = function() {
   
    strokeWeight(3);
    stroke(131, 192, 247,150);
    line(this.x, this.y, this.x, this.y+this.len);
    
  
  }
}
