//day 28 RegEx, Patterns, and intro to Databases

//Consider a database table, Emails, which has the attributes First Name and Email ID. Given N rows of data simulating the Emails table, print an alphabetically-ordered list of people whose email address ends in @gmail.com.


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
    const N = parseInt(readLine(), 10);
    var output = []; 
    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];
        if (emailID.includes('@gmail.com')){
            output.push(firstName);
        }
    }
    output.sort();
    for (let i = 0; i < output.length; i++) {
        console.log(output[i]);
    }
}
