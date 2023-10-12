var xpos=[];
function setup() {
  createCanvas(400, 400);
  noStroke();
  
}

function draw() {
  background(225)
  
  let c = map(mouseY, 0, width, 0, 175);
  
  let d = map(mouseX, 0, width, 40, 300);
  fill(d, c, c);
  
  
  ellipse(mouseX,mouseY, 50);
}
