function Drop2() {
  this.x = random(windowWidth/2-325, windowWidth/2+325);
  this.y = random(8220, 9020);
  this.len = random(5, 15);
  this.yspeed = random(10,20);

  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.yspeed = this.yspeed + 0.5;

    if (this.y > height) {
      this.y = random(8220, 9020);
      this.yspeed = random(10,20);
    }
  }

  this.show = function() {
   
    strokeWeight(3);
    stroke(225, 15, 1,188);
    line(this.x, this.y, this.x, this.y+this.len);
  }
}
