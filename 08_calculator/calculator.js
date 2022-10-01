const add = function(a, b) {
  if (a >= 0 && b >= 0) {
    const sum = a + b;
    return sum;
  }
};

const subtract = function(a, b) {
  const subtract = a - b;
  return subtract;
};

const sum = function(a, b) {
  add = (a + b) + 2;
	return add;
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => (a * b));
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
