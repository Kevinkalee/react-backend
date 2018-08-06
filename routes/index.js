const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = 3001; 

var router = express.Router();
const app = express();

const SELECT_ALL_MEMBERS_QUERY = 'SELECT * FROM Member';

// set up connection to database
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'admin',
    database: 'church'
});


// Connect to database 
connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());


// send a simple message to the front end
app.get('/', (req,res) => {
    res.send('go to /members to see members')
});


// Listen to GET request from client
app.get('/members', function(req ,res,next){
    // postsent data
    connection.query(SELECT_ALL_MEMBERS_QUERY ,(err,results)=>{
        if (err){
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            }) 
        }
    
	});
});

app.listen(port, function(){
    console.log('Example app listening on port', port);
})
module.exports = router;