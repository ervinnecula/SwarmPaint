var core = require ("swarmcore");
thisAdapter = core.createAdapter("HelloWorld");

var drawnObjects = [];
var clientIDs = [];

hello = function() {
	return "Hello";
}

world = function() {
	return "World";
}

persistDrawnObject = function(drawnObject, clientID) {
    drawnObjects.push(drawnObject);
    clientIDs.push(clientID);
};

getClientIDs = function() {
	return clientIDs;
}
