var canvas = document.getElementById("foreground");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

c.beginPath();
c.fillStlye = 'rgba(255,255,255,1)'
c.fillRect(0, 0, canvas.width, canvas.height);
c.fill();

function draw() {
    requestAnimationFrame(draw);
    c.clearRect(0, 0, canvas.width, canvas.height);

    if (window.innerWidth > canvas.width || window.innerWidth < canvas.width) {
        canvas.width = window.innerWidth;
    }
    if (window.innerHeight > canvas.height || window.innerHeight < canvas.height){
        canvas.height = window.innerHeight;
    }
    c.beginPath();
    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'rgba(52.94, 80.78, 92.16, 0.5)';
    c.fillRect(window.innerWidth - 100, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 190, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 270, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 350, window.innerHeight - 100, 70, 70);
    c.fillRect(window.innerWidth - 430, window.innerHeight - 100, 70, 70);
    c.fill();
}

draw();