const fs = require("fs");

const { buffer } = require("stream/consumers");

console.log("Programmmm  Stat......")


//// Reading file.....
fs.readFile('NodeJs_Architecture.txt', function(err, data) {
    if (err) {
        console.log("Error in Opening  file : ", err);
    } else {
        console.log("File successfully Open : ", data.toString());
    }
})


//// Appending... Extra Information....
fs.appendFile("NodeJs_Architecture.txt", "--The thread goes to Database to make a query, the query requires 500ms to be processed, meanwhile the main thread will be waiting for the database request to be processed.", 'utf8', function(err, data) {
    if (err) {
        console.log("Error in Appending File .", err);
    } else {
        console.log("Successfully Append file.", data);
    }
})


console.log("Programmm Enddd....")