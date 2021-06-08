const fs = require('fs');
const cat = require('./util')
let content = process.argv.slice(2);

const flags = [];
const files = [];

for(let i=0;i<content.length;i++)
{
    if(content[i].startsWith("-"))
    {
        flags.push(content[i]);
    }
    else
    {
        files.push(content[i]);
    }
}
//console.log(flags);
//console.log(files);

let filedata = cat.getfiledata(files);
//console.log(filedata);

if(flags.includes("-s"))
{
    filedata = cat.applysflag(filedata);
    console.log(filedata);
}

if(flags.includes("-b") && flags.includes("-n"))
{
    if(flags.indexOf("-b")<flags.indexOf("-n"))
    {
        filedata = cat.applybflag(filedata);
    }
    else
    {
        filedata = cat.applynflag(filedata);
    }
}
else if(flags.includes("-b"))
{
    filedata = cat.applybflag(filedata);
}
else if(flags.includes("-n"))
{
    filedata = cat.applynflag(filedata);
}
console.log(filedata);


