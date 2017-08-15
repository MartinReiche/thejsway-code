// // Modifying an HTML element: adding an <li>
// document.getElementById("languages").innerHTML += '<li id="c">C</li>';

// // Delete the HTML content of the list, replacing it with nothing
// // document.getElementById("languages").innerHTML = "";

// // Add text to heading
// document.querySelector("h3").textContent += " for proramming"

// // set Attributes
// document.querySelector("h3").setAttribute("id","title");
// // directly
// document.querySelector("h3").id ="title";

// // remove class
// const titleElement = document.querySelector("h3");
// titleElement.classList.remove("beginning");
// titleElement.classList.add("title");
// console.log(titleElement);

// // Create a new element
// const pythonElement = document.createElement("li");
// // add id and text
// pythonElement.id = "python";
// pythonElement.textContent = "Python";
// // Add element to the DOM
// document.getElementById("languages").appendChild(pythonElement);

// // Insert nodes
// const perlElement = document.createElement("li");
// perlElement.id = "perl";
// perlElement.textContent ="Perl";
// // insert node before PHP
// document.getElementById("languages").insertBefore(perlElement, document.getElementById("php"));

// // Add Javascript at the top of the list
// document.getElementById("languages").insertAdjacentHTML("afterBegin", "<li id='javascript'>Javascript</li>");

// // Replacing nodes
// const lispElement = document.createElement("li");
// lispElement.id = "lisp";
// lispElement.textContent  = "Lisp";
// document.getElementById("languages").replaceChild(lispElement, document.getElementById("perl"));

// // remove node
// document.getElementById("languages").removeChild(document.getElementById("lisp"));

// // modifying style of elements
// // get first <p>
// const paragraphElement = document.querySelector("p");
// // modify coor and margin
// paragraphElement.style.color = "red";
// paragraphElement.style.margin ="50px";
// // properties with "-" must be conerted to camelCase in JS
// paragraphElement.style.fontFamily = "Arial";
// paragraphElement.style.backgroundColor = "black";

// // style doesn't show style properties taht are declared elsewhere
// const paragraphElements = document.getElementsByTagName("p");
// console.log(paragraphElements[2].style.color);

// // better: get the computed style
// const paragraphStyle = getComputedStyle(paragraphElements[2]);
// console.log(paragraphStyle.fontStyle);
// console.log(paragraphStyle.color);

// // Adding a paragraph
// // create the paragraph
// const paragraphElement = document.createElement("p");
// // Add text and link
// paragraphElement.innerHTML = "Here is a more complete <a>list</a> of languages.";
// // set href of link
// paragraphElement.querySelector("a").setAttribute("href","https://en.wikipedia.org/wiki/List_of_programming_languages");
// // Add aragraph to the DOM
// document.body.appendChild(paragraphElement);

// // Newspaper
// // Newspaper list
// const newspapers = [
// 	"https://www.nytimes.com",
// 	"https://www.washingtonpost.com",
// 	"http://www.economist.com"
// ];

// const createList = list => {
// 	// create unordered list
// 	const ulElement = document.createElement("ul");
// 	// iterate over newspaper list
// 	for (link of list) {
// 		// add li to ul
// 		const listElement = ulElement.appendChild(document.createElement("li"));
// 		// add link to li
// 		const linkElement = listElement.appendChild(document.createElement("a"));
// 		// set href
// 		linkElement.setAttribute("href", link);
// 		linkElement.textContent = link;
// 	}
// 	// Add ul to the DOM
// 	document.getElementById("content").appendChild(ulElement);
// };

// createList(newspapers);

// // Mini Dictionary
// const words = [{
//   term: "Procrastination",
//   definition: "Avoidance of doing a task that needs to be accomplished"
// }, {
//   term: "Tautology",
//   definition: "logical argument constructed in such a way that it is logically irrefutable"
// }, {
//   term: "Oxymoron",
//   definition: "figure of speech that juxtaposes elements that appear to be contradictory"
// }];

// const createDefList = words => {
// 	// Create <dl>
// 	const dlElement = document.createElement("dl");
// 	// loop over array
// 	for (word of words) {
// 		// create  <dt>
// 		const dtElement = document.createElement("dt");
// 		dtElement.innerHTML = `<strong>${word.term}</strong>`
// 		// create <dd>
// 		const ddElement = document.createElement("dd");
// 		ddElement.textContent = word.definition;
// 		// add <dt> and <dd> to <dl>
// 		dlElement.appendChild(dtElement);
// 		dlElement.appendChild(ddElement);
// 	}
// 	// Add <dl> to the DOM
// 	document.getElementById("content").appendChild(dlElement);
// }

// createDefList(words);

// // Updating Colors
// const updateColors = (fg, bg) => {
// 	// get <div> elements
// 	const divElements = document.getElementsByTagName("div");
// 	for (div of divElements) {
// 		Object.assign(div.style,{color: fg, backgroundColor: bg});
// 	}
// };

// // Ask the User for colors
// fg = prompt("Please enter text color");
// bg = prompt("Please background color");

// updateColors(fg, bg);

// Information about an element
const contentStyle = getComputedStyle(document.getElementById("content"));
const ulElement = document.createElement("ul");
document.getElementById("infos").appendChild(document.createTextNode("Information about the element"));
const heightElement = ulElement.appendChild(document.createElement("li"));
const widthElement = ulElement.appendChild(document.createElement("li"));
heightElement.textContent = `height: ${contentStyle.height}`;
widthElement.textContent = `width: ${contentStyle.width}`;
document.getElementById("infos").appendChild(ulElement);