// put:   sound = loadSound('whatever.mp3'); in preload
//put:   audioSetup(CANVAS HERE) in setup
//put:   audioAn() in draw




// function preload(){
//   sound = loadSound('desert.mp3');
// }

// function setup(){
//   let cnv = createCanvas(windowWidth, windowHeight);
//   audioSetup(cnv)
// }

// //use these values to affect visuals
// function draw(){
//   audioAn()
// }

function audioSetup(canvas) {
  canvas.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.5);
}

let freqResponse = [
  bassFreq = 0,
  lowMidFreq = 0, 
  midFreq = 0, 
  highMidFreq = 0, 
  trebleFreq = 0
];

function audioAn() {
  fft.analyze();
  //calling all the bars
  soundBar(windowWidth / 5 * 0 + (windowWidth / 10), "bass", 184, 0)
  soundBar(windowWidth / 5 * 1 + (windowWidth / 10), "lowMid", 145, 1)
  soundBar(windowWidth / 5 * 2 + (windowWidth / 10), "mid", 145, 2)
  soundBar(windowWidth / 5 * 3 + (windowWidth / 10), "highMid", 98, 3)
  soundBar(windowWidth / 5 * 4 + (windowWidth / 10), "treble", 10, 4)
  console.log(freqResponse[3]);
}

//maps frequency to a bar

function soundBar(x, freq, thresh, freqPro) {
  let freqAn = fft.getEnergy(freq);
  freqResponse[freqPro] = map(freqAn, thresh, 255, 0, 255, true);
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}