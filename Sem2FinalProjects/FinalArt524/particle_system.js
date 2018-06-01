function particleSystem (id,loc, clr) {
  this.clr = clr;
  this.id = id;
  this.loc = createVector(loc.x, loc.y);
  this.particles = [];



  this.addParticle = function() {
    var angle = random(TWO_PI);
    var rad = height/2-50;
    this.particles.push(new Particle(this.loc, this.clr));
  }

  this.run = function() {
    //if(this.id === 2)console.log(this.loc);
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.update();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

}
