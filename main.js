function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(550,150);
    classifier=ml5.poseNet(video,modelLoaded());
    classifier.on('pose',gotPoses);

}

function draw(){
    background('#969A97');
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotPoses(results){
    if(results.Length>0){
        console.log(results);
    }
    
}

