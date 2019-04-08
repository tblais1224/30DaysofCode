//running time and complexity
//A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. Given a number, n, determine and print whether it's Prime or Not prime.

// Note: If possible, try to come up with a O(sqrt(n)) primality algorithm, or see what sort of optimizations you come up with for an O(n) algorithm. Be sure to check out the Editorial after submitting your code!
var input = ('30\n1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n121\n144\n169\n196\n225\n256\n289\n324\n361\n400\n441\n484\n529\n576\n625\n676\n729\n784\n841\n907');

function processData(input) {
  //Enter your code here
  var newInput = input.split(/\r?\n/)
  var index = parseInt(newInput.shift());
  for (let i = 0; i < index; i++) {
    var output = 'Prime';
    if (parseInt(newInput[i]) === 1) {
      output = 'Not prime';
    }else if(parseInt(newInput[i]) === 2 || parseInt(newInput[i]) === 3 || parseInt(newInput[i]) === 5 || parseInt(newInput[i]) === 7 || parseInt(newInput[i]) === 11 || parseInt(newInput[i]) === 13){
      output = "Prime"
    }
     else {
       if(parseInt(newInput[i]) < 13){
        output = 'Not prime'
       }
      for (let j = 2; j <= Math.sqrt(parseInt(newInput[i])); j++) {
        if (parseInt(newInput[i]) % j === 0) {
          output = 'Not prime';
        }
      }
    }
    console.log(output);
  }
}
processData(input)


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});

