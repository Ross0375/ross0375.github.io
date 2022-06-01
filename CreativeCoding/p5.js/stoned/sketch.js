function preload() {
  sound = loadSound('stoned.wav');
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

  background(0, 0, 0, 10);
  
  if (freqResponse[3] > 0) {
    stroke(0,255,0);
  }else if(freqResponse[0] > 0){
    stroke('blue');
  }else if (freqResponse[1] > 0){
    stroke('red');
  }
  let waveform = fft.waveform();
  noFill();
  beginShape();
  for (let i = 0; i < waveform.length; i++){
    
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -.1, .1, 0, height);
    vertex(x,y);
  }
  endShape();
}