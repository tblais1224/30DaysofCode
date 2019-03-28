
//Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
//There are 6 lines of input, where each line contains 6 space-separated integers describing 2D Array A; every value in A will be in the inclusive range of -9 to 9.

'use strict';

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



function main() {
    let arr = Array(6);
    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    var maxSum;
    for (let i = 0; i < 4; i++) {
        var tempSum = 0;
        for (let j = 0; j < 4; j++) {
            tempSum = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            if (i==0 && j==0) {
                maxSum = tempSum; 
            } else if (tempSum > maxSum) {
                maxSum = tempSum;
            }
        }
    }
    console.log(maxSum);
}


//arr is a nested array, 6 sub arrays with 6 numbers
//    arr[0][0] + arr[0][1] + arr[0][2]
//              + arr[1][1]
//  + arr[2][0] + arr[2][1] + arr[2][2]   = tempSum
//
// if tempSum > maxSum then maxSum = tempSum
//
