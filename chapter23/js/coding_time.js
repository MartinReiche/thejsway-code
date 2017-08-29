// Add event listener to form
document.getElementById("article").addEventListener("submit", e => {
	// cancel default behaviour on submit
	e.preventDefault();
	// create new formData object
	const formData = new FormData(e.target);
	// Send formdata to server using an asynchronous POST request
	fetch("https://thejsway-server.herokuapp.com/articles", {
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

// Sending JSON data to a server

// countries visited
const countriesTravelled = [
	{
		name: "Laos",
		year: 2007
	},
	{
		name: "Cambodia",
		year: 2007
	},
	{
		name: "Australia",
		year: 2006
	},
	{
		name: "Norway",
		year: 2017
	}
];

const travelData = {
	name: "Martin",
	countries: countriesTravelled
};

console.log(travelData);
// console.log(JSON.stringify(travelData));

// Send data to server using async POST sending JSON
fetch("https://thejsway-server.herokuapp.com/api/countries", {
	method: "POST",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json"
	},
	body: JSON.stringify(travelData)
})
	.then(response => response.text())
	.then(result => {
		console.log(result)
	})
	.catch(err =>  {
		console.error(err.message)
	});
