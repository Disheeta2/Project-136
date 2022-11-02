Status = "";

function setup()
{
    canveas = createCanvas(480,380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(480,380);  
}

function start()
{
    objectDetector = ml5.objectDetector('cocosssd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modelLoaded()
{
    console.log("Model Loaded !");
}

function draw()
{
    image(video,0,0,480,380);
}