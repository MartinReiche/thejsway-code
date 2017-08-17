// Coding Time

// password validation on submit
// const formElement = document.querySelector("form");

document.querySelector("form").addEventListener("submit", e => {
	// get passwords
	const password1 = e.target.elements.password1.value;
	const password2 = e.target.elements.password2.value;
	// declare vars
	let passwordMessage = "";
	// must contain at lesat one digit
	const passwordRegex = /.*[0-9].*/;
	// check if pw is at least 6 chars, equals confirmation and contains at leas 1 digit
	if (
		password1 !== password2 ||
		password1.length < 6 ||
		!passwordRegex.test(password1)
	) {
		passwordMessage = "Invalid password!";
	}
	document.getElementById("passwordHelp").textContent = passwordMessage;
	// Do not send data
	e.preventDefault();
});

// Character list. Each house has a name and a code
const houses = [
	{
		code: "ST",
		name: "Stark"
	},
	{
		code: "LA",
		name: "Lannister"
	},
	{
		code: "BA",
		name: "Baratheon"
	},
	{
		code: "TA",
		name: "Targaryen"
	}
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
	switch (houseCode) {
		case "ST":
			return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
		case "LA":
			return ["Tywin", "Cersei", "Jaime", "Tyrion"];
		case "BA":
			return ["Robert", "Stannis", "Renly"];
		case "TA":
			return ["Aerys", "Daenerys", "Viserys"];
		default:
			return []; // Empty array
	}
};

const popualteSelect = options => {
	const selectElement = document.querySelector("select");
	for (option of options) {
		const optionElement = document.createElement("option");
		optionElement.value = option.code;
		optionElement.textContent = option.name;
		selectElement.appendChild(optionElement);
	}
	return selectElement;
};
selectElement = popualteSelect(houses);
// Add event listener
selectElement.addEventListener("change", e => {
	const characters = getCharacters(selectElement.value);
	const characterListElement = document.getElementById("characters");
	// clear ul
	characterListElement.innerHTML = "";
	// add new characters
	characters.forEach(character => {
		const listElement = document.createElement("li");
		listElement.textContent = character;
		// add li to DOM
		characterListElement.appendChild(listElement);
	});
});

// Autocomplete
// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaïjan"
];


const queryCountry = input => {
	const regex = new RegExp(input);
	const results = countryList.filter(country => regex.test(country));
	return results;
};

inputElement = document.getElementById("country");
inputElement.addEventListener("input", e => {
	const suggestions = queryCountry(inputElement.value);
	const suggestionsElement = document.getElementById("suggestions");
	const currentSuggestions = document.createElement("div");
	suggestions.forEach(suggestion => {
		const suggestionElement = document.createElement("p");
		suggestionElement.textContent = suggestion;
		currentSuggestions.appendChild(suggestionElement);
	})
	suggestionsElement.innerHTML = "";
	suggestionsElement.appendChild(currentSuggestions);
	if (inputElement.value.length === 0) {
		suggestionsElement.innerHTML = "";
	}
});


