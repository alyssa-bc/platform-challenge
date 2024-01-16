//Circle Collide Challenge (Easier)

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

//Global Variables
let mouseX, mouseY;
let mouseSpeed = 3;
let randX = Math.random() * 400;
let randY = Math.random() * 400;
let blueRadius = 10;
let orangeRadius = 30;
let blueX = 50;
let blueY = 200;

//Main Program
requestAnimationFrame(loop);

function loop() {
  // LOGIC
  let rise = mouseY - blueY;
  let run = mouseX - blueX;
  let distance = Math.sqrt(rise ** 2 + run ** 2);

  let rise2 = randY - blueY;
  let run2 = randX - blueX;
  let distance2 = Math.sqrt(rise2 ** 2 + run2 ** 2);

  //Following code
  if (distance > 0) {
    let dx = (run / distance) * mouseSpeed;
    let dy = (rise / distance) * mouseSpeed;

    // Move the Blue Circle
    if (distance < blueRadius) {
      blueX = mouseX;
      blueY = mouseY;
    } else {
      blueX = blueX + dx;
      blueY = blueY + dy;
    }
  }

  //Colliding code
  if (distance2 < 40) {
    randX = Math.random() * 400;
    randY = Math.random() * 400;
    console.log("hit");
  }

  // DRAWING

  //Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  //Draw a circle
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(blueX, blueY, blueRadius, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(randX, randY, orangeRadius, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(loop);
}
//Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;

  // console.log(distance);
}
