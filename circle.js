class ball{
    maxDist=10;
    s=20;
    list=[];
    constructor(_pos,_i,_bl){
        this.pos=createVector(_pos.x,_pos.y);
        this.mov=createVector(0,0);
        this.dirDeg=random(0,360);
        this.index=_i;
        this.list=_bl
        //-----------------------
        this.c=createVector(0,0,0);
        this.cS=150;
        //-----------------------
    }
    getNewDir(){this.dirDeg+=int(random(-60,60));}
    move(){
        
        if(int(random(1,100))==10){
            this.getNewDir();
        }
        this.mov.add(p5.Vector.fromAngle(radians(this.dirDeg), 1).mult(0.1));
        this.mov.mult(0.7);
        this.mov.limit(this.maxDist);
        this.pos.add(this.mov);
    }
    walls(){
        if(this.pos.x-this.s/2<0){
            this.mov.x+=5;
            this.dirDeg=90;
        }
        if(this.pos.x+this.s/2>width){
            this.mov.x-=5;
            this.dirDeg=270;
        }
        if(this.pos.y-this.s/2<0){
            this.mov.y+=5;
            this.dirDeg=180;
        }
        if(this.pos.y+this.s/2>height){
            this.mov.y-=5;
            this.dirDeg=0;
        }
    }
    draw(){
        fill(this.c.x,this.c.y,this.c.z,this.cS);
        ellipse(this.pos.x,this.pos.y,this.s);
        for (let i = 0; i < this.list.length; i++) {
            if(i!=this.index){
                //circle col detection
            }            
        }
    }
    tick(){
        this.walls();
        this.move();
        this.draw();
    }
}

// #region 
function baColGlobal(_r,_g,_b,_s){
    for (let i = 0; i < bList.length; i++) {
        bList[i].c.set(_r,_g,_b);
        if(typeof _s=="number"){
            bList[i].cS=_s;
        }
    }
}





// #endregion