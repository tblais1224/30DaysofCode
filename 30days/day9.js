//Write a factorial function that takes a positive integer, N as a parameter and prints the result of  N!( N factorial).
//Print a single integer denoting N!.

// function factorial(n) {
//     var num = [1];
//     for (var i = 1; i <= n; i++) {
//         num.push(num[i - 1] * i);
//     }
//     console.log(num[n]);
// }
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1); //recursive function. get calculating factorial down to 1 and stop
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}
