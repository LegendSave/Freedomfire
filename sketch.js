let angle = 0;
function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}
function draw() {
  let cam = createCamera();
  background(51);
  fill(255, 0, 150);
  cam.setPosition(-250, 250, -250);
  cam.lookAt(50, 50, 50);
  rotateY(-70);
  rotateX(angle);
  rotateZ(-30)
  //plane(300, 300);
  angle += 0.007;
  sphere(100, 20, 20);
}
