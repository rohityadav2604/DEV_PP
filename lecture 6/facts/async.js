const fs = require("fs");
let arr = ["./f1.txt" , "./f2.txt" , "./f3.txt"]
// fs.readFile("./f1.txt" , function cb (err , data)
// {
//     console.log(data+"");
//     fs.readFile("./f2.txt" , function cb(err , data)
//     {
//         console.log(data+"");
//         fs.readFile("./f3.txt" , function cb( err , data)
//         {
//              console.log(data+"");
//         });

//     });
// });


for(let i=0;i<arr.length;i++)
{
       fs.readFile(arr[i] , function(err , data){

               console.log(data);
                      
       });
}






