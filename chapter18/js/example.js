// Repeated actions

// // Count down the counter until 0
// const decreaseCounter = () => {
//   // Convert counter text to a number
//   const counter = Number(counterElement.textContent);
//   if (counter > 1) {
//     // Decrease counter by one
//     counterElement.textContent = counter - 1;
//   }
//   else {
//     // Cancel the repeated execution
//     clearInterval(intervalId);
//     // Modify the page title
//     const title = document.getElementById("title");
//     title.textContent = "BOOM!!";
//   }
//   console.log(intervalId);
// };

// const counterElement = document.getElementById("counter");

// // Call the decreaseCounter function every second (1000 milliseconds)
// const intervalId = setInterval(decreaseCounter, 1000);

// Trigger action after delay
// Count down the counter until 0
const decreaseCounter = () => {
  // Convert counter text to a number
  const counter = Number(counterElement.textContent);
  if (counter > 1) {
    // Decrease counter by one
    counterElement.textContent = counter - 1;
  }
  else {
    // Cancel the repeated execution
    clearInterval(intervalId);
    // Modify the page title
    const title = document.getElementById("title");
    title.textContent = "BOOM!!";
    // Modify the title after 2 seconds
    setTimeout(() => {
      title.textContent = "Everything's broken now :(";
    }, 2000);
  }
};

const counterElement = document.getElementById("counter");

// Call the decreaseCounter function every second (1000 milliseconds)
const intervalId = setInterval(decreaseCounter, 1000);

// // Animate page elements
// // Move the block to the left
// const moveBlock = () => {
//   // Convert the left position of the block (value of the form "XXpx") to a number
//   const xBlock = parseFloat(getComputedStyle(block).left);
//   // Move the block to the right
//   block.style.left = (xBlock + movement) + "px";
//   // Have the browser call moveBlock as soon as possible
//   requestAnimationFrame(moveBlock);
// };

// const frameElement = document.getElementById("frame");
// const blockElement = document.getElementById("block");

// // Movement value in pixels
// const movement = 1;

// // Start the animation
// requestAnimationFrame(moveBlock);

// now with a meaningful stop
const moveBlock = () => {
	// convert left pos of block to a number
	const xBlock = parseFloat(getComputedStyle(block).left);
	// get max position of left borer
	const xMax = parseFloat( getComputedStyle(frame).width);
	// if block is still widthin frame
	if (xBlock + blockWidth <= xMax) {
		// move block
		block.style.left = (xBlock + movement) + "px";
		// restart animation
		animationId = requestAnimationFrame(moveBlock);
	} else {
		// Cancel the animation
		cancelAnimationFrame(animationId);
	}
}

const frameElement = document.getElementById("frame");
const blockElement = document.getElementById("block");
const blockWidth = parseFloat(getComputedStyle(block).width);
const movement = 7;

let animationId = requestAnimationFrame(moveBlock);

