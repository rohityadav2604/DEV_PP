const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
const getmatchdetails = require('./match.js')


function getallmatches(allmatcheslink)
{
   // console.log(allmatcheslink);
    request(allmatcheslink , function(err , res , data){
        processdata(data);
    });
}

function processdata(data)
{
          let myDocument = cheerio.load(data);
          let allatag = myDocument('a[data-hover="Scorecard"]');
          for(let i=0;i<allatag.length;i++)
          {
              let matchLink = "https://www.espncricinfo.com" + myDocument(allatag[i]).attr("href");
              //console.log(matchLink);
               getmatchdetails(matchLink);
          }
}

module.exports = getallmatches;