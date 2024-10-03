// sketch.js
function setup() {
  let canvas = createCanvas(250, 250);
  canvas.parent(document.body);
  background(250);
  canvas.touchStarted(touchStartedHandler);
  canvas.touchMoved(touchMovedHandler);
}

function touchStartedHandler(event) {
  event.preventDefault();
}

function touchMovedHandler(event) {
  fill(0);
  ellipse(touchX, touchY, 30, 30);
  return false; 
}

function draw() {
}
