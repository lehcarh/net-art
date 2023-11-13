function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}

function draw() {
  background(#009dc4);
  stroke(200);
  
  translate(width/2, height/2);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(mouseX, mouseY, 20, 80);
    rotate(PI/5);
  scale(0.5);
  translate(0, 0);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(mouseX, mouseY, 30, 90);
    rotate(PI/5);
    }
  }
}
