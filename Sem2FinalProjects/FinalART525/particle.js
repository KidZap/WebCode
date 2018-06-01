function Particle(loc, clr){
  this.clr = clr;
  this.vel = createVector(random(-1.0, 1.0), random(-1.0, 1.0));
  this.acc = createVector(random(-2.0, 6.0), random(-2.0, 6.0));
  this.loc = createVector(loc.x, loc.y);
  this.lifespan = 255.0;
  this.angle = random(TWO_PI/8);
  this.w = 3;

  this.update = function(){
    this.vel.limit(40);
    this.loc.add(this.acc);
    this.acc = 0.0
    this.loc.add(this.vel);
    this.lifespan -= 1;
    this.angle += .40;
    this.render();
  }

  this.render = function() {

    push();
      translate(this.loc.x, this.loc.y);
      rotate(this.angle);
      stroke(this.clr);
      //fill(color(random(255), random(255), random(255)));
      noFill();
      arc(16, 5, ++this.w, ++this.w, 0, PI/2);
    pop();

  }

  this.isDead = function() {
    if(this.lifespan < 0.0) {
      return true;
    } else {
      return false;
    }
  }
}
