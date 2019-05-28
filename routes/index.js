const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const port = 3001;
require('dotenv').config()

var router = express.Router();
const app = express();
var bodyParser = require('body-parser');

const SELECT_ALL_MEMBERS_QUERY = 'SELECT * FROM Member';
const SELECT_ALL_NONMEMBER_QUERY = 'SELECT * FROM Non_Members';
const SELECT_ALL_STUDENTS_QUERY = 'SELECT * FROM Student';
const SELECT_ALL_CELL_GROUP_QUERY = 'SELECT * FROM Cell_Group';

// set up connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_TABLE
});


// Connect to database 
connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());
app.use(bodyParser.json())
// send a simple message to the front end
app.get('/', (req, res) => {
    res.send('go to /members to see members')
});


// Listen to GET request from client
app.get('/Members', function (req, res, next) {
    // postsent data
    connection.query(SELECT_ALL_MEMBERS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            })
        }

    });
});

app.get('/Nonmembers', function (req, res, next) {
    // postsent data
    connection.query(SELECT_ALL_NONMEMBER_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            })
        }

    });
});

app.get('/ChineseSchool', function (req, res, next) {
    // postsent data
    connection.query(SELECT_ALL_STUDENTS_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            })
        }

    });
});

app.get('/CellGroup', function (req, res, next) {
    // postsent data
    connection.query(SELECT_ALL_CELL_GROUP_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        else {
            return res.json({
                data: results
            })
        }

    });
});


app.post('/newmember', function (req, res) {
    member = req.body
    console.log(req.body)
    connection.query('INSERT INTO Member SET ?', member, (err, result) => {
        if (err) {
            console.error(err);
            return res.send(err);
        }
        console.error(result);
    })
});

app.put('/deletemember', function (req, res) {
    var member = req.body.ID
    console.log(member)
    connection.query('DELETE FROM Member WHERE ID = ?', member, (err, result) => {
        if (err) {
            console.error(err);
            return res.send(err);
        }
        console.error(result);
    })
});

app.put('/editmember', function (req, res) {
    // var payload = build_edit_payload(req.body.ID)
    // console.log(payload)
    let field = req.body.ID
    let sql = "UPDATE Member SET Surname = ?, FirstName = ?, Sex = ?, ContactNumber = ?,\
    Address = ?, DOB = ?, RoleCode = ?, LoCode = ?,\
    CellGroupID = ?, MinistryID = ?, Consents = ? WHERE ID = ?"

    let payload = [field.Surname, field.FirstName, field.Sex, field.ContactNumber, field.Address,
    field.DOB, field.RoleCode, field.LoCode, field.CellGroupID,
    field.MinistryID, field.Consents, field.ID]

    connection.query(sql, payload, (err, result) => {
        if (err) {
            console.error(err);
            return res.send(err);
        }
        console.log("Rows Affected", result.affectedRows);
        console.error(result);
    })
})

app.listen(port, function () {
    console.log('Example app listening on port', port);
})
module.exports = router;