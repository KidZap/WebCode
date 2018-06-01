function Orbiter(m){
  this.loc = createVector(0,0);
  this.mover = m;
  this.myRad = 8;
  this.theta = 0; //angle
  
  this.update = function(){
    this.theta += angularVelocity/1000;// change the angle by some random value
    //console.log("this.distRadius = " + this.distRadius);
    //calculate the distance from mover as a function of theta
    this.loc.x = this.mover.loc.x + cos(this.theta)*distFromMover;
    this.loc.y = this.mover.loc.y + sin(this.theta)*distFromMover;
    
    this.render();
  }
  
  this.render = function(){
    
    fill(255, 0, 0);
    ellipse(this.loc.x, this.loc.y, this.myRad, this.myRad);
  }
}
