// Publink (Project Part II)

// Classes
class Link {
	constructor(title, url, author) {
		this.title = title;
		this.url = this.checkUrl(url);
		this.author = author;
		this.domElement;
	}
	// Check for http prefix
	checkUrl(url) {
		if (url.startsWith("http://") || url.startsWith("https://")) {
			return url;
		} else {
			return "http://" + url;
		}
	}
	create() {
		// create link div
		this.linkElement = document.createElement("div");
		this.linkElement.className = "link";
		// create headline
		const headlineElement = this.linkElement.appendChild(document.createElement("h4"));
		headlineElement.className = "linkHeadline";
		// add title and url to headline
		const titleElement = headlineElement.appendChild(document.createElement("a"));
		const urlElement =  headlineElement.appendChild(document.createElement("span"));
		// Add author to link div
		const authorElement =  this.linkElement.appendChild(document.createElement("span"));
		// add classes and content
		titleElement.className = "linkTitle";
		urlElement.className = "linkUrl";
		authorElement.className = "linkAuthor";
		titleElement.innerHTML = `<a href="${this.url}">${this.title}</a>`;
		urlElement.textContent = this.url;
		authorElement.textContent = this.author;
		// return link element
		return this.linkElement;
	}
}

// create list prototype
class LinkList {
	constructor() {
		this.list = [];
	}
	// add item to the list
	addItem(title, url, author) {
		// create new link
		const link = new Link(title, url, author);
		// create dom Element
		const linkElement = link.create();
		// save in the list
		this.list.push(link);
		// Add to the DOM
		contentElement.insertBefore(linkElement, contentElement.childNodes[0]);
	}
}

// Existing links
const links = [
	{
		title: "Boing Boing",
		url: "boingboing.net",
		author: "Daniel"
	},
	{
		title: "Reddit",
		url: "www.reddit.com",
		author: "Thomas"
	},
	{
		title: "Hacker News",
		url: "news.ycombinator.com",
		author: "Baptiste"
	}
]

// get submit button and content div
const submitElement = document.getElementById("submitbutton");
const contentElement = document.getElementById("content");

// initialize link list
const pubLinks = new LinkList;

// prepopolate list
links.forEach(link => {
	pubLinks.addItem(link.title, link.url, link.author)
})

let formVisible = false;

// Add event listener to submit button
submitElement.addEventListener("click", e => {
	// flip form flag
	if (!formVisible) {
		// create form elements
		const formElement = document.createElement("form");
		formElement.className = "linkForm form-inline";
		// add title field
		const titleElement = formElement.appendChild(document.createElement("input"));
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
		const authorElement = formElement.appendChild(document.createElement("input"));
		authorElement.type = "text";
		authorElement.name = "author";
		authorElement.placeholder = "Author";
		authorElement.required = true;
		authorElement.className = "form-control";
		// add submit button
		const addElement = formElement.appendChild(document.createElement("input"));
		addElement.type = "submit";
		addElement.value = "Add link";
		addElement.className = "btn btn-primary"

		// Add to DOM
		document.getElementById("form").appendChild(formElement);
		formVisible = true;

		// Add event listebner to the Add element
		addElement.addEventListener("click", e => {
			// Get input values
			const title = titleElement.value;
			const url = urlElement.value;
			const author = authorElement.value;
			// check validity
			if (title.length === 0) {
				alert("Title cannot be empty!")
			} else if (url.length === 0) {
				alert("Url cannot be empty!")
			} else if (author.length === 0) {
				alert("Author cannot be empty!")
			} else {
				// Create new link
				pubLinks.addItem(title, url, author);
				// prepare success message
				successElement = document.createElement("div");
				successElement.className = "success";
				successElement.textContent = `The link ${title} has been added successfully!`
				// remove form
				formElement.innerHTML = "";
				formVisible = false;
				// add sucess message
				formElement.appendChild(successElement);
				// remove successm message after 2 secs
				setTimeout( () => {
					formElement.innerHTML = "";
				},2000)
			}
			// prevent default submit behavior
			e.preventDefault();
		});
	}
})


