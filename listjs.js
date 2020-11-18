var fs = require('fs');

function fileReading(){
   fs.readdir('./', function callback(err, files){
     if(err){
        console.log(err);
     }
     else{
     files.forEach(file => {
       console.log(file);
     })}
   });
}


fileReading();
