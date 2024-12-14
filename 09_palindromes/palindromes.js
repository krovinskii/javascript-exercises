const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < cleanedStr.length / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
console.log(palindromes('tacos'));
// Do not edit below this line
module.exports = palindromes;


//Need to iterate through beginning and end, beginning === end at all times,
//if not then it is not a palindrome. need to ignore punctuation, spaces,etc