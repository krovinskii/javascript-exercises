const fibonacci = function(indexFibonacci) {
    let x = 0;
    let y = 1;
    //negative numbers return OOPS as wanted in the test
    if (indexFibonacci < 0) {
        return "OOPS";
    }
    for (let i = 0; i < indexFibonacci; i++) {
        // formula - does not change, repeats until we reach the number passed in fibonacci
        let z = y + x;

        //Logged to see what the sequence is doing each iteration.. 
        console.log(`Iteration ${i}:`);
        console.log(`x = ${x}`);
        console.log(`y = ${y}`);
        console.log(`z (x + y) = ${z}`);
        console.log('---');
        //Reassigning variables after each iteration
        x = y;
        y = z;
    }
    return x;
};
console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;

