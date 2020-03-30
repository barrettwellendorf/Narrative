let greeting;
var slider;

function setup() {
  createCanvas(720, 400);
  colorMode(HSB, 255);
  slider = createSlider(0, 255, 127);

  greeting = createElement('h2', 'Slide to your favorite color!');
  greeting.position(20, 5);

}

function draw() {
  strokeWeight(2);
  stroke(slider.value(), 255, 255);
  fill(slider.value(), 255, 255, 127);
  rect(360, 200, 200, 200);

  button2 = createButton('Advance');
  button2.position(100, 800);
  button2.mousePressed(pagethree);
}

function pagethree() {
  console.log('pressed');
  window.location.href = "third.html"
  myButton.hide();
  showInput();
}
