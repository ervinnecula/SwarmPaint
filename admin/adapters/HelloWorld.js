var core = require ("swarmcore");
thisAdapter = core.createAdapter("HelloWorld");

var drawnObjects = [];

hello = function() {
	return "Hello";
}

world = function() {
	return "World";
}

persistDrawnObject = function(drawnObject) {
    drawnObjects.push(drawnObject);
};