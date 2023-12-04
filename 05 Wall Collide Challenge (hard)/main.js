// Simple Paint

// Setup Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Vairables
let upKey = false;
let downKey = false;
let rightKey = false;
let leftKey = false;
let upArrow = false;
let downArrow = false;
let rightArrow = false;
let leftArrow = false;
let blueY = 150;
let blueX = 150;
let wallX = 300;
let wallY = 100;

//Main Program Loop (60 FPS)
requestAnimationFrame(loop);
function loop() {
  // Update Variable

  // Animate Blue Sqaure
  if (upKey) {
    blueY--;
  } else if (downKey) {
    blueY++;
  } else if (rightKey) {
    blueX++;
  } else if (leftKey) {
    blueX--;
  }

  // Stop at wall

  if (blueX + 50 > wallX && blueY + 50 > wallY && blueY < wallY + 160) {
    blueX = wallX - 50;
  } else if (blueX < wallX + 40 && blueY + 50 > wallY && blueY < wallY + 160) {
    blueX = wallX + 40;
  }

  if (blueY + 50 > wallY && blueX + 50 > wallX && blueX < wallX) {
    blueY = wallY - 50;
  } else if (blueY < wallY + 160 && blueX + 50 > wallX && blueX < wallX) {
    blueY = wallY + 160;
  }

  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Blue Square
  ctx.fillStyle = "blue";
  ctx.fillRect(blueX, blueY, 50, 50);

  // Draw Grey Wall
  ctx.fillStyle = "grey";
  ctx.fillRect(wallX, wallY, 40, 160);
  requestAnimationFrame(loop);
}

// Document Event Stuff
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(event) {
  console.log(event.code);
  if (event.code === "KeyW") {
    upKey = true;
  } else if (event.code === "KeyS") {
    downKey = true;
  } else if (event.code === "KeyD") {
    rightKey = true;
  } else if (event.code == "KeyA") {
    leftKey = true;
  } else if (event.code == "ArrowUp") {
    upArrow = true;
  } else if (event.code == "ArrowDown") {
    downArrow = true;
  } else if (event.code === "ArrowRight") {
    rightArrow = true;
  } else if (event.code == "ArrowLeft") {
    leftArrow = true;
  }
}

function keyUpHandler(event) {
  if (event.code == "KeyW") {
    upKey = false;
  } else if (event.code === "KeyS") {
    downKey = false;
  } else if (event.code === "KeyD") {
    rightKey = false;
  } else if (event.code == "KeyA") {
    leftKey = false;
  } else if (event.code == "ArrowUp") {
    upArrow = false;
  } else if (event.code == "ArrowDown") {
    downArrow = false;
  } else if (event.code === "ArrowRight") {
    rightArrow = false;
  } else if (event.code == "ArrowLeft") {
    leftArrow = false;
  }
}
