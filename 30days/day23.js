// BST level-order Traversal

//A level-order traversal, also known as a breadth-first search, visits each level of a tree's nodes from left to right, top to bottom. You are given a pointer, root, pointing to the root of a binary search tree. Complete the levelOrder function provided in your editor so that it prints the level-order traversal of the binary search tree.

//Hint: You'll find a queue helpful in completing this challenge.

// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function(root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function(root) {
    // To print values separated by spaces use process.stdout.write(someValue + ' ')
    let outputLevels = [[root]];
    for (let i = 0; i < outputLevels.length; i++) {
        if (!outputLevels[i].includes(root.left){
            
        }
    }
    // var string = ``;
    // var i = 1;
    // while (i == outputLevels.length) {
    //   var j = 0;
    //   while (j < outputLevels[i - 1].length) {
    //     var tempNode = outputLevels[i-1][j];
    //     string += `${tempNode.data}`;
    //     if (!tempNode.left == null) {
    //       outputLevels[i].push(tempNode.left);
    //       if (!tempNode.right == null) {
    //         outputLevels[i].push(tempNode.right);
    //       }
    //       i++;
    //     } else if (!tempNode.right == null) {
    //       outputLevels[i].push(tempNode.right);
    //       i++;
    //     }
    //     j++;
    //   }
    // }
    // console.log(string);
  }; // End of function levelOrder
} // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding("ascii");

var _input = "";

process.stdin.on("data", function(data) {
  _input += data;
});

process.stdin.on("end", function() {
  var tree = new BinarySearchTree();
  var root = null;

  var values = _input.split("\n").map(Number);

  for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
  }

  tree.levelOrder(root);
});
