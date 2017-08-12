// Word info
const word = prompt("Please enter a word!");
let numUpCase = 0;
let numVowel = 0;
const vowels = "aiueoöüä";
// iterate over the word
for (const letter of word) {
	// count upper case characters
	if (letter === letter.toUpperCase()) {
		numUpCase++;
	}
	// check if character is vowel
	for (const vowel of vowels) {
		if (letter.toLowerCase() === vowel) {
			numVowel++;
		}
	}
}
// reverse word function
reverseWord = word => {
	let result = "";
	for (let i = word.length - 1; i >= 0; i--) {
		result = result + word[i];
	}
	return result;
};
// Check if word is a palindrome
isPalindrome = word => {
	if (word.toLowerCase() === reverseWord(word).toLowerCase()) {
		return "The word is a palindrome.";
	} else {
		return "The word is not a palindrome.";
	}
};

// Report result
alert(
	`The word '${word}' has ${word.length} characters of which ${numUpCase} are upper, ${word.length -
		numUpCase} are lower case and ${numVowel} characters are vowels. Written backwards, the word is
		${reverseWord(word)}. ${isPalindrome(word)}`
);
