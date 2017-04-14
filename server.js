

const express = require('express');
const app = express();


app.get('/',function(req,res){
console.log('reached base route');
res.end('Hi this is the base route');

})

app.use('/' , require('./routes.js'));



app.listen(8000,function(){
console.log("Server started ");


})

function middleware(req,res,next){
console.log('in between the route');
next();
}
