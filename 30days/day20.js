//Sorting
//Given an array,a , of size n distinct elements, sort the array in ascending order using the Bubble Sort algorithm above. Once sorted, print the following 3 lines:

// Array is sorted in numSwaps swaps. where numSwaps is the number of swaps that took place.
// First Element: firstElement    where firstElement is the first element in the sorted array.
// Last Element: lastElement   where LastElement is the last element in the sorted array.

// Hint: To complete this challenge, you will need to add a variable that keeps a running tally of all swaps that occur during execution.

process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function(data) {
  input_stdin += data;
});

process.stdin.on("end", function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  // Write Your Code Here
  var counter = 0;
  for (let j = 0; j < a.length; j++) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > a[i + 1]) {
        counter += 1;
        var holder = a[i + 1];
        a[i + 1] = a[i];
        a[i] = holder;
      }
    }
  }
  console.log(`Array is sorted in ${counter} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}
