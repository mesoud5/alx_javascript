const Squareparent = require('./5-square');


class Square extends Squareparent{
    constructor(w, h) {
        this.width = w;
        this.height = h;

    }
    
    charPrint(c){
        c = c || 'X' ;
        for (let i = 0; i < this.height; i++) {
            let s = '';
            for (let j = 0; j < this.width; j++) {
                s += c ;
            }
            console.log(s)

            }

    }
}

module.exports = Square;