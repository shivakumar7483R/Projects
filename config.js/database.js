const mongoose = require('mongoose'); 
const _ = require('lodash');
const dbName = require('./property');
console.log('dbName',dbName);
const databaseconnect = ()=>{
    return mongoose.connect(dbName.url,function(err,db){
        if(err){
            console.log("error in connected database");
        }
        console.log('database connected-',_.get(db,['name']))
    });
}

module.exports = {
    databaseconnect
}