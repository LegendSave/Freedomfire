let angle = 0;
let xCan = window.innerWidth;
let yCan = window.innerHeight;
let charz = 300;
var charx = 300;
function setup() {
  // put setup code here
  createCanvas(xCan, yCan, WEBGL);
  noCursor();
  frameRate(60);
}
function draw() {
  window.onload (e => {
    fullscreen();
  });
  if(keyIsDown(65)){
    charz -= 8;
  }
  if(keyIsDown(68)){
    charz += 8;
  }
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
  noStroke();
  fill("skyblue");
  cam.setPosition(-250, -200, -300);
  cam.lookAt(mouseY, mouseX, 200);
  angle += 0.007;
  plane(300, 300);
  translate(charx, 250, charz);
  sphere(100, 20, 20);
}
