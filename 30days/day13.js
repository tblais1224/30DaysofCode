// Given a Book class and a Solution class, write a MyBook class that does the following:
// Inherits from Book
// Has a parameterized constructor taking these  parameters:
// string title
// string author
// int price
// Implements the Book class' abstract display() method so it prints these 3 lines:
// title:, a space, and then the current instance's title.
// author:, a space, and then the current instance's author.
// price:, a space, and then the current instance's price.

'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('\n'));
    main();    
});
function readLine() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Book {
    constructor(title, author) {
        if (this.constructor === Book) {
            throw new TypeError('Do not attempt to directly instantiate an abstract class.'); 
        }
        else {
            this.title = title;
            this.author = author;
        }
    }
    
    display() {
        console.log('Implement the \'display\' method!')
    }
}

// // Declare your class here.
class MyBook extends Book{
    constructor(title, author, price){
        super(title, author)
        this.price = price;
    }

    display(){
        console.log("Title: " + this.title);
        console.log("Author: " + this.author);
        console.log("Price: " + this.price);
    }
}


function main() {
    let title = readLine()
    let author = readLine()
    let price = +readLine()

    let book = new MyBook(title, author, price)
    book.display()
}
