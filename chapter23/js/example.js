// Sending form data dirctly

// Handle form submission
document.querySelector("form").addEventListener("submit", e => {
	// Cancel default behavior of sending a synchronous POST request
	e.preventDefault();
	// Create a FormData object, passing the form as a parameter
	const formData = new FormData(e.target);
	// Send form data to the server with an asynchronous POST request
	fetch("https://thejsway-server.herokuapp.com/animals", {
		method: "POST",
		body: formData
	})
		.then(response => response.text())
		.then(result => {
			document.getElementById("result").textContent = result;
		})
		.catch(err => {
			console.error(err.message);
		});
});

// Independant usage of fromData
// Create new, empty formdata object
const formData = new FormData();
// append desired key/value pairs
formData.append("size","L");
formData.append("color", "red");
// Send data to the server
fetch ("https://thejsway-server.herokuapp.com/tshirt", {
	method: "POST",
	body: formData
})
	.then(response => response.text())
	.then(result => {
		document.getElementById("result2").textContent = result;
	})
	.catch(err => {
		console.error(err.message);
	});

// Sending JSON DATA
// Create an array containing two objects
const cars = [
  {
    model: "Peugeot",
    color: "blue",
    registration: 2012,
    checkups: [2015, 2017]
  },
  {
    model: "Citroën",
    color: "white",
    registration: 1999,
    checkups: [2003, 2005, 2007, 2009, 2011, 2013]
  }
];

// Send this array as JSON data to the server
fetch("https://thejsway-server.herokuapp.com/api/cars", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(cars)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });