

function Mover(x, y, r, id){

  //  +++++++++++++++++++++++++++++++++++++ properties
  this.loc = createVector(x, y);
  this.vel = createVector(random(-3, 3), random(-3, 3));
  this.acc = createVector(0, .05);
  this.w = 20;
  this.id = id;
  this.angle = 0;
  this.mouseLoc = createVector(mouseX, mouseY);
  this.clrR = random(255);
  this.clrG = random(255);
  this.clrB = random(255);
  this.rad = 15;
  this.angleVelocity = 0.1;

  //  +++++++++++++++++++++++++++++++++++++ behaviors (functions methods)
  this.update = function(){
    this.checkEdges();
    this.angleVelocity = av/1000;
    this.rad = random (222);
    this.angle += this.av;
    var myX = mover.loc.x + cos(this.angle)*this.rad;
    var myY = mover.loc.y + sin(this.angle)*this.rad;
    this.loc = createVector(myX, myY);
    this.render();

    // set up acc
    if (this.id >=0 && (this.loc.dist(attr.loc)) < 150){
      this.acc = p5.Vector.sub (attr.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.025);
      this.loc.add(this.vel);
    }

   // set up acc
    if (this.id >=0 && (this.loc.dist(repl.loc)) < 125) {
      this.acc = p5.Vector.sub (repl.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.025);
    }
    this.vel.add(this.acc);
    this.vel.limit(4);
    this.loc.add(this.vel);

    this.render();
  }








  this.checkEdges = function(){
    if(this.loc.x < 0 || this.loc.x > width)  this.vel.x = -this.vel.x;
    if(this.loc.y < 0 || this.loc.y > height)  this.vel.y = -this.vel.y;
  }

  this.render = function(){
    
    	fill(this.clrB, this.clrG, this.clrR)
    	ellipse(this.loc.x, this.loc.y, this.w, this.w);
	    stroke(this.clrR, this.clrG, this.clrB); 
	    line(this.loc.x, this.loc.y, movers[0].loc.x, movers[0].loc.y );

   //if(this.id = -1);
   fill(this.clrR, this.clrG, this.clrB);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }


}
