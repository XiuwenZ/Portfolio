// Get the canvas element and its context
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



// // Set the background color
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);


// Draw the moon
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(400, 100, 50, 0.5 * Math.PI, 1.5 * Math.PI);
ctx.fill();

// Draw the mountains
ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(0, canvas.height);
ctx.lineTo(0, canvas.height - 100);
ctx.lineTo(100, canvas.height - 200);
ctx.lineTo(200, canvas.height - 50);
ctx.lineTo(canvas.width, canvas.height);
ctx.fill();

// Draw the house
ctx.fillStyle = "#FFA07A";
ctx.fillRect(200, 300, 100, 100);
// ctx.fillStyle = "white";
// ctx.fillRect(220, 320, 20, 20);
// ctx.fillRect(260, 320, 20, 20);
// ctx.fillStyle = "black";
// ctx.fillRect(230, 340, 10, 10);
// ctx.fillRect(270, 340, 10, 10);
// ctx.fillRect(240, 380, 20, 20);

// Draw the roof using a for loop
ctx.beginPath();
ctx.moveTo(200, 300);
ctx.lineTo(300, 300);
for (var i = 0; i <5; i++) {
  ctx.lineTo(250 + i*10, 250 - i*10);
}
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();

// Draw the windows using a for loop
ctx.fillStyle = "white";
for (var i = 0; i < 2; i++) {
    ctx.fillRect(220 + i*40, 310, 20, 20);
    ctx.fillRect(220 + i*40, 350, 20, 20);
//   ctx.fillRect(230 + i*40, 350, 20, 20);
}

// Draw the door using a for loop
ctx.fillStyle = "brown";
ctx.fillRect(245, 380, 20, 20);


// Draw the grass
ctx.fillStyle = "green";
for (var i = 180; i < canvas.width-150; i += 10) {
	ctx.fillRect(i, canvas.height - 90, 5, 30);
}


// draw the water stream 
ctx.strokeStyle = "blue";

// Set the line width to 20
ctx.lineWidth = 20;

// Start drawing the river at position (50, 150)
ctx.beginPath();
ctx.moveTo(0, 480);

// Draw a series of curves to create a wavy river
var x = 0;
var y = 480;
for (var i = 0; i < 10; i++) {
  // Draw a curve to the next point
  ctx.quadraticCurveTo(x, y, x , y);
  
  // Update the coordinates for the next curve
  x += 50;
  y = (i % 2 == 0) ? 460 : 480;
}

// End the river at position (canvas.width, 450)
ctx.lineTo(canvas.width, 480);

// Stroke the path to draw the river
ctx.stroke();



// Add caption text at the top
ctx.font = "30px Arial";
ctx.fillStyle = "white";
ctx.fillText("My Cartoon",10,50);


// Draw the button
ctx.fillStyle = "#A7477F";
ctx.fillRect(350, 410, 200, 30);

// Add a text label to the button
ctx.font = "20px Arial";
ctx.fillStyle = "#DDB64B";
ctx.fillText("return home",360, 430);

// Add a click event listener to the canvas
canvas.addEventListener("click", function(event) {
// Get the position of the click relative to the canvas
var x = event.clientX - canvas.offsetLeft;
var y = event.clientY - canvas.offsetTop;

// Check if the click is within the button area
if (x >= 350 && x <= 480 && y >= 400 && y <= 450) {
    // Redirect to index.html
    window.location.href = "index.html";
}
});

