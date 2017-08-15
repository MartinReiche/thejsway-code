// Project: a social  news programm
// Create link entry prototype
class Link {
	constructor(title, url, author) {
		this.title = title;
		this.url = this.checkUrl(url);
		this.author = author;
	}
	// Create a string for displaying the item information
	show() {
		return `${this.title} (${this.url}). Author: ${this.author}`;
	}
	// Check for http prefix
	checkUrl(url) {
		if (url.startsWith("http://") || url.startsWith("https://")) {
			return url;
		} else {
			return "http://" + url;
		}
	}
}
// create list prototype
class LinkList {
	constructor() {
		this.list = [];
	}
	// add item to the list
	addItem(title, url, author) {
		this.list.push(new Link(title, url, author));
	}
	// remove item from the list
	removeItem(index) {
		if ((index > this.list.length) || (index < 1) || this.empty()) {
			return false;
		} else {
			this.list.splice(index-1, 1);
			return true;
		}
	}
	// check if list is empty
	empty() {
		if (this.list.length === 0) {
			return true;
		} else {
			return false;
		}
	}
	// create a list string ready for display
	show() {
		if (this.list.length === 0) {
			return "There are no list items yet."
		} else {
			return this.list.reduce(
				(str, item) =>
					str + `\n${this.list.indexOf(item) + 1}. ${item.show()}`,
				""
			);
		}
	}
}

// create main class of program
class Main {
	constructor() {
		this.run = true;
		this.list = new LinkList;
		this.menuItems =  ["0", "1", "2", "3"];
		this.entries = ["name", "url", "author"];
	}
	// show menu
	menu() {
		while(true) {
			let answer = prompt("Choose an Option:\n1: Show links\n2: Add a link\n3: Remove a link\n0: Quit");
			if (this.menuItems.indexOf(answer) > -1) {
				return answer;
			} else {
				alert("Invalid option! Choose again!");
			}
		}
	}
	// insert new link interace
	insert() {
		let listItem = [];
		for (let i = 0; i < this.entries.length; i++) {
			while(true) {
				listItem[i] = prompt(`Please enter the ${this.entries[i]}:`);
				if (listItem[i].length > 0) {
					break;
				} else {
					alert(`${this.entries[i]} can\'t be empty!`);
				}
			}
		}
		this.list.addItem(listItem[0],listItem[1],listItem[2]);
	}
	// remove link interface
	remove() {
		if  (this.list.empty()) {
			alert("There are no links to remove!");
		} else {
			while(true) {
				let index = Number(prompt("Please enter the index of the link you want to remove."));
				let status = this.list.removeItem(index);
				if  (status) {
					alert(`List entry #${index} has been removed from the list!`);
					break;
				} else {
					alert("Index is out of bounds!");
				}
			}
		}
	}
	// Run the main programm
	start() {
		while (this.run) {
			let option = this.menu();
			switch (option) {
				case "0":
					this.run = false;
					break;
				case "1":
					alert(this.list.show());
					break;
				case "2":
					this.insert();
					break;
				case "3":
					this.remove();
					break;
			}
		}
	}
}

// Register new program object
const socialNews = new Main;
// Run main program
socialNews.start();


