const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
          }
        });
        // and return that array
        
        return newArray;
        
      };

// Do not edit below this line
module.exports = removeFromArray;
