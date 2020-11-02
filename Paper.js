class Paper{

    constructor(x,y,r){

        var options = {

            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.paper = Bodies.circle(this.x,this.y,this.r/2,options);
       
        World.add(world,this.paper);
        


    }

    display(){

        push();
        translate(this.paper.position.x,this.paper.position.y)
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();



    }




}