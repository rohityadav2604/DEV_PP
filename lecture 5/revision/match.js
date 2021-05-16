const request = require("request");
const fs = require("fs");
const cheerio = require("cheerio");
 //let matchlink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

function matchdetails(matchlink)
{
    //console.log("got the link");
    request(matchlink , function(err , res , data){
        processdata(data);
    });

}
//matchdetails(matchlink);
function processdata(data)
{
    let myDocument = cheerio.load(data);
    let bothbatsmentable = myDocument(".card.content-block.match-scorecard-table .Collapsible")
    //console.log(bothbatsmentable);
    for(let i=0;i<bothbatsmentable.length;i++)
    {
        let oneinning = bothbatsmentable[i];
        let teamname = myDocument(oneinning).find("h5").text();
        teamname = teamname.split("INNINGS")[0].trim();
        console.log(teamname);
        let alltrs = myDocument(oneinning).find(".table.batsman tbody tr");
        for(let j=0;j<alltrs.length-1;j=j+2)
        {
            let alltds = myDocument(alltrs[j]).find("td");
            let batsmanname = myDocument(alltds[0]).text().trim();
            let runs = myDocument(alltds[2]).text().trim();
            let balls = myDocument(alltds[3]).text().trim();
            let fours = myDocument(alltds[5]).text().trim();
            let sixes = myDocument(alltds[6]).text().trim();
            let strikerate = myDocument(alltds[7]).text().trim();
           // console.log(`batsman = ${batsmanname} Runs = ${runs} balls = ${balls} fours = ${fours} sixes = ${sixes} strikerate = ${strikerate}`);
        //    console.log("batsman ="+batsmanname);
        //    console.log("runs ="+runs);
        //    console.log("balls ="+balls);
        //    console.log("fours ="+fours);
        //    console.log("sixes ="+sixes);
        //    console.log("strikerate ="+strikerate);
           // processdetails(teamname , batsmanname , runs , balls , fours , sixes , strikerate);
           leaderboard(teamname , batsmanname , runs , balls , fours , sixes , strikerate);
        }
        console.log("#####3#####################3");
    }

}

function checkbatsmanpresent(batsmanname)
{
    let path = `./leaderboard/${batsmanname}.json`;
    return fs.existsSync(path);
}

function updateobject(teamname , batsmanname , Runs , Balls , Fours , Sixes , Strikerate)
{
    Runs = Number(Runs);
    Balls = Number(Balls);
    Fours = Number(Fours);
    Sixes = Number(Sixes);
    let path = `./leaderboard/${batsmanname}.json`;
    let objectdata = JSON.parse(fs.readFileSync(path));
    objectdata.runs = Number(objectdata.runs)+Runs;
    objectdata.balls = Number(objectdata.balls)+Balls;
    objectdata.fours = Number(objectdata.fours)+Fours;
    objectdata.sixes = Number(objectdata.sixes)+Sixes;
    
    fs.writeFileSync(path , JSON.stringify(objectdata));


}
function createobject(teamname , batsmanname , runs , balls , fours , sixes , strikerate)
{
    let path = `./leaderboard/${batsmanname}.json`;
    //let objectdata = JSON.parse(fs.readFileSync(path));
    // objectdata.runs = objectdata[runs]+Runs;
    // objectdata.balls = objectdata[balls]+Balls;
    // objectdata.fours = objectdata[fours]+Fours;
    // objectdata.sixes = objectdata[sixes]+Sixes;
    // objectdata.strikerate = objectdata[strikerate];
    let objectdata ={
        batsmanname:batsmanname,
        runs:runs,
        balls:balls,
        fours:fours,
        sixes:sixes,
        strikerate:strikerate
    }
    fs.writeFileSync(path , JSON.stringify(objectdata));
}
function leaderboard(teamname , batsmanname , runs , balls , fours , sixes , strikerate)
{
    let batsmanexist = checkbatsmanpresent(batsmanname);
    if(batsmanexist)
    {
         updateobject(teamname , batsmanname , runs , balls , fours , sixes , strikerate)
    }
    else
    {
        createobject(teamname , batsmanname , runs , balls , fours , sixes , strikerate);
    }
}












// function checkteamfolder(teamname)
// {
//     let teampath = `./ipl/${teamname}`;
//     return fs.existsSync(teampath);
// }
// function createteamfolder(teamname)
// {
//     let teampath = `./ipl/${teamname}`;
//     fs.mkdirSync(teampath);
// }
// function checkteambatsman(teamname , batsmanname)
// {
//     let path = `./ipl/${teamname}/${batsmanname}.json`;
//     return fs.existsSync(path);
// }
// function createbatsman(teamname , batsmanname , runs , balls , fours , sixes , strikerate)
// {
//     let path = `./ipl/${teamname}/${batsmanname}.json`;
//     let batsmanfile = [];
//     let ining = {
//         Runs : runs , 
//         Balls : balls , 
//         Fours : fours , 
//         Sixes : sixes ,
//         StrikeRate : strikerate
//     }
//     batsmanfile.push(ining);
//     fs.writeFileSync(path , JSON.stringify(batsmanfile));

// }

// function updatebatsmanfile(teamname , batsmanname , runs , balls , fours , sixes , strikerate)
// {
//     let path = `./ipl/${teamname}/${batsmanname}.json`;
//     let batsmanfile = JSON.parse(fs.readFileSync(path));
//     let ining = {
//         Runs : runs , 
//         Balls : balls , 
//         Fours : fours , 
//         Sixes : sixes ,
//         StrikeRate : strikerate
//     }
//     batsmanfile.push(ining);
//     fs.writeFileSync(path , JSON.stringify(batsmanfile));

// }



// function processdetails(teamname , batsmanname , runs , balls , fours , sixes , strikerate)
// {
//     let teamfolder = checkteamfolder(teamname);
//     if(teamfolder)
//     {
//         let isbatmanpresent = checkteambatsman(teamname , batsmanname);
//         if(isbatmanpresent)
//         {
//             updatebatsmanfile(teamname , batsmanname , runs , balls , fours , sixes , strikerate)
//         }
//         else 
//         {
//             createbatsman(teamname , batsmanname , runs , balls , fours , sixes , strikerate);
//         }
//     }
//     else
//     {
//         createteamfolder(teamname);
//         createbatsman(teamname , batsmanname , runs , balls , fours , sixes , strikerate);

//     }

// }
 module.exports = matchdetails;