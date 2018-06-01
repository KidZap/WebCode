var movers = [];
var attr, repl;
var gamePaused = false;
var sldrAV
var av

function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  loadMovers(4);
  background(2);
  sldrAV = createSlider(0, 100, 50);
  sldrAV.position(10, 10);
}

function draw(){
  av = sldrAV.value();
  if(!gamePaused){

    //this.loc = createVector(100, 100)
    for (var i=0 ; i<movers.length ; i++)
    movers [i].update();

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
