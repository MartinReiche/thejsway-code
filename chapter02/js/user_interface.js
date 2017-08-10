const firstName = prompt("Please enter your first name!");
const lastName =  prompt("Please enter your last name!");
alert(`Hello ${firstName} ${lastName}!`);

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

// VAT Calculator
const vat = 0.206;
let raw = Number(prompt("Please ener the raw price!"));
alert(`The price including VAT is ${raw * vat + raw}`);

// Celsius to Fahrenheit converter
let celsius = Number(prompt("Enter temperature in degrees Celsius!"));
alert(`${celsius}° C are ${celsius * 9 / 5 + 32}° F`);

// Variable swapping
let number1 = 5;
let number2 = 3;

let temp = number1;
number1 = number2;
number2 = temp;

console.log(number1); // Should show 3
console.log(number2); // Should show 5