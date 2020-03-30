let myButton;
let myTitle;
let myInput;
let myParagraph;
let myString;

function setup() {
  noCanvas();
  myInput = createInput();
  myButton = select('#myButton');

  myTitle = select('#myTitle');


  myParagraph = select('#myParagraph');


}

function draw() {

  myString = myInput.value();
  if (myString === "3") {
    myTitle.html('Correct!');
    window.location.href = "fourth.html"
  }
}

function buttonPressed() {
  console.log('pressed');
  showInput();
}
