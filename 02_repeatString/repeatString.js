const repeatString = function(str, x) {
    let result = '';
    if (x < 0) {
        return "ERROR";
    }
    for (let i = 1; i <= x; i++) {
        result += str
    }
    
    return result;
};

console.log(repeatString("butt", -1));
// Do not edit below this line
module.exports = repeatString;
