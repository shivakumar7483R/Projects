const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
var db = 'mongodb://localhost/signzy';
const book = require('./routes/books');
// const dbDetails = require('./config.js/property');
// const database = require('./config.js/database');
// console.log('dbDetails',dbDetails)
mongoose.connect(db);
// database.databaseconnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/books', book);

app.get('/', function(req, res){
    console.log('app starting on port: '+port)
    res.send('tes express nodejs mongodb');
});

app.listen(port, function(){
    console.log('app listening on port: '+port);
});