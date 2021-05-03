const fs = require('fs');

let filedata = fs.readFileSync("./intro.js");
console.log(filedata + "");

fs.writeFileSync("./index.txt" , "hello world");
fs.writeFileSync("./index.txt" , "hello world part 2");