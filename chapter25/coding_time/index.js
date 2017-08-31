// Load express package as module
const express = require("express");
// load muttler for handling form data
const multer = require("multer");
// load body-parser as module
const bodyParser = require("body-parser");

// Access express
const app = express();
// Access muttler
const upload = multer();
// Acces Json parser
const jsonParser = bodyParser.json();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// handle GET to root route
app.get("/", (req, res) => {
	res.send("Hello from express!");
})

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
	console.log(`Your app is listening on port ${listener.address().port}`);
});

app.post("/tshirt", upload.array(), (req, res) => {
	const size = req.body.size;
	const color = req.body.color;
	res.send(`Command received! Size: ${size}, color: ${color}`)
})

app.post("/api/countries", jsonParser, (req, res) => {
	const numCountries = req.body.countries.length;
	res.send(`Hi ${req.body.name}, you visited ${numCountries} countries. Keep traveling!`);
})

// handle post request with new article
// create articles array
const articles = [];
// handle post reuest with new article form data
app.post("/api/articles", upload.array(), (req, res) => {
	const article = req.body;
	// add article to articles
	articles.push({id: articles.length + 1, title: article.title, body: article.body})
	res.send(`New article added successfully with ID: ${articles.length}`)
})