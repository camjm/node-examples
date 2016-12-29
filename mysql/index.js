var server = require("./server"),
	router = require("./router"),
	requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.index;
handle["/index"] = requestHandlers.index;

server.start(router.route, handle);