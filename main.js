Status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();

}

function draw(){
    image(video,0,0,480,380);
}

function play_video(){
    objectDetector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status : object detected";
    object_name=document.getElementById("object_name").value;



}
function modelloaded(){
    console.log("modelloaded");
    Status=true;

}



