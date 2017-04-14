

const express = require('express');
const app = express();


require('./routes')(app);

app.listen(15000,function(){
console.log("Server started ");


})

function middleware(req,res,next){
console.log('in between the route');
next();
}


module.exports = app ;