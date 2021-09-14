const express = require("express");
const app = express();

app.use(express.json());

let port  = "5000";

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

let user ={};
app.get('/' , (req , res)=>{
    res.send('Home page');
})

app.get('/user' , (req , res)=>{

    res.send(user);
})
app.post('/user' , (req , res)=>{
    user = req.body
    res.send("data has been added succesfully");
})

app.patch('/user' , (req , res)=>{
    for(let key in req.body)
    {
        user[key] = req.body[key];
    }
    res.send(user);
})