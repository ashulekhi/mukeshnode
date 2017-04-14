/**
 * Created by ashu_dev on 13/04/17.
 */

var express = require('express');


// check the ashu api only... you will get to know the functioning 

module.exports = function(app){
    app.use('/api/ashu' , require('./api/ashu'));  /// here it will go to ashu folder
    app.use('/api/mukesh' , require('./api/mukesh')); //here it will go to mukesh folder




    //For all other unmatching routes
    app.route('/*').get(function(req,res){
        console.log('unmacthed route found');

        res.send('Wrong Url . .  this url is not found ')
    })
};






