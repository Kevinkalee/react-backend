var mysql = require('mysql')

// Setting up database connection parameters
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'appdatabase'
})

// Testing connection to database
function connect_db(connection){
	connection.connect(function(err){
		if (!err) {
			console.log("Database is connected ...");
		} else {
			console.log("Error connecting database ... ");
		}
	});
	return; 
};

// create database
function create_database)(connection, name){
	connection.query('CREATE DATABASE '+ name , function (err,results){
		if (err) throw err; 
		console.log('Database '+name ' created!');
	});	
}

// creates member table within db
function create_member_table(connection){

	connection.query('CREATE TABLE Member ( \
		ID INT NOT NULL, \
		Surname VARCHAR(255), \
		FirstName VARCHAR(255), \ 
		Sex ENUM('M','F'), \
		ContactNumber INT(255), \
		Address VARCHAR(255), \
		DOB DATE(), \
		RoleCode ENUM('P','E','D','C','T','L','M','S','Tr'), \
		LoCode ENUM('E','A','L'), \
		CellGroupID ENUM('G100','G200','G500','G300','G700'), \
		MinistryID ENUM('M1100','M1500'.'M1000','M6000','M7000'), \
 		Consents VARCHAR(255), \
		PRIMARY KEY (ID) ) ');

}

// create non members table within db
function create_non_members_table(connection){
	
	connection.query('CREATE TABLE Non_Members( \
		ID INT NOT NULL, \
		Surname VARCHAR(255), \ 
		FirstName VARCHAR(255), \
		Sex ENUM('M','F'), \
		ContactNumber INT(255), \
		Address VARCHAR(255), \
		Status ENUM('Regular','Visitor'), \
		PRIMARY KEY(ID)');
}

function create_cell_group_table(connection){
	
	connection.query('CREATE TABLE Cell_Group( \
		ID INT NOT NULL, \
		GroupID ENUM('G100','G200','G500','G300','G700'), \
		LeaderID INT, \
		Venue VARCHAR(255), \
		Meeting_Day ENUM('MON','TUE','WED','THU','FRI','SAT','SUN'), \
		Meeting_Time TIME(), \
		Location_Code ENUM('E','A','L'), \
		PRIMARY KEY(ID)');

}
function create_ministry_table(connection){

	connection.query('CREATE TABLE Ministry(\
		ID INT NOT NULL, \
		MinistryID VARCHAR(255), \
		MinistryName VARCHAR(255), \
		LeaderID VARCHAR(255), \
		Venue VARCHAR(255), \
		Meeting_Day ENUM('MON','TUE','WED','THU','FRI','SAT','SUN'), \
		Meeting_Time TIME(), \
		Location_Code ENUM('E','A','L'), \
		PRIMARY KEY(ID)'); 
}

// TODO Add in functions to create School_Lookup, Location_Lookup, Role_Lookup, Student

// Selecting and displaying entire table name 
function query_table(connection , table_name){
	connection.query('SELECT * FROM ' + table_name , function(err, rows, fields){
		if(!err) 
			console.log('The solution is', rows);
		else 
			console.log('Error while performing query');
	}
}


connection.end();

module.exports = connection; 