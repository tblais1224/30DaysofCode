
const input = "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";
function processData() {
    var data = [];
    var dataArray = input.split('\n');
    var n = parseInt(dataArray[0]);
    for(var i = 1; i <= n; i++){
        data.push({name: dataArray[i].match(/[a-zA-Z]+/g), phonenumber: dataArray[i].match(/[0-9]+/g)});
        if (dataArray[n+i] == data[i-1].name){
            console.log(`${data[i-1].name}=${data[i-1].phonenumber}`)
        }else{console.log("Not found")};
    }
} ;



