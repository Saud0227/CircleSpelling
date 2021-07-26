let bList=[],bN=100;
let activeL=[];
let fontArcade;
let vor=false;
let b = true;
// #region 
//---------------------
let char =    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let charBox = [ 34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  38,  34,  34,  34,  34,  34,  34,  34,  30,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34,  34];
let spaceDist = 20;
//---------------------
// #endregion

function preload() {
  fontArcade = loadFont('assets/ARCADECLASSIC.TTF',function(){console.log("font loaded")},function(){console.log("font failed to load");});
}


function setup() {
  createCanvas(600,600);
  for (let i = 0; i < bN; i++) {
    bList[i]=new ball(createVector(random(0,width),random(0,height)),i,bList);
  }
  angleMode(DEGREES);
  textFont(fontArcade);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  baColGlobal(0,200,10);


  vor = new vortex(300,300,300);
}

function draw() {
  background(200);
  //console.log(vor.satelitePoints);
  for (let i = 0; i < bList.length; i++) {
    bList[i].tick();
  }
  if(activeL.length>0){
    for (let i = 0; i < activeL.length; i++) {
      activeL[i].dispL();
    }
  }
  for (let i = 0; i < vor.satelitePoints.length; i++) {
    fill(255,0,0);
    let tmpP = vor.satelitePoints[i];
    ellipse(tmpP.x,tmpP.y,30,30);
    
  }
}



//Input == All chars == their index
//space == -1