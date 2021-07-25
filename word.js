class word{

    constructor(_x){
        this.letters=[];
        console.log(_x);
        try{
            for (let i = 0; i < _x.length; i++) {
                this.letters[i]=new letter(_x[i],0,0);
            }
        } catch (error){
            console.log(error);
        }
        console.log(this.letters);
    }
}