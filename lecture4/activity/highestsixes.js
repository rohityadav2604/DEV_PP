let matchLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-royal-challengers-bangalore-55th-match-1216505/full-scorecard";

const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");

request(matchLink , cb);

function cb(error , response , data)
{
    getsixes(data);
}

function getsixes(data)
{
    const myDocument = cheerio.load(data);

    const bothbatsmentable = myDocument(".table.batsman")
   // console.log(bothbatsmentable);
   let highestsixesbatsmen ;
   let highestsixesbatsmenName;
   for(let i=0;i<bothbatsmentable.length;i++)
   {
       const batsmantable = myDocument(bothbatsmentable[i]);
       const allbatsmen = batsmantable.find("tbody tr");
       for(let j=0;j<allbatsmen.length;j++)
       {
           const alltds = myDocument(allbatsmen[j]).find("td");
           //console.log(alltds);
           if(i==0 && j==0)
           {
               highestsixesbatsmen = myDocument(alltds[6]).text();
               highestsixesbatsmenName = myDocument(alltds[0]).find("a").text();
           }
           else
           {
               let currentbatsmensixes = myDocument(alltds[6]).text();
               if(currentbatsmensixes > highestsixesbatsmen)
               {
                   highestsixesbatsmenName = myDocument(alltds[0]).find("a").text();
                   highestsixesbatsmen = currentbatsmensixes;
               }
           }

       }
   }

   console.log(highestsixesbatsmen);
   console.log(highestsixesbatsmenName);
}
