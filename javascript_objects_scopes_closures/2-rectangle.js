class Rectangle {
    
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            // If w or h is 0 or not a positive integer, create an empty object
        this.width = {};
        this.height = {};
    }
        else {
            this.width = w;
            this.height = h;
        }

    }


    
}

module.exports = Rectangle;
