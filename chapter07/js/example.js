// Musketeers
// Create aray and iterate over it
musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++) {
	console.log(musketeers[i]);
}
// Add element to array and iterate over it
musketeers.push("D'Artagnan");
musketeers.forEach(musketeer => {
	console.log(musketeer);
});
// Remove element from array and iterate over it
musketeers.splice(2, 1);
for (const musketeer of musketeers) {
	console.log(musketeer);
}

// Sum of values
const values = [3, 11, 7, 2, 9, 10];
// declare sum function
sumOfValues = values => {
	let sum = 0;
	values.forEach(value => {
		sum += value;
	});
	return sum;
};
// Call sum function and output
console.log(sumOfValues(values));

// Maximum Values
const values = [3, 11, 7, 2, 9, 10];
// Deckare max function
maxValue = values => {
	let max;
	for (let i = 0; i < values.length; i++) {
		if (i === 0) {
			max = values[i];
		} else if (values[i] > max) {
			max = values[i];
		}
	};
	return max;
};
// Call sum function and output
console.log(maxValue(values));

// List of words
// initialize word array
let words = [];
let stop = false;
while (!stop) {
	word = prompt("Please enter a word for the word list. Enter 'stop' when you are done.");
	if (word === "stop") {
		stop = true;
	} else {
		words.push(word);
	}
}
console.log(words);