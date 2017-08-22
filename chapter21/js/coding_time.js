// Language List
fetch(
	"https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt"
)
	.then(response => response.text())
	.then(text => {
		const languages = text.split(";");
		languages.forEach(lang => {
			const langElement = document.createElement("li");
			langElement.textContent = lang;
			document.getElementById("languageList").appendChild(langElement);
		});
	});

// Famous paintings
fetch(
	"https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
	.then(response => response.json())
	.then(paintings => {
		paintings.forEach(painting => {
			// create a new row per painting
			const rowElement = document.createElement("tr");
			const nameElement = document.createElement("td");
			nameElement.textContent = painting.name;
			const yearElement = document.createElement("td");
			yearElement.textContent = painting.year;
			const artistElement = document.createElement("td");
			artistElement.textContent = painting.artist;
			rowElement.appendChild(nameElement);
			rowElement.appendChild(yearElement);
			rowElement.appendChild(artistElement);
			// Add to dom
			document.getElementById("paintings").appendChild(rowElement);
		});
	});
