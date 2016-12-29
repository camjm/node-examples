fs = require("fs");

function view(viewname, response) {

	var path = "views/" + viewname + ".html"
	fs.readFile(path, "utf8", function(error, file) {
		if (error) {
			returnError(404, error, response);
		} else {
			returnView(response, file);
		}
	});

}

function viewImage(imagename, response) {

	var path = "images/" + imagename;
	fs.readFile(path, "binary", function(error, file) {
		if (error) {
			returnError(500, error, response);
		} else {
			returnImage(response, file);
		}
		response.end();
	});

}

function returnView(response, view) {

	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write(view);
	response.end();

};

function returnImage(response, image) {

	response.writeHead(200, {"Content-Type" : "image/png"});
	response.write(image, "binary");
	response.end();

};

function returnError(errorNum, errorMessage, response) {

	response.writeHead(errorNum, {"Content-Type" : "text/html"});
	response.write(errorMessage);
	response.end();

};

exports.view = view;
exports.viewImage = viewImage;