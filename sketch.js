let angle = 0;
let xCan = window.innerWidth;
let yCan = window.innerHeight;
function setup() {
  // put setup code here
  createCanvas(xCan, yCan, WEBGL);
}
function draw() {
  if (xCan > window.innerWidth || xCan < window.innerWidth){
    xCan = window.innerWidth;
    createCanvas(xCan, yCan, WEBGL);
  }
  if (yCan > window.innerHeight || yCan < window.innerHeight){
    yCan = window.innerHeight;
    createCanvas(xCan, yCan, WEBGL);
  }
  let cam = createCamera();
  background(51);
  stroke("white");
  noFill();
  cam.setPosition(-250, 250, -250);
  cam.lookAt(50, 50, 50);
  rotateY(-70);
  rotateX(angle);
  rotateZ(-30)
  plane(300, 300);
  angle += 0.007;
  translate(300, 250, 300);
  sphere(100, 20, 20);
}
