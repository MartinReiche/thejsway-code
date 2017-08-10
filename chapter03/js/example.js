// Following day
const day = prompt("Please enter the name of a day!");
// check the day
switch (day) {
	case  "monday":
		alert("the next day will be tuesday");
		 break;
	case  "tuesday":
		alert("the next day will be wednesday");
		 break;
	case  "wednesday":
		alert("the next day will be thursday");
		break;
	case  "thursday":
		alert("the next day will be friday");
		break;
	case  "friday":
		alert("the next day will be saturday");
		break;
	case  "caturday":
		alert("the next day will be sunday");
		break;
	case  "saturday":
		alert("the next day will be sunday");
		break;
	case  "sunday":
		alert("the next day will be monday");
		break;
	default:
		console.log("Not a valid day name");
}

// Number comparison
const num1 = Number(prompt("Please enter a number."));
const num2 = Number(prompt("Please enter a second number."));
// check if numbers are equal or different
if (num1 === num2) {
	alert(`${num1} and ${num2} are equal`);
} else if (num1 > num2) {
	alert(`${num1} is bigger than ${num2}`);
} else {
	alert(`${num1} is smaller than ${num2}`);
}

// Number of days in a month
const month = prompt("Please enter a month name!");
switch (month) {
	case "january":
	case "march":
	case "may":
	case "july":
	case "august":
	case "october":
	case "december":
		alert(`The month ${month} has 31 days.`);
		break;
	case "april":
	case "june":
	case "september":
	case "november":
		alert(`The month ${month} has 30 days.`);
		break;
	case "february":
		alert(`The month ${month} has 28 days.`);
		break;
	default:
		console.log("Invalid month name.")
}

// Following second
let hh = Number(prompt("Please enter hours."));
let mm = Number(prompt("Please enter minutes."));
let ss = Number(prompt("Please enter seconds."));
const oldTime = String(hh) + ":" + String(mm) + ":" + String(ss);

// check sanity of inputs
if (((hh >= 0) && (hh < 24)) && ((mm >= 0) && (mm < 60)) && ((ss >= 0) && (ss < 60))) {
	// increment seconds
	if (ss === 59) {
		ss = 0;
		// increment minutes
		if (mm === 59 ) {
			mm = 0;
			if (hh === 23) {
				hh = 0;
			} else {
				hh++;
			}
		} else {
			mm++;
		}
	} else {
		ss++;
	}
	const newTime = String(hh) + ":" + String(mm) + ":" + String(ss);
	alert(`Time you entered: ${oldTime}. One second later will be ${newTime}`);
} else {
	alert("Invalid time! Exiting!")
}


