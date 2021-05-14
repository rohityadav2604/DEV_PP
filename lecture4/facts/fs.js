
const fs = require("fs");
const cheerio = require("cheerio");


let htmlKaData = fs.readFileSync("./index.html" , "utf8");



 let myDocument = cheerio.load(htmlKaData);


// let h1KaData = myDocument("h1").text();
//let htmlkadata = fs.readFileSync("./index.html" , "utf-8");
//let myDocument = cheerio.load(htmlkadata);
let h1KaData = myDocument("h1").text();



//console.log(h1KaData);

//console.log(myDocument("ul p").text());
console.log(myDocument("ul > a").text()); /// it will direct a tag of ul;
//myDocument(".inside").text();  /// to select class;
//myDocument("#main-head").text();  // to select ids;
