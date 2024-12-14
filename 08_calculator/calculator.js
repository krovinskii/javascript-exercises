const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(arr) {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  return sum1;

};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1)
};

const power = function(x,y) {
	return Math.pow(x,y)
};

const factorial = function(num) {
  if  (num === 0 || num === 1) {
    return 1;
  }
	for (let i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
