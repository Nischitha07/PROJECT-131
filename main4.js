function preload()
{
initial_img4 = loadImage('laptop.png');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.center();
}
function draw()
{
image(initial_img4 ,0,0,400,300);

}
function btn_back()
{
    window.location = "index.html";
}