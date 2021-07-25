let bList=[],bN=100;
let fontArcade;
let tmpL;

function preload() {
  fontArcade = loadFont('assets/ARCADECLASSIC.TTF',function(){console.log("font loaded")},function(){console.log("font failed to load");});
}


function setup() {
  createCanvas(600,600);
  for (let i = 0; i < bN; i++) {
    bList[i]=new ball(createVector(random(0,width),random(0,height)));
  }
  angleMode(DEGREES);
  tmpL=new letter(0<,300,300);
  textFont(fontArcade);
}

function draw() {
  background(200);
  for (let i = 0; i < bList.length; i++) {
    bList[i].walls();
    bList[i].move();
    bList[i].draw(); 
  }
  tmpL.dispL();

}
