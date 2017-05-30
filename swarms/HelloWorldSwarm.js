var swarm =
{
    meta:{
        name:"HelloWorldSwarm.js"
    },
    vars:{
        lastDrawing : null
    },

    ctor:function(drawnObject){
        this.lastDrawing = drawnObject;
        this.swarm("persistDrawnObject")
    },

    persistDrawnObject: {
        node:"HelloWorld",
        code:function(){
            persistDrawnObject(this.lastDrawing);
            // this.swarm("broadcastDrawnObjectToCollaborators")
            this.broadcast("broadcastDrawnObjectToCollaborators");
        }
    },

    broadcastDrawnObjectToCollaborators: {
        node:"All",
        code:function(){
            console.log("Running in ", thisAdapter.nodeName);
            this.message = this.lastDrawing;
            this.home("return")
        }
    },
}

swarm;