// Say hello to the user
function sayHello(firstName, lastName) {
	const message = `Hello, ${firstName} ${lastName}!`;
	return message;
}
// ask user for first and last name
const firstName = prompt("Please enter your first name.");
const lastName = prompt("Please enter your flast name.");
// call sayHello() and show its result
alert(sayHello(firstName, lastName));

// Square the given number x
function square1(x) {
	return x ** 2;
}

// Square the given number x
const square2 = x => x ** 2;

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25

// min() function
const min = (firstNum, secondNum) => {
	if (firstNum < secondNum) {
		return firstNum;
	} else {
		return secondNum;
	}
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

// Calculator
const calculate = (firstNum, operand, secondNum) => {
	switch (operand) {
		case "+":
			return firstNum + secondNum;
		case "-":
			return firstNum - secondNum;
		case "*":
			return firstNum * secondNum;
		case "/":
			return firstNum / secondNum;
		default:
			console.log("Invalid operand");
	}
};

console.log(calculate(4, "+", 6)); // Must show 10
console.log(calculate(4, "-", 6)); // Must show -2
console.log(calculate(2, "*", 0)); // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

// Circumference and area of a circle
const circumferenceOfCircle = radius => radius * 2 * Math.PI;
const areaOfCircle = radius => "not implemented"
// Ask for user input
const radius = Number(prompt("Please enter the radius of a cicle."));
console.log(`The circumference of a circle with radius ${radius} is ${circumferenceOfCircle(radius)}`);
console.log(`The aera of a circle with radius ${radius} is ${areaOfCircle(radius)}`);