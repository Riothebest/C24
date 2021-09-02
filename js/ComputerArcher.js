class compBow
{

    constructor(x,y,w,h,angle)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.image = loadImage("assets/computerArcher.png");

    }

    display()
    {
        


        push();
        
        translate(this.x+40, this.y)
        rotate(this.angle);
        //imageMode(CENTER);
        image(this.image, 0, 0,this.w, this.h);
        pop();
        
        
    
    }
}