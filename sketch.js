let angle = 0;
let xCan = window.innerWidth;
let yCan = window.innerHeight;
let charz = 300;
let charx = 300;
function setup() {
  // put setup code here
  createCanvas(xCan, yCan, WEBGL);
}
function draw() {
  if(keydown(87)){
    charx -= 8;
  }
  if(keydown(83)){
    charx += 8;
  }
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
  cam.setPosition(-250, -200, charz);
  cam.lookAt(300, 250, charz);
  angle += 0.007;
  plane(300, 300);
  translate(charx, 250, charz);
  sphere(100, 20, 20);
}
