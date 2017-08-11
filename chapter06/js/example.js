// Create character object
const aurora = {
	// Properties
	name: "Aurora",
	health: 150,
	strength: 25,
	xp: 0,
	// Methods
	describe() {
		return `${this.name} has ${this.health} health points, ${this
			.strength} strength and ${this.xp} experience.`;
	}
};
// Aurora is harmed by an arrow
aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp = aurora.xp + 15;
console.log(aurora.describe());

// Modelling a dog
const dog = {
	// properties
	name: "Whiskey",
	species: "Husky",
	size: 1.2,
	// methods
	bark() {
		return "Woof!";
	}
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);

// Modelling a circle
const r = Number(prompt("Enter the circle radius:"));

const circle = {
	radius: r,
	circumference() {
		return 2*r*Math.PI;
	},
	area() {
		return "not implemented"
	}
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);

// Modelling a bank account
const account = {
	// Properties
	name: "Alex",
	balance: 0,
	// Methods
	credit(amount) {
		this.balance = this.balance + amount;
	},
	describe() {
		return `owner: ${this.name}, balance: ${this.balance}`
	}
};

console.log(account.describe());
account.credit(170);
console.log(account.describe());