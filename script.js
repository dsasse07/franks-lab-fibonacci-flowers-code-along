// https://www.youtube.com/watch?v=ymmtEgp0Tuc&list=PLYElE_rzEw_v8TXJ_ITSSBP_ypUKfQ7K-&index=1

const canvas = document.querySelector("#canvas1")
// Setup Using Canvas API
// ctx == context if we wanted 3D we could pass webGL
const ctx = canvas.getContext('2d'); //We can now all all Canvas API 2D methods on ctx
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
// If you want the size to update when window is resized, the height & width lines
// above would need to go inside of a resize eventListener


//Drawing Circles - Using Arc method
// Create Path
// Fill / Stroke path

// ctx.fillStyle = 'red'; //Change fill color
// ctx.strokeStyle = "blue"; // Change outline color
// ctx.lineWidth = 5; //. Change outline thickness
// ctx.beginPath(); //Put pencil on canvas
// ctx.arc(100, 100, 50, 0, Math.PI * 2); // draw curve starting at X, Y, with radius Z from 0deg to 360deg
// ctx.closePath(); //lift pencil from paper
// ctx.fill(); //fill shape - default is black
// ctx.stroke(); // default is 1x solid black

//Draw Rectangle
// ctx.fillRect(100, 100, 100, 100) // X, Y, Height, Width



// Animate the circle over and over, creating illusion of movement
// let size = 0 //setting initial size of circle being draw below
// let posX = canvas.width/2 //Center drawing on canvas
// let posY = canvas.height/2
// let angle = 0

//draw each frame and then call the method again recursively to call the animate function again
// function animate(){
  
//   // clearRect is an eraser. 0,0 are starting coords. 
//   ctx.clearRect(0,0,canvas.width, canvas.height)
  
//   // If you set height & width to canvas size and it will clear the whole canvas of
//   // previous drawing before drawing next
//   size += 0.05 //increment size each frame
//   posX += 0.5

//   ctx.fillStyle = 'red'; 
//   ctx.strokeStyle = "blue";
//   ctx.lineWidth = 5;
//   ctx.beginPath();
//   ctx.arc(posX, 300, size, 0, Math.PI * 2); 
//   // Since size is a variable, each frame will change.
//   // If we make the coords variables also, we can "move" the shape on the screen
//   ctx.closePath(); 
//   ctx.fill();
//   ctx.stroke();
//   requestAnimationFrame(animate)
// }


// Refactor the above into separate methods

// function animate(){
//   ctx.clearRect(0,0,canvas.width, canvas.height)
  
//   // // Create a simple vector path of straight line 
//   // size += 0.05 
//   // posX += 0.5
//   // posY += 0.5

//   // // Create a circular path using trigonometry
//   // size += 0.05 
//   posX += 5 * Math.sin(angle) //Sin fluctuates between 1 and -1
//   posY += 5 * Math.cos(angle) //Cos does same as above but in opposite phase
//   angle += 0.09
//   drawFlower()
//   requestAnimationFrame(animate)
// }

// function drawFlower() {
//   ctx.fillStyle = 'red'; 
//   ctx.strokeStyle = "blue";
//   ctx.lineWidth = 5;
//   ctx.beginPath();
//   ctx.arc(posX, posY, 20, 0, Math.PI * 2); 
//   ctx.closePath(); 
//   ctx.fill();
//   ctx.stroke();
// }



// Drawing Flowers

let frameNumber = 0 // Will increment with each frame and cause each frame to be a new petal
let scale = 10 // Will create flower from the center to outside 

// Draw ne shapes under the previous ones
ctx.globalCompositeOperation = 'destination-over';

let hue = 0

function drawFlower() {
  let angle = frameNumber * 3//determines final shape of flower
  let radius = scale * Math.sqrt(frameNumber)
  
  // written after radius since they depend on radius
  // adding + canvas.width/2 to posX and posY will center the drawing
  let posX = radius * Math.sin(angle) + canvas.width/2
  let posY = radius * Math.cos(angle) + canvas.height/2
  
  // ctx.fillStyle = 'gray'; 
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)' // HSL = Hue, Saturation, Lightness
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(posX, posY, Math.sqrt(frameNumber), 0, Math.PI * 2); 
  ctx.closePath(); 
  ctx.fill();
  ctx.stroke();
  
  frameNumber++
  hue++
}

function animate(){
  drawFlower()
  if (frameNumber > 360) return 
  requestAnimationFrame(animate) // Adjusts to screen refresh rate
}







animate()