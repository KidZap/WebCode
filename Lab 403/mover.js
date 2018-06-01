function Mover(a, b){
  this.loc = createVector(a, b)
  this.vel = createVector()
  this.speedLimit = moverMaxSpeed/10;
  this.myRad = 12;
  
  this.orbiter = new Orbiter(this);
  
  this.update = function(){
    this.checkEdges();
    this.speedLimit = moverMaxSpeed/2;
    this.vel.limit(this.speedLimit);
    this.loc.add(this.vel);
    this.orbiter.update();
    
    this.render();
  }

  this.checkEdges = function(){
    if (this.loc.x > width || this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if (this.loc.y > height || this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
  }
  
  this.render = function(){
    noStroke();
    fill(222,222,222);
    ellipse(this.loc.x, this.loc.y, this.myRad, this.myRad)
  }
}