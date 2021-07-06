noseX=0;
noseY=0;
leftWristx=0;
rightWristx=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(550,150);
    classifier=ml5.poseNet(video,modelLoaded());
    classifier.on('pose',gotPoses);

}

function draw(){
    document.getElementById("square_side").innerHTML="Width And Height Of The Square ="+difference+"px";
    background('#969A97');
    fill('#590093');
    stroke('#590093');
    square(noseX,noseY,difference);
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(" noseX="+ noseX +" noseY =" + noseY);

        leftWristx=results[0].pose.leftWrist.x;
        rightWristx=results[0].pose.rightWrist.x;
        difference= floor(leftWristx-rightWristx);
        console.log(difference);
        console.log(" leftWristx="+ leftWristx +" rightWristx =" + rightWristx);
    }
    
}

