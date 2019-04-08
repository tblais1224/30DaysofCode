//nested logic
//Your local library needs your help! Given the expected and actual return dates for a library book, create a program that calculates the fine (if any). The fee structure is as follows:
// If the book is returned on or before the expected return date, no fine will be charged (i.e.: fine = 0.
//     If the book is returned after the expected return day but still within the same calendar month and year as the expected return date, fine = 15 Hackos * (the number of days left).
//     If the book is returned after the expected return month but still within the same calendar year as the expected return date, the fine = 500 Hackos * (the number of months left).
//     If the book is returned after the calendar year in which it was expected, there is a fixed fine of 10000 Hackos.

function processData(input) {
    //Enter your code here
    var charge = 0;
    var newInput = input.split(/\r?\n/);
    for (let i = 0; i < newInput.length; i++) {
        newInput[i] = newInput[i].split(" ");
    }
    if (newInput[0][2] < newInput[1][2]) {
        charge = 0;
    } else if (
        newInput[0][2] == newInput[1][2] &&
        parseInt(newInput[0][1]) < parseInt(newInput[1][1])
    ) {
        charge = 0;
    } else if (
        newInput[0][2] == newInput[1][2] &&
        newInput[0][1] == newInput[1][1] &&
        parseInt(newInput[0][0]) < parseInt(newInput[1][0])
    ) {
        charge = 0;
    } else if (
        newInput[0][2] == newInput[1][2] &&
        newInput[0][1] == newInput[1][1]
    ) {
        charge = (parseInt(newInput[0][0]) - parseInt(newInput[1][0])) * 15;
    } else if (newInput[0][2] == newInput[1][2]) {
        charge = (parseInt(newInput[0][1]) - parseInt(newInput[1][1])) * 500;
    } else {
        charge = 10000;
    }
    console.log(charge);
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
