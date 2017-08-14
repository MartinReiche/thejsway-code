// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node

const showChild = (node, index) => {
	// Through error if given node is non-element node
	if (node.nodeType === 3) {
		console.error("Wrong node type");
	} else {
		// get children as array and
		const children = node.childNodes;
		if ((index > children.length-1) || (index < 0)) {
			 console.error("Incorrect index");
		} else {
			console.log(children[index]);
		}
	}
};

// Should show the h1 node
showChild(document.body, 1);
// Should show "Incorrect index"
showChild(document.body, -1);
// Should show "Incorrect index"
showChild(document.body, 8);
// Should show "Wrong node type"
showChild(document.body.childNodes[0], 0);