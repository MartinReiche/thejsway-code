// Coding Time
const buttonElement = document.getElementById("startbutton");
const timeElement =  document.getElementById("time");
let count = false;
let elapsedSecs = 0;
let intervalId;

const countUp = () => {
	elapsedSecs++;
	timeElement.textContent = elapsedSecs;
};

buttonElement.addEventListener("click", () => {
	// flip boolean flag
	count =  !count;
	if (count) {
		intervalId = setInterval(countUp, 1000);
		buttonElement.textContent = "Pause";
	} else {
		clearInterval(intervalId);
		buttonElement.textContent = "Start";
	}
});

// get elements
const ballElement = document.getElementById("ball");
const frameElement = document.getElementById("frame");
const ballHeight = parseFloat(getComputedStyle(ballElement).height);

// get lowest point
const yMin = (parseFloat(getComputedStyle(frameElement).height) - ballHeight) ;
// set bottom position of ball to lowest point
ballElement.style.bottom = -yMin + "px";
// animation parameters
let step = yMin;
const steps = 100;
const increase = Math.PI * 2 / steps;

// Bouncing ball function
const bounce = () => {
	// implement animation function
	ballElement.style.bottom = (Math.abs(Math.sin(step) * yMin) -yMin) + "px";
	// increase step
	step += increase;
	// request next animation step
	animationId = requestAnimationFrame(bounce);
};

// Add event listeners to buttons
document.getElementById("start").addEventListener("click", e => {
	let animationId = requestAnimationFrame(bounce)
	e.target.disabled = true;
	document.getElementById("stop").disabled = false;
})
document.getElementById("stop").addEventListener("click", e => {
	cancelAnimationFrame(animationId);
	e.target.disabled = true;
	document.getElementById("start").disabled = false;
})