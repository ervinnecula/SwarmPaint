var core = require ("swarmcore");
thisAdapter = core.createAdapter("HelloWorld");

hello = function() {
	return "Hello";
}

world = function() {
	return "World";
}