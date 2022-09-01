var canvas = document.getElementById("foreground");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

c.beginPath();
c.fillStlye = 'rgba(255,255,255,1)'
c.fillRect(0, 0, canvas.width, canvas.height);
c.fill();


document.addEventListener("keydown", e => {
if (e.value == 65){
    console.log("Event activated");
}
});
function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, canvas.width, canvas.height);

    if (window.innerWidth > canvas.width || window.innerWidth < canvas.width) {
        canvas.width = window.innerWidth;
    }
    if (window.innerHeight > canvas.height || window.innerHeight < canvas.height) {
        canvas.height = window.innerHeight;
    }

    //inventory, UI
    c.beginPath();
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'rgba(52.94, 80.78, 92.16, 0.5)';
    c.fillRect(window.innerWidth - 100, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 190, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 280, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 370, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 460, window.innerHeight - 100, 70, 70);
    c.fillStyle = 'white';
    c.font = '20px sans-serif';
    c.fillText("5", window.innerWidth - 90, window.innerHeight - 80);
    c.fillText("4", window.innerWidth - 180, window.innerHeight - 80);
    c.fillText("3", window.innerWidth - 270, window.innerHeight - 80);
    c.fillText("2", window.innerWidth - 360, window.innerHeight - 80);
    c.fillText("1", window.innerWidth - 450, window.innerHeight - 80);
    c.fillStyle = 'grey'
    c.arc(100, 100, Math.PI * 20, 0, 360, false);
    c.fill();
}

draw();