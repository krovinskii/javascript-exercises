const leapYears = function(year) {
    divisibleByFour = year / 4;
    divisibleByHundred = year / 100;
    divisibleByFourHundred = year / 400;

    if (Number.isInteger(divisibleByFour) && !Number.isInteger(divisibleByHundred) ) {
        return true
    };
    if (Number.isInteger(divisibleByFourHundred)) {
        return true
    };
    return false;
};
console.log(leapYears(1900))
// Do not edit below this line
module.exports = leapYears;
