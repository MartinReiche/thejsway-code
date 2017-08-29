const greetings = require("./greetings.js");

console.log(greetings.sayHello("Martin")); // works
console.log(greetings.flatter()); // works
// console.log(greetings.sayGoodbye("Martin")); // error

// Create calculator object
const calculator = require("./calculator.js");
const calc = calculator();
console.log(calc.add(3, 4));
console.log(calc.subtract(3, 4));
console.log(calc.multiply(3, 4));
console.log(calc.divide(3, 4));

// Add user class
const User = require("./user.js");
jDoe = new User("John", "Doe");
console.log(jDoe.describe());


