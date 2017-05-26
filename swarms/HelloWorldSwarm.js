var swarm =
{
    meta:{
        name:"HelloWorldSwarm.js"
    },
    vars:{
        x : 0
    },
    ctor:function(){
        this.swarm("phase1");
    },

    phase1: {
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
    }
}

swarm;