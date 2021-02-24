function preload()
{
initial_img2 = loadImage('bottle.png');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.center();
}
function draw()
{
image(initial_img2 ,0,0,400,300);

}
function btn_back()
{
    window.location = "index.html";
}