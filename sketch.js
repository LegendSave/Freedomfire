let angle = 0;
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}
function draw() {
  var s =   sphere(100, 20, 20);
  // put drawing code here
  background(51);
  fill(255, 0, 150);
  s.position(200, 200);
  rotateY(-70);
  rotateX(angle);
  rotateZ(-30)
  //plane(300, 300);
  angle += 0.07;
}
