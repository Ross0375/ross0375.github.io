let mySound;
function preload() {
    mySound = loadSound('GotUpLate.mp3');
    
}


function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(50);
    stroke(255);
    translate(width / 2, height / 2)
    for (let i = 0; i <= 10; i++) {
        
        push();
        strokeWeight(10);
        rotate(TWO_PI * i / 8);
        line(-100, -100, 100, 100);
        pop();
    }
    if (frameCount == 30) {
        mySound.play();
    }
}