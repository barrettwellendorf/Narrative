let input, button, greeting, page, button2;

function setup() {
  mytitle = select('#mytitle');
  createCanvas(1000, 940);

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'What is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('Welcome ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(130), 0, 0);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();

    button2 = createButton('Advance');
    button2.position(100, 800);
    button2.mousePressed(pagetwo);

  }

  function pagetwo() {
    console.log('pressed');
    window.location.href = "second.html"
    myButton.hide();
    showInput();
  }
}
function mousePressed() {
  myTitle.html('A New Title')

}
