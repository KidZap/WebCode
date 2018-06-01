var particleSystems = [];

function setup() {
  var cnv = createCanvas(1100, 800);
  cnv.position((windowWidth - width)/2, 30);
  ps = new particleSystem(createVector(width/2, height/2));
  frameRate(25);
  count = 0;
}

function draw() {
  background(21, 21, 21, 4);
  ps.addParticle();
  ps.run();
  //particleSystems[i].run();
  //particleSystems[i].addParticle();

  textSize(32);
  fill(127,50, 90);
  text('particleSystems =  '+ particleSystems.length, 10, 30);
}

function mouseClicked(){
  var clr = color(random(255), random(255), random(255));
  var mouseLoc = createVector(mouseX, mouseY);
  particleSystems.push(new particleSystem(mouseLoc));
}