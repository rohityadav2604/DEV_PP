const express = require("express");
const app = express();



let port  = "8080";

app.listen(port , ()=>{
    console.log(`listening to port ${port}`);
})


app.get('/' , (req , res)=>{
    console.log(req.hostname);
    console.log(req.path);
    console.log(req.method);
    res.send('hello');
})
let obj ={
    'name' : "Rohit"
}
app.get('/user' , (req , res)=>{
    res.json(obj);
})

app.get('/home' , (req , res)=>{
    res.sendFile('./views/index.html' , {root : __dirname});
})