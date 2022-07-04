// const express =require("express")
// const app=express()
// const jsonData=require("./data")

// app.get('/',function(req,res){
//     res.send("<h1>shanth</h1>")
// })
// app.get('/user1',function(req,res){
//     res.json(jsonData.json1)
//     console.log(jsonData.add(3,4))
// })
// app.get('/user2',function(req,res){
//     res.json(jsonData.json2)
  
// })
// app.listen(3001)

const express=require("express");

const app=express();

app.get("/",(req,res)=>
{
    res.send("hello express");
});

app.get("/api/main",(req,res)=>{
    res.write("<h1>Exxpress.js</h1>");
    res.write("<p>Express is a node js web application framwork that provides us broad features for web and mobile applications.It is a layer built on the top of the node js that helps manages servers and routes.</p>");
    res.end();
});
app.listen(8005);