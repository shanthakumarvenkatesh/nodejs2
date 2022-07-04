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


const json1=[
    {
        name:"shanth",
        email:"shanth@gmail.com"
    }
]


const json2=[
    {
        name:"vk",
        email:"sth@gmail.com"
    }
]
const add =function(a,b){
    return a+b;
}
// exports.json1 =json1;
// exports.json2 =json2;
module.exports={
json1:json1,
json2:json2,
add:add
}