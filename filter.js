module.exports = function filterFiles(pathToDir, callback){
  var fs = require('fs');

   fs.readdir(pathToDir, function call(err, files){
     if(err){
        console.log(err);
     }
     else{
     files.forEach(file => {
       callback(file);
     })
   }
})
}
