var mysql = require('mysql')
var FLAG = 1; //  Debug FLAG for setting up database at the start 
// Setting up database connection parameters
var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Administrator3!',
	database: 'church'
})

// Testing connection to database
function connect(connection){
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
function create_database(connection, name){
	connection.query('CREATE DATABASE '+ name , function (err,results){
		if (err) throw err; 
		console.log('Database ' + name +' created!');
	});	
}

// creates member table within db
function create_member_table(connection){
	
	var query = connection.query('CREATE TABLE Member (' + 
		'ID INT NOT NULL AUTO_INCREMENT,' +
		'Surname VARCHAR(255),' +
		'FirstName VARCHAR(255),' + 
		'Sex ENUM("M","F"),' +
		'ContactNumber VARCHAR(255),' +
		'Address VARCHAR(255),' +
		'DOB DATE,' +
		'RoleCode VARCHAR(2),' +
		'LoCode VARCHAR(3),' +
		'CellGroupID VARCHAR(10),' + 
		'MinistryID VARCHAR(10),' +
 		'Consents VARCHAR(255),' +
		'PRIMARY KEY (ID)) ');
	console.log(query.sql);

}

// create non members table within db
function create_non_members_table(connection){

	var query = connection.query('CREATE TABLE Non_Members(' +
		'ID INT NOT NULL, ' +
		'Surname VARCHAR(255), ' +
		'FirstName VARCHAR(255), ' +
		'Sex ENUM("M","F"), ' +
		'ContactNumber VARCHAR(255), ' +
		'Address VARCHAR(255), ' +
		'Status ENUM("Regular","Visitor"), ' +
		'PRIMARY KEY(ID))');
	console.log(query.sql);		
		
}

function create_cell_group_table(connection){
	var query = connection.query('CREATE TABLE Cell_Group( '+
		'ID INT NOT NULL AUTO_INCREMENT, '+
		'GroupID VARCHAR(10), '+
		'LeaderID INT, '+
		'Venue VARCHAR(255), '+
		'Meeting_Day ENUM("MON","TUE","WED","THU","FRI","SAT","SUN"), '+
		'Meeting_Time TIME, '+
		'Location_Code VARCHAR(3), '+
		'PRIMARY KEY(ID))');
	console.log(query.sql);

}

function create_ministry_table(connection){
	var query = connection.query('CREATE TABLE Ministry('+
		'ID INT NOT NULL, '+
		'MinistryID VARCHAR(255), '+
		'MinistryName VARCHAR(255), '+
		'LeaderID VARCHAR(255), '+
		'Venue VARCHAR(255), '+
		'Meeting_Day ENUM("MON","TUE","WED","THU","FRI","SAT","SUN"), '+
		'Meeting_Time TIME, '+
		'Location_Code VARCHAR(3), '+
		'PRIMARY KEY(ID))'); 
	console.log(query.sql);
}

function create_school_lookup_table(connection){

	var query = connection.query('CREATE TABLE School_Lookup(' +
		'ID INT NOT NULL, ' +
		'SchoolCode VARCHAR(3), ' +
		'SchoolName VARCHAR(255), ' +
		'LeaderID INT, ' +
		'Venue VARCHAR(255), ' +
		'Meeting_Day ENUM("MON","TUE","WED","THU","FRI","SAT","SUN"), ' +
		'Meeting_Time TIME, ' +
		'Location_Code VARCHAR(3), ' +
		'PRIMARY KEY(ID))'); 
	console.log(query.sql);
		
}

function create_location_lookup_table(connection){

	var query = connection.query('CREATE TABLE Location_Lookup( ' +
		'ID INT NOT NULL, ' +
		'Loc_Code VARCHAR(255), ' +
		'Location VARCHAR(255), ' +
		'PRIMARY KEY(ID))');
	console.log(query.sql);

}

function create_role_lookup_table(connection){

	var query = connection.query('CREATE TABLE Role_Lookup( ' +
		'ID INT NOT NULL, ' +
		'Role_Code VARCHAR(255), ' +
		'Role VARCHAR(255), ' +
		'PRIMARY KEY(ID))');
	console.log(query.sql);
}

function create_student_table(connection){
	
	var query = connection.query('CREATE TABLE Student( '+
			'ID INT NOT NULL, '+
			'Student_ID INT, '+
			'Surname VARCHAR(255), '+
			'FirstName VARCHAR(255), '+
			'DOB DATE, '+
			'Class VARCHAR(255), '+
			'Teacher INT, '+
			'SchoolCode VARCHAR(255), '+
			'MotherName VARCHAR(255), '+
			'FatherName VARCHAR(255), '+
			'Is_Christian ENUM("Y","N"), '+
			'PRIMARY KEY(Student_ID))');
	console.log(query.sql);
}

// Selecting and displaying entire table name 
function query_table(connection , table_name){
	connection.query('SELECT * FROM ' + table_name , function(err, rows, fields){
		if(!err){ 
			console.log( rows);
			return rows; 
		}
		else 
			console.log('Error while performing query');
	})
}


function insert_entry(connection, entry){
	var query = connection.query('INSERT INTO Member SET ?', entry, function(err, result){
		if (err) {
			console.error(err);
			return;
		}
		console.error(result);
	})
}

var pastor = {
	Surname: 'Cheung',
	FirstName: 'Edmund',
	Sex: 'M',
	ContactNumber: '0871111111',
	Address: 'Dundrum, D16',
	DOB: '1974-03-15',
	CellGroupID: '1',
	RoleCode: 'P',
	LoCode: 'E',
	MinistryID: 'M1100',
	Consents: 'C1,C2,C3,C4,C5,S1,S2,S3,S4'
};


// connect(con);
// if (FLAG == 1 ){ // only use for debugging purposes
// 	create_member_table(con);
// 	create_non_members_table(con);
// 	create_cell_group_table(con); 
// 	create_ministry_table(con);
// 	create_school_lookup_table(con);
// 	create_location_lookup_table(con);
// 	create_role_lookup_table(con);
// 	create_student_table(con);	
// }
// insert_entry(con, pastor);
// query_table(con,'Member');
// con.end();

module.exports.query_table = query_table;
// module.exports.con = con; 
module.exports.connect= connect;