function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255,248,231);
  noFill()
  for(var i=0; i<width; i++) {
    triangle(i+=2, i, height, 0, 0, 0);
    ellipse(i, i+=2, width, height);
   }
  
}