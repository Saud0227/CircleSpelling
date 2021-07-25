class letter{
    char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    constructor(_i,_x,_y){
        this.letter=this.char[_i];
        this.s=1;
        this.pos=createVector(_x,_y);
        this.deg=0;
    }

    dispL(){
        push();
        translate(this.pos.x,this.pos.y);
        rotate(this.deg);
        textSize(32*this.s);
        text(this.letter,0,0);
        pop();
    }
}