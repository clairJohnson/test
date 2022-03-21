var mouseevent="empty";
var lastpositionof_x,lastpositionof_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=5;

canvas.addEventListener("mouseDown",my_mousedown);

function my_mousedown(e)
{
mouseevent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    currentmouse_x=e.clientX-canvas.offsetLeft;
    currentmouse_y=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    console.log("Last position of X and Y coordinates=");
    console.log("X="+lastpositionof_x+"Y="+lastpositionof_y);
    ctx.moveTo(lastpositionof_x,lastpositionof_y);

    console.log("Current position of X and Y coordinates=");
    console.log("X="+currentmouse_x+"Y="+currentmouse_y);
    ctx.moveTo(currentmouse_x,currentmouse_y);
    ctx.stroke();
}
lastpositionof_x=currentmouse_x;
lastpositionof_y=currentmouse_y;

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
mouseevent="mouseleave";
}












