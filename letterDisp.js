class letter{
    constructor(_i,_x,_y){
        this.letter=char[_i];
        this.s=1;
        this.pos=createVector(_x,_y);
        this.deg=0;
    }

    dispL(){
        push();
        translate(this.pos.x,this.pos.y);
        rotate(this.deg);
        textSize(64*this.s);
        text(this.letter,0,0);
        pop();
    }
}