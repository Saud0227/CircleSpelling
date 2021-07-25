class vortex{
    constructor(_x,_y,_r){
        this.pos=createVector(_x,_y);
        this.r=_r;
        this.nSatelitePoints=8;
        this.satelitePoints=[];
        this.backup=[];
        for (let i = 0; i < this.nSatelitePoints; i++) {
           let tmpV=createVector(int(i/3))
            tmpV.mult(this.r);
            this.satelitePoints[i] = createVector(this.pos.x + tmpV.x, this.pos.y + tmpV.y);
            this.backup[i] = createVector(this.pos.x + tmpV.x, this.pos.y + tmpV.y);
            console.log(this.satelitePoints[i]);
        }
        this.backup=this.satelitePoints;
    }
}