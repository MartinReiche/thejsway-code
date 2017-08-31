// Load express package as module
const express = require("express");
// load muttler for handling form data
const multer = require("multer");

// Access express
const app = express();
// Access muttler
const upload = multer();

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