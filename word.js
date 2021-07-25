class words{
    constructor(_l,_x,_y){
        this.pos=createVector(_x,_y);
        this.word=_l;
        this.letterPos=[];
        this.s=1;
        this.spaces=0;
        this.charN=this.word.length;
        this.sumDist=0;
        let tmpD=0;
        for (let i = 0; i < this.word.length; i++) {
            if(this.word[i]==-1){
                this.sumDist+=spaceDist;
                this.spaces++;
                this.letterPos[i]=-1;
            }else{
                this.letterPos[i]=this.sumDist+charBox[this.word[i]]/2;
                this.sumDist+=charBox[this.word[i]];
            }

            
        }
        for (let i = 0; i < this.letterPos.length; i++) {
            if(this.letterPos[i]!=-1){
                this.letterPos[i]+=this.pos.x-this.sumDist/2;
            }
        }
        for (let i = 0; i < this.letterPos.length; i++) {
            if(this.letterPos[i]!=-1){
                activeL.push(new letter(this.word[i],this.letterPos[i],this.pos.y));
            }
            
        }
    }
}



//word == dived by space
//letter == a letter (wow)


//words asigns letters places
//letters exit outsuide both, 


//Hi im a test sentence
//hi + im + a + test + sentence + 3 space

