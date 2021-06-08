
let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const getallmatches = require("./allmatches");

request(matchLink , function(err , res , data){
      processdata(data);
});

function processdata(html)
{
    let myDocument = cheerio.load(html);

    let atag = myDocument(".widget-items.cta-link a");
    //console.log(atag);
    let allmatcheslink = "https://www.espncricinfo.com"+ myDocument(atag).attr("href");
    //console.log(allmatcheslink);
    getallmatches(allmatcheslink);
}