

function main() {
    const n = 13;
    var nString = n.toString(2);
    var output = 0;
    var stuff = 0;
    for (var i = 0; i < nString.length; i++) {
        if(nString[i] == "1"){
            stuff += 1;
            if(stuff > output){
                output = stuff;
            }
        }else{
            stuff = 0;
        }
    }
    console.log(output);
}
main();