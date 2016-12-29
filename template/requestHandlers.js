
function index(response, request) {

	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello World");
	response.end();

}

exports.index = index;