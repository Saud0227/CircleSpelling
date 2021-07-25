let bList=[],bN=100;
let activeL=[];
let fontArcade;
let tmpW;

//---------------------
let char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let charBox = [];
//---------------------

function preload() {
  fontArcade = loadFont('assets/ARCADECLASSIC.TTF',function(){console.log("font loaded")},function(){console.log("font failed to load");});
}


function setup() {
  createCanvas(600,600);
  for (let i = 0; i < bN; i++) {
    bList[i]=new ball(createVector(random(0,width),random(0,height)));
  }
  angleMode(DEGREES);
  textFont(fontArcade);
  tmpW=new words([0,1,-1,2,3,-1,4]);
}

function draw() {
  background(200);
  for (let i = 0; i < bList.length; i++) {
    bList[i].walls();
    bList[i].move();
    bList[i].draw(); 
  }
}



//Input == All chars == their index
//space == -1