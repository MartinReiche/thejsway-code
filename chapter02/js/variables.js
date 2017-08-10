// declare a variable (new syntax in ES6 as compared to var)
let a;
// will be undfined
console.log(a);
// declaration and assignment at once
let b = 3.14;
console.log(b);
// declaring a constant
const c = 5;
console.log(c);
//  will raise an error
// c = 6;
// incremenating variables
let d = 0;
d += 1;
d++;
console.log(d);

// Scope
let nb1 = 1;
{
	nb1 = 2; // will change
	const  nb2 = 0; // declared within this block
}
console.log(nb1);
// console.log(nb2); // will be undefined

// backticks (`) can be used to form template literals in strings
const country = "Germany";
const age = 30;
console.log(`I live in ${country} and I am ${age } years old.`);

// implicit type conversion
let f = 5;
console.log("the variable f contains thr value " + f + ".");
// explicit string conversion
const h = "5";
// will convert 1 to String()
console.log(h + 1);
const i = Number("5");
// will explicitely convert the string 5 to a number and print 6
console.log(i + 1)
