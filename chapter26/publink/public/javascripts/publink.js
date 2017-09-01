// get submit button and content div
const submitElement = document.getElementById("submitbutton");
const contentElement = document.getElementById("content");

let formVisible = false;

// Add event listener to submit button
submitElement.addEventListener("click", e => {
	// flip form flag
	if (!formVisible) {
		// create form elements
		const formElement = document.createElement("form");
		formElement.className = "linkForm form-inline";
		// add title field
		const titleElement = formElement.appendChild(
			document.createElement("input")
		);
		titleElement.type = "text";
		titleElement.name = "title";
		titleElement.placeholder = "Title";
		titleElement.required = true;
		titleElement.className = "form-control";
		// add url field
		const urlElement = formElement.appendChild(document.createElement("input"));
		urlElement.type = "text";
		urlElement.name = "url";
		urlElement.placeholder = "Url";
		urlElement.required = true;
		urlElement.className = "form-control";
		// add author field
		const authorElement = formElement.appendChild(
			document.createElement("input")
		);
		authorElement.type = "text";
		authorElement.name = "author";
		authorElement.placeholder = "Author";
		authorElement.required = true;
		authorElement.className = "form-control";
		// add submit button
		const addElement = formElement.appendChild(document.createElement("input"));
		addElement.type = "submit";
		addElement.value = "Add link";
		addElement.className = "btn btn-primary";

		// Add to DOM
		document.getElementById("form").appendChild(formElement);
		formVisible = true;

		formElement.addEventListener("submit", e => {
			e.preventDefault();
			const link = {
				title: e.target.title.value,
				url: e.target.url.value,
				author: e.target.author.value
			};
			// Send asynchronous POST request and send data
			fetch("http://localhost:3000/new", {
				method: "POST",
				headers: {
					accept: "application/json",
					"Content-Type": "application/json"
				},
				body: JSON.stringify(link)
			})
				.then(response => response.json())
				.then(result => {
					// Create new link

					// create link div
					const linkElement = document.createElement("div");
					linkElement.className = "link";
					// create headline
					const headlineElement = linkElement.appendChild(
						document.createElement("h4")
					);
					headlineElement.className = "linkHeadline";
					// add title and url to headline
					const titleElement = headlineElement.appendChild(
						document.createElement("a")
					);
					const urlElement = headlineElement.appendChild(
						document.createElement("span")
					);
					// Add author to link div
					const authorElement = linkElement.appendChild(
						document.createElement("span")
					);
					// add classes and content
					titleElement.className = "linkTitle";
					urlElement.className = "linkUrl";
					authorElement.className = "linkAuthor";
					titleElement.innerHTML = `<a href="${result.url}">${result.title}</a>`;
					urlElement.textContent = result.url;
					authorElement.textContent = result.author;
					// add link element to the dom
					const contentElement = document.getElementById("content");
					contentElement.insertBefore(
						linkElement,
						contentElement.childNodes[0]
					);
					// prepare success message
					successElement = document.createElement("div");
					successElement.className = "success";
					successElement.textContent = `The link ${result.title} has been added successfully!`;
					// remove form
					formElement.innerHTML = "";
					formVisible = false;
					// add sucess message
					formElement.appendChild(successElement);
					// remove successm message after 2 secs
					setTimeout(() => {
						formElement.innerHTML = "";
					}, 2000);
				})
				.catch(err => {
					console.error(err.message);
				});
		});
	}
});
