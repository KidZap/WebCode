var movers = [];
var attr, repl;
var count = 0;
var gamePaused = false;
var sldrAV, sldrRad;
var av, armRadius;

function setup() {
  var cnv = createCanvas(800, 800);
  background(2);
  cnv.position((windowWidth-width)/2, 30);
  loadMovers(4);
  sldrAV = createSlider(0, 100, 50);
  sldrAV.position(10, 10);
  sldrRad = createSlider (0, 100, 50);
	sldrRad.position(10, 10);
	mover = new Mover (1);
	o1 = new Orbiter ();
	o2 = new Orbiter ();
	o3 = new Orbiter ();
}

function draw(){
  av = sldrAV.value();
  if(!gamePaused){

    //this.loc = createVector(100, 100)
    for (var i=0 ; i<movers.length ; i++)
    fill(255,255,255,20);
    rect(0,0,width, height);
    movers.update();
    o1.update();
    o2.update();
    o3.update();

    attr.update();
  }
}

function mouseClicked(){

  gamePaused = !gamePaused;


}

function loadMovers(n) {
  this.loc = createVector(100, 100)
  for (var i=0 ; i<n ; i++){
    movers.push(new Mover(100, 100, 11, i));
  }
  attr = new Mover(100, 100, 5, -1);
  repl = new Mover(100, 100, 5, -2);
}
