

const express = require('express');
const app = express();


app.get('/',function(req,res){
console.log('reached base route');
res.end('Hi this is the base route');

})

app.use('/' , require('./routes.js'));

/*app.get('/mukesh',function(req,res){
res.end('Hello mukesh you are in some othe route or path');
})


app.get('/jwelleryData',middleware,function(req,res){
console.log('reached end point after middleware');
res.end('middleware done ')
})*/

app.listen(8000,function(){
console.log("Server started ");


})

function middleware(req,res,next){
console.log('in between the route');
next();
}
