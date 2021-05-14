class Box
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.8,
            density:0.8,
            friction:0.5
            

        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {

        push()
        var pos=this.body.position;
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);  
        
        pop()
    }
}

