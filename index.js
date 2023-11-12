var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var recursiveAsyncReadLine = function () {
    rl.question('Give me a number\n> ', function (number) {
        if (number == 'exit') //we need some base case, for recursion
            return rl.close(); //closing RL and returning from function.
        if (isNaN(number)) console.log(`Value is not a number\n`);
        else {
            let result = collatz(number)
            console.log(`Collatz result: ${result}!\n`);
        }
        recursiveAsyncReadLine(); //Calling this function again to ask new question
    });
};

recursiveAsyncReadLine(); //we have to actually start our recursion somehow

function collatz(x) {
    if (x % 2 == 0) {
        x = x / 2;
    } else {
        x = (x * 3) + 1
    }
    if (x > 1) return collatz(x);
    else return x;
}



/*
const numbers = [...Array(100000000).keys()];
let results = [];

for (let number in numbers) {
    let result = collatz(number);
    if (result > 1) console.log(number + ' > ' + result);
    //console.log(number + ' > ' + result);
}
 */
