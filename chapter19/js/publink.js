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
	draw() {
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
		// add link div to DOM
		contentElement.appendChild(this.linkElement);
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
		// draw link
		link.draw();
		// save in the list
		this.list.push(link);
	}
}

// Existing links
const links = [
	{
		title: "Hacker News",
		url: "news.ycombinator.com",
		author: "Baptiste"
	},
	{
		title: "Reddit",
		url: "www.reddit.com",
		author: "Thomas"
	},
	{
		title: "Boing Boing",
		url: "boingboing.net",
		author: "Daniel"

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

// Add event listener to submit button
submitElement.addEventListener("click", e => {
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
	const submitElement = formElement.appendChild(document.createElement("input"))
	submitElement.type = "submit";
	submitElement.value = "Add link";
	submitElement.className = "btn btn-primary"


	// Add to DOM
	contentElement.insertBefore(formElement, contentElement.childNodes[0]);
})


