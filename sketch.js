let angle = 0;
let xCan = window.innerWidth;
let yCan = window.innerHeight;
let charz = 300;
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
  cam.setPosition(-250, -200, charz);
  cam.lookAt(300, 250, charz);
  plane(300, 300);
  angle += 0.007;
  translate(300, 250, charz);
  sphere(100, 20, 20);
  if(keyIsDown(65)){
    charz -= 8;
  }
  if(keyIsDown(68)){
    charz += 8;
  }
}
