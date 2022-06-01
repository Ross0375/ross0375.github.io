function preload() {
  sound = loadSound('desert.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  audioSetup(cnv)
  audioAn()
  // put setup code here
}

//when bass is over the threshold pick 2 random points on the canvas and draw circles along that line, and then fade the lines out.
//set random vector between 2 to -2 for both X and Y
//when highmid is over, make it rainbow colors

let isDrawn = false;

let circleStorage = [
  x = 0,
  y = 0,
  frameStorage = 0,
  xVel = 0,
  yVel = 0
]

let colorFromBass, colorToBass, colorFromHighMid, colorToHighMid;

// class circleGen {
//   constructor() {
//     this.x = random(100, width-100);
//     this.y = random(100, height-100);
//     this.frameStorage = frameCount;
//     this.xVel = 
//   }
// }

function draw() {
  colorFromBass = color(255, 255, 100);
  colorToBass = color(188, 75, 81);
  colorFromHighMid = color(0, 0, 0, 10);
  colorToHighMid = color(188, 75, 81, 255);
  audioAn()
  
  // put drawing code here
  background(colorChange(colorFromHighMid, colorToHighMid, map(freqResponse[3], 0, 10, 0, 1, true)));
  bassDraw()
}

let speedMult = 1

function bassDraw() {
  if(freqResponse[0] > 0 && isDrawn === false) {
    isDrawn = true
    circleStorage[0] = random(100, width-100);
    circleStorage[1] = random(100, height-100);
    circleStorage[2] = frameCount

    // if value is below the centre, make it positive, if it's above, make it negative
    // circleStorage[3] = random(-speedMult, speedMult)
    if (circleStorage[0] > (width / 2)){
      circleStorage[3] = random(-speedMult, 0)
    } else {
      circleStorage[3] = random(0, speedMult)
    }
    // circleStorage[4] = random(-speedMult, speedMult)
    if (circleStorage[1] > (height / 2)){
      circleStorage[4] = random(-speedMult, 0)
    } else {
      circleStorage[4] = random(0, speedMult)
    }
  } else if (freqResponse[0] > 0) {
    fill(colorChange(colorFromBass, colorToBass, map(freqResponse[0], 0, 80, 0, 1, true)))
    if( circleStorage[0] <= 0 || circleStorage[0] >= width) circleStorage[3] *= -1;
    if( circleStorage[1] <= 0 || circleStorage[1] >= height) circleStorage[4] *= -1;
    circleLine(circleStorage[0] += circleStorage[3] * freqResponse[0],circleStorage[1] += circleStorage[4] * freqResponse[0]);
  } else if (freqResponse[0] === 0) {
    isDrawn = false;
    
  }
}

function colorChange(from, to, int) {
  return lerpColor(from, to, int)
}



function circleLine(x, y) {

  noStroke()
  circle(x, y, freqResponse[0] * 2);
}