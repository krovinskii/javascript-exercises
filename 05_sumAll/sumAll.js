const sumAll = function(minArray, maxArray) {
    if (!Number.isInteger(minArray) || !Number.isInteger(maxArray)) {
        return 'ERROR';
      }
    if (minArray <= 0 || maxArray <= 0) {
        return 'ERROR';
    }

let numArray = [];

if (minArray > maxArray) {
    [minArray, maxArray] = [maxArray, minArray];
}

for (let i = minArray; i <= maxArray; i++) {
    numArray.push(i);
}
numArray.reverse();
return numArray.reduce((partialSum, a) => partialSum + a, 0)
}


console.log(sumAll(123, 1))
// Do not edit below this line
module.exports = sumAll;
