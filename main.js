var filter = require('./filter');

function printStuff(dir){
  console.log(dir);
}

console.log(filter(process.argv[2], printStuff));
