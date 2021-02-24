function preload()
{
initial_img = loadImage('17-fabulous-bedroom-decor-ideas-FB-1200x700-compressed.jpg');
}
function setup()
{
canvas = createCanvas(400,300);
canvas.center();
}
function draw()
{
image(initial_img ,0,0,400,300);

}
function btn_back()
{
    window.location = "index.html";
}