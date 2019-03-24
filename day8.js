        
function processData(input) {
    var inputarray = input.split("\n");
    var n = parseInt(inputarray.shift());
    // var queryn = parseInt(inputarray.length - n -1);
    var phonebook = {};
    for (var i = 0; i < n; i++) {
        var name = inputarray[i].replace(/[^A-Za-z]+/g, "");
        phonebook[name] = inputarray[i].replace(/[^0-9]+/g, "");
    }
    
    for (var i = n+1; i < inputarray.length; i++) {
        var checkname = inputarray[inputarray[i]];
        if (checkname in phonebook) {
            console.log(`${checkname}=${phonebook[checkname]}`);
        }
        else { console.log("Not found"); }
    }
}

function processData(input) {
    var inputarray = input.split("\n");
    var n = parseInt(inputarray.shift());
    var queryn = parseInt(inputarray.length - n);
    var phonebook = {};
    for (var i = 0; i < n; i++) {
        var name = inputarray[i].replace(/[^A-Za-z]+/g, "");
        phonebook[name] = inputarray[i].replace(/[^0-9]+/g, "");
    }

    for (var i = 0; i < queryn; i++) {
        var checkname = inputarray[queryn + i];
        if (checkname in phonebook) {
            console.log(`${checkname}=${phonebook[checkname]}`);
        }
        else { console.log("Not found"); }
    }
};