var mysql = require('mysql')

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'appdatabase'
})

connection.connect(function(err){
	if (!err) {
		console.log("Database is connected ...");
	} else {
		console.log("Error connecting database ... ");
	}
});

connection.query('SELECT * from < table name >', function(err, rows, fields){
	if(!err)
		console.log('The solution is', rows);
	else 
		console.log('Error while performing query');
}

connection.end();


