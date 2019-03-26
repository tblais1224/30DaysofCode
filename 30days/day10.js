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
    const n = parseInt(readLine(), 10);
    var nString = n.toString(2);
    var output = 0;
    var stuff = 0;
    for (var i = 0; i < nString.length; i++) {
        if (nString[i] == "1") {
            stuff += 1;
            if (stuff > output) {
                output = stuff;
            }
        } else {
            stuff = 0;
        }
    }
    console.log(output);
}
