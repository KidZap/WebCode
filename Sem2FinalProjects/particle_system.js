function particleSystem (loc) {
  this.origin = loc.copy();
  this.particles = [];

  

  this.addParticle = function() {
    var angle = random(TWO_PI);
    var rad = height/2-50;
    this.particles.push(new Particle(loc));
  }

  this.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
      var p = this.particles[i];
      p.update();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  };

}
