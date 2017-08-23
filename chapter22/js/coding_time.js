// Anonymous function for retrieving and displaying a random beer
const grabRandomBeer = () => {
	// Fetching random beer data from API
	fetch("https://api.punkapi.com/v2/beers/random")
		.then(response => response.json())
		.then(beers => {
			// API returns an array containg only one element: we get it
			const beer = beers[0];
			// Creating DOM element for some beer properties
			const nameElement = document.createElement("h2");
			nameElement.textContent = beer.name;
			const descriptionElement = document.createElement("p");
			descriptionElement.textContent = beer.description;
			// additional info
			const infoElement = document.createElement("p");
			infoElement.textContent = `Alcohol by volume ${beer.abv}%, volume: ${beer
				.volume.value} ${beer.volume
				.unit}. First brewed on ${beer.first_brewed}.`;
			// Clear previous beer data
			const beerElement = document.getElementById("beer");
			beerElement.innerHTML = "";
			// Add beer info to the page
			beerElement.appendChild(nameElement);
			beerElement.appendChild(descriptionElement);
			beerElement.appendChild(infoElement);
		})
		.catch(err => {
			console.error(err.message);
		});
};

// Grab a new beer when clicking the button
document.getElementById("grabButton").addEventListener("click", grabRandomBeer);

// Github Users
// base URL for github api
const baseUrl = "https://api.github.com/users/";

// add event listener to submit button
document.getElementById("ghForm").addEventListener("submit", e => {
	// prevent sending POST Request
	e.preventDefault();
	// get username from text field
	console.log(e.target.elements);
	const userName = e.target.elements.ghUser.value;
	console.log(userName);
	fetch(baseUrl + userName)
		.then(response => response.json())
		.then(user => {
			console.log(user);
			// grab avatar url and add avatar
			const avatarElement = document.createElement("img");
			avatarElement.src = user.avatar_url;
			avatarElement.style.width = "250px";
			// prepare name
			const userNameElement = document.createElement("h4");
			userNameElement.textContent = user.name;
			// prepare url
			const userBlogElement = document.createElement("a");
			userBlogElement.textContent = user.blog;
			userBlogElement.href = user.blog;
			// get content div
			const contentElement = document.getElementById("ghContent");
			// clear contents of previous call
			contentElement.innerHTML = "";
			// add avatar
			contentElement.appendChild(avatarElement);
			// add name
			contentElement.appendChild(userNameElement);
			// add blog
			contentElement.appendChild(userBlogElement);
		})
		.catch(err => {
			console.error(err.message);
		});
});

// Star wars planets
// fetch planet from api
const getPlanet = planetId => {
	fetch("https://swapi.co/api/planets/" + planetId + "/")
		.then(response => response.json())
		.then(planet => {
			// create planet name
			const planetNameElement = document.createElement("h4");
			planetNameElement.textContent = planet.name;
			const descrElement = document.createElement("p");
			descrElement.textContent = `Climate: ${planet.climate}. Population: ${planet.population}. Appears in ${planet.films.length} movie(s).`;
			// get info element
			const infoElement = document.getElementById("infos");
			// clear old data
			infoElement.innerHTML = "";
			infoElement.appendChild(planetNameElement);
			infoElement.appendChild(descrElement);
		})
		.catch(err => {
			console.error(err.message);
		});
};

// getPlanet(12);

// draw links
for (i=1; i <= 10; i++) {
	// add link elemt
	const linkElement = document.createElement("span");
	let linkSep;
	if (i < 10) {
		linkSep = " |"
	} else {
		linkSep = " | ..."
	}

	linkElement.innerHTML = `<a href='${i}'>${i}</a>${linkSep}`;

	// linkElement.textContent = i;
	// linkElement.href = i;
	linkElement.addEventListener("click", e => {
		e.preventDefault();
		getPlanet(e.target.textContent);
	});
	// add to links
	const linkList = document.getElementById("links")
	// clear old data
	linkList.appendChild(linkElement);
}
