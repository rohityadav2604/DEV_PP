const fs = require('fs');

function getfiledata(files)
{
    let filesdata="";

    for(let i=0;i<files.length;i++)
    {
        if(!fs.existsSync(files[i]))
        {
            console.log("one or more file does'nt exist");
            return;
        }
        if(i==files.length-1)
        {
            filesdata+=fs.readFileSync(files[i]);

        }
        else{
            filesdata+=fs.readFileSync(files[i])+"\n";
        }



    }
    return filesdata;
}

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
module.exports={
    getfiledata : getfiledata,
    applysflag : applysflag,
    applybflag : applybflag,
    applynflag : applynflag
}
