var swarm =
    {
        meta:{
            name:"ObjectDrawn.js"
        },
        vars:{
            drawnObject : null
        },
        ctor:function(drawnObject){
            this.drawnObject = drawnObject;
            this.swarm("persistDrawnObject");
        },

        persistDrawnObject: {
            node:"PersistentDrawings",
            code:function(){
                persistDrawnObject(this.drawnObject);
                this.broadcast("broadcastDrawnObjectToCollaborators");
            }
        },

        broadcastDrawnObjectToCollaborators: {
            node:"All",
            code:function(){
                console.log("OMG")
            }
        }
    };

swarm;