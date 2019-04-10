//day 29 Bitwise AND

//Given set S = {1,2,3,...,N}. Find two integers, A and B (where A<B), from set S such that the value of A&B is the maximum possible and also less than a given integer, K. In this case, & represents the bitwise AND operator.

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
    inputString += inputStdin;
});

process.stdin.on("end", _ => {
    inputString = inputString
        .replace(/\s*$/, "")
        .split("\n")
        .map(str => str.replace(/\s*$/, ""));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(" ");

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        var output = 0;
        for (let i = 1; i <= n; i++) {
            for (let j = 2; j <= n; j++) {
                var bitwiseAnd = i & j;
                if (i == j) continue;
                
                if (bitwiseAnd > output && bitwiseAnd < k) {
                    output = bitwiseAnd;
                }
            }
        }
        console.log(output);
    }
}
