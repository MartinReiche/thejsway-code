// Carousel
// using a while loop
const maxTurns = Number(prompt("Please enter the number of turns"));
let turn = 1;
console.log("while loop:");
while (turn <= maxTurns) {
	console.log(`Number of turn: ${turn}`);
	turn++;
}
// using a for loop
console.log("for loop:");
for (turn = 1; turn <= maxTurns; turn++) {
	console.log(`Number of turn: ${turn}`);
}

// Parity
let maxNum = Number(prompt("Please enter a number!"));
// using a while loop
let i = 1;
console.log("while loop:");
while (i <= maxNum) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`);
	}
	i++;
}
// using a for loop
console.log("for loop:");
for (i = 1; i <= maxNum; i++) {
	if (i % 2 === 0) {
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`);
	}
}

// Input validation
let input;
while (!(input > 50 && input < 100)) {
	input = Number(prompt("Please enter a number!"));
}

// Multiplication table
let maxNum = 0;
while (maxNum < 1 || maxNum > 9) {
	maxNum = Number(
		prompt(
			"Please enter a number between 1 - 9 to return a multiplacation table!"
		)
	);
	if (maxNum >= 1 && maxNum <= 9) {
		// using a while loop
		console.log("while loop:");
		let i = 1;
		while (i <= maxNum) {
			console.log(`${maxNum} * ${i} = ${maxNum * i}`);
			i++;
		}
		// using a for loop
		console.log("for loop:");
		for (i = 1; i <= maxNum; i++) {
			console.log(`${maxNum} * ${i} = ${maxNum * i}`);
		}
	}
}

// Neither yes nor no
let continueGame = true;
while (continueGame) {
	answer = prompt("Say something neither using the words 'yes' or 'no'!");
	if (answer === "yes" || answer === "no") {
		continueGame = false;
		alert(`You just said ${answer}! Game over!`);
	} else {
		alert(`You said: ${answer}`);
	}
}

// FizzBuzz
maxNum = Number(prompt("Please enter a numer!"));
// using a while loop
console.log("while loop:");
let i = 1;
while (i <= maxNum) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Bazz");
	} else {
		console.log(i);
	}
	i++;
}

// using a for loop
console.log("for loop:");
for (i = 1; i <= maxNum; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else if (i % 5 === 0) {
		console.log("Bazz");
	} else {
		console.log(i);
	}
}

