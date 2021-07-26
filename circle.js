class ball{
    maxDist=5;
    s=15;
    list=[];
    retractForce = 5;
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
        this.vorTI=false;
        this.vorT=false;

    }
    getNewDir(){this.dirDeg+=int(random(-60,60));}

    getVorT(){
        let tmpSat=vor.satelitePoints;
        let sDist=0;
        for (let i = 1; i < tmpSat.length; i++) {
            if(dist(this.pos.x,this.pos.y,tmpSat[i].x,tmpSat[i].y)<dist(this.pos.x,this.pos.y,tmpSat[sDist].x,tmpSat[sDist].y)){
                sDist=i;
            }
        }
        this.vorTI=sDist+1;
        if(this.vorTI>=tmpSat.length){this.vorTI=0;}
        this.vorT=tmpSat[this.vorTI];
    }

    move(){
        
        if(int(random(1,100))==10){
            this.getNewDir();
        }
        this.mov.add(p5.Vector.fromAngle(radians(this.dirDeg), 1).mult(0.05));
        this.mov.mult(0.7);
        this.mov.limit(this.maxDist);
        this.pos.add(this.mov);
    }
    vorMov(){
        if(this.vorT==false){
            this.getVorT();
        }
        this.mov.add(createVector(this.vorT.x-this.pos.x,this.vorT.y-this.pos.y).normalize().mult(2));
        let tmpSL=vor.satelitePoints;
        if(dist(this.pos.x,this.pos.y,this.vorT.x,this.vorT.y)<vor.r/5){
            console.log("!",tmpSL);
            this.vorTI++;
            console.log("!!",tmpSL);
            if(this.vorTI>=tmpSL.length){this.vorTI=0;}
            //console.log(tmpSL[this.vorTI]);
            console.log("!!!",tmpSL);
            this.vorT.set(tmpSL[this.vorTI]);
            //console.log(this.vorTI,this.vort);
            b=true;

        }
        this.mov.mult(0.7);
        this.mov.limit(this.maxDist);
        this.pos.add(this.mov);

    }
    walls(){
        if(this.pos.x-this.s/2<0){
            this.mov.x+=this.retractForce;
            this.dirDeg=90;
        }
        if(this.pos.x+this.s/2>width){
            this.mov.x-=this.retractForce;
            this.dirDeg=270;
        }
        if(this.pos.y-this.s/2<0){
            this.mov.y+=this.retractForce;
            this.dirDeg=180;
        }
        if(this.pos.y+this.s/2>height){
            this.mov.y-=this.retractForce;
            this.dirDeg=0;
        }
    }
    ballCol(){
        let tmpV=createVector(0,0);
        for (let i = 0; i < this.list.length; i++) {
            if(i!=this.index){
                let tmpB = this.list[i];
                if(dist(this.pos.x,this.pos.y,tmpB.pos.x,tmpB.pos.y)<this.s){
                    // tmpV.set(tmpB.pos.x-this.pos.x,tmpB.pos.y-this.pos.y);
                    tmpV.set(this.pos.x-tmpB.pos.x,this.pos.y-tmpB.pos.y);
                    tmpV.normalize();
                    tmpV.mult(this.retractForce*0.5);
                    this.mov.add(tmpV);
                    this.dirDeg=tmpV.heading();
                }
            }            
        }
    }3
    draw(){
        fill(this.c.x,this.c.y,this.c.z,this.cS);
        noStroke();
        ellipse(this.pos.x,this.pos.y,this.s);
    }
    tick(){
        this.ballCol();
        this.walls();
        if(vor==false||b){
            this.move();
            this.vorT=false;
        }else{
            this.vorMov();
        }
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