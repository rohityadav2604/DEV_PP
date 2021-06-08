const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");
const matchdetails = require("./match.js")


function allmatches(allmatchlink){
   // console.log(allmatchlink);

    request(allmatchlink , function(err , res , data){
        processdata(data);
    });
}

function processdata(data)
{
    let myDocument = cheerio.load(data);
     let allatags = myDocument('a[data-hover="Scorecard"]')
    //let allatags = myDocument('.Scorecard')
    //console.log(allatags.length);
    for(let i=0;i<allatags.length;i++)
    {
        let matchlink = "https://www.espncricinfo.com"  + myDocument(allatags[i]).attr("href");
        
       //console.log(matchlink);
       matchdetails(matchlink);
    }
}

module.exports = allmatches;
    
