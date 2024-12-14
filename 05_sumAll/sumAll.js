const sumAll = function(beginning, end) {
    let sum = 0;
    if (beginning < 0 || end < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(beginning) || !Number.isInteger(end)) {
        return "ERROR";
    }
    if (end < beginning) {
        for (let i=end; i <= beginning; i++) {
            sum += i;
        }
        return sum;
    }
    else {
        for (let i=beginning; i <= end; i++) {
            sum += i;
        }
        return sum;
    }
    /*
    for (let i=beginning; i <= end; i++) {
        sum += i;
    }
    return sum;   */

};

// Do not edit below this line
module.exports = sumAll;
