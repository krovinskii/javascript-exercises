const convertToCelsius = function(fTemp) {
  cTemp = (fTemp - 32) * 5/9

  if (Number.isInteger(cTemp)) {
    return cTemp
  }
  return parseFloat(cTemp.toFixed(1));
};

const convertToFahrenheit = function(cToFTemp) {
  const fTempConverted = (cToFTemp * 9/5) + 32;
  if (Number.isInteger(fTempConverted)) {
    return fTempConverted
  }
  return parseFloat(fTempConverted.toFixed(1));
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(73.2))

// npm test tempConversion.spec.js

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

