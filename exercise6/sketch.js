function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  
  background(0);
  let c = map(mouseX, 0, width, 0, 200);
  let d = map(mouseX, 0, width, 40, 400);
  fill(155, c, 255);

  for (var i=25; i<width; i+=25) {
    for (var j=25; j<height; j+=25) {
       ellipse(i,j,100,100)
    }
  }
}
   