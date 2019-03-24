var input =
  "5\ntom 34252345\njoe 125215235\nhayden 1435351\nmaddie 45345345\nhenry 53543\njoe\nmaddie\nnick\ntom\nhayden";

function processData(input) {
  var inputarray = input.split("\n");
  var n = parseInt(inputarray.shift());
  var phonebook = {};
  var checkname = [];
  for (var i = 0; i < n; i++) {
    checkname.push(inputarray[i].replace(/[^A-Za-z]+/g, ""));
    phonebook.i.push(inputarray[i].replace(/[^A-Za-z]+/g, ""));
    phonebook.i.push(inputarray[i].replace(/[^0-9]+/g, ""));
  }
  console.log(phonebook);
};
//   for (var i = 0; i < n; i++) {
//     if (checkname.includes(inputarray[n + i])) {
//       var a = checkname.indexOf(inputarray[n + i]);
//       console.log(`${phonebook[a][0]}=${phonebook[a][1]}`);
//     } else {
//       console.log("Not found");
//     }
//   }
//   }

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function(input) {
//   _input += input;
// });

// process.stdin.on("end", function() {
//   processData(_input);
// });

// [
//   { name: SyncManager, number: hbefhvqeohfbv },
//   { name: SyncManager, number: hbefhvqeohfbv },
//   { name: SyncManager, number: hbefhvqeohfbv }
// ];

// dictionary = {
//   person: {
//     name: tom,
//     number: 6234592
//   }
// };
