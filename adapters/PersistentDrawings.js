var core = require ("swarmcore");
thisAdapter = core.createAdapter("PersistentDrawings");

var drawnObjects = [];

persistDrawnObject = function(drawnObject) {
    drawnObjects.push(drawnObject);
};