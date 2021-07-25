class words{
    constructor(_x,){
        this.word=[]
        this.spaces=0;
        this.sumDist=0;
        //this.letters=[];
        //try{
        //    for (let i = 0; i < _x.length; i++) {
        //        this.letters[i]=new letter(_x[i],0,0);
        //    }
        //} catch (error){
        //    console.log("word input not an array" + error);
        //}
        //console.log(this.letters);
        let tmpI=0;
        this.word[tmpI]=[];
        for (let i = 0; i < _x.length; i++) {
            if(_x[i]==-1){
                this.spaces++;
                tmpI++;
                this.word[tmpI]=[];
                this.sumDist+=spaceDist;
            }else{
                this.word[tmpI].push(_x[i]);
                this.sumDist+=charBox[_x[i]];
            }

            
        }
        console.log(this.word,this.spaces,"|", this.sumDist);
    }
}



//word == dived by space
//letter == a letter (wow)


//words asigns letters places
//letters exit outsuide both, 


//Hi im a test sentence
//hi + im + a + test + sentence + 3 space

