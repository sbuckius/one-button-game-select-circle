// -------------------------------------------------------------
// Click the Circle (or Square) Game
// Full commented version ready to paste into p5.js editor
// -------------------------------------------------------------

// The message shown at the top of the screen
let question = "Click the circle!";  // Initial instruction text

// Circle position and size
let circleX = 150, circleY = 200, r = 40;  // Circle center (x,y) and radius

// Square position and size
let squareX = 300, squareY = 200, s = 80;  // Square center (x,y) and side length

function setup() {
  // Create the drawing area (width=400, height=400 pixels)
  createCanvas(400, 400);

  // Center text horizontally and vertically so messages align properly
  textAlign(CENTER, CENTER);
}

function draw() {
  // Set a light gray background (resets the frame each time)
  background(240);

  // -------------------- Draw the question text --------------------
  textSize(20);          // Set text size
  fill(0);               // Black text color
  text(question, width / 2, 50);  // Draw current message at top center

  // -------------------- Draw the circle --------------------
  fill('skyblue');       // Fill color for circle
  circle(circleX, circleY, r * 2);  // Draw circle using center and diameter

  // -------------------- Draw the square --------------------
  fill('pink');          // Fill color for square
  rectMode(CENTER);      // Make squareX and squareY its center
  rect(squareX, squareY, s, s);  // Draw square using center and side length
}

function mousePressed() {
  // Calculate distance from mouse click to circle center
  let d = dist(mouseX, mouseY, circleX, circleY);

  // -------------------- If click is inside the circle --------------------
  if (d < r) {
    // The player clicked within the circle's radius
    question = "You clicked the circle! 🎉";  // Update message for circle click
  } 
  // -------------------- Else if click is inside the square --------------------
  else if (
    mouseX > squareX - s/2 && mouseX < squareX + s/2 &&  // Horizontal range
    mouseY > squareY - s/2 && mouseY < squareY + s/2     // Vertical range
  ) {
    // The player clicked inside the square
    question = "You clicked the square!";  // Update message for square click
  }
  // -------------------- Otherwise --------------------
  // If neither shape was clicked, the message stays the same.
}
