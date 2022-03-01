const canvas = document.getElementById('canvas');

canvas.style.width = 400 + 'px';
canvas.style.height = 200 + 'px';

canvas.width = 400;
canvas.height = 200;

const context = canvas.getContext("2d");

context.fillStyle = "red";
context.strokeStyle = "yellow";
context.lineWidth = 10;
context.strokeRect(0, 0, 100, 100);
context.fillRect(5, 5, 95, 95);

context.fillStyle = "black";
context.font = "25px PingFangSC-Regular, sans-serif";
context.fillText("hello world", 150, 100);
