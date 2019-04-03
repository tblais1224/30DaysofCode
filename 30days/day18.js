//queues and stacks
//To solve this challenge, we must first take each character in s, enqueue it in a queue, and also push that same character onto a stack. Once that's done, we must dequeue the first character from the queue and pop the top character off the stack, then compare the two characters to see if they are the same; as long as the characters match, we continue dequeueing, popping, and comparing each character until our containers are empty (a non-match means  isn't a palindrome).

// Write the following declarations and implementations:

// Two instance variables: one for your , and one for your .
// A void pushCharacter(char ch) method that pushes a character onto a stack.
// A void enqueueCharacter(char ch) method that enqueues a character in the  instance variable.
// A char popCharacter() method that pops and returns the character at the top of the  instance variable.
// A char dequeueCharacter() method that dequeues and returns the first character in the  instance variable.

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

function Solution() {
  //Write your code here
  this.stack = "";
  this.queue = "";

  this.pushCharacter = function(s) {
    this.stack += s;
  };
  this.enqueueCharacter = function(s) {
    this.queue = s + this.queue;
  };
  this.popCharacter = function() {
    var output = this.stack.slice(0, 1);
    this.stack = this.stack.slice(1, this.stack.length);
    return output;
  };

  this.dequeueCharacter = function() {
    var output = this.queue.slice(0, 1);
    this.queue = this.queue.slice(1, this.queue.length);
    return output;
  };
}

function main() {
  // read the string s
  var s = readLine();
  var len = s.length;
  // create the Solution class object p
  var obj = new Solution();
  //push/enqueue all the characters of string s to stack
  for (var i = 0; i < len; i++) {
    obj.pushCharacter(s.charAt(i));
    obj.enqueueCharacter(s.charAt(i));
  }

  var isPalindrome = true;
  /*
    pop the top character from stack
    dequeue the first character from queue
    compare both the characters*/

  for (var i = 0; i < len / 2; i++) {
    if (obj.popCharacter() != obj.dequeueCharacter()) {
      isPalindrome = false;
      break;
    }
  }
  //finally print whether string s is palindrome or not
  if (isPalindrome) console.log("The word, " + s + ", is a palindrome.");
  else console.log("The word, " + s + ", is not a palindrome.");
}
