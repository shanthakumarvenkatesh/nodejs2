// const data={
//   json1:{
//     name:"shanth",
//     email:"shanth@gmail.com"
//   },
//   json2:{
//     name:"virat",
//     email:"virat@gmail.com"
//   }
// }


// const json1=[
//     {
//         name:"shanth",
//         email:"shanth@gmail.com"
//     }
// ]


// const json2=[
//     {
//         name:"vk",
//         email:"sth@gmail.com"
//     }
// ]
// const add =function(a,b){
//     return a+b;
// }
// // exports.json1 =json1;
// // exports.json2 =json2;
// module.exports={
// json1:json1,
// json2:json2,
// add:add
// }

const express=require('express')
const app=express();
const middleware1 = function(req,res,next){ 
    console.log('middleWare 1 ');
    next();
}

app.use(middleware1); 

const middleware2 = function(req,res,next){
    console.log('middleware 2');
}

app.get('/',middleware2,function(req,res){
    res.send("Home page")
})

app.get('/1',function(req,res){
    res.send("One")
})

app.get('/2',middleware2,function(req,res){
    res.send("Two")
})

app.get('/3',function(req,res){
    res.send("Three")
})

app.listen(6666);
