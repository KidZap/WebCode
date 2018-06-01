
var Movers = [];

var distFromMover;
var angularVelocity;
var moverMaxSpeed;


function setup() {
  createCanvas(1200, 1000);
  background(0);
  s1 = createSlider(11, 255, 125);
  s2 = createSlider(1, 100, 50);
  s3 = createSlider(1, 10, 3);
  loadMovers(2);
}

function draw() {
  background(23, 23, 23, 45);
  distFromMover = s1.value();
  angularVelocity = s2.value();
  moverMaxSpeed = s3.value();
  
  for(var i = 0; i < Movers.length; i++){
    Movers[i].update();
  }
}

function loadMovers(numMovers){
  for(var i = 0; i < numMovers; i++){
    var x = width/2;
    var y = height/2;
    Movers.push(new Mover(x,y)) ;
  }
}
