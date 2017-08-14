// // Counting Elements
// const countElements = selector => {
// 	return document.querySelectorAll(selector).length;
// }

// console.log(countElements("p"));              // Should show 4
// console.log(countElements(".adjective"));     // Should show 3
// console.log(countElements("p .adjective"));   // Should show 3
// console.log(countElements("p > .adjective")); // Should show 2

// Link information
const linkInfo = () => {
	// get all inks in an array
	const linkElements = Array.from(document.getElementsByTagName("a"));
	const numLinks = linkElements.length;
	// print number of links
	console.log(numLinks);
	// print function
	const printTarget = (index) => console.log(linkElements[index].getAttribute("href"));
	// print first end last if more than one
	if (numLinks > 1) {
		printTarget(0);
		printTarget(numLinks - 1);
	} else if (numLinks === 1) {
		printTarget(0);
	}
};
// Show if an element has a class
const has = (id, someClass) => {
	const element = document.getElementById(id);
	if (element !== null) {
		if (element.classList.contains(someClass)) {
			console.log("true");
		} else {
			console.log("false");
		}
	} else {
		console.error(`No element has id '${id}'`);
	}
};

linkInfo();
has("saxophone", "woodwind");     // Should show true
has("saxophone", "brass");        // Should show false
has("trumpet", "brass");          // Should show true
has("contrabass", "chordophone"); // Should show an error message


