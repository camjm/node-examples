var http = require("http");
var url = require("url");

var portNo = 8888;

exports.start =function (route, handle) {

	function onRequest(request, response) {
		
		var pathName = url.parse(request.url).pathname;
		
		/*var postData = "";
		request.setEncoding("utf8");
		
		request.addListener("data", function (postDataChunk) {
			postData += postDataChunk;
			console.log("Received Post Data Chunk: '" + postDataChunk + "'");
		});

		request.addListener("end", function() {
			route(handle, pathName, response, postData);
		});*/

		route(handle, pathName, response, request);

	}

	http.createServer(onRequest).listen(portNo);
	console.log("Server has started listening on port number " + portNo++ + ".");

};