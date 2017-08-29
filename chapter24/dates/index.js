// load moment.js
const moment = require("moment");
const now = moment();
const date = moment("1976-11-26");
console.log(now.format("dddd, MMMM Do YYYY"));
console.log(`${now.diff(date,"years")} years ago`);

