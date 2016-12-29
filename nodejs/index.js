var server = require("./modules/server"),
	router = require("./modules/router"),
	requesthandlers = require("./modules/requestHandlers"),
	viewEngine = require("./modules/viewEngine"),
	handle = {
		"/": requesthandlers.start,
		"/start": requesthandlers.start,
		"/upload": requesthandlers.upload,
		"/show": requesthandlers.show
	};

requesthandlers.useViewEngine(viewEngine);

server.start(router.route, handle);