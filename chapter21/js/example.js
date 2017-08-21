fetch(
	// "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
	"https://blog.fefe.de/"
	// "https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e"
)
	.then(response => response.text()) // Access and return response's text content
	.then(text => {
		console.log(text); // Display file content in the console
	});

fetch("http://non-existent-resource")
  .catch(err => {
    console.error(err.message);
  });

