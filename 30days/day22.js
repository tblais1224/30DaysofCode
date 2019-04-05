//Binary Search Trees
//The height of a binary search tree is the number of edges between the tree's root and its furthest leaf. You are given a pointer, root, pointing to the root of a binary search tree. Complete the getHeight function provided in your editor so that it returns the height of the binary search tree.

// Start of function Node
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);

            return this.root;
        }
        //this checks to see if the new data will be placed on the left or right of the root based on whether its less than or greater than it, and then creates a node with the data
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

    //tree is ordered, left is <= to parent and right is >= to parent
    // Start of function getHeight

    this.getHeight = function (root) {
        var sum = 0;
        var rootTemp = root;
        
        while (rootTemp.left !== null) {
            sum++;
            rootTemp = rootTemp.left;
        } 
        while (rootTemp.right !== null) {
            sum++;
            rootTemp = rootTemp.right;
        }
        // Add your code here
        return sum;
    }; // End of function getHeight
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = "";

process.stdin.on('data', function (data) {
    _input += data;
});

process.stdin.on('end', function () {
    var tree = new BinarySearchTree();
    var root = null;

    var values = _input.split('\n').map(Number);

    for (var i = 1; i < values.length; i++) {
        root = tree.insert(root, values[i]);
    }

    console.log(tree.getHeight(root));
});