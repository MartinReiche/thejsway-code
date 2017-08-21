// AJAX requests
fetch(
	"https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
	.then(response => response.text()) // Access and return response's text content
	.then(text => {
		console.log(text); // Display file content in the console
	});

fetch("http://non-existent-resource")
  .catch(err => {
    console.error(err.message);
  });

// Handling JSON

// Define a JavaScript object
const plane = {
  manufacturer: "Airbus",
  model: "A320"
};
console.log(plane); // Display the object
const planeText = JSON.stringify(plane);
console.log(planeText); // Display the object as a JSON string
console.log(JSON.parse(planeText)); // Display the object

// Define an array containing two objects
const planes = [
  {
    manufacturer: "Airbus",
    model: "A320"
  },
  {
    manufacturer: "Boeing",
    model: "737"
  }
];
console.log(planes); // Display the array of objects
const planesText = JSON.stringify(planes);
console.log(planesText); // Display the array as a JSON string
console.log(JSON.parse(planesText)); // Display the array of objects

// fetch JSON from URL
fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/movies.json"
)
  .then(response => response.json()) // Access and return response's JSON content
  .then(movies => {
    // Iterate on the movie array
    movies.forEach(movie => {
      // Display title of each movie
      console.log(movie.title);
    });
  })
  .catch(err => {
    console.error(err.message);
  });