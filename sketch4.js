var textbox;
var slider;
var paragraph;

function setup() {
  noCanvas();
  slider = createSlider(10,64,16);
  paragraph = createP('Happy!');

  slider.input(updateSize);
}

function draw() {
  button2 = createButton('Advance');
  button2.position(100, 800);
  button2.mousePressed(pagetwo);
}

function pagetwo() {
  console.log('pressed');
  window.location.href = "final.html"
  myButton.hide();
  showInput();
}


function updateSize(){
  paragraph.style("font-size", slider.value() + "pt");
}

function updateText(){
  paragraph.html(textbox.value());
}
