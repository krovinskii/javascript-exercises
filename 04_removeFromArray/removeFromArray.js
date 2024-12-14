const removeFromArray = function(arr, ...removal) {
    return arr.filter(item => !removal.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;
