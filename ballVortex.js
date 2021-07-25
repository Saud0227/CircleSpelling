class vortex{
    constructor(_x,_y,_r){
        this.pos=createVector(_x,_y);
        this.r=_r;
        this.nSatelitePoints=8;
        this.satelitePoints=[];
        for (let i = 0; i < this.nSatelitePoints; i++) {
            let tmpV = p5.Vector.fromAngle(radians(360/this.nSatelitePoints*i));
            tmpV.mult(this.r);
            this.satelitePoints[i] = createVector(this.pos.x + tmpV.x, this.pos.y + tmpV.y);
        }
    }
}