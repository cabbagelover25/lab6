var counter = 0;
var fs = require('fs');


function fileReading(callback){
   fs.readFile('foo.txt', function doneReading(err, fileContents){
      counter = fileContents.toString().split("\n").length;
   callback();
}
)}

function printLength(){
  console.log(counter);
}

fileReading(printLength);
