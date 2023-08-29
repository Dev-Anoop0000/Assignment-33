const fs = require('fs');

const { buffer } = require('stream/consumers');
console.log("Programm Start :=>")
fs.readFile('text.txt', function(err, data) {
    if (err) {
        console.log("Error in opening file :-", err);
    } else {
        console.log("File Successfully open :-", data.toString());
    }
})

fs.unlink('text.txt', function(err) {
    if (err) {
        console.log("Error in deleting file :- ", err)
    } else {
        console.log("Successfully deleted :-")
    }
})


console.log("Programmm End....");