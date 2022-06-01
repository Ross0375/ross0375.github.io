
let clipR;
let clipB;
let clipY;

const slices = 20;
const numShapes = 700;

var shape, mask, img;



function randomClip() {
    let clip = {
        x: random(width),
        y: random(height),
        size: random(200),
        rotation: random( 2 * PI * 200 / 200)
    };
    return clip;
}

let clips = [];

let clipX = [];

function preload() {
    clipX[0] = loadImage("Images/bread-clip-red.png");
    clipX[1] = loadImage("Images/bread-clip-blue.png");
    clipX[2] = loadImage("Images/bread-clip-yel.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //colorMode();
    noStroke();
    //angleMode(DEGREES);
    // any additional setup code goes here

    shape = calcStuff(width,height,slices);
    mask = createMask(shape.a,shape.o);
    console.log(shape);
}


function draw() {
    background(255)
    
    drawTags();

    mirror();
}


function drawTags() {
    for (let i = 0; i < clips.length; i++) {
        push()
        translate(clips[i].x, clips[i].y)
        rotate(clips[i].rotation)
        image(clipX[i%3],
            0,
            0,
            clips[i].size,
            clips[i].size);
        clips[i].y++;
        pop()
    }
    if (frameCount % 2 == 0) {
        let clip = randomClip();
        clips.push(clip);
    }
}

function mirror() {
    // copy a section of the canvas
    img = get(0,0,shape.a,shape.o);
    // cut it into a triangular shape
    img.mask(mask);

    push();
    // move origin to centre
    translate(width/2,height/2);
    // turn the whole sketch over time
    // rotate(radians(frameCount/3));

    for(var i=0; i<slices; i++) {
      if(i%2==0) {
        push();
        scale(1,-1); // mirror
        image(img,0,0); // draw slice
        pop();
      } else {
        rotate(radians(360/slices)*2); // rotate
        image(img,0,0); // draw slice
      }
    }
    pop();
}

function calcStuff(width, height, s) {
    // because pythagorean theorem
    // h = sqrt(a^2 + b^2)
    // a = sqrt(h^2 - b^2)
    // b = sqrt(h^2 - a^2)
    let a = sqrt(sq(width/2)+sq(height/2));
    let theta = radians(360 / s);
    let o = tan(theta) * a;
    let h = a / cos(theta);
  
    return {a: round(a), o: round(o), h: round(h)};
  }

function createMask(w,h) {
    // create triangular mask so that the parts of the 
    // kaleidoscope don't draw over one another

    mask = createImage(w,h);
    mask.loadPixels();
    for (i = 0; i < mask.width; i++) {
        for (j = 0; j < mask.height; j++) {
            if(i >= map(j,0,h,0,w)-1) // -1 removes some breaks
                mask.set(i, j, color(255));
        }
    }
    mask.updatePixels();
    return mask;
}
// 


// function draw() {
//     background(50);
//     noFill();
//     stroke(255);
//     for (let i = 0; i < circles.length; i++) {
//         ellipse(circles[i].x,
//             circles[i].y,
//             circles[i].diam,
//             circles[i].diam);
//         circles[i].y++;
//     }
//     if (frameCount % 30 == 0) {
//         let circ = randomCircle();
//         circles.push(circ);
//     }
// }