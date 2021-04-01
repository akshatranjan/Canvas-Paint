canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
var last_x, last_y;
colour = "red";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    colour = document.getElementById("colour").value;
    width = document.getElementById("width").value;

    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e)
{
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown")
    {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = width;

        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke()
    }
    
    last_x = current_x;
    last_y = current_y;
}

canvas.addEventListener("mouseup", my_mouseup)

function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave)

function my_mouseleave(e)
{
    mouseEvent = "mouseLeave";
}