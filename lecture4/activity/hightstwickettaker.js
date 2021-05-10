let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");

request(matchLink , cb);

function cb(error , response , data)
{
   // console.log(data);
     gethighestwickettaker(data);
}

function gethighestwickettaker(data)
{
    let myDocument = cheerio.load(data);
    let bothbowlertable = myDocument(".table.bowler");
    //console.log(bowlertable);

    //console.log(htmlkadata);

    let highestwickettaken;
    let economyofhighestwickettaker
    let highestwickettakenName;

    for(let i=0;i<bothbowlertable.length;i++)
    {
        let bowlertable = myDocument(bothbowlertable[i]);
        let alltablerows = bowlertable.find("tbody tr");
        //console.log(alltablerows);

        for(let j=0;j<alltablerows.length;j++)
        {
            let alltds = myDocument(alltablerows[j]).find("td");

            if(i==0 &&j==0)
            {
                highestwickettaken = myDocument(alltds[4]).text();
                highestwickettakenName = myDocument(alltds[0]).find("a").text();
                economyofhighestwickettaker = myDocument(alltds[5]).text();
            }
            else
            {
                let currentwickettaker = myDocument(alltds[4]).text();
                let currentwickettakereco = myDocument(alltds[5]).text();
                if(currentwickettaker > highestwickettaken || currentwickettaker==highestwickettaken && currentwickettakereco < economyofhighestwickettaker)
                {
                    highestwickettaken = currentwickettaker;
                    economyofhighestwickettaker = currentwickettakereco;
                    highestwickettakenName = myDocument(alltds[0]).find("a").text();
                }
            }
        }

    }

    console.log("name"+highestwickettakenName);
    console.log("wicket"+highestwickettaken);
    console.log("economy"+economyofhighestwickettaker);
}