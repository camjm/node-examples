var exec 		= require("child_process").exec,
	querystring = require("querystring"),
	fs 			= require("fs"),
	formidable 	= require("formidable"),
	ve 			= null;

function useViewEngine(viewEngine) {
	ve = viewEngine;
}

function start(response, request) {

	/*exec("dir", function(error, stdout, stderr) {
		response.writeHead(200, {"Content-Type" : "text/plain"});
		response.write(stdout);
		response.end();
	});*/

	ve.view("start", response);

};

function upload(response, request) {
	
	var form = new formidable.IncomingForm();
	form.parse(request, function(error, fields, files) {
		fs.rename(files.upload.path, "/images/test.png");
	});

	ve.view("upload", response);

};

function show(response, request) {

	ve.viewImage("test.png", response);

};

exports.useViewEngine = useViewEngine;
exports.start = start;
exports.upload = upload;
exports.show = show;