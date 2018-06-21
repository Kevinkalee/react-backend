var mysql = require('mysql')


// Setting up database connection parameters
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'appdatabase'
})

// Testing connection to database
connection.connect(function(err){
	if (!err) {
		console.log("Database is connected ...");
	} else {
		console.log("Error connecting database ... ");
	}
});

// Selecting and displaying entire table name 
connection.query('SELECT * from < table name >', function(err, rows, fields){
	if(!err)
		console.log('The solution is', rows);
	else 
		console.log('Error while performing query');
}

connection.end();

module.exports = connection; 