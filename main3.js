function preload()
{
initial_img3 = loadImage('s.png');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.center();
}
function draw()
{
image(initial_img3 ,0,0,400,300);

}
function btn_back()
{
    window.location = "index.html";
}