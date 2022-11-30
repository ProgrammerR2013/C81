canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");




circle(350, 140, "blue");

circle(450, 140, "black");

circle(550, 140, "red");

circle(400, 180, "yellow")

circle(500, 180, "green")


function circle(x, y, color)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
