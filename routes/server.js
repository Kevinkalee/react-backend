var mysql = require('mysql');
var express = require('express');
var app = express();
var database = require('db');

// set up connection to database
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'Administrator3!',
    database: 'church'
});

// Connect to database 
database.connect(connection);

// Listen to GET request from client
app.get('/', function(req ,res,next){
    // postsent data
    var query =  database.query_table(connection , 'Member');
    res.end('Sucess');

});

app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
})
