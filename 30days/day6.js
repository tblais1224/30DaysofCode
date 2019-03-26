function processData(input) {
    var inputarray = input.split('\n');
    let word = [];
    for (let i = 0; i < parseInt(inputarray[0]); i++) {
        word.push(["", ""]);
        let s = inputarray[i + 1];
        for (let j = 0; j < s.length; j++) {
            if (j / 2 == parseInt(j / 2)) {
                word[i][0] += s[j]
            } else { word[i][1] += s[j] }
        }
        console.log(`${word[i][0]} ${word[i][1]}`);
    }

};
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
