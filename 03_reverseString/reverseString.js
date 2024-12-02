const reverseString = function(preSplit) {
let postSplit = preSplit.split('');
let reversedSplit = postSplit.reverse();
let complete = reversedSplit.join('');
return complete;

}
console.log(reverseString("christmas"))
// Do not edit below this line
module.exports = reverseString;
