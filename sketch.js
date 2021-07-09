function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizedCanvas(windowWidth, windowHeight);
}
function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("#ef476f");
  translate(width / 2, height / 2);

  rotate(-90);

  let hou = hour();
  let min = minute();
  let sec = second();
  let millisecond = millis();

  console.log(`${hou}:${min}:${sec}:${millisecond}:`);
  stroke("#cddafd");
  strokeWeight(8);
  noFill();
  ellipse(0, 0, 300, 300);
  let millisAngle = map(millisecond, 0, 1000, 0, 360);
  fill(45, 45, 45, 50);
  let secondAngle = map(sec, 0, 60, 0, 360);
  fill(255, 255, 255, 100);
  let minuteAngle = map(min, 0, 60, 0, 360) + map(sec, 0, 60, 0, 6);
  fill(155, 155, 155, 75);
  let hourAngle = map(hou % 12, 0, 12, 0, 360);
  fill(55, 55, 55, 60);

  stroke("#dfe7fd");
  arc(0, 0, 250, 250, 0, secondAngle, PIE);

  stroke("#ffcbf2");
  arc(0, 0, 200, 200, 0, minuteAngle, PIE);

  stroke("#c9184a");
  arc(0, 0, 150, 150, 0, hourAngle, PIE);

  stroke("#cddafd");
  arc(-150, 150, 100, 100, 0, millisAngle, PIE);

  push();
  rotate(millisAngle);
  stroke("#90e0ef");
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(secondAngle);
  stroke("#e5b3fe");
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#d0d1ff");
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#c8e7ff");
  line(0, 0, 75, 0);
  pop();
}
