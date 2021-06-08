
let tournamentlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const allmatches = require("./allmatches.js")
request(tournamentlink , function(err , res , data){
    //console.log(data);
     processdata(data);
});

function processdata(fullhtml)
{
    let myDocument = cheerio.load(fullhtml);
    let atag = myDocument(".widget-items.cta-link a")
    //console.log(atag);
    let allmatchlink = "https://www.espncricinfo.com"+atag.attr("href");
    //console.log(allmatchlink);
    allmatches(allmatchlink);
}