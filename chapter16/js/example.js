// // Show message function
// const showMessage = () => {
// 	alert("Hello from Javascript");
// };
// // Access the button
// const buttonElement = document.getElementById("myButton");
// // listen to the click event
// buttonElement.addEventListener("click", showMessage);

// // Using anonymous functions (same result, more concise)
// document.getElementById("myButton").addEventListener("click", () => {
// 	alert("Hello from Javascript");
// });
// // remove event listener
// document.getElementById("myButton").removeEventListener("click", showMessage);

// // handling keypresses
// document.addEventListener("keypress", e => {
// 	console.log(`Your pressed the ${String.fromCharCode(e.charCode)} key.`);
// });

// // Show information on a keyboard event
// const keyboardInfo = e => {
//   console.log(`Keyboard event: ${e.type}, key: ${e.keyCode}`);
// };

// // Integrate this function into key press and release:
// document.addEventListener("keydown", keyboardInfo);
// document.addEventListener("keyup", keyboardInfo);

// // Return the name of the mouse button
// const getMouseButton = code => {
//   let button = "unknown";
//   switch (code) {
//     case 0: // 0 is the code for the left mouse button
//       button = "left";
//       break;
//     case 1: // 1 is the code for the middle mouse button
//       button = "middle";
//       break;
//     case 2: // 2 is the code for the right button
//       button = "right";
//       break;
//   }
//   return button;
// };

// // Show info about mouse event
// const mouseInfo = e => {
//   console.log(
//     `Mouse event: ${e.type}, button: ${getMouseButton(
//       e.button
//     )}, X: ${e.clientX}, Y: ${e.clientY}`
//   );
// };

// // Add mouse click event listener
// document.addEventListener("click", mouseInfo);

// // on load function
// window.addEventListener("load", e => {
// 	console.log("The page has loaded!");
// });

// // Handle page closing
// window.addEventListener("beforeunload", e => {
//   const message = "Should you stay or should you go?";
//   // Standard way of showing a confirmation dialog
//   e.returnValue = message;
//   // Browser-specific way of showing a confirmation dialog
//   return message;
// });

// demonstrate event propagation

// // Click handler on the document
// document.addEventListener("click", e => {
//   console.log("Document handler");
// });
// // Click handler on the paragraph
// document.getElementById("para").addEventListener("click", e => {
//   console.log("Paragraph handler");
// });
// // Click handler on the button
// document.getElementById("propa").addEventListener("click", e => {
//   console.log("Button handler");
//   e.stopPropagation(); // Stop the event propagation
// });

// // demonstrate prevent default behavior
// document.getElementById("forbidden").addEventListener("click", e =>{
// 	alert("Yes.. But no!");
// 	// cancel default behavior
// 	e.preventDefault();
// });

// // Counting clicks
// // get button, count and deactivate element
// let count = 0;
// // count
// const countUp = e => {
// 	count++;
// 	document.getElementById("clickCount").textContent = `${count}`;
// 	e.stopPropagation();
// };
// document.getElementById("myButton").addEventListener("click", countUp);
// // revent counting
// document.getElementById("deactivate").addEventListener("click", e => {
// 	document.getElementById("myButton").removeEventListener("click", countUp)
// 	e.stopPropagation();
// });

// // Updating colors
// const divElements = document.getElementsByTagName("div");
// let color;

// document.addEventListener("keypress", e => {
// 	switch (String.fromCharCode(e.charCode)) {
// 		case "y":
// 			color = "yellow";
// 			break;
// 		case "r":
// 			color = "red";
// 			break;
// 		case "b":
// 			color = "blue";
// 			break;
// 		case "g":
// 			color = "green";
// 			break;
// 	};
// 	// update the color of all div elements
// 	for (div of divElements) {
// 		div.style.backgroundColor = color;;
// 	}
// });

// // Dessert list
// document.getElementById("addButton").addEventListener("click", e => {
// 	// Promt for dessert
// 	const dessert = prompt("Please add a dessert!");
// 	// create dessert
// 	const dessertElement = document.createElement("li");
// 	dessertElement.textContent = dessert;
// 	// change event on click
// 	dessertElement.addEventListener("click", e => {
// 		const dessert = prompt(`Chane ${dessertElement.textContent}:`);
// 		dessertElement.textContent = dessert;
// 		e.stopPropagation();
// 	});
// 	// add dessert to the DOM
// 	document.getElementById("desserts").appendChild(dessertElement);
// 	// stop propagation
// 	e.stopPropagation();
// });

// Interactive Quiz
// List of questions (statement + answer)
const questions = [
	{
		statement: "2+2?",
		answer: "4"
	},
	{
		statement: "In what year did Christopher Columbus discover America?",
		answer: "1492"
	},
	{
		statement:
			"What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
		answer: "The letter 'e'"
	},
];

// print question
const addQuestionToElement = (question) => {
	// create question button and answer
	const questionContainerElement = document.createElement("div");
	const questionElement = questionContainerElement.appendChild(document.createElement("p"));
	const buttonElement = questionContainerElement.appendChild(document.createElement("button"));
	const answerElement = document.createElement("p");
	// Add text
	questionElement.textContent = question.statement;
	buttonElement.textContent = "Show answer";
	answerElement.textContent = question.answer;
	// hide answer
	// answerElement.style.visibility = "hidden";
	// Add event listener to button
	buttonElement.addEventListener("click", e => {
		questionContainerElement.removeChild(buttonElement);
		questionContainerElement.appendChild(answerElement);
	});
	// return whole container
	return questionContainerElement;
};

// iterate over question array and add to DOM
const contentElement = document.getElementById("content");
for (question of questions) {
	contentElement.appendChild(addQuestionToElement(question));
};


