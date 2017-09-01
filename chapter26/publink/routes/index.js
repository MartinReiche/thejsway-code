const express = require('express');
const router = express.Router();
const pubLinks = require("publink");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'a social news webapp', links: pubLinks.linkList.list});
});

/* POST new link */
router.post("/new",  (req, res, next) => {
	const title = req.body.title;
	const url = req.body.author;
	const author = req.body.url;
	pubLinks.linkList.addItem(title, url, author);
	const list = pubLinks.linkList.list;
	res.send(JSON.stringify(list[0]));
})

module.exports = router;
