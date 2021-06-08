const fs = require("fs");
let files = ["./f1.txt" , "./f2.txt" , "./f3.txt"];

// for(let i=0;i<files.length;i++)
// {
//     let path = files[i];
//     let filepromise = fs.promises.readFile(path);
//     filepromise.then(function(data)
//     {
//         console.log(data+"");
//     })
// }


let i=0;
while(i<files.length)
{
    let path = files[i];

    let filepromise = fs.promises.readFile(path);
    filepromise.then(function(data)
    {
        console.log(data+"");
        i++;
    })
}












// let f1kapromise = fs.promises.readFile("./f1.txt");

// f1kapromise.then(function(data)
// {
//     console.log(data+"");
//     let f2kapromise = fs.promises.readFile("./f2.txt");
//     f2kapromise.then(function(data)
//     {
//         console.log(data+"");
//         let f3kapromise = fs.promises.readFile("./f3.txt");
//         f3kapromise.then(function(data)
//         {
//             console.log(data+"");
//         })
//     })
// })
