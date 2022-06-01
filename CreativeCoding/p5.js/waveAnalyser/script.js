function preload(){
  sound = loadSound('../stoned/stoned.wav');
}



function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.5);
}

//use these values to affect visuals

let freqResponse = [
  bassFreq = 0,
  lowMidFreq = 0, 
  midFreq = 0, 
  highMidFreq = 0, 
  trebleFreq = 0
];



function draw(){
  background(0);

  fft.analyze();
  noStroke();
  fill(255);

  text('tap to play', 20, 20);

  // threshold = map(mouseY, height, 0, 0, 255);

  //use for adjustment

  text(map(mouseY, height, 0, 0, 255), mouseX, mouseY);

  //calling all the bars
  soundBar(windowWidth / 5 * 0 + (windowWidth / 10), "bass", 185, 0)
  soundBar(windowWidth / 5 * 1 + (windowWidth / 10), "lowMid", 145, 1)
  soundBar(windowWidth / 5 * 2 + (windowWidth / 10), "mid", 145, 2)
  soundBar(windowWidth / 5 * 3 + (windowWidth / 10), "highMid", 98, 3)
  soundBar(windowWidth / 5 * 4 + (windowWidth / 10), "treble", 10, 4)


  console.log(freqResponse[1]);
}

//maps frequency to a bar

function soundBar(x, freq, thresh, freqPro) {
  let width = 100
  let freqAn = fft.getEnergy(freq);

  //this code stolen from p5 example project
  let h = -height +map(freqAn, 0 , 255, height, 0);

  //if the value is above the threshold change the colour and then draw the bar
  if (freqAn > thresh) {
    fill(255, 0,0);
    rect(x - width/2, height, width, h)
  } else {
    fill(255);
    rect(x - width/2, height, width, h)
  }

  //set the corresponding value in the array to 0-255 if it's above the threshold
  freqResponse[freqPro] = map(freqAn, thresh, 255, 0, 255, true);

  //draw the threshold line
  thresholdBar(thresh)
}


function thresholdBar(thresh) {
  let h = map(thresh, 0, 255, windowHeight, 0)
  rect(0, h, width, 1)
}

// function keyPress() {
//   if (keyCode === 32 ) {
//     togglePlay();
//   }
// }

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}