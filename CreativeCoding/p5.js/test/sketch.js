function preload() {
  sound = loadSound('desert.mp3');
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  audioSetup(cnv)
  audioAn()
  // put setup code here
}

function draw() {
  audioAn()
  // put drawing code here
}