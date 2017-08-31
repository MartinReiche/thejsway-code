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
