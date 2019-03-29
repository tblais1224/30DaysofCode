//You are given two classes, Person and Student, where Person is the base class and Student is the derived class. Completed code for Person and a declaration for Student are provided for you in the editor. Observe that Student inherits all the properties of Person.
//Complete the Student class by writing the following:
// A Student class constructor, which has  parameters:
// A string, firstName.
// A string, lastName.
// An integer, id.
// An integer array (or vector) of test scores, scores.
// A char calculate() method that calculates a Student object's average and returns the grade character representative of their calculated average:




'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => {
    _input += data;
});
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();
});

function read() {
    return _input[_index++];
}

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName +
            "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    // *   Class Constructor
    constructor(firstName, lastName, identification, testScores) {
        super(firstName, lastName, identification)
        this.testScores = testScores;
    }

    calculate() {
        var scoreCounter = 0;

        for (let i = 0; i < this.testScores.length; i++) {
            scoreCounter += parseInt(this.testScores[i]);
        }
        var gradeAvg = (scoreCounter / this.testScores.length);
        if (gradeAvg < 40) {
            return ('T');
        } else if (40 <= gradeAvg && gradeAvg < 55) {
            return ('D');
        } else if (55 <= gradeAvg && gradeAvg < 70) {
            return ('P');
        } else if (70 <= gradeAvg && gradeAvg < 80) {
            return ('A');
        } else if (80 <= gradeAvg && gradeAvg < 90) {
            return ('E');
        } else if (90 <= gradeAvg) {
            return ('O');
        }
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)

    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}