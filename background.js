var canvas = document.getElementById("background");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");

c.beginPath();
c.fillStyle = 'green';
c.fillRect(0, 0, canvas.width, canvas.height);
c.fill();