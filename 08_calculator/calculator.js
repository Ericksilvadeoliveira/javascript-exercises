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

const multiply = function(num1, num2) {
  var multi = 0;
  for(var i = 1; i <= num2; i++){
    multi += num1;
  }

  return multi;
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
