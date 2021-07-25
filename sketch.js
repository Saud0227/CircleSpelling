let bList=[],bN=100;


function setup() {
  createCanvas(600,600);
  for (let i = 0; i < bN; i++) {
    bList[i]=new ball(createVector(random(0,width),random(0,height)));
  }
  angleMode(DEGREES);
}

function draw() {
  background(200);
  for (let i = 0; i < bList.length; i++) {
    bList[i].walls();
    bList[i].move();
    bList[i].draw(); 
  }

}
