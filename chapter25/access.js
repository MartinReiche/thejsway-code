document.querySelector("form").addEventListener("submit", e => {
	e.preventDefault();
	// grab form data
	const formData = new FormData(e.target);
	// make AJAX request
	fetch("http://localhost:3000/animals", {
		method: "POST",
		body: formData
	})
	.then(response => response.text())
	.then(result => {
		document.getElementById("result").textContent = result;
	})
	.catch(err => {
		console.error(err.message);
	})
});
