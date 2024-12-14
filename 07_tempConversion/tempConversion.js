const convertToCelsius = function(startWithFahrenheit) {
let FToC = (startWithFahrenheit - 32) * 5/9;
let completeC = Math.round(FToC * 10) / 10;
return completeC
};

const convertToFahrenheit = function(startWithCelsius) {
  let CToF = (startWithCelsius * 9/5) + 32;
  let completeF = Math.round(CToF * 10) / 10;
  return completeF
};


console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
