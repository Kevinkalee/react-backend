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
function create_database(connection, name){
	connection.query('CREATE DATABASE '+ name , function (err,results){
		if (err) throw err; 
		console.log('Database ' + name ' created!');
	});	
}

// creates member table within db
function create_member_table(connection){
	
	connection.query('SELECT 1 FROM Member LIMIT 1', function(err){
		if (!err){
			connection.query('CREATE TABLE Member ( \
				ID INT NOT NULL, \
				Surname VARCHAR(255), \
				FirstName VARCHAR(255), \ 
				Sex ENUM('M','F'), \
				ContactNumber INT(255), \
				Address VARCHAR(255), \
				DOB DATE, \
				RoleCode VARCHAR(2), \
				LoCode VARCHAR(3), \
				CellGroupID VARCHAR(10), \
				MinistryID VARCHAR(10), \
		 		Consents VARCHAR(255), \
				PRIMARY KEY (ID) ) ');
		} else {
			console.log("Member table already exists!");
		}
	})


}

// create non members table within db
function create_non_members_table(connection){
	connection.query('SELECT 1 FROM Non_Members LIMIT 1', function(err){
		if (!err){
			connection.query('CREATE TABLE Non_Members( \
				ID INT NOT NULL, \
				Surname VARCHAR(255), \ 
				FirstName VARCHAR(255), \
				Sex ENUM('M','F'), \
				ContactNumber INT(255), \
				Address VARCHAR(255), \
				Status ENUM('Regular','Visitor'), \
				PRIMARY KEY(ID)');		
		} else {
			console.log("Non Member table already exists!");
		}
	})
}

function create_cell_group_table(connection){
	connection.query('SELECT 1 FROM Cell_Group LIMIT 1', function(err){
		if (!err){
			connection.query('CREATE TABLE Cell_Group( \
				ID INT NOT NULL, \
				GroupID VARCHAR(10), \
				LeaderID INT, \
				Venue VARCHAR(255), \
				Meeting_Day ENUM('MON','TUE','WED','THU','FRI','SAT','SUN'), \
				Meeting_Time TIME(), \
				Location_Code VARCHAR(3), \
				PRIMARY KEY(ID)');
		} else {
			console.log("Cell Group table already exists!");
		}
	})
}

function create_ministry_table(connection){
	connection.query('SELECT 1 FROM Ministry LIMIT 1', function(err){
		if(!err){
			connection.query('CREATE TABLE Ministry(\
				ID INT NOT NULL, \
				MinistryID VARCHAR(255), \
				MinistryName VARCHAR(255), \
				LeaderID VARCHAR(255), \
				Venue VARCHAR(255), \
				Meeting_Day ENUM('MON','TUE','WED','THU','FRI','SAT','SUN'), \
				Meeting_Time TIME(), \
				Location_Code VARCHAR(3), \
				PRIMARY KEY(ID)'); 
			
		} else {
			console.log("Ministry table alread exists!");
		}
	})
}

function create_school_lookup_table(connection){
	connection.query('SELECT 1 FROM School_Lookup LIMIT 1', function(err){
		if (!err){
			connection.query('CREATE TABLE School_Lookup(\
				ID INT NOT NULL, \
				SchoolCode VARCHAR(3), \ 
				SchoolName VARCHAR(255) \
				LeaderID INT, \ 
				Venue VARCHAR(255), \
				Meeting_Day ENUM('MON','TUE','WED','THU','FRI','SAT','SUN'), \
				Meeting_Time TIME(), \
				Location_Code VARCHAR(3), \
				PRIMARY KEY(ID)'); 
		} else {
			console.log("School_Lookup table already exists!");
		}
		
	})
}

function create_location_lookup_table(connection){
	connection.query('SELECT 1 FROM Location_Lookup LIMIT 1', function(err){
		if (!err){

			connection.query('CREATE TABLE Location_Lookup(\
				ID INT NOT NULL, \ 
				Loc_Code VARCHAR(255), \
				Location VARCHAR(255), \
				PRIMARY KEY(ID)');
			
		} else {
			console.log("Location_Lookup table already exists!");
		}
	})
}

function create_role_lookup_table(connection){
	connection.query('SELECT 1 FROM Role_Lookup LIMIT 1', function(err){
		if (!err){	
			connection.query('CREATE TABLE Role_Lookup( \
				ID INT NOT NULL, \
				Role_Code VARCHAR(255), \
				Role VARCHAR(255), \
				PRIMARY KEY(ID)');
		} else {
			console.log("Role_Lookup table already exists!");
		}
	})
}

function create_student_table(connection){
	connection.query('SELECT 1 FROM Student LIMIT 1', function(err){
		if (!err){
		connection.query('CREATE TABLE Student( \
			ID INT NOT NULL, \
			Student_ID INT, \
			Surname VARCHAR(255), \
			FirstName VARCHAR(255), \
			DOB DATE, \
			Class VARCHAR(255), \
			Teacher INT, \
			SchoolCode VARCHAR(255), \
			MotherName VARCHAR(255), \
			FatherName VARCHAR(255), \
			Is_Christian ENUM('Y','N'), \
			PRIMARY KEY(ID)');
		} else {
		console.log("Student table already exists!");
		} 	
	})
}



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