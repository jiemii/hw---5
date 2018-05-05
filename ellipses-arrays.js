var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
var ballcolors = [];
var d = 0;

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 50; i = i + 1) {
    x[i] = width / 8;
    y[i] = height / 8;
    xSpeed[i] = random(-10, 10);
    ySpeed[i] = random(-10, 10);
    ballcolors[i] = color(random(255), random(255), random(255))
  }
}

function draw() {
  background(0);
  noStroke();

  for (var i = 0; i < 20; i = i + 2) {
    fill(ballcolors[i]);
    ellipse(x[i], y[i], d);
    x[i] = x[i] + xSpeed[i];
    y[i] = y[i] + ySpeed[i];

    if (random() <0.1){
      d = random (10, 100)
    }
    
    if (x[i] > width) {
      xSpeed[i] = -xSpeed[i];
    }

    if (y[i] > height) {
      ySpeed[i] = -ySpeed[i];
    }

    if (x[i] < 10) {
      xSpeed[i] = -xSpeed[i];
    }

    if (y[i] < 10) {
      ySpeed[i] = -ySpeed[i];
    }
  }
}
