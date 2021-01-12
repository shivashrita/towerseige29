class block{
    constructor(x,y,width,height){
        var options = {
            restitiution: 0.4,
            friction: 0
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
       var angle=this.body.angle;
       var pos = this.body.position;
       push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        
    }
}