var swarm =
{
    meta:{
        name:"HelloWorldSwarm.js"
    },
    vars:{
        clientValue : "test"
    },

    ctor:function(){
        //this.swarm("phase1");
        this.swarm("returnToClient")
    },

    returnToClient: {
        node:"HelloWorld",
        code:function(){
            console.log("Word is: " + this.clientValue);
            this.message = "Word is of length " + getLengthOfClientWord(this.clientValue);
            this.home("return")
        }
    },

 /*   phase1: {
        node:"HelloWorld",
        code:function(){
			this.message = hello();
			this.swarm("phase2");
        }
    },

	phase2: {
        node:"HelloWorld",
        code:function(){
			this.message += " " + world();
			this.home("returnValue");
        }
    }*/
}

swarm;