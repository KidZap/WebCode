var particleSystems = [];
var psId = 0;

function setup() {

  var cnv = createCanvas(1100, 800);
  cnv.position((windowWidth - width)/2, 30);
  psId++;
  // ps = new particleSystem(psId, createVector(width/2, height/2), clr);
  frameRate(25);
  count = 0;

}

function draw() {
  background(21, 21, 21, 4);
  // ps.addParticle();
  // ps.run();
  for(var i = 0; i < particleSystems.length; i++){
    particleSystems[i].addParticle();
    particleSystems[i].run();
  }

  // textSize(32);
  // fill(127,50, 90);
  // text('particleSystems =  '+ particleSystems.length, 10, 30);
}

function mouseClicked(){
  psId++;
  var clr = color(random(255), random(255), random(255));
  var mouseLoc = createVector(mouseX, mouseY);
  particleSystems.push(new particleSystem(psId, mouseLoc, clr) );

}
