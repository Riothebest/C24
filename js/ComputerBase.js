class ComputerBase
{
    constructor(x,y,w,h)
    {
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w =w
        this.h = h
        this.image = loadImage('assets/base2.png');
        World.add(myWorld , this.body);
    }

    display()
    {

        var pos = this.body.position;
       
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h);
       
    }
}