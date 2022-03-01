const canvas = document.getElementById("canvas");

canvas.style.width = 400 + "px";
canvas.style.height = 200 + "px";

canvas.width = 400;
canvas.height = 200;

const context = canvas.getContext("2d");

context.fillStyle = "red";
context.fillRect(0, 0, 50, 50);

context.fillStyle = "blue";
context.translate(50, 50);
context.rotate(-Math.PI / 6);
context.scale(2, 3);
context.fillRect(0, 0, 50, 50);