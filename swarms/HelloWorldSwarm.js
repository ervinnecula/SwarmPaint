var swarm =
{
    meta:{
        name:"HelloWorldSwarm.js"
    },
    vars:{
        lastDrawing : null,
        clientId : null
    },

    ctor:function(drawnObject, clientId){
        this.clientId = clientId;
        this.lastDrawing = drawnObject;
        this.swarm("persistDrawnObject")
    },

    persistDrawnObject: {
        node:"HelloWorld",
        code:function(){
            persistDrawnObject(this.lastDrawing, this.clientId);
            // this.swarm("broadcastDrawnObjectToCollaborators")
            var clientIDs = getClientIDs();
            for (var someClientID in clientIDs) {
                console.log(clientIDs[someClientID]);
                this.swarmToUser(clientIDs[someClientID], "broadcastDrawnObjectToCollaborators");
            }
            // this.broadcast("broadcastDrawnObjectToCollaborators");
        }
    },

    broadcastDrawnObjectToCollaborators: {
        node:"All",
        code:function(){
            // console.log("Running in ", thisAdapter.nodeName, "which received this drawn object ", this.lastDrawing);
            console.log("Running in ", thisAdapter.nodeName);
            this.message = this.lastDrawing;
        }
    }
}

swarm;