// Declare factory function that returns an object (literal)
const createCalc = () => {
	// The returned object as 4 methods
	return {
		add(x, y) {
			return x + y;
		},
		subtract(x, y) {
			return x - y;
		},
		multiply(x, y) {
			return x * y;
		},
		divide(x, y) {
			return x / y;
		}
	};
};

// export factory function
module.exports = createCalc;