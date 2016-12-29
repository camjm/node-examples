var mysql = require("mysql"),
	sys = require("sys");

var connection = mysql.createConnection({
	user: "root",
	password: "root",
	database: "miltiades"
});

function index(response, request) {

	connection.query("SELECT Name FROM Cities;", function(error, rows, fields){
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end(sys.inspect({
			error: error,
			rows: rows,
			fields: fields
		}));
	});

}

exports.index = index;