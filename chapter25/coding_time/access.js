// create formdata
const formData = new FormData();
formData.append("size", "L");
formData.append("color", "red");

// get form element
document.querySelector("form").addEventListener("submit", e => {
	// prevent default submit behavior
	e.preventDefault();
	fetch("http://localhost:3000/tshirt", {
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

// Country as JSON
const countries = [
	{
		name: "Laos",
		year: 2007
	},
	{
		name: "China",
		year: 2008
	}
];

const travelData = {
	name: "Martin",
	countries: countries
};

// fetch post reuest
fetch("http://localhost:3000/api/countries", {
	method: "POST",
	headers: {
		accept: "application/json",
		"Content-Type": "application/json"
	},
	body: JSON.stringify(travelData)
})
	.then(response => response.text())
	.then(result => {
		console.log(result);
	})
	.catch(err => {
		console.error(err.message);
	});

// Article as JSON
document.getElementById("articles").addEventListener("submit", e => {
	e.preventDefault();
	const formData = new FormData(e.target);
	fetch("http://localhost:3000/api/articles", {
		method: "POST",
		body: formData
	})
		.then(response => response.text())
		.then(result => {
			document.getElementById("articleResults").textContent = result;
		})
		.catch(err => {
			console.error(err.message);
		});
});
