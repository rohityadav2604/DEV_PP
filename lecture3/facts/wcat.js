const fs = require('fs');


let f1kadata = fs.readFileSync("./f1.txt" , "utf-8");



function applysflag(f1kadata)
{
    let splitdata  = f1kadata.split("\n");
    //console.log(splitdata);
    let emptyinclude = false;
    let removespace = [];
    for(let i =0;i<splitdata.length;i++)
    {
        if(splitdata[i]== "" && emptyinclude == false)
        {
               removespace.push(splitdata[i]);
               emptyinclude = true;
        }
        else if(splitdata[i]!="")
        {
            removespace.push(splitdata[i]);
            if(i<splitdata.length-2)
            {
                emptyinclude=false;
            }
        }
    }
    let newstring  = removespace.join("\n");
    return newstring;

}

//  let newstring = applysflag(f1kadata);
//  console.log(newstring);


 function applybflag(f1kadata)
 {
        let splitdata = f1kadata.split("\n");
        let count=1;
        for(let i=0;i<splitdata.length;i++)
        {
            if(splitdata[i]!="")
            {
                splitdata[i] = `${count}.${splitdata[i]}`;
                count++;
            }

        }
        let bflagstring = splitdata.join("\n");
        return bflagstring;
 }

//  let bflaggedstring  = applybflag(f1kadata);
//  console.log(bflaggedstring);


function applynflag(f1kadata)
 {
        let splitdata = f1kadata.split("\n");
        let count=1;
        for(let i=0;i<splitdata.length;i++)
        {
            
            
                splitdata[i] = `${count}.${splitdata[i]}`;
                count++;
            

        }
        let nflagstring = splitdata.join("\n");
        return nflagstring;
 }
let nflagstring = applynflag(f1kadata);
console.log(nflagstring);