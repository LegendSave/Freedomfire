let angle = 0;
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}
function draw() {
  // put drawing code here
  background(51);
  fill(255, 0, 150);
  rectMode(CENTER);
  rotate(90);
  plane(300, 300);
}