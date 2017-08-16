// changing the value of an input element
const userNameElement = document.getElementById("username");
const pwElement = document.getElementById("password");
// userNameElement.value = "MyCoolUsername";
// add event listener on focus
userNameElement.addEventListener("focus", e => {
	document.getElementById("usernameHelp").textContent =
		"Please enter a unique username!";
});
userNameElement.addEventListener("blur", e => {
	document.getElementById("usernameHelp").textContent = "";
});

// get change of checkbox on change
document.getElementById("confirmation").addEventListener("change", e => {
	console.log(`Email confirmation request: ${e.target.checked}`);
});

// get change of radiobutton
const subscriptionElements = document.getElementsByName("subscription");
// add event listeners to all of 'em
subscriptionElements.forEach(element => {
	element.addEventListener("change", e => {
		console.log(`Selected subscription: ${e.target.value}`);
	});
});

// get select values (dropdowns)
document.getElementById("nationality").addEventListener("change", e => {
	console.log(`Selected nationality: ${e.target.value}`);
});

// Collect info about form input elements
const formElement = document.querySelector("form");
console.log(`Number of fields: ${formElement.elements.length}`);
console.log(formElement.elements[0].name);
console.log(formElement.elements.password.type);

// Show all user input and cancels form data sending
// Way to implement form validation on submit
formElement.addEventListener("submit", e => {
	const username = e.target.elements.username.value;
	const password = e.target.elements.password.value;
	const email = e.target.elements.emailAddress.value;
	console.log(`Username: ${username}, password: ${password}, email: ${email}`);

	if (e.target.elements.confirmation.checked) {
		console.log("You asked for email confirmation");
	} else {
		console.log("You didn't asked for email confirmation");
	}
	switch (e.target.elements.subscription.value) {
		case "newspromo":
			console.log("You are subscribed to newsletters and promotions");
			break;
		case "news":
			console.log("You are subscribed to newsletters only");
			break;
		case "no":
			console.log("You are not subscribed to anything");
			break;
		default:
			console.error("Unknown subscription code");
	}
	switch (e.target.elements.nationality.value) {
		case "US":
			console.log("Hello! You are a US citizen");
			break;
		case "FR":
			console.log("Bonjour! You are a French citizen");
			break;
		case "ES":
			console.log("Hola! You are a Spanish citizen");
			break;
		default:
			console.log("Your nationality is unknown");
	}
	e.preventDefault(); // Cancel form data sending
});

// Instant validation
document.getElementById("password").addEventListener("input", e => {
	const password = e.target.value;
	let passwordLength = "too short";
	let messageColor = "red";
	if (password.length > 12) {
		passwordLength = "adequate";
		messageColor = "green";
	} else if (password.length >= 8) {
		passwordLength = "moderate";
		messageColor = "orange";
	}
	const passwordHelpElement = document.getElementById("passwordHelp");
	passwordHelpElement.textContent = `Length: ${passwordLength}`;
	passwordHelpElement.style.color = messageColor;
});

// // post inut validation using blur
// document.getElementById("emailAddress").addEventListener("blur", e => {
// 	let emailAddressValidity = "";
// 	if (e.target.value.indexOf("@") === -1) {
// 		emailAddressValidity = "Invalid email address!";
// 	}
// 	document.getElementById("emailHelp").textContent = emailAddressValidity;
// });

// Short recap of regex
const regex = /@/; // String must contain @
console.log(regex.test(""));  // false
console.log(regex.test("@")); // true
console.log(regex.test("sophie&mail.fr")); // false
console.log(regex.test("sophie@mail.fr")); // true

// better email validation post input using regex
document.getElementById("emailAddress").addEventListener("blur", e => {
	const emailRegex = /.+@.+\..+/;
	let emailAddressValidity = "";
	if (!emailRegex.test(e.target.value)) {
		emailAddressValidity = "Invalid Email address";
	}
	document.getElementById("emailHelp").textContent = emailAddressValidity;
});

