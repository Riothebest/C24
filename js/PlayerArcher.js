class playerBow
{

    constructor(x,y,w,h,angle)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.angle = angle;
        this.image = loadImage("assets/playerArcher.png");
        
    }

    display()
    {
        if(keyIsDown(RIGHT_ARROW) && this.angle < 0.01)
        {
            this.angle +=0.02;
        }

        if(keyIsDown(LEFT_ARROW)&& this.angle>-2.135 )
        {
            this.angle -= 0.02;
        }
        console.log(this.angle);


        push();
        
        translate(this.x+40, this.y)
        rotate(this.angle);
        //imageMode(CENTER);
        image(this.image, 0, 0, this.w,this.h);
        pop();
        
        
    
    }
}