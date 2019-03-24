//Write a factorial function that takes a positive integer, N as a parameter and prints the result of  N!( N factorial).
//Print a single integer denoting N!.

// function factorial(n) {
//     var num = [1];
//     for (var i = 1; i <= n; i++) {
//         num.push(num[i - 1] * i);
//     }
//     console.log(num[n]);
// }

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1); //recursive function, calculating factorial down to 1 and stop
    }
}
